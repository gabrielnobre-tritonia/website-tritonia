"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

import { HeroBackground } from "@/components/hero-background";
import { productsHeroCards } from "@/lib/constants";

/** A sequência só roda a partir de 768px e sem movimento reduzido. */
const PLAY_QUERY =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

/** Tempo máximo de espera pelas imagens dos cards antes de começar a sequência. */
const PRELOAD_LIMIT_MS = 3000;

export function ProductsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const media = window.matchMedia(PLAY_QUERY);
    if (!media.matches) {
      section.dataset.hero = "done";
      return;
    }

    let cancelled = false;

    // Altura real do hero, para calcular as posições fora da tela.
    const measure = () => {
      section.style.setProperty(
        "--products-hero-h",
        `${section.clientHeight}px`,
      );
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(section);

    // Espera as três imagens estarem decodificadas, com um limite de tempo.
    const images = Array.from(
      section.querySelectorAll<HTMLImageElement>("img[data-hero-card-image]"),
    );
    let limitTimer: number | undefined;
    const limit = new Promise<void>((resolve) => {
      limitTimer = window.setTimeout(resolve, PRELOAD_LIMIT_MS);
    });
    const loaded = Promise.all(
      images.map((image) => image.decode().catch(() => undefined)),
    );
    Promise.race([loaded, limit]).then(() => {
      if (!cancelled) section.dataset.hero = "playing";
    });

    // O título é o último a parar: quando termina, a sequência acabou.
    const onAnimationEnd = (event: AnimationEvent) => {
      if (
        event.target === title &&
        event.animationName === "products-hero-title-in"
      ) {
        section.dataset.hero = "done";
      }
    };
    title.addEventListener("animationend", onAnimationEnd);

    // Se a janela ficar estreita no meio da sequência, o CSS já mostra o estado
    // final; marca `done` para ela não recomeçar se a janela crescer de novo.
    const onMediaChange = () => {
      if (!media.matches) section.dataset.hero = "done";
    };
    media.addEventListener("change", onMediaChange);

    return () => {
      cancelled = true;
      window.clearTimeout(limitTimer);
      resizeObserver.disconnect();
      title.removeEventListener("animationend", onAnimationEnd);
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-hero="idle"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Sem JavaScript a sequência não roda: mostra o título no lugar. */}
      <noscript>
        <style>{`[data-hero] [data-hero-title]{transform:none!important}[data-hero-cards]{display:none!important}`}</style>
      </noscript>

      <HeroBackground />

      {/* Camada decorativa dos cards: a imagem já traz a cor, os cantos e a
          sombra. Alinhados pelo topo para os corpos ficarem na mesma linha (a
          sombra do ZAD vaza abaixo do corpo dele). O `display` vem do CSS. */}
      <div
        data-hero-cards
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 items-center justify-center"
      >
        <div className="flex items-start gap-[5.2vw]">
          {productsHeroCards.map((card) => (
            <div
              key={card.id}
              data-hero-card
              style={{ "--i": card.order } as CSSProperties}
              className="relative aspect-[1552/1124] w-[min(27vw,69dvh)]"
            >
              <Image
                data-hero-card-image
                src={card.src}
                alt=""
                width={card.width}
                height={card.height}
                loading="eager"
                sizes="(min-width: 768px) 27vw, 1px"
                className="absolute top-0 left-0 h-auto w-full max-w-none select-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={titleRef}
        data-hero-title
        className="py-menubar relative flex flex-col items-center gap-5 px-(--page-gutter)"
      >
        <h1 className="text-headline text-foreground max-lg:text-[3.5rem] max-sm:text-[2.5rem]">
          Soluções que já{" "}
          <span className="text-foreground-accent">
            <br />
            transformam
          </span>{" "}
          <br className="lg:hidden" />
          operações reais.
        </h1>
        <p className="text-subheadline text-foreground-muted max-sm:text-base">
          Tecnologia desenvolvida a partir de desafios reais{" "}
          <br className="max-md:hidden" />e que hoje sustenta diferentes tipos
          de operação.
        </p>
      </div>
    </section>
  );
}
