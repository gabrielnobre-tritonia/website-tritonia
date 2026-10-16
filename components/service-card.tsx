import Image from "next/image";
import { Fragment } from "react";

import type { ServiceCardData } from "@/lib/constants";

type ServiceCardProps = Omit<ServiceCardData, "id">;

/** Card de destaque de serviço, de tamanho fixo (1080 x 380). Só apresenta: todo o conteúdo vem por props. */
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
      className="rounded-card-lg text-foreground-light relative h-[380px] w-[1100px] shrink-0 overflow-hidden"
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
        className="font-display pointer-events-none absolute top-[43px] left-[38px] flex h-[194px] w-[212px] items-center text-[194px] leading-none font-semibold select-none"
        style={{ color: numberColor }}
      >
        {number}
      </span>

      <div className="absolute bottom-10 left-1/2 flex h-[180px] w-[811px] -translate-x-1/2 items-end gap-[70px]">
        <div className="flex h-full flex-1 flex-col justify-between">
          <h3 className="text-h1">{title}</h3>
          <p className="text-subtitle">{subtitle}</p>
          <p className="text-body">{description}</p>
        </div>

        <ul className="flex h-[150px] flex-1 flex-col justify-between">
          {items.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 ? (
                <li
                  aria-hidden="true"
                  className="bg-foreground-light/42 h-px w-full"
                />
              ) : null}
              <li className="text-body flex items-center gap-3">
                {item.icon ? (
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center"
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
