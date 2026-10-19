"use client";

import { useSyncExternalStore } from "react";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { options } from "@/lib/constants";

const emptySubscribe = () => () => {};

/**
 * Seletor de tema em menu suspenso. O gatilho mostra só o ícone do tema atual;
 * as três opções aparecem ao abrir, com a selecionada em laranja.
 */
export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  // Antes de o cliente conhecer o tema, mostra a opção padrão (Sistema).
  const current =
    (mounted && options.find((option) => option.value === theme)) || options[0];
  const CurrentIcon = current.icon;

  return (
    // modal={false}: o modo modal trava a rolagem e esconde a barra vertical,
    // o que faz a página dar um salto ao abrir o menu.
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Tema: ${current.label}`}
          className={`text-foreground-light focus-visible:outline-detail hover:text-foreground-accent aria-expanded:text-foreground-accent hover:bg-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 aria-expanded:bg-transparent dark:hover:bg-transparent ${className}`}
        >
          <CurrentIcon aria-hidden="true" className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="rounded-card bg-popover w-auto min-w-36 p-1 ring-0"
      >
        <DropdownMenuRadioGroup
          value={mounted ? theme : undefined}
          onValueChange={setTheme}
        >
          {options.map(({ value, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={value}
              value={value}
              className="rounded-menu-item text-button text-foreground-muted dark:text-foreground-light data-[state=checked]:text-foreground-accent focus:data-[state=checked]:text-foreground-accent px-3 py-2"
            >
              <Icon aria-hidden="true" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
