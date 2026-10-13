import { ExpandableCard } from "@/components/expandable-card";
import { MapCard } from "@/components/map-card";
import { StatCard } from "@/components/stat-card";
import { whyCards, whyMapCard, whyStatCard } from "@/lib/constants";

export function WhyTritoniaSection() {
  const [{ id: firstId, ...first }, ...rest] = whyCards;

  return (
    <section className="relative z-10 overflow-hidden bg-background py-menubar">
      {/* Elipse de brilho: 672 x 745px, 176px para fora da borda esquerda, centralizada na vertical. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-44 h-[745px] w-[672px] -translate-y-1/2 bg-(image:--software-ellipse) bg-contain bg-no-repeat select-none"
      />

      <div className="relative flex w-full justify-center px-(--page-gutter)">
        <div className="flex w-full max-w-content flex-col gap-10">
          <div className="flex flex-col gap-6 lg:px-20">
            <h2 className="text-h1 text-foreground">
              Software genérico resolve. <br className="max-md:hidden" />
              Software sob medida{" "}
              <span className="text-background-accent">transforma.</span>
            </h2>

            <p className="text-subtitle text-foreground-muted">
              Acompanhamento de perto, entendimento do seu negócio e
              desenvolvimento com <br className="max-md:hidden" />
              responsabilidade. Entenda por que escolher a Tritonia.
            </p>
          </div>

          {/* Fileira de quatro colunas, centralizada: a linha expandida (1400px) passa dos 1208px do container. */}
          <div className="flex items-start justify-center gap-4">
            <ExpandableCard key={firstId} {...first} />

            {/* Coluna dos quadrados: 488px de altura, corta o que for empurrado para baixo. */}
            <div className="flex h-[488px] shrink-0 flex-col items-center gap-4 overflow-hidden">
              <MapCard {...whyMapCard} />
              <StatCard {...whyStatCard} />
            </div>

            {rest.map(({ id, ...card }) => (
              <ExpandableCard key={id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
