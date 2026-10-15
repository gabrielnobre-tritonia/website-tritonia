"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";

type MenuItemProps = Omit<ComponentProps<typeof Link>, "children" | "href"> & {
  href: string;
  children: ReactNode;
};

/** Item do menu. Fica laranja no hover e quando aponta para a página atual. */
export function MenuItem({
  href,
  children,
  className = "",
  ...props
}: MenuItemProps) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Link
      {...props}
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={`text-button text-foreground-light hover:bg-background-accent focus-visible:outline-detail rounded-[5px] px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isCurrent ? "bg-background-accent" : "bg-transparent"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
