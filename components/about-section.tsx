import { CircuitLine } from "@/components/circuit-line";
import { aboutStats } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative z-10 flex min-h-dvh items-center justify-center overflow-hidden @container bg-background"
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

        <div className="relative flex w-full max-w-content gap-20 flex-col py-menubar lg:px-20">
          <div className="flex flex-col gap-5">
            <p className="font-display text-[14px] font-medium text-foreground">
              SOBRE NÓS
            </p>

            <div className="relative flex flex-col items-end gap-5">
              <div className="relative w-full">
                <h2 className="text-h1 relative w-full text-foreground max-sm:text-[1.75rem]">
                  Sistema sob medida começa antes do código.{" "}
                  <br className="max-md:hidden" />
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

              <p className="text-body relative max-w-[600px] text-foreground max-sm:text-base">
                A Tritonia é uma empresa de serviços com foco em tecnologia.
                Atuamos junto a organizações públicas e privadas, unindo gestão
                de operações ao desenvolvimento de sistemas, sempre a partir de
                um problema real. Nosso trabalho se apoia em três frentes:{" "}
                <span className="font-extrabold">
                  engenharia de software, entendimento de negócio e proximidade
                  com quem usa nossas soluções.
                </span>{" "}
                O resultado são sistemas sob medida para a operação que você
                tem, não para uma versão genérica dela.
              </p>
              <CircuitLine
                lineColor="#0fd298"
                lightColor="var(--circuit-light-green)"
                delay="0.8s"
                className="absolute top-[calc(100%+2px)] right-[calc(50%-50cqw)] w-[min(40cqw,150px)] lg:top-[calc(100%+11px)] lg:w-[25.8cqw]"
              />
            </div>
          </div>

          {/* Mesmos tokens do menu bar: vidro no escuro, navy sólido no claro. */}
          <div className="relative rounded-card border border-menubar-border bg-menubar p-2 shadow-menubar backdrop-blur-menubar">
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
