import Image from "next/image";
import { Fragment } from "react";

import type { ServiceCardData } from "@/lib/constants";

type ServiceCardProps = Omit<ServiceCardData, "id">;

/**
 * Card de destaque de serviço. Só apresenta: todo o conteúdo vem por props.
 *
 * Tem três tamanhos:
 * - abaixo de `md` (768px): card vertical, de largura flexível: número ao
 *   fundo, título, subtítulo, descrição e a lista de itens separada por linhas;
 * - de `md` até `stack` (1112px): card na largura da coluna, com o texto à
 *   esquerda e os itens à direita, como no desktop;
 * - a partir de `stack`: tamanho fixo (1100 x 380).
 */
export function ServiceCard({
  baseColor,
  background,
  number,
  numberColor,
  title,
  subtitle,
  description,
  items,
}: ServiceCardProps) {
  return (
    <article
      className="rounded-card-lg text-foreground-light stack:h-[380px] stack:w-[1100px] stack:justify-start stack:p-0 relative flex w-full max-w-[480px] shrink-0 flex-col overflow-hidden px-5 pt-[84px] pb-5 md:min-h-[380px] md:max-w-none md:justify-end md:px-10 md:pt-[130px] md:pb-10"
      style={{ backgroundColor: baseColor }}
    >
      <Image
        src={background}
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none object-cover select-none"
      />

      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute top-1 left-5 flex items-center text-[112px] leading-none font-semibold select-none md:top-[43px] md:left-[38px] md:h-[194px] md:w-[212px] md:text-[194px]"
        style={{ color: numberColor }}
      >
        {number}
      </span>

      <div className="stack:absolute stack:bottom-10 stack:left-1/2 stack:h-[180px] stack:w-[811px] stack:-translate-x-1/2 stack:gap-[70px] relative flex flex-col gap-6 md:flex-row md:items-end md:gap-12">
        <div className="stack:h-full stack:justify-between stack:gap-0 flex flex-col gap-4 md:flex-1">
          <h3 className="text-h1 max-md:text-[1.75rem]">{title}</h3>
          <p className="text-subtitle">{subtitle}</p>
          <p className="text-body">{description}</p>
        </div>

        <ul className="flex flex-col md:h-[150px] md:flex-1 md:justify-between">
          {items.map((item, index) => (
            <Fragment key={item.label}>
              {/* Abaixo de `md`, também há uma linha acima do primeiro item. */}
              <li
                aria-hidden="true"
                className={`bg-foreground-light/42 h-px w-full ${index === 0 ? "md:hidden" : ""}`}
              />
              <li className="text-body flex items-center gap-3 py-4 md:py-0">
                {item.icon ? (
                  <span
                    aria-hidden="true"
                    className="inline-flex size-5 shrink-0 items-center justify-center md:size-8"
                  >
                    {item.icon}
                  </span>
                ) : null}
                {item.label}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </article>
  );
}
