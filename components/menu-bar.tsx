import Link from "next/link";
import { ContactButton } from "./link-button";
import { MenuItem } from "./menu-item";
import { MobileMenu } from "./mobile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";

type MenuItemsProps = {
  href: string;
  label: string;
};

const menuItems: MenuItemsProps[] = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
];

const contact: MenuItemsProps = { href: "/contato", label: "Contato" };

export function MenuBar() {
  return (
    <header className="fixed top-6 left-4 right-[calc(1rem+var(--removed-body-scroll-bar-size,0px))] z-50 mx-auto flex max-w-content items-center justify-between rounded-menu border border-menubar-border bg-menubar px-6 py-3.5 shadow-menubar backdrop-blur-menubar lg:px-20 ">
      <Link
        href="/"
        className="text-button text-foreground-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail"
      >
        <Image
          src={"/logos/logo-menu.png"}
          alt="Logo da Tritonia"
          height={168}
          width={168}
          priority={true}
        />
      </Link>

      <nav
        aria-label="Principal"
        className="flex items-center gap-2 max-lg:hidden"
      >
        {menuItems.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </nav>

      <div className="flex items-center max-lg:hidden">
        <ContactButton href={contact.href}>{contact.label}</ContactButton>
        {/* Entre 1024px e 1319px fica dentro da barra, ao lado do contato;
            a partir de 1320px, fora da barra, à direita. */}
        <ThemeSwitcher className="ml-2 min-[1320px]:absolute min-[1320px]:top-1/2 min-[1320px]:left-full min-[1320px]:ml-4 min-[1320px]:-translate-y-1/2" />
      </div>

      <MobileMenu items={menuItems} contact={contact} />
    </header>
  );
}
