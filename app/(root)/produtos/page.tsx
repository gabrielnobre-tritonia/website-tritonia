import { HeroBackground } from "@/components/hero-background";
import { ProductCarousel } from "@/components/product-carousel";

const Produtos = () => {
  return (
    <>
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center">
        <HeroBackground />

        <div className="py-menubar relative flex flex-col items-center gap-5 px-(--page-gutter)">
          <h1 className="text-headline text-foreground max-lg:text-[3.5rem] max-sm:text-[2.5rem]">
            Soluções que já{" "}
            <span className="text-foreground-accent">transformam</span>
            <br className="max-md:hidden" />
            operações reais.
          </h1>
          <p className="text-subheadline text-foreground-muted max-sm:text-base">
            Tecnologia desenvolvida a partir de desafios reais{" "}
            <br className="max-md:hidden" />e que hoje sustenta diferentes tipos
            de operação.
          </p>
        </div>
      </section>

      <ProductCarousel />
    </>
  );
};

export default Produtos;
