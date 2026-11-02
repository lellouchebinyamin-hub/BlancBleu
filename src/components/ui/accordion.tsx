import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "cn"
import { PlusIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-[1.5rem] border bg-white transition-colors duration-500 ease-brand data-open:border-navy/30",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-center justify-between gap-6 rounded-[1.5rem] px-6 py-5 text-start outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 md:px-8 md:py-6",
          className
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full border border-navy/20 text-navy transition-[background-color,color,border-color] duration-500 ease-brand group-hover/accordion-trigger:border-navy group-aria-expanded/accordion-trigger:border-navy group-aria-expanded/accordion-trigger:bg-navy group-aria-expanded/accordion-trigger:text-paper"
        >
          <PlusIcon
            strokeWidth={1.5}
            className="size-5 transition-transform duration-500 ease-brand group-aria-expanded/accordion-trigger:rotate-45"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-500 ease-brand data-ending-style:h-0 data-starting-style:h-0"
      {...props}
    >
      <div className={cn("px-6 pb-6 md:px-8 md:pb-8", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
