"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { options } from "@/lib/constants";

const emptySubscribe = () => () => {};

/**
 * Seletor de tema em linha, para o painel do menu das telas estreitas. Mostra
 * as três opções de uma vez, em vez do menu suspenso, para não abrir um menu
 * dentro de outro painel.
 */
export function ThemeOptions({ className = "" }: { className?: string }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Tema"
      className={`flex flex-wrap justify-center gap-1 ${className}`}
    >
      {options.map(({ value, label, icon: Icon }) => {
        const selected = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={selected}
            onClick={() => setTheme(value)}
            className={`flex items-center gap-2 rounded-menu-item px-3 py-2 text-button hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail ${
              selected ? "text-foreground-accent" : "text-foreground-muted"
            }`}
          >
            <Icon aria-hidden="true" className="size-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
