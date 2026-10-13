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
        "flex h-[236px] w-[239px] shrink-0 flex-col items-center justify-center rounded-[10px] bg-card-orange px-4 text-center text-white",
        className,
      )}
    >
      <p className="font-display text-5xl leading-none font-semibold">
        {value}
      </p>
      <p className="mt-1 font-display text-xl leading-tight font-medium">
        {unit}
      </p>
      <p className="mt-3 font-sans text-base leading-snug">{description}</p>
    </div>
  );
}
