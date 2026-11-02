import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[4.75rem] w-full resize-y rounded-xl border border-transparent bg-mist/70 px-4 py-2.5 text-base leading-relaxed md:min-h-32 md:rounded-2xl md:px-5 md:py-4 outline-none transition-[background-color,border-color,box-shadow] duration-300 ease-brand placeholder:text-muted-foreground/70 hover:bg-mist focus-visible:border-navy focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-navy/10 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:bg-white aria-invalid:focus-visible:ring-danger/15",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
