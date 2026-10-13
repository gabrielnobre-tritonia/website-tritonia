import Image from "next/image";
import Link from "next/link";
import { contact, menuItems } from "@/lib/constants";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail";

const footerLinks = [...menuItems, contact];

export function SiteFooter() {
  return (
    <footer className="flex min-h-[300px] w-full flex-col justify-end gap-8 bg-[#7B7B7B] px-[clamp(16px,calc(15.78vw_-_85px),218px)] py-10 dark:bg-[#1D2833]">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Link href="/" className={`shrink-0 ${focusRing}`}>
          <Image
            src="/logos/logo-menu-blue.svg"
            alt="Logo da Tritonia"
            width={168}
            height={40}
            className="h-auto dark:hidden"
          />
          <Image
            src="/logos/logo-menu.png"
            alt="Logo da Tritonia"
            width={168}
            height={40}
            className="hidden h-auto dark:block"
          />
        </Link>

        <nav aria-label="Rodapé" className="flex flex-wrap items-center gap-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-menu-item px-4 py-2 text-button text-[#F6F6F6] hover:text-foreground-accent ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <p className="text-body text-[#D0D0D0]">
        © 2026 TRITONIA. Todos os direitos reservados.
      </p>
    </footer>
  );
}
