import * as React from "react"
import { cn } from "cn"

/* Campo para fundo escuro (o painel do formulário é escuro nos dois temas).
   O erro usa um valor próprio em vez de `--destructive`, que o projeto não define. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-body h-11 w-full min-w-0 rounded-lg border border-border bg-white/10 px-4 text-foreground-light transition-colors outline-none placeholder:text-foreground-light/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-detail disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-[#FF9B9B]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
