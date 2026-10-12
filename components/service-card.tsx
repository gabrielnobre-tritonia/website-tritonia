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
      className="relative h-[380px] w-[1100px] shrink-0 overflow-hidden rounded-card-lg text-foreground-light"
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
        className="pointer-events-none absolute top-[43px] left-[38px] flex h-[194px] w-[212px] items-center font-display text-[194px] leading-none font-semibold select-none"
        style={{ color: numberColor }}
      >
        {number}
      </span>

      <div className="absolute bottom-10 left-1/2 flex h-[240px] w-[811px] -translate-x-1/2 items-end gap-[70px]">
        <div className="flex h-full flex-1 flex-col justify-between">
          <h3 className="text-h1">{title}</h3>
          <p className="text-subtitle">{subtitle}</p>
          <p className="text-body">{description}</p>
        </div>

        <ul className="flex h-[178px] flex-1 flex-col justify-between">
          {items.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 ? (
                <li
                  aria-hidden="true"
                  className="h-px w-full bg-foreground-light/42"
                />
              ) : null}
              <li className="flex items-center gap-3 text-body">
                {item.icon ? (
                  <span
                    aria-hidden="true"
                    className="inline-flex shrink-0 items-center justify-center"
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
