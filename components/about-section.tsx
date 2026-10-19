import { CircuitLine } from "@/components/circuit-line";
import { aboutStats } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="bg-background @container relative z-10 flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Elipse brilho */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[20cqw] left-1/2 h-[96.4cqw] w-[220cqw] -translate-x-1/2 bg-(image:--about-ellipse) bg-contain bg-center bg-no-repeat select-none sm:top-[15.862cqw] sm:h-[70.1cqw] sm:w-[160cqw] lg:h-[43.819cqw] lg:w-full"
      />

      {/* Logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[70.833cqw] w-[85cqw] -translate-1/2 bg-(image:--about-logo) bg-contain bg-center bg-no-repeat select-none sm:h-[50cqw] sm:w-[60cqw] lg:h-[38.542cqw] lg:w-[46.25cqw]"
      />

      <div className="relative flex w-full justify-center px-(--page-gutter)">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <CircuitLine
            orientation="rotate"
            lineColor="#0fd298"
            lightColor="var(--circuit-light-green)"
            delay="1.6s"
            className="absolute bottom-4 left-0 w-[60cqw] sm:w-[40cqw] lg:bottom-[3.6cqw] lg:w-[25.8cqw]"
          />
        </div>

        <div className="max-w-content py-menubar relative flex w-full flex-col gap-20 lg:px-20">
          <div className="flex flex-col gap-5">
            <p className="font-display text-foreground text-[14px] font-medium">
              SOBRE NÓS
            </p>

            <div className="relative flex flex-col items-end gap-5">
              <div className="relative w-full">
                <h2 className="text-h1 text-foreground relative w-full max-sm:text-[1.75rem]">
                  Sistema sob medida <br className="lg:hidden" /> começa antes
                  do código. <br className="max-md:hidden" />
                  Começa{" "}
                  <span className="text-background-accent">
                    entendendo o seu problema.
                  </span>
                </h2>
                <CircuitLine
                  orientation="rotate"
                  lineColor="var(--palette-orange)"
                  lightColor="var(--circuit-light-orange)"
                  delay="0s"
                  className="absolute top-[calc(100%+4px)] left-[calc(50%-50cqw)] w-[min(40cqw,150px)] lg:top-[calc(100%+14px)] lg:left-[calc(50%-48.85cqw)] lg:w-[25.8cqw]"
                />
              </div>

              <div className="text-body text-foreground relative flex max-w-[600px] flex-col gap-4 max-sm:text-base">
                <p>
                  A Tritonia é uma empresa de serviços com foco em tecnologia.
                  Atuamos junto a organizações públicas e privadas, unindo
                  gestão de operações ao desenvolvimento de sistemas, sempre a
                  partir de um problema real. <br className="lg:hidden" />
                </p>
                <p>
                  Nosso trabalho se apoia em três frentes:{" "}
                  <span className="font-extrabold">
                    engenharia de software, entendimento de negócio e
                    proximidade com quem usa nossas soluções.
                  </span>{" "}
                </p>
                <p>
                  O resultado são sistemas sob medida para a operação que você
                  tem, não para uma versão genérica dela.
                </p>
              </div>
              <CircuitLine
                lineColor="#0fd298"
                lightColor="var(--circuit-light-green)"
                delay="0.8s"
                className="absolute top-[calc(100%+2px)] right-[calc(50%-50cqw)] w-[min(40cqw,150px)] lg:top-[calc(100%+11px)] lg:w-[25.8cqw]"
              />
            </div>
          </div>

          {/* Mesmos tokens do menu bar: vidro no escuro, navy sólido no claro. */}
          <div className="rounded-card border-menubar-border bg-menubar shadow-menubar backdrop-blur-menubar relative border p-2">
            {/* Abaixo de `md`: grade de 2 colunas com divisórias em cruz, e o último item ocupa a linha de baixo, com número e texto lado a lado. */}
            <ul className="grid grid-cols-2 gap-5 max-md:gap-0 md:flex">
              {aboutStats.map((stat) => (
                <li
                  key={stat.id}
                  className="lg:not-first:border-foreground-light/42 max-md:border-foreground-light/42 flex flex-col items-center text-center max-md:items-start max-md:p-4 max-md:text-left max-md:last:col-span-2 max-md:last:flex-row max-md:last:items-center max-md:last:gap-3 max-md:even:border-l max-md:nth-[n+3]:border-t md:not-first:border-l lg:flex-1 lg:not-first:border-l lg:not-first:pl-5"
                >
                  <span
                    className="font-sans text-[2rem] font-semibold max-md:text-[1.75rem] max-md:leading-tight"
                    style={{ color: stat.color }}
                  >
                    {stat.title}
                  </span>
                  <span className="text-foreground-light font-sans text-[0.875rem] font-normal">
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
