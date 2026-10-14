import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
};

type GradientButtonProps = LinkButtonProps & {
  /** Ícone opcional, exibido à esquerda do texto em 22,5 x 18. */
  icon?: ReactNode;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail";

const base = `inline-flex items-center justify-center text-button text-foreground-light ${focusRing}`;

/** Botão em degradê. É um link de redirecionamento, não um <button>. */
export function GradientButton({
  icon,
  children,
  className = "",
  ...props
}: GradientButtonProps) {
  return (
    <Link
      {...props}
      className={`${base} gap-2 rounded-button px-6 py-3 bg-linear-to-r/srgb from-button-from to-button-to hover:bg-none hover:bg-button-to ${className}`}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className="inline-flex h-[18px] w-[22.5px] shrink-0 items-center justify-center"
        >
          {icon}
        </span>
      ) : null}
      {children}
    </Link>
  );
}

/** Botão de contato: fundo laranja constante, sem hover. */
export function ContactButton({
  children,
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={`${base} rounded-menu-item bg-background-accent px-4 py-2 ${className}`}
    >
      {children}
    </Link>
  );
}
