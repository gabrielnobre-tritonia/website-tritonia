"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Parâmetros da pilha de cards da seção "Soluções" (px, exceto onde indicado).
 * A distância de scroll de cada passo não é constante: deriva da altura da
 * janela (`vh - cardTop - posição final`), para o card sempre sair de fora da
 * janela e se mover 1:1 com o scroll.
 */

/**
 * Distância do topo da janela até o topo do cabeçalho fixo (logo abaixo do menu
 * flutuante, que termina em ~94px). É o valor máximo: em janelas baixas o topo
 * sobe (até ficar negativo, com o título saindo por trás do menu) para o
 * primeiro card caber inteiro, e o card nunca passa de `CARD_MIN_TOP`.
 */
const STAGE_TOP = 104;

/** Menor distância do topo da janela ao topo do primeiro card: logo abaixo do menu. Abaixo disso a pilha não liga (fluxo normal). */
const CARD_MIN_TOP = 100;

/** Topo final dos cards do meio (o laranja) abaixo do topo do azul: a faixa azul que fica à vista. */
const BLUE_STRIP = 43;

/** Topo final do último card (o verde) em relação ao topo do azul; os do meio (o laranja) sobem junto e terminam alinhados com ele. 0 cobre tudo, sem borda; ~3 deixa um fio do laranja, como no vídeo. */
const GREEN_OFFSET = 0;

/** Distância de scroll, com o último card apresentado, antes de soltar o conjunto. */
const READING = 200;

/** Pausa de leitura (distância de scroll com tudo parado) depois de cada card que não é o último, antes de o próximo subir. */
const PAUSE = 200;

/** Folga entre a base do primeiro card e a base da janela; em janelas baixas é ela que faz o topo do cabeçalho subir. */
const BOTTOM_GAP = 16;

/** Largura mínima da janela: o card (1080px) mais as laterais de 16px. */
const MIN_WIDTH = 1112;

/** Altura do `ServiceCard`, que é fixa. */
const CARD_HEIGHT = 380;

