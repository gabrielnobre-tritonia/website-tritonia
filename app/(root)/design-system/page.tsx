import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContactButton, GradientButton } from "@/components/link-button";
import { MenuItem } from "@/components/menu-item";
import { TokenSwatch } from "@/components/token-swatch";

export const metadata: Metadata = {
  title: "Design System",
};

const sections = [
  { id: "cores", label: "Cores" },
  { id: "tipografia", label: "Tipografia" },
  { id: "forma", label: "Forma e espaço" },
  { id: "botoes", label: "Botões" },
  { id: "menu", label: "Menu" },
  { id: "cards", label: "Cards" },
];

const themedColors = [
  { variable: "--background", utility: "bg-background" },
  { variable: "--foreground", utility: "text-foreground" },
  { variable: "--button-from", utility: "from-button-from" },
  { variable: "--button-to", utility: "to-button-to" },
  { variable: "--menubar-background", utility: "bg-menubar" },
  { variable: "--menubar-border", utility: "border-menubar-border" },
];

const constantColors = [
  { variable: "--surface", utility: "bg-surface" },
  { variable: "--detail", utility: "outline-detail" },
  { variable: "--background-accent", utility: "bg-background-accent" },
  { variable: "--foreground-accent", utility: "text-foreground-accent" },
  { variable: "--foreground-light", utility: "text-foreground-light" },
  { variable: "--foreground-muted", utility: "text-foreground-muted" },
  { variable: "--card-orange", utility: "bg-card-orange" },
  { variable: "--card-green", utility: "bg-card-green" },
  { variable: "--card-cyan", utility: "bg-card-cyan" },
];

const paletteColors = [
  "--palette-light",
  "--palette-ink",
  "--palette-navy",
  "--palette-navy-light",
  "--palette-orange",
  "--palette-orange-light",
  "--palette-orange-dark",
  "--palette-peach",
  "--palette-green",
  "--palette-cyan",
  "--palette-gray",
];

const typeStyles = [
  {
    className: "text-headline",
    name: "headline",
    spec: "Chakra Petch · 600 · 80px · linha 1.1 · -0.02em",
    sample: "Headline",
  },
  {
    className: "text-h1",
    name: "h1",
    spec: "Chakra Petch · 600 · 36px · linha 1.2",
    sample: "Título H1",
  },
  {
    className: "text-subheadline",
    name: "subheadline",
    spec: "Plus Jakarta Sans · 400 · 20px · linha 150%",
    sample: "Subheadline para apoiar o título de uma seção.",
  },
  {
    className: "text-body",
    name: "body",
    spec: "Plus Jakarta Sans · 400 · 20px · linha 150%",
    sample:
      "Texto de corpo. A Tritonia usa Plus Jakarta Sans para tudo que não é título ou botão.",
  },
  {
    className: "text-subtitle",
    name: "subtitle",
    spec: "Plus Jakarta Sans · 600 · 14px · linha 110%",
    sample: "Subtitle",
  },
  {
    className: "text-button",
    name: "button",
    spec: "Chakra Petch · 500 · 16px · linha auto",
    sample: "Texto de botão",
  },
];

const radii = [
  {
    className: "rounded-menu-item",
    name: "radius-menu-item",
    px: 5,
    use: "Item de menu e botão de contato",
  },
  { className: "rounded-card", name: "radius-card", px: 20, use: "Card" },
  {
    className: "rounded-card-lg",
    name: "radius-card-lg",
    px: 35,
    use: "Card grande",
  },
  {
    className: "rounded-button",
    name: "radius-button",
    px: 39,
    use: "Botão em degradê",
  },
  { className: "rounded-menu", name: "radius-menu", px: 65, use: "Menu bar" },
];

const spacings = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64];

