import Image from "next/image";

/**
 * Fundo dos heros da home e de `/produtos`: a rede e as duas elipses de brilho.
 * Estático e sem props. A seção que o recebe precisa ser `relative` e
 * `overflow-hidden`: o fundo se estende por toda ela (`absolute inset-0`) e as
 * elipses que passam da borda são cortadas ali.
 */
export function HeroBackground() {
  return (
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
  );
}
