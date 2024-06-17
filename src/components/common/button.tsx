import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium rounded-[5px] h-fit transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-3 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        "filled/primary":
          "bg-primary-0 *:fill-neutral-4 text-neutral-4 hover:bg-primary-1",
        "filled/secondary":
          "bg-secondary-0 *:fill-neutral-4 text-neutral-4 hover:bg-secondary-1",

        "outline/primary":
          "shadow-[inset_0_0_0_2px_var(--color-p00)] *:fill-primary-0 text-primary-0 hover:bg-primary-3",

        "outline/secondary":
          "shadow-[inset_0_0_0_2px_var(--color-s00)] *:fill-secondary-0 text-secondary-0 hover:bg-secondary-3",

        "ghost/primary": "text-primary-0 *:fill-primary-0 hover:bg-primary-3",
        "ghost/secondary":
          "text-secondary-0 *:fill-secondary-0 hover:bg-secondary-3",
      },
      size: {
        large: "px-5 py-4 tracking-[0.2px]",
        medium: "px-4 py-3 tracking-[0.4px] text-sm",
        small: "px-3 py-2 tracking-[0.6px] text-xs [&_svg]:size-[18px]",
      },
    },
    defaultVariants: {
      variant: "filled/primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
