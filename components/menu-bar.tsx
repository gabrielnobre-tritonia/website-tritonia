import Link from "next/link";
import { ContactButton } from "./link-button";
import { MenuItem } from "./menu-item";
import { MobileMenu } from "./mobile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";
import { contact, menuItems } from "@/lib/constants";

export function MenuBar() {
  return (
    <header className="max-w-content border-menubar-border bg-menubar shadow-menubar backdrop-blur-menubar fixed top-6 right-[calc(1rem+var(--removed-body-scroll-bar-size,0px))] left-4 z-50 mx-auto flex items-center justify-between rounded-full border px-6 py-2.5 lg:px-20">
      <Link
        href="/"
        className="text-button text-foreground-light focus-visible:outline-detail focus-visible:outline-2 focus-visible:outline-offset-2"
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
        <ThemeSwitcher className="ml-2" />
      </div>

      <MobileMenu items={menuItems} contact={contact} />
    </header>
  );
}
