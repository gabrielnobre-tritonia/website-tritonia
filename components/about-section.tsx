import { aboutStats } from "@/lib/constants";

/**
 * Seção "Sobre Nós" da home.
 *
 * Camadas: vem depois da faixa laranja fixa (`HomeStatement`, `sticky z-0`),
 * então é opaca, `relative z-10` e em largura total (`-mx-(--page-gutter)`),
 * para cobri-la sem deixar tiras laterais. O `overflow-hidden` fica só aqui:
 * só um ancestral com `overflow` quebraria o `sticky` da faixa.
 *
 * Logo e elipse ao fundo usam `cqw` (1cqw = 1% da largura da seção, que é o
 * container por `container-type: inline-size`). A partir de `lg` são
 * proporcionais ao frame do Figma de 1440px (em 1440px dão as medidas dele).
 * Abaixo de `lg` ganham um tamanho maior por breakpoint (base < 640px, `sm` de
 * 640px a 1023px), porque a escala proporcional os deixaria pequenos demais em
 * telas estreitas. Eles ficam antes do conteúdo no DOM e nunca como ancestrais
 * dele, senão o desfoque do card não enxergaria o que está atrás.
 *
 * `cqw` mede a caixa de conteúdo do container, então a seção não pode ter
 * padding horizontal: o padding lateral fica no wrapper do conteúdo.
 */
export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative z-10 flex min-h-dvh items-center justify-center overflow-hidden @container bg-background"
    >
      {/* Elipse de brilho, centralizada na horizontal (proporção 1440:631).
          lg+: largura da seção; sm: 160cqw; base: 220cqw (o excesso é cortado). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[20cqw] left-1/2 h-[96.4cqw] w-[220cqw] -translate-x-1/2 bg-(image:--about-ellipse) bg-contain bg-center bg-no-repeat select-none sm:top-[15.862cqw] sm:h-[70.1cqw] sm:w-[160cqw] lg:h-[43.819cqw] lg:w-full"
      />

      {/* Logo, centralizado (proporção 666:555).
          lg+: 46,25cqw; sm: 60cqw; base: 85cqw. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[70.833cqw] w-[85cqw] -translate-1/2 bg-(image:--about-logo) bg-contain bg-center bg-no-repeat select-none sm:h-[50cqw] sm:w-[60cqw] lg:h-[38.542cqw] lg:w-[46.25cqw]"
      />

      <div className="relative flex w-full justify-center px-(--page-gutter)">
        <div className="flex w-full max-w-content flex-col gap-10 py-menubar  ">
          <p className="font-display text-[14px] font-medium text-foreground">
            SOBRE NÓS
          </p>

          <div className="flex flex-col items-end gap-10">
            <h2 className="text-h1 w-full text-foreground max-sm:text-[1.75rem]">
              Sistema sob medida começa antes do código.{" "}
              <br className="max-md:hidden" />
              Começa{" "}
              <span className="text-background-accent">
                entendendo o seu problema.
              </span>
            </h2>

            <p className="text-body max-w-[650px] text-foreground max-sm:text-base">
              A Tritonia é uma empresa de serviços com foco em tecnologia.
              Atuamos junto a organizações públicas e privadas, unindo gestão de
              operações ao desenvolvimento de sistemas, sempre a partir de um
              problema real. Nosso trabalho se apoia em três frentes:{" "}
              <span className="font-extrabold">
                engenharia de software, entendimento de negócio e proximidade
                com quem usa nossas soluções.
              </span>{" "}
              O resultado são sistemas sob medida para a operação que você tem,
              não para uma versão genérica dela.
            </p>
          </div>

          {/* Mesmos tokens do menu bar: vidro no escuro, navy sólido no claro. */}
          <div className="rounded-card border border-menubar-border bg-menubar p-5 shadow-menubar backdrop-blur-menubar">
            <ul className="grid grid-cols-1 gap-5 sm:flex lg:flex">
              {aboutStats.map((stat) => (
                <li
                  key={stat.id}
                  className="flex flex-col items-center text-center sm:max-lg:last:col-span-2 lg:flex-1 md:not-first:border-l lg:not-first:border-l lg:not-first:border-foreground-light/42 lg:not-first:pl-5"
                >
                  <span
                    className="font-sans text-[2rem] font-semibold"
                    style={{ color: stat.color }}
                  >
                    {stat.title}
                  </span>
                  <span className="font-sans text-[0.875rem] font-normal text-foreground-light">
                    {stat.subtitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
