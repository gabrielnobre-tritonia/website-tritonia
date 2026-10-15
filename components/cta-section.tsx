import Image from "next/image";
import Link from "next/link";

import { GradientButton } from "@/components/link-button";

export function CtaSection() {
  return (
    <section className="bg-background py-menubar relative z-10 flex items-center justify-center overflow-hidden">
      {/* Elipse de brilho: largura toda da seção, topo 155px acima dela. A caixa tem a proporção do SVG claro (1440 x 776); o escuro (1440 x 697) fica no topo dela. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[80px] left-0 aspect-[1440/1000] w-full bg-(image:--cta-ellipse) bg-[length:100%_auto] bg-top-left bg-no-repeat select-none"
      />

      <div className="relative flex w-full justify-center px-(--page-gutter)">
        <div className="max-w-content flex w-full items-start justify-between lg:px-20">
          <div className="flex shrink-0 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-6">
              <Image
                src="/logos/logo-menu-blue.svg"
                alt="Logo da Tritonia"
                width={130}
                height={31}
                className="h-auto dark:hidden"
              />
              <Image
                src="/logos/logo-menu-branco.svg"
                alt="Logo da Tritonia"
                width={130}
                height={31}
                className="hidden h-auto dark:block"
              />

              <h2 className="text-h1 text-foreground">
                Sistemas para cada <br className="max-md:hidden" />
                tipo de operação.
              </h2>

              <p className="text-subtitle text-foreground-muted">
                Conheça os sistemas que já organizam{" "}
                <br className="max-md:hidden" />
                operações públicas e privadas.
              </p>
            </div>

            <GradientButton asChild>
              <Link href="/produtos">Conheça nossos produtos</Link>
            </GradientButton>
          </div>

          {/* Caixa de 710,57 x 558,7px (proporção 1,27); o arquivo tem 1,40, então o excesso é cortado à esquerda, onde a imagem é transparente. */}
          <div className="relative h-[500px] w-[650px] shrink-0">
            <Image
              src="/images-cta.png"
              alt=""
              fill
              sizes="711px"
              className="object-cover object-right select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
