import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-xl border border-transparent bg-mist/70 px-4 text-base md:h-14 md:rounded-2xl md:px-5 outline-none transition-[background-color,border-color,box-shadow] duration-300 ease-brand placeholder:text-muted-foreground/70 hover:bg-mist focus-visible:border-navy focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-navy/10 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:bg-white aria-invalid:focus-visible:ring-danger/15",
        className
      )}
      {...props}
    />
  )
}

export { Input }
