"use client";

import { useCallback, useSyncExternalStore } from "react";

import { useCarousel } from "@/components/ui/carousel";

/**
 * Indicador do carrossel: um ponto por slide, o atual em laranja e os demais
 * em pêssego. Cada ponto leva ao slide. Precisa estar dentro de um `Carousel`.
 */
export function CarouselDots({ className = "" }: { className?: string }) {
  const { api } = useCarousel();

  // Slide atual e total vêm do Embla (fonte externa): o mesmo esquema do
  // `Carousel`, com useSyncExternalStore.
  const subscribe = useCallback(
    (notify: () => void) => {
      if (!api) return () => {};
      api.on("reInit", notify);
      api.on("select", notify);
      return () => {
        api.off("reInit", notify);
        api.off("select", notify);
      };
    },
    [api],
  );
  const selected = useSyncExternalStore(
    subscribe,
    () => api?.selectedScrollSnap() ?? 0,
    () => 0,
  );
  const count = useSyncExternalStore(
    subscribe,
    () => api?.scrollSnapList().length ?? 0,
    () => 0,
  );

  if (count < 2) return null;

  return (
    <div
      role="group"
      aria-label="Escolher produto"
      className={`flex items-center gap-3 ${className}`}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Ir para o produto ${index + 1} de ${count}`}
          aria-current={index === selected ? "true" : undefined}
          onClick={() => api?.scrollTo(index)}
          className={`focus-visible:outline-detail size-3 cursor-pointer rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
            index === selected ? "bg-background-accent" : "bg-detail"
          }`}
        />
      ))}
    </div>
  );
}
