import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-normal text-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#f3a900] text-primary shadow hover:bg-[#d89500]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[#f3a900] bg-transparent text-[#f3a900] shadow-sm hover:bg-[#f3a900] hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-[#f3a900] hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-[#f3a900] text-primary shadow-soft hover:bg-[#d89500] hover:shadow-elegant hover:-translate-y-0.5",
        gold: "bg-[#f3a900] text-primary shadow-soft hover:bg-[#d89500] hover:shadow-gold hover:-translate-y-0.5 font-semibold",
        outlineLight: "border-2 border-[#f3a900] bg-[#f3a900] text-primary hover:bg-[#d89500] hover:border-[#d89500]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "min-h-12 rounded-lg px-6 py-3 text-base sm:px-8",
        xl: "min-h-14 rounded-lg px-7 py-3 text-base sm:px-10",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
