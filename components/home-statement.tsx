"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Ponto de disparo da entrada do título: fração da altura da janela, medida a
 * partir do topo, que o topo da faixa precisa cruzar ao entrar por baixo.
 * Duração, atraso, escala inicial e curva ficam em `app/globals.css`
 * (variáveis `--statement-*`).
 */
const TRIGGER_AT = 0.35;

/**
 * Ponto de reinício: quando o topo da faixa desce abaixo dessa fração da altura
 * da janela (ela quase sai por baixo), o título volta ao estado inicial e toca
 * de novo na próxima entrada. Não pode ser 1: o hero tem a altura da janela, e a
 * borda da faixa só encosta no fundo dela com a página no topo, e encostar já
 * conta como visível para o `IntersectionObserver`.
 */
const RESET_AT = 0.9;

/**
 * Fração da faixa que precisa estar visível para disparar a entrada mesmo que o
 * topo dela nunca chegue a TRIGGER_AT. Sem isso, em janelas altas (ou com nada
 * depois da faixa) a página não rola o bastante e o título ficaria invisível.
 */
const FULLY_VISIBLE = 0.98;

/**
 * Faixa laranja da home, com a frase de posicionamento.
 *
 * Camadas: a faixa fica fixa no topo (`sticky top-0 z-0`) e qualquer seção que
 * venha depois dela deve ser opaca, `relative z-10` e em largura total
 * (`-mx-(--page-gutter)`, como a faixa), para cobri-la de baixo para cima sem
 * deixar tiras laterais. O recorte do texto é só essa cobertura.
 *
 * Isso depende de nenhum ancestral da faixa ter `overflow` diferente de
 * `visible`: com `overflow`, o `sticky` deixa de funcionar.
 *
 * O atributo `data-state` da faixa (`pending` e `playing`) só existe depois da
 * montagem; sem ele (servidor, sem JavaScript, movimento reduzido) o título
 * aparece pronto.
 */
export function HomeStatement() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    section.dataset.state = "pending";

    // Dispara quando o topo da faixa cruza TRIGGER_AT da altura da janela.
    // Repetir o mesmo valor não reinicia a animação: com a faixa visível,
    // rolar para cima e para baixo não toca de novo.
    const trigger = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) section.dataset.state = "playing";
      },
      { rootMargin: `0px 0px -${(1 - TRIGGER_AT) * 100}% 0px`, threshold: 0 },
    );

    // Também dispara quando a faixa fica inteira na janela, o que vier primeiro.
    const visible = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= FULLY_VISIBLE) {
          section.dataset.state = "playing";
        }
      },
      { threshold: FULLY_VISIBLE },
    );

    // Reinicia quando a faixa quase sai da janela por baixo (volta ao hero).
    const reset = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          section.dataset.state = "pending";
        }
      },
      { rootMargin: `0px 0px -${(1 - RESET_AT) * 100}% 0px`, threshold: 0 },
    );

    trigger.observe(section);
    visible.observe(section);
    reset.observe(section);

    return () => {
      trigger.disconnect();
      visible.disconnect();
      reset.disconnect();
      delete section.dataset.state;
    };
  }, []);

  return (
    <section
      ref={ref}
      className="flex h-[250] md:h-[400px] lg:h-[550px] items-center justify-center bg-background-accent px-(--page-gutter) text-foreground-light motion-safe:sticky motion-safe:top-0 motion-safe:z-0"
    >
      <h2 className="text-headline w-full max-w-[1348px] text-center max-wide:text-[4.5rem] max-xl:text-[3.5rem] max-lg:text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1.25rem] max-2xs:text-[1.125rem] max-3xs:text-[1rem]">
        <span data-line="1" className="block">
          Softwares sob medida para desafios
        </span>{" "}
        <span data-line="2" className="block">
          que não cabem em soluções prontas.
        </span>
      </h2>
    </section>
  );
}
