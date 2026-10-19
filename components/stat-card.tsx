import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatCardProps = {
  /** Número em destaque, por exemplo `+2,9`. */
  value: string;
  /** Unidade, abaixo do número, por exemplo `milhões`. */
  unit: string;
  /** Frase abaixo da unidade. Aceita quebra de linha (`<br />`). */
  description: ReactNode;
  className?: string;
};

/**
 * Card laranja quase quadrado (239 x 236px) e estático, com o número, a unidade
 * e uma frase centralizados em branco. Não recebe foco nem reage ao mouse: o
 * texto é lido como conteúdo comum.
 */
export function StatCard({
  value,
  unit,
  description,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-card-orange flex h-[236px] w-[239px] shrink-0 flex-col items-center justify-center rounded-[10px] px-4 text-center text-white max-md:aspect-[239/236] max-md:h-auto max-md:w-full max-md:px-2",
        className,
      )}
    >
      <p className="font-display text-5xl leading-none font-semibold max-md:text-4xl">
        {value}
      </p>
      <p className="font-display mt-1 text-xl leading-tight font-medium max-md:text-base">
        {unit}
      </p>
      <p className="mt-3 font-sans text-base leading-snug max-md:mt-2 max-md:text-xs">
        {description}
      </p>
    </div>
  );
}
