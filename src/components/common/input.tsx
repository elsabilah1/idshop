import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  floatingLabel?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ floatingLabel, className, type, icon, name, ...props }, ref) => {
    return (
      <div className="group relative w-full">
        {floatingLabel && (
          <label
            htmlFor={name}
            className={cn(
              "absolute top-2 flex items-center bg-neutral-4 px-1 font-medium text-neutral-2 transition-all group-focus-within:-top-3 group-focus-within:left-6 group-focus-within:text-neutral-1",
              icon && "left-11"
            )}
          >
            {floatingLabel}
          </label>
        )}
        {icon && (
          <label
            htmlFor={name}
            className="absolute inset-y-0 flex items-center px-3"
          >
            {icon}
          </label>
        )}
        <input
          id={name}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-lg border border-neutral-2 bg-neutral-4 px-3 py-3 font-medium tracking-[0.2px] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
            icon && "pl-11"
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
