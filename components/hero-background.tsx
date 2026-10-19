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
      className="pointer-events-none absolute inset-0 overflow-hidden bg-(image:--hero-network) bg-cover bg-center max-md:bg-none"
    >
      {/* Abaixo de `md` a rede é menor: blocos de 200% da largura, empilhados e centralizados. Cada bloco par é espelhado na vertical, para as linhas continuarem na emenda (a rede não repete sem costura). */}
      <div className="absolute top-0 left-1/2 flex w-[200%] -translate-x-1/2 flex-col md:hidden">
        {[0, 1, 2, 3].map((tile) => (
          <div
            key={tile}
            className={`aspect-[1440/804] w-full bg-(image:--hero-network) bg-cover ${tile % 2 ? "-scale-y-100" : ""}`}
          />
        ))}
      </div>

      <Image
        src="/backgrounds/ellipse-orange.svg"
        alt=""
        width={1010}
        height={856}
        className="absolute top-[-240] left-[-180] h-auto w-[70.139%] max-w-none min-w-96 translate-x-[-6.04%] translate-y-[-25.7%] select-none max-md:top-0 max-md:left-0 max-md:w-[120%] max-md:min-w-0 max-md:-translate-x-[35%] max-md:-translate-y-[35%]"
      />
      <Image
        src="/backgrounds/ellipse-blue.svg"
        alt=""
        width={1238}
        height={1092}
        className="absolute right-40 bottom-0 h-auto w-[85.972%] max-w-none min-w-120 translate-x-[41.92%] translate-y-[76.01%] select-none max-md:right-0 max-md:w-[120%] max-md:min-w-0 max-md:translate-x-[30%] max-md:translate-y-[45%]"
      />
    </div>
  );
}
