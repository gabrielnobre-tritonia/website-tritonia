import { MapPin } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import type { MapLabelData } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MapCardProps = {
  /** Texto do card, em Chakra Petch 24px. Aceita quebra de linha (`<br />`). */
  text: ReactNode;
  /** Mapa do card recolhido (decorativo), por exemplo `/card-images/map.png`. */
  image: string;
  /** Mapa do card expandido (decorativo), por exemplo `/card-images/map-expansive.png`. */
  imageExpanded: string;
  /** Cidades marcadas sobre o mapa, que só aparecem com o card expandido. */
  labels: MapLabelData[];
  className?: string;
};

/**
 * Card ciano quase quadrado (239 x 236px) com o texto no canto inferior
 * esquerdo e o mapa do Nordeste no canto superior direito, cortado pela borda
 * direita do card. Ao passar o mouse ou receber foco (teclado e toque), a
 * largura e a altura animam juntas para 635 x 488px (no fluxo, empurrando os
 * vizinhos): o mapa cresce, o texto vai para o meio à esquerda e aparecem os
 * nomes das cidades.
 *
 * Só CSS, como o `ExpandableCard`: `hover:` e `focus:` no próprio card e
 * `group-hover:`/`group-focus:` nos filhos. A caixa do mapa anima largura,
 * altura, `top` e `right` (em px, animáveis). `object-fit` não anima, então são
 * duas camadas do mesmo mapa (recolhido e expandido, em resoluções diferentes)
 * com crossfade. Os rótulos ficam dentro da mesma caixa, em percentual, para
 * acompanharem o mapa enquanto ele cresce; recolhidos, ficam invisíveis e
 * continuam no documento.
 */
export function MapCard({
  text,
  image,
  imageExpanded,
  labels,
  className,
}: MapCardProps) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group bg-card-cyan focus-visible:outline-detail relative h-[236px] w-[239px] shrink-0 overflow-hidden rounded-[10px] transition-[width,height] duration-500 ease-out focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid motion-reduce:transition-none max-md:aspect-[239/236] max-md:h-auto max-md:w-full md:hover:h-[488px] md:hover:w-[635px] md:focus:h-[488px] md:focus:w-[635px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute top-[14px] -right-[20px] h-[205px] w-[153px] transition-[width,height,top,right] duration-500 ease-out motion-reduce:transition-none max-md:top-[6%] max-md:-right-[8%] max-md:h-[54%] max-md:w-[58%] md:group-hover:top-[12px] md:group-hover:-right-[30px] md:group-hover:h-[490px] md:group-hover:w-[366px] md:group-focus:top-[12px] md:group-focus:-right-[30px] md:group-focus:h-[490px] md:group-focus:w-[366px]">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            sizes="153px"
            className="object-contain transition-opacity duration-500 ease-out select-none motion-reduce:transition-none md:group-hover:opacity-0 md:group-focus:opacity-0"
          />
          <Image
            src={imageExpanded}
            alt=""
            fill
            sizes="366px"
            className="object-contain opacity-0 transition-opacity duration-500 ease-out select-none motion-reduce:transition-none md:group-hover:opacity-100 md:group-focus:opacity-100"
          />
        </div>

        <ul className="absolute inset-0 opacity-0 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:delay-0 md:group-hover:opacity-100 md:group-hover:delay-200 md:group-focus:opacity-100 md:group-focus:delay-200">
          {labels.map(({ id, name, x, y, dx, dy }) => (
            <li
              key={id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <MapPin
                aria-hidden="true"
                className="size-5 text-white"
                strokeWidth={2.25}
              />
              <span
                className="absolute top-1/2 left-1/2 font-sans text-base leading-none font-medium whitespace-nowrap text-white"
                style={{
                  transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`,
                }}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="font-display absolute top-[134px] left-4 text-[1.5rem] leading-[1.2] font-medium text-white transition-[top,left] duration-500 ease-out motion-reduce:transition-none max-md:top-auto max-md:bottom-3 max-md:left-3 max-md:text-lg md:group-hover:top-[152px] md:group-hover:left-10 md:group-focus:top-[152px] md:group-focus:left-10">
        {text}
      </p>
    </article>
  );
}
