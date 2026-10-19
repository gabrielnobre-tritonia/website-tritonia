import { ExpandableCard } from "@/components/expandable-card";
import { ExpandableCardGroup } from "@/components/expandable-card-group";
import { MapCard } from "@/components/map-card";
import { StatCard } from "@/components/stat-card";
import { whyCards, whyMapCard, whyStatCard } from "@/lib/constants";

export function WhyTritoniaSection() {
  const [{ id: firstId, ...first }, ...rest] = whyCards;

  return (
    <section className="bg-background py-menubar relative z-10 overflow-hidden">
      {/* Elipse de brilho: 672 x 745px, 176px para fora da borda esquerda, centralizada na vertical. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-44 h-[745px] w-[672px] -translate-y-1/2 bg-(image:--software-ellipse) bg-contain bg-no-repeat select-none"
      />

      <div className="relative flex w-full justify-center px-(--page-gutter)">
        <div className="max-w-content flex w-full flex-col gap-10">
          <div className="flex flex-col gap-5 lg:px-20">
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
          {/* No mobile vira uma grade de duas colunas: os quadrados lado a lado
              (ordem 1 e 2) e, abaixo, os cards em acordeão, um por linha (ordem 3). */}
          <ExpandableCardGroup className="flex items-start justify-center gap-4 max-md:grid max-md:grid-cols-2">
            <ExpandableCard
              key={firstId}
              {...first}
              className="max-md:order-3 max-md:col-span-2"
            />

            {/* Coluna dos quadrados: 488px de altura, corta o que for empurrado para baixo. No mobile some (`contents`) e os quadrados entram na grade. */}
            <div className="flex h-[488px] shrink-0 flex-col items-center gap-4 overflow-hidden max-md:contents">
              <MapCard {...whyMapCard} className="max-md:order-1" />
              <StatCard {...whyStatCard} className="max-md:order-2" />
            </div>

            {rest.map(({ id, ...card }) => (
              <ExpandableCard
                key={id}
                {...card}
                className="max-md:order-3 max-md:col-span-2"
              />
            ))}
          </ExpandableCardGroup>
        </div>
      </div>
    </section>
  );
}