const focusRing = "outline-2 outline-offset-2 outline-detail";

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="flex scroll-mt-40 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-h1 text-foreground">{title}</h2>
        {description ? (
          <p className="text-subheadline text-foreground-muted">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-subtitle text-foreground">{title}</h3>
      {children}
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return <p className="text-subtitle text-foreground-muted">{children}</p>;
}

function ArrowIcon() {
  return (
    <svg width="22.5" height="18" viewBox="0 0 22.5 18" fill="none">
      <path
        d="M1 9h19.5M13 1.5 20.5 9 13 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="flex flex-1 flex-col pt-menubar">
      <div className="mx-auto flex w-full max-w-content flex-1 flex-col gap-24 pt-10 pb-32">
        <header className="flex flex-col gap-6">
          <h1 className="text-headline text-foreground">Design System</h1>
          <p className="text-subheadline max-w-3xl text-foreground-muted">
            Tudo o que foi construído a partir do protótipo: cores, tipografia,
            forma, botões, menu e cards. Troque o tema no seletor ao lado do
            menu e veja os valores mudarem.
          </p>
          <nav aria-label="Seções" className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-menu-item bg-surface px-4 py-3 text-button text-foreground-light hover:bg-background-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </header>

        <Section
          id="cores"
          title="Cores"
          description="Três camadas: paleta crua, tokens por papel e utilitários Tailwind. Os valores abaixo são lidos do CSS em tempo real."
        >
          <Group title="Mudam por tema">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {themedColors.map((color) => (
                <TokenSwatch key={color.variable} {...color} themed />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-card border border-foreground/15 bg-linear-to-r/srgb from-button-from to-button-to" />
              <Caption>
                Degradê horizontal do botão: button-from até button-to
              </Caption>
            </div>
          </Group>
          <Group title="Iguais nos dois temas">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {constantColors.map((color) => (
                <TokenSwatch key={color.variable} {...color} />
              ))}
            </div>
          </Group>
          <Group title="Paleta crua">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {paletteColors.map((variable) => (
                <TokenSwatch key={variable} variable={variable} />
              ))}
            </div>
          </Group>
        </Section>

        <Section
          id="tipografia"
          title="Tipografia"
          description="Chakra Petch nos títulos e botões, Plus Jakarta Sans no resto."
        >
          <div className="flex flex-col divide-y divide-foreground/15">
            {typeStyles.map((style) => (
              <div
                key={style.name}
                className="flex flex-col gap-2 py-6 first:pt-0 last:pb-0"
              >
                <Caption>
                  {style.className} — {style.spec}
                </Caption>
                <p className={`${style.className} text-foreground`}>
                  {style.sample}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="forma"
          title="Forma e espaço"
          description="Raios, container, escala de espaçamento e a única sombra do sistema."
        >
          <Group title="Raios">
            <div className="flex flex-wrap gap-6">
              {radii.map((radius) => (
                <div key={radius.name} className="flex w-44 flex-col gap-2">
                  <div
                    className={`${radius.className} flex h-28 items-center justify-center bg-surface text-button text-foreground-light`}
                  >
                    {radius.px}px
                  </div>
                  <div className="flex flex-col text-subtitle">
                    <span className="text-foreground">{radius.className}</span>
                    <span className="text-foreground-muted">{radius.use}</span>
                  </div>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Container">
            <div className="flex h-12 max-w-content items-center justify-center rounded-menu-item bg-surface text-button text-foreground-light">
              max-w-content · 1208px
            </div>
          </Group>

          <Group title="Espaçamento (múltiplos de 4, escala padrão do Tailwind)">
            <div className="flex flex-col gap-2">
              {spacings.map((px) => (
                <div key={px} className="flex items-center gap-4">
                  <span className="w-24 text-subtitle text-foreground-muted">
                    {px}px · {px / 4}
                  </span>
                  <div
                    className="h-4 rounded-menu-item bg-background-accent"
                    style={{ width: px }}
                  />
                </div>
              ))}
            </div>
          </Group>

          <Group title="Sombra e vidro do menu bar">
            <Caption>
              No tema escuro o menu bar é translúcido, com borda de 1px, sombra
              e desfoque do que passa atrás. No claro é sólido, sem sombra.
            </Caption>
            <div className="relative overflow-hidden rounded-card-lg p-10">
              <div className="absolute -top-6 left-10 size-32 rounded-full bg-card-orange" />
              <div className="absolute top-10 left-1/3 size-40 rounded-full bg-card-cyan" />
              <div className="absolute -bottom-8 right-24 size-36 rounded-full bg-card-green" />
              <div className="relative flex items-center justify-between rounded-menu border border-menubar-border bg-menubar px-20 py-3.5 shadow-menubar backdrop-blur-menubar">
                <span className="text-button text-foreground-light">Logo</span>
                <span className="text-button text-foreground-light">
                  menu bar (prévia, fora do fluxo fixo)
                </span>
              </div>
            </div>
          </Group>
        </Section>

        <Section
          id="botoes"
          title="Botões"
          description="Os botões são links de redirecionamento. Passe o mouse e use Tab nos botões reais; as linhas simuladas mostram o estado sem precisar interagir."
        >
          <Group title="Botão em degradê">
            <div className="flex flex-wrap items-center gap-6">
              <GradientButton href="/design-system">Sem ícone</GradientButton>
              <GradientButton href="/design-system" icon={<ArrowIcon />}>
                Com ícone
              </GradientButton>
            </div>
            <Caption>
              Padding 24 x 20 · raio 39px · hover vira a cor sólida do fim do
              degradê
            </Caption>
            <div className="flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center justify-center rounded-button bg-button-to px-6 py-5 text-button text-foreground-light">
                Hover (simulado)
              </span>
              <span
                className={`inline-flex items-center justify-center rounded-button px-6 py-5 text-button text-foreground-light bg-linear-to-r/srgb from-button-from to-button-to ${focusRing}`}
              >
                Foco (simulado)
              </span>
            </div>
          </Group>

          <Group title="Botão de contato">
            <div className="flex flex-wrap items-center gap-6">
              <ContactButton href="/design-system">Contato</ContactButton>
            </div>
            <Caption>
              Padding 16 x 8 · fundo #f7660b nos dois temas · raio 5px · sem
              alteração no hover
            </Caption>
          </Group>
        </Section>

        <Section
          id="menu"
          title="Menu"
          description="Itens de menu e o menu bar fixo no topo desta página."
        >
          <Group title="Item de menu">
            <div className="flex flex-wrap items-center gap-2 self-start rounded-menu bg-menubar px-10 py-3.5 border border-menubar-border">
              <MenuItem href="/">Repouso</MenuItem>
              <span className="rounded-menu-item bg-background-accent px-4 py-2 text-button text-foreground-light">
                Hover / atual (simulado)
              </span>
              <span
                className={`rounded-menu-item px-4 py-2 text-button text-foreground-light ${focusRing}`}
              >
                Foco (simulado)
              </span>
            </div>
            <Caption>
              Padding 16 x 8 · raio 5px · fundo laranja no hover e na página
              atual, que também recebe aria-current
            </Caption>
          </Group>
        </Section>

        <Section
          id="cards"
          title="Cards"
          description="Cores e raios de card. O conteúdo e o tamanho do card de destaque ainda não fazem parte do sistema."
        >
          <div className="grid gap-6 text-foreground-light md:grid-cols-3">
            <div className="flex h-40 flex-col justify-end rounded-card bg-card-orange p-6">
              <p className="text-h1">Laranja</p>
              <p className="text-subtitle">radius-card · 20px</p>
            </div>
            <div className="flex h-40 flex-col justify-end rounded-card bg-card-green p-6">
              <p className="text-h1">Verde</p>
              <p className="text-subtitle">radius-card · 20px</p>
            </div>
            <div className="flex h-40 flex-col justify-end rounded-card bg-card-cyan p-6">
              <p className="text-h1">Ciano</p>
              <p className="text-subtitle">radius-card · 20px</p>
            </div>
            <div className="flex h-40 flex-col justify-end rounded-card-lg bg-card-orange p-6">
              <p className="text-h1">Laranja</p>
              <p className="text-subtitle">radius-card-lg · 35px</p>
            </div>
            <div className="flex h-40 flex-col justify-end rounded-card-lg bg-card-green p-6">
              <p className="text-h1">Verde</p>
              <p className="text-subtitle">radius-card-lg · 35px</p>
            </div>
            <div className="flex h-40 flex-col justify-end rounded-card-lg bg-card-cyan p-6">
              <p className="text-h1">Ciano</p>
              <p className="text-subtitle">radius-card-lg · 35px</p>
            </div>
          </div>
          <div className="flex h-40 flex-col justify-end rounded-card-lg bg-surface p-6 text-foreground-light">
            <p className="text-h1">Seção em superfície</p>
            <p className="text-subtitle">bg-surface · #213445</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
