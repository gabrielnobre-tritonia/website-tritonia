import Image from "next/image";
import Link from "next/link";

import { CarouselDots } from "@/components/carousel-dots";
import { GradientButton } from "@/components/link-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productSlides } from "@/lib/constants";

/* Setas de 40px nas margens de 66px, centradas: 13px de cada lado ((66 - 40) / 2),
   ou seja, -53px a partir da borda do card. Mesmo fundo do card, para aparecerem
   nos dois temas; o contorno de foco é o do projeto. */
const arrowClass =
  "size-10 cursor-pointer border-border bg-surface text-foreground-light hover:bg-surface/80 hover:text-foreground-light focus-visible:border-border focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-detail [&_svg:not([class*='size-'])]:size-5";

/* Abaixo de `carousel` (1432px) as setas saem das margens e vão para o pé do carrossel, nas pontas, alinhadas aos pontos. */
const arrowMobileClass =
  "max-carousel:inset-y-auto max-carousel:bottom-0 max-carousel:my-0";

/** Separa "SGVM - Sistema de Gestão…" em sigla, separador e nome por extenso (sem separador, só a sigla). */
const splitTitle = (title: string) => {
  const match = title.match(/^(.*?)(\s[-–]\s)(.*)$/);
  return match
    ? { name: match[1], separator: match[2], rest: match[3] }
    : { name: title, separator: "", rest: "" };
};

export function ProductCarousel() {
  return (
    <section className="bg-background max-carousel:py-12 relative flex items-center justify-center overflow-hidden py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-(image:--about-ellipse) bg-cover bg-center bg-no-repeat select-none"
      />

      {/* Elipse de brilho do software: 672 x 745px (tamanho do SVG), 176px para fora da borda direita, centralizada na vertical. Espelha a da WhyTritoniaSection, que fica à esquerda. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-44 h-[745px] w-[672px] -translate-y-1/2 bg-(image:--software-ellipse) bg-contain bg-no-repeat select-none"
      />

      <Carousel
        aria-label="Produtos"
        opts={{ loop: false }}
        className="text-foreground-light carousel:rounded-card carousel:bg-surface max-carousel:w-full max-carousel:pb-16 carousel:flex carousel:h-[600px] carousel:w-[1300px] carousel:items-center carousel:px-6 md:max-carousel:mx-auto md:max-carousel:max-w-[1000px]"
      >
        {/* Abaixo de `carousel` a lista começa na margem da página e vai até a borda da janela, para o card seguinte aparecer. */}
        <CarouselContent className="max-carousel:ml-(--page-gutter) ml-0">
          {productSlides.map((slide, index) => {
            const title = splitTitle(slide.title);

            return (
              <CarouselItem
                key={slide.id}
                aria-label={`${index + 1} de ${productSlides.length}`}
                className="md:max-carousel:pr-(--page-gutter) pl-0 max-md:basis-[95%] max-md:pr-3"
              >
                <div className="max-carousel:rounded-card max-carousel:bg-surface max-carousel:h-full max-carousel:p-5 md:max-carousel:gap-8 md:max-carousel:p-8 flex w-full justify-between gap-6 max-md:flex-col max-md:gap-4">
                  {/* Abaixo de `md` o bloco de texto some (`contents`) para a imagem subir ao topo e o botão descer ao fim da coluna. */}
                  <div className="md:max-carousel:w-1/2 flex w-[564px] shrink-0 flex-col items-start gap-7 self-start max-md:contents">
                    <span
                      className="text-button inline-flex items-center gap-2 rounded-full px-4 py-3 max-md:self-start"
                      style={{ backgroundColor: slide.badge.color }}
                    >
                      <span
                        aria-hidden="true"
                        className="inline-flex h-[18px] w-[22px] shrink-0 items-center justify-center"
                      >
                        {slide.badge.icon}
                      </span>
                      {slide.badge.label}
                    </span>

                    {/* Abaixo de `carousel` a sigla fica em destaque e o nome por extenso vem embaixo, menor. */}
                    <h2 className="text-h1">
                      <span className="max-carousel:block max-carousel:text-[1.75rem]">
                        {title.name}
                      </span>
                      <span className="max-carousel:hidden">
                        {title.separator}
                      </span>
                      <span className="max-carousel:block max-carousel:text-base max-carousel:font-normal">
                        {title.rest}
                      </span>
                    </h2>

                    <p className="text-body max-carousel:text-base">
                      {slide.description}
                    </p>

                    <GradientButton
                      asChild
                      className="[--button-from:var(--palette-orange-light)] [--button-to:var(--palette-orange-dark)] max-md:order-last max-md:mt-2 max-md:w-full"
                    >
                      <Link href={slide.cta.href}>{slide.cta.label}</Link>
                    </GradientButton>

                    <ul className="flex flex-col gap-3">
                      {slide.items.map((item) => (
                        <li
                          key={item.label}
                          className="text-body max-carousel:text-base flex items-center gap-3"
                        >
                          <Image
                            src={item.icon}
                            alt=""
                            width={30}
                            height={30}
                            aria-hidden="true"
                            className="max-carousel:size-5 shrink-0 select-none"
                          />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-end max-md:order-first max-md:flex-none">
                    <Image
                      src={slide.image.src}
                      alt=""
                      width={slide.image.width}
                      height={slide.image.height}
                      sizes="(max-width: 767px) 80vw, (max-width: 1431px) 45vw, 700px"
                      className="pointer-events-none h-auto w-full object-contain select-none"
                      priority
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious
          className={`${arrowClass} ${arrowMobileClass} max-carousel:left-(--page-gutter) -left-[53px]`}
        />
        <CarouselNext
          className={`${arrowClass} ${arrowMobileClass} max-carousel:right-(--page-gutter) -right-[53px]`}
        />

        <CarouselDots className="max-carousel:bottom-[14px] absolute bottom-6 left-1/2 -translate-x-1/2" />
      </Carousel>
    </section>
  );
}
