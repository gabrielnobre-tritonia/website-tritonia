import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type CircuitLineProps = {
  /** Cor da linha e do ponto (a do circuito). */
  lineColor: string;
  /** Cor da luz que percorre a linha, diferente da cor da linha. */
  lightColor: string;
  /** Opacidade da linha-base. */
  lineOpacity?: number;
  /** Opacidade do ponto. */
  dotOpacity?: number;
  /** Duração do ciclo (CSS `time`). Padrão: `--circuit-duration`, em globals.css. */
  duration?: string;
  /** Atraso do primeiro ciclo (CSS `time`). */
  delay?: string;
  /** Comprimento da luz, em % do trajeto. Padrão: `--circuit-light-length`. */
  lightLength?: number;
  /** Inverte o movimento: a luz sai do ponto em vez de entrar nele. */
  reverse?: boolean;
  /** `rotate` gira 180° e `mirror` espelha na horizontal; sem os dois, é o SVG original. */
  orientation?: "normal" | "rotate" | "mirror";
  /** Tamanho e posição (a proporção é a do SVG, 397 x 82). */
  className?: string;
};

const orientationClass = {
  normal: "",
  rotate: "rotate-180",
  mirror: "-scale-x-100",
} as const;

/**
 * Circuito decorativo: a linha-base e o ponto, sempre visíveis, e uma luz curta
 * que percorre o centro da linha até o ponto.
 *
 * A geometria é a de `public/circuitos/*.svg`, que são contornos com `fill`: não
 * dá para animar `stroke-dashoffset` neles (a luz andaria pelas bordas da
 * forma). Por isso a luz é um caminho central aberto, com `stroke`, sobreposto às
 * formas. O caminho vai da ponta distante até o ponto. A animação (`@keyframes
 * circuit-light`) e a regra de movimento reduzido ficam em `app/globals.css`.
 */
export function CircuitLine({
  lineColor,
  lightColor,
  lineOpacity = 0.45,
  dotOpacity = 0.6,
  duration,
  delay,
  lightLength,
  reverse = false,
  orientation = "normal",
  className,
}: CircuitLineProps) {
  const style = {
    ...(duration && { "--circuit-duration": duration }),
    ...(delay && { "--circuit-delay": delay }),
    ...(lightLength !== undefined && { "--circuit-light-length": lightLength }),
  } as CSSProperties;

  return (
    <svg
      viewBox="0 0 397 82"
      fill="none"
      aria-hidden="true"
      className={cn(
        "pointer-events-none overflow-visible select-none",
        orientationClass[orientation],
        className,
      )}
      style={style}
    >
      <path
        d="M10.9941 76.5V75.5H134.994V1H397V2H135.994V76.5H10.9941Z"
        style={{ fill: lineColor }}
        opacity={lineOpacity}
      />
      <path
        d="M0 76C0 72.9624 2.46243 70.5 5.5 70.5C8.53757 70.5 11 72.9624 11 76C11 79.0376 8.53757 81.5 5.5 81.5C2.46243 81.5 0 79.0376 0 76Z"
        style={{ fill: lineColor }}
        opacity={dotOpacity}
      />
      <path
        d="M397 1.5H135.494V76H10.9941"
        pathLength={100}
        strokeWidth={2.4}
        strokeLinecap="butt"
        style={{ stroke: lightColor }}
        data-circuit-light=""
        data-reverse={reverse ? "" : undefined}
      />
    </svg>
  );
}
