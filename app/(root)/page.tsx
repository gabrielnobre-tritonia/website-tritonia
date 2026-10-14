import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { HeroBackground } from "@/components/hero-background";
import { HomeStatement } from "@/components/home-statement";
import { GradientButton } from "@/components/link-button";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyTritoniaSection } from "@/components/why-tritonia-section";

const Home = () => {
  return (
    <>
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center">
        <HeroBackground />

        <div className="relative flex flex-col items-center gap-5 px-(--page-gutter) py-menubar">
          <h1 className="text-headline text-foreground max-lg:text-[3.5rem] max-sm:text-[2.5rem]">
            Construímos o sistema <br className="max-md:hidden" />
            que <span className="text-background-accent">você</span> precisa.
          </h1>
          <p className="text-subheadline text-foreground-muted max-sm:text-base">
            No setor privado ou governamental, seu desafio é o{" "}
            <br className="max-md:hidden" />
            nosso ponto de partida para construir a solução certa.
          </p>
          <GradientButton href="/contato">Entrar em contato</GradientButton>
        </div>
      </section>

      <HomeStatement />
      <AboutSection />
      <SolutionsSection />
      <WhyTritoniaSection />
      <CtaSection />
    </>
  );
};

export default Home;
