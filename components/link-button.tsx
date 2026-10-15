import Link from "next/link";
import { Slot } from "radix-ui";
import type { ComponentProps, ReactNode } from "react";

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
};

type GradientButtonProps = ComponentProps<"button"> & {
  asChild?: boolean;
  icon?: ReactNode;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail";

const base = `inline-flex items-center justify-center text-button text-foreground-light ${focusRing}`;

export function GradientButton({
  asChild = false,
  icon,
  children,
  className = "",
  type,
  ...props
}: GradientButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      {...(asChild ? {} : { type: type ?? "button" })}
      {...props}
      className={`${base} from-button-from to-button-to hover:bg-button-to gap-2 rounded-full bg-linear-to-r/srgb px-6 py-3 hover:bg-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className="inline-flex h-[18px] w-[22.5px] shrink-0 items-center justify-center"
        >
          {icon}
        </span>
      ) : null}
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
}

//  Botão de contato
export function ContactButton({
  children,
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={`${base} bg-background-accent rounded-[5px] px-4 py-2 ${className}`}
    >
      {children}
    </Link>
  );
}
