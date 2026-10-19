import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ContactButton } from "./link-button";
import { MenuItem } from "./menu-item";
import { ThemeOptions } from "./theme-options";

type MobileMenuProps = {
  items: { href: string; label: string }[];
  contact: { href: string; label: string };
};

/**
 * Menu das telas estreitas: o botão de hambúrguer (pastilha translúcida, só
 * abaixo de 1024px) abre um Sheet pela direita com o logo, os itens, o contato
 * e o seletor de tema. A aparência do painel vem do próprio `sheet.tsx`.
 */
export function MobileMenu({ items, contact }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menu"
          className="bg-menubutton text-foreground-light focus-visible:outline-detail flex size-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
        >
          <Menu aria-hidden="true" className="size-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navegação principal do site
          </SheetDescription>
          <SheetClose asChild>
            <Link
              href="/"
              className="focus-visible:outline-detail w-fit focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Image
                src="/logos/logo-menu.png"
                alt="Logo da Tritonia"
                width={168}
                height={40}
                className="h-auto"
              />
            </Link>
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-col gap-1 px-4 pb-4">
          <nav aria-label="Principal" className="flex flex-col gap-1">
            {items.map((item) => (
              <SheetClose key={item.href} asChild>
                <MenuItem href={item.href} className="block">
                  {item.label}
                </MenuItem>
              </SheetClose>
            ))}
          </nav>
          <SheetClose asChild>
            <ContactButton href={contact.href} className="mt-3 w-full">
              {contact.label}
            </ContactButton>
          </SheetClose>
          <ThemeOptions className="mt-3" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
