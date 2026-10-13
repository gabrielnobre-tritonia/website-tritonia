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
        "group relative h-[236px] w-[239px] shrink-0 overflow-hidden rounded-[10px] bg-card-cyan transition-[width,height] duration-500 ease-out hover:h-[488px] hover:w-[635px] focus:h-[488px] focus:w-[635px] focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-detail motion-reduce:transition-none",
        className,
      )}
    >
      <div className="pointer-events-none absolute top-[14px] -right-[20px] h-[205px] w-[153px] transition-[width,height,top,right] duration-500 ease-out group-hover:top-[12px] group-hover:-right-[30px] group-hover:h-[490px] group-hover:w-[366px] group-focus:top-[12px] group-focus:-right-[30px] group-focus:h-[490px] group-focus:w-[366px] motion-reduce:transition-none">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            sizes="153px"
            className="object-contain transition-opacity duration-500 ease-out select-none group-hover:opacity-0 group-focus:opacity-0 motion-reduce:transition-none"
          />
          <Image
            src={imageExpanded}
            alt=""
            fill
            sizes="366px"
            className="object-contain opacity-0 transition-opacity duration-500 ease-out select-none group-hover:opacity-100 group-focus:opacity-100 motion-reduce:transition-none"
          />
        </div>

        <ul className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-200 group-focus:opacity-100 group-focus:delay-200 motion-reduce:transition-none motion-reduce:delay-0">
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

      <p className="absolute top-[134px] left-4 font-display text-[1.5rem] leading-[1.2] font-medium text-white transition-[top,left] duration-500 ease-out group-hover:top-[152px] group-hover:left-10 group-focus:top-[152px] group-focus:left-10 motion-reduce:transition-none">
        {text}
      </p>
    </article>
  );
}
