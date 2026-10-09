"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

/** Valor atual de uma variável CSS. Atualiza quando o tema muda. */
function useCssVariable(name: string) {
  return useSyncExternalStore(
    subscribe,
    () => getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
    () => "",
  );
}

type TokenSwatchProps = {
  /** Nome da variável CSS, por exemplo `--background`. */
  variable: string;
  /** Classe Tailwind correspondente, por exemplo `bg-background`. */
  utility?: string;
  /** Usado quando o token varia por tema. */
  themed?: boolean;
};

/** Amostra de cor com o valor lido do CSS, para conferir o que foi construído. */
export function TokenSwatch({ variable, utility, themed }: TokenSwatchProps) {
  const value = useCssVariable(variable);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-20 rounded-card border border-foreground/15"
        style={{ background: `var(${variable})` }}
      />
      <div className="flex flex-col gap-0.5 text-subtitle">
        <span className="text-foreground">{variable}</span>
        {utility ? <span className="text-foreground-muted">{utility}</span> : null}
        <span className="text-foreground-muted">
          {value || " "}
          {themed ? " · muda por tema" : ""}
        </span>
      </div>
    </div>
  );
}
