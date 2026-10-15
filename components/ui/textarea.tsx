import * as React from "react"
import { cn } from "cn"

/* Mesmo estilo do `Input`, para fundo escuro. */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-body flex min-h-32 w-full resize-y rounded-lg border border-border bg-white/10 px-4 py-3 text-foreground-light transition-colors outline-none placeholder:text-foreground-light/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-detail disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-[#FF9B9B]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
