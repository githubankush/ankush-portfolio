import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#00ff99]  text-primary-foreground hover:bg-primary/90",
        primary: "bg-primary text-black",
        outline: "border border-[#00ff99] bg-transparent text-[#00ff99] hover:bg-[#00ff99] hover:text-primary"
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[44px] px-6",
        lg: "h-[56px] px-6 text-sm uppercase tracking-[2px]",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
