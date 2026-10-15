import Image from "next/image";

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
  "size-10 border-border bg-surface text-foreground-light hover:bg-surface/80 hover:text-foreground-light focus-visible:border-border focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-detail [&_svg:not([class*='size-'])]:size-5";

/** Carrossel de produtos: um card de 400px de altura mínima por sistema. Todo o conteúdo vem de `productSlides`. */
export function ProductCarousel() {
  return (
    <section className="bg-background relative flex items-center justify-center overflow-hidden py-20">
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
        className="rounded-card bg-surface text-foreground-light flex h-[600px] w-[1300px] items-center px-6"
      >
        <CarouselContent className="ml-0">
          {productSlides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              aria-label={`${index + 1} de ${productSlides.length}`}
              className="pl-0"
            >
              <div className="flex w-full justify-between gap-6">
                <div className="flex w-[564px] shrink-0 flex-col items-start gap-7 self-start">
                  <span
                    className="text-button inline-flex items-center gap-2 rounded-full px-4 py-3"
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

                  <h2 className="text-h1">{slide.title}</h2>

                  <p className="text-body">{slide.description}</p>

                  <GradientButton href={slide.cta.href}>
                    {slide.cta.label}
                  </GradientButton>

                  <ul className="flex flex-col gap-3">
                    {slide.items.map((item) => (
                      <li
                        key={item.label}
                        className="text-body flex items-center gap-3"
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={30}
                          height={30}
                          aria-hidden="true"
                          className="shrink-0 select-none"
                        />
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-end">
                  <Image
                    src={slide.image.src}
                    alt=""
                    width={slide.image.width}
                    height={slide.image.height}
                    sizes="700px"

                    className="pointer-events-none h-auto w-full object-contain select-none"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={`${arrowClass} -left-[53px]`} />
        <CarouselNext className={`${arrowClass} -right-[53px]`} />
      </Carousel>
    </section>
  );
}
