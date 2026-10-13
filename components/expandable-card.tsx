import Image from "next/image";
import type { ReactNode } from "react";

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
 * Card claro com barra colorida no topo, título e imagem (239 x 488px). Ao
 * passar o mouse ou receber foco (teclado e toque), a largura anima para 635px
 * no fluxo (empurrando os vizinhos): aparece o subtítulo e a imagem passa para
 * a direita, maior (356 x 463px).
 *
 * Só CSS: `hover:` e `focus:` no próprio card (o `hover:` do Tailwind v4 só vale
 * com ponteiro que passa o mouse; o toque expande por `focus:`, já que o card é
 * focável) e `group-hover:`/`group-focus:` nos filhos. A imagem anima `left`,
 * largura e altura (em px, animáveis), por isso fica em um `div` absoluto.
 *
 * Os 16px da imagem que passam da largura do card (255 contra 239) são cortados
 * pelo `overflow-hidden`. O título tem largura fixa (223px) para não mudar de
 * quebra ao expandir.
 */
export function ExpandableCard({
  title,
  subtitle,
  image,
  lineColor,
  backgroundColor = "#E5E5E5",
  className,
}: ExpandableCardProps) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative h-[488px] w-[239px] shrink-0 overflow-hidden rounded-[10px] transition-[width] duration-500 ease-out hover:w-[635px] focus:w-[635px] focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-detail motion-reduce:transition-none",
        className,
      )}
      style={{ backgroundColor }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[7px]"
        style={{ backgroundColor: lineColor }}
      />

      <div className="relative px-2 pt-7">
        <div className="w-[223px]">
          <h3 className="font-display text-[1.5rem] leading-[1.2] font-medium text-(--palette-ink)">
            {title}
          </h3>
          <p className="pointer-events-none mt-3 font-sans text-base leading-snug text-(--palette-ink)/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-200 group-focus:opacity-100 group-focus:delay-200 motion-reduce:transition-none motion-reduce:delay-0">
            {subtitle}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[332px] w-[255px] transition-[left,width,height] duration-500 ease-out group-hover:left-[279px] group-hover:h-[463px] group-hover:w-[356px] group-focus:left-[279px] group-focus:h-[463px] group-focus:w-[356px] motion-reduce:transition-none"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="356px"
          className="object-cover object-bottom select-none"
        />
      </div>
    </article>
  );
}