type SolutionsCardStackProps = {
  /** Título e subtítulo, que ficam fixos acima dos cards. */
  header: ReactNode;
  /** Cards na ordem da pilha: o primeiro fica atrás e o último, à frente. */
  cards: { id: string; card: ReactNode }[];
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Cabeçalho e cards da seção "Soluções".
 *
 * Em desktop com altura suficiente, o cabeçalho e o primeiro card ficam fixos
 * (`sticky`) e os outros cards sobem por cima, um depois do outro, 1:1 com o
 * scroll (nos dois sentidos); o último termina no topo do primeiro e cobre
 * todos. Depois de uma folga de leitura o conjunto solta e sobe com a página.
 *
 * O modo é o atributo `data-mode="stack"` no wrapper, que só existe depois da
 * montagem: sem ele (servidor, sem JavaScript, antes da hidratação, janela
 * estreita ou baixa, movimento reduzido) os cards ficam em coluna, no fluxo
 * normal. As regras do modo ficam em `app/globals.css`.
 *
 * O `sticky` exige que nenhum ancestral tenha `overflow` diferente de
 * `visible` ou `clip`.
 */
export function SolutionsCardStack({ header, cards }: SolutionsCardStackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    const cardsArea = cardsRef.current;
    if (!wrapper || !stage || !cardsArea) return;

    const layers = Array.from(cardsArea.children) as HTMLElement[];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let active = false;
    let frame = 0;
    // Por card (do segundo em diante): deslocamento inicial, percurso de scroll
    // e scroll em que o passo começa.
    let start = 0;
    let stageTop = STAGE_TOP;
    let steps: { distance: number; from: number }[] = [];

    const update = () => {
      frame = 0;
      if (!active) return;
      const scroll = stageTop - wrapper.getBoundingClientRect().top;
      // Enquanto o último card sobe, os do meio sobem junto até o alinhar, para
      // não sobrar borda deles abaixo dele (cada um fica `BLUE_STRIP` mais baixo
      // que o primeiro até aí, e `GREEN_OFFSET` no fim).
      const lastStep = steps[steps.length - 1];
      const closing =
        (clamp(scroll - lastStep.from, 0, lastStep.distance) /
          lastStep.distance) *
        (BLUE_STRIP - GREEN_OFFSET);
      steps.forEach((step, index) => {
        const progress = clamp(scroll - step.from, 0, step.distance);
        const last = index === steps.length - 1;
        layers[index + 1].style.setProperty(
          "--y",
          `${start - progress - (last ? 0 : closing)}px`,
        );
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const disable = () => {
      if (!active && !wrapper.dataset.mode) return;
      active = false;
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      frame = 0;
      delete wrapper.dataset.mode;
      ["--stack-top", "--stack-stage-h", "--stack-travel"].forEach((name) =>
        wrapper.style.removeProperty(name),
      );
      layers.forEach((layer) => layer.style.removeProperty("--y"));
    };

    const measure = () => {
      const viewport = window.innerHeight;
      // Altura do cabeçalho, com o espaço até o primeiro card (igual nos dois modos).
      const header =
        cardsArea.getBoundingClientRect().top -
        stage.getBoundingClientRect().top;
      // Em janela baixa o topo fixo sobe para a pilha caber inteira: o card do
      // meio fica `BLUE_STRIP` mais baixo que o primeiro, então a base dele é a
      // que passa primeiro da janela.
      const top = Math.min(
        STAGE_TOP,
        viewport - header - BLUE_STRIP - CARD_HEIGHT - BOTTOM_GAP,
      );
      const fits =
        !reduce.matches &&
        layers.length > 1 &&
        document.documentElement.clientWidth >= MIN_WIDTH &&
        top + header >= CARD_MIN_TOP;

      if (!fits) {
        disable();
        return;
      }

      stageTop = top;
      const cardTop = top + header;
      start = viewport - cardTop;
      let from = 0;
      steps = layers.slice(1).map((_, index, rest) => {
        const last = index === rest.length - 1;
        const distance = start - (last ? GREEN_OFFSET : BLUE_STRIP);
        const step = { distance, from };
        from += distance + (last ? 0 : PAUSE);
        return step;
      });

      wrapper.style.setProperty("--stack-top", `${top}px`);
      wrapper.style.setProperty("--stack-stage-h", `${header + CARD_HEIGHT}px`);
      wrapper.style.setProperty("--stack-travel", `${from + READING}px`);
      wrapper.dataset.mode = "stack";

      if (!active) {
        active = true;
        window.addEventListener("scroll", onScroll, { passive: true });
      }
      update();
    };

    measure();

    window.addEventListener("resize", measure);
    reduce.addEventListener("change", measure);
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    document.fonts.ready.then(measure);

    return () => {
      window.removeEventListener("resize", measure);
      reduce.removeEventListener("change", measure);
      observer.disconnect();
      disable();
    };
  }, []);

  return (
    <div ref={wrapperRef} data-stack="">
      <div ref={stageRef} data-stack-stage="" className="flex flex-col gap-5">
        {header}
        <div
          ref={cardsRef}
          data-stack-cards=""
          className="flex flex-col items-center gap-10 max-md:-mx-(--page-gutter) max-md:snap-x max-md:snap-mandatory max-md:scroll-px-(--page-gutter) max-md:[scrollbar-width:none] max-md:flex-row max-md:items-stretch max-md:gap-4 max-md:overflow-x-auto max-md:px-(--page-gutter) max-md:[&::-webkit-scrollbar]:hidden"
        >
          {cards.map(({ id, card }) => (
            <div
              key={id}
              data-stack-layer=""
              className="flex w-full justify-center max-md:w-[88%] max-md:max-w-[480px] max-md:shrink-0 max-md:snap-start"
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
