import { CurrentYear } from "@/components/current-year";
import Image from "next/image";
import Link from "next/link";
import {
  contact,
  contactChannels,
  menuItems,
  productSlides,
} from "@/lib/constants";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

/** O nome do produto é o que vem antes do hífen do título ("SGVM - Sistema…"). */
const productName = (title: string) => title.split(/\s[-–]\s/)[0];

const columns: FooterColumn[] = [
  { title: "Navegação", links: [...menuItems, contact] },
  {
    title: "Produtos",
    links: productSlides.map((slide) => ({
      href: "/produtos",
      label: productName(slide.title),
    })),
  },
  {
    title: "Fale com a gente",
    links: contactChannels.map((channel) => ({
      href: channel.href,
      label: channel.label,
      external: channel.external,
    })),
  },
];

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col gap-12 bg-[#d5d5d5] px-[clamp(16px,calc(15.78vw_-_85px),218px)] py-14 dark:bg-[#1D2833]">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className={`self-start justify-self-start ${focusRing}`}>
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

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-foreground-accent font-display mb-5 text-2xl">
              {column.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={`text-button hover:text-foreground-muted dark:text-foreground text-surface inline-block break-words ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p className="text-body dark:text-[#D0D0D0]">
        © <CurrentYear /> TRITONIA SOLUCOES EM TECNOLOGIA LTDA -
        39.279.734/0001-97
        <br />
        Rua Nogueira Acioli, 996, Sala 01 – Fortaleza, Ce - 60110-140
      </p>
    </footer>
  );
}
