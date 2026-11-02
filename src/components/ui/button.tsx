import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { underlineLink } from "@/lib/styles"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow] duration-500 ease-brand outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.125rem]",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-paper shadow-[0_10px_28px_-12px_rgba(10,30,63,0.55)] hover:bg-brand hover:shadow-[0_14px_32px_-12px_rgba(10,30,63,0.6)]",
        outline:
          "border-navy/25 bg-white/50 text-navy backdrop-blur-sm hover:border-navy hover:bg-navy hover:text-paper",
        glass:
          "border-navy/15 bg-white/60 text-navy backdrop-blur-md hover:border-navy/40 hover:bg-white",
        secondary: "bg-secondary text-secondary-foreground hover:bg-mist/60",
        ghost: "hover:bg-mist",
        link: cn("rounded-none text-primary", underlineLink),
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        /** Leaves room on the end side for a circular icon chip. */
        chip: "h-14 ps-8 pe-2 text-base",
        inline: "h-auto p-0 py-1 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
