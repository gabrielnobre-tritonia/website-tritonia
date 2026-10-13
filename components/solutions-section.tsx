import { ServiceCard } from "@/components/service-card";
import { SolutionsCardStack } from "@/components/solutions-card-stack";
import { serviceCards } from "@/lib/constants";

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="relative z-10 overflow-x-clip bg-background py-menubar "
    >
      <div className="flex w-full justify-center px-(--page-gutter)">
        <div className="w-full max-w-content lg:px-20">
          <SolutionsCardStack
            header={
              <>
                <h2 className="text-h1 text-foreground">
                  Soluções que acompanham <br className="max-md:hidden" />
                  <span className="text-background-accent">cada desafio.</span>
                </h2>

                <p className="text-subtitle text-foreground-muted">
                  Da construção de novos sistemas à evolução de tecnologias{" "}
                  <br className="max-md:hidden" /> existentes e à gestão de
                  operações.
                </p>
              </>
            }
            cards={serviceCards.map(({ id, ...card }) => ({
              id,
              card: <ServiceCard {...card} />,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
