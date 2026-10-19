"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";

import { useExpandableCardGroup } from "@/components/expandable-card-group";
import { cn } from "@/lib/utils";

type ExpandableCardProps = {
  /** Título, em Chakra Petch 24px. Aceita quebra de linha (`<br />`). */
  title: ReactNode;
  /** Subtítulo, que só aparece com o card expandido (fica no DOM recolhido). */
  subtitle: ReactNode;
  /** Caminho da imagem (decorativa), por exemplo `/card-images/smartphone.png`. */
  image: string;
  /** Cor da barra de 7px no topo do card. */
  lineColor: string;
  /** Cor de fundo do card. */
  backgroundColor?: string;
  className?: string;
};

/**
 * Card claro com barra colorida no topo, título e imagem. Tem dois modos:
 *
 * - A partir de `md`: 239 x 488px. Ao passar o mouse ou receber foco (teclado e
 *   toque), a largura anima para 635px no fluxo (empurrando os vizinhos):
 *   aparece o subtítulo e a imagem passa para a direita, maior (356 x 463px).
 *   Só CSS: `hover:` e `focus:` no próprio card (o `hover:` do Tailwind v4 só
 *   vale com ponteiro que passa o mouse; o toque expande por `focus:`, já que o
 *   card é focável) e `group-hover:`/`group-focus:` nos filhos. A imagem anima
 *   `left`, largura e altura (em px, animáveis), por isso fica em um `div`
 *   absoluto. Os 16px da imagem que passam da largura do card (255 contra 239)
 *   são cortados pelo `overflow-hidden`. O título tem largura fixa (223px)
 *   para não mudar de quebra ao expandir.
 *
 * - Abaixo de `md`: acordeão. O card ocupa a largura toda, com 168px de altura:
 *   título à esquerda e imagem à direita. Ao tocar, a segunda linha do grid
 *   (`0fr` para `1fr`) abre e mostra o subtítulo. O estado fica no
 *   `ExpandableCardGroup` (um aberto por vez) e chega ao CSS pelo atributo
 *   `data-open`. Um botão transparente por cima do card faz o papel de controle
 *   (`aria-expanded`); ele some a partir de `md`. Os wrappers do título viram
 *   `contents` para o título, o subtítulo e a imagem serem células do grid.
 */
export function ExpandableCard({
  title,
  subtitle,
  image,
  lineColor,
  backgroundColor = "#E5E5E5",
  className,
}: ExpandableCardProps) {
  const id = useId();
  const group = useExpandableCardGroup();
  const [localOpen, setLocalOpen] = useState(false);

  const open = group ? group.openId === id : localOpen;
  const toggle = () => (group ? group.toggle(id) : setLocalOpen((o) => !o));

  return (
    <article
      tabIndex={0}
      data-open={open}
      className={cn(
        "group focus-visible:outline-detail relative h-[488px] w-[239px] shrink-0 overflow-hidden rounded-[10px] transition-[width] duration-500 ease-out focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid motion-reduce:transition-none md:hover:w-[635px] md:focus:w-[635px]",
        "max-md:grid max-md:h-auto max-md:w-full max-md:grid-cols-[1fr_46%] max-md:grid-rows-[168px_0fr] max-md:transition-[grid-template-rows] max-md:data-[open=true]:grid-rows-[168px_1fr]",
        className,
      )}
      style={{ backgroundColor }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[7px]"
        style={{ backgroundColor: lineColor }}
      />

      <div className="relative px-2 pt-7 max-md:contents">
        <div className="w-[223px] max-md:contents">
          <h3
            id={`${id}-title`}
            className="font-display text-[1.5rem] leading-[1.2] font-medium text-(--palette-ink) max-md:col-start-1 max-md:row-start-1 max-md:self-center max-md:pl-5 max-md:text-xl"
          >
            {title}
          </h3>

          <div className="max-md:col-span-2 max-md:row-start-2 max-md:min-h-0 max-md:overflow-hidden">
            <p
              id={`${id}-subtitle`}
              className="pointer-events-none mt-3 font-sans text-base leading-snug text-(--palette-ink)/80 opacity-0 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:delay-0 max-md:mt-0 max-md:px-5 max-md:pb-6 max-md:group-data-[open=true]:opacity-100 max-md:group-data-[open=true]:delay-200 md:group-hover:opacity-100 md:group-hover:delay-200 md:group-focus:opacity-100 md:group-focus:delay-200"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[332px] w-[255px] transition-[left,width,height] duration-500 ease-out motion-reduce:transition-none max-md:relative max-md:inset-auto max-md:col-start-2 max-md:row-start-1 max-md:h-full max-md:w-full md:group-hover:left-[279px] md:group-hover:h-[463px] md:group-hover:w-[356px] md:group-focus:left-[279px] md:group-focus:h-[463px] md:group-focus:w-[356px]"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 767px) 46vw, 356px"
          className="object-contain select-none"
        />
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-labelledby={`${id}-title`}
        aria-controls={`${id}-subtitle`}
        onClick={toggle}
        className="focus-visible:outline-detail absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid md:hidden"
      />
    </article>
  );
}
