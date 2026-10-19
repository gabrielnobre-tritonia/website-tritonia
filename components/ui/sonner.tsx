"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

/* Toast escuro com texto claro nos dois temas, como o card e o painel do
   formulário: `--popover` é claro no tema claro e `--popover-foreground` é sempre
   claro, o que deixaria o texto ilegível. */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--surface)",
          "--normal-text": "var(--foreground-light)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius-card)",
          /* Sucesso e erro com fundo sólido e texto claro (contraste ~6:1). */
          "--success-bg": "var(--palette-green)",
          "--success-text": "var(--foreground-light)",
          "--success-border": "var(--palette-green)",
          "--error-bg": "var(--palette-red)",
          "--error-text": "var(--foreground-light)",
          "--error-border": "var(--palette-red)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
