import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";
import { GradientButton } from "@/components/link-button";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

const NotFound = () => {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center">
      <HeroBackground />

      <div className="py-menubar relative flex flex-col items-center gap-5 px-(--page-gutter)">
        <p className="text-headline text-foreground-accent max-lg:text-[3.5rem] max-sm:text-[2.5rem]">
          404
        </p>
        <h1 className="text-h1 text-foreground">Página não encontrada.</h1>
        <p className="text-subheadline text-foreground-muted max-sm:text-base">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <GradientButton asChild>
          <Link href="/">Voltar para o início</Link>
        </GradientButton>
      </div>
    </section>
  );
};

export default NotFound;
