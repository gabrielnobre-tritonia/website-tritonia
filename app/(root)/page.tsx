import Image from "next/image";
import { GradientButton } from "@/components/link-button";

const Home = () => {
  return (
    <>
      <section className="relative -mx-(--page-gutter) flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden bg-(image:--hero-network) bg-cover bg-center"
        >
          <Image
            src="/backgrounds/ellipse-orange.svg"
            alt=""
            width={1010}
            height={856}
            className="absolute top-[-240] left-[-180] h-auto w-[70.139%] min-w-96 max-w-none translate-x-[-6.04%] translate-y-[-25.7%] select-none"
          />
          <Image
            src="/backgrounds/ellipse-blue.svg"
            alt=""
            width={1238}
            height={1092}
            className="absolute right-40 bottom-0 h-auto w-[85.972%] min-w-120 max-w-none translate-x-[41.92%] translate-y-[76.01%] select-none"
          />
        </div>

        <div className="relative flex flex-col items-center gap-10 px-(--page-gutter) py-menubar">
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

      <section className="-mx-(--page-gutter) flex h-[600px] items-center justify-center bg-background-accent px-(--page-gutter) text-foreground-light">
        <h2 className="text-headline w-full max-w-[1348px] text-center max-[1400px]:text-[4.5rem] max-xl:text-[3.5rem] max-lg:text-[2.5rem]">
          Softwares sob medida para desafios <br className="max-md:hidden" />
          que não cabem em soluções prontas.
        </h2>
      </section>
    </>
  );
};

export default Home;
