import Link from "next/link";
import { ContactButton } from "./link-button";
import { MenuItem } from "./menu-item";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";

type MenuItemsProps = {
  href: string;
  label: string;
};

const menuItems: MenuItemsProps[] = [
  { href: "/design-system", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
];

/**
 * Barra de navegação fixa. A aparência (sólida ou de vidro) vem dos tokens
 * `menubar-*`, que mudam por tema. Como sai do fluxo, a página precisa
 * reservar espaço no topo.
 */
export function MenuBar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 mx-auto flex max-w-content items-center justify-between rounded-menu border border-menubar-border bg-menubar px-20 py-3.5 shadow-menubar backdrop-blur-menubar">
      <Link
        href="/"
        className="text-button text-foreground-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail"
      >
        <Image
          src={"/logo-menu.png"}
          alt="Logo da Tritonia"
          height={168}
          width={168}
          priority={true}
        />
      </Link>

      <nav aria-label="Principal" className="flex items-center gap-2">
        {menuItems.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </nav>
      <ContactButton href={"/contato"}>Contato</ContactButton>

      <ThemeSwitcher className="absolute top-1/2 left-full ml-4 -translate-y-1/2" />
    </header>
  );
}
