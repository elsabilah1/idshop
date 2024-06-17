import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      "body/large": "text-base",
      "body/medium": "text-sm",
      "body/small": "text-xs tracking-[0.2px]",

      "label/large": "text-base font-medium tracking-[0.2px]",
      "label/medium": "text-sm font-medium tracking-[0.4px]",
      "label/small": "text-xs",

      "title/large":
        "text-[1.375rem] leading-[1.75rem] font-medium tracking-[0.4%]",
      "title/medium": "text-base",
      "title/small": "text-sm",

      "display/large": "text-[4rem] leading-[4.5rem]",
      "display/medium": "text-5xl",
    },
  },
  defaultVariants: {
    variant: "body/medium",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Text({
  children,
  className,
  variant,
  as: Tag = "span",
}: TextProps) {
  return (
    <Tag className={cn(textVariants({ variant, className }))}>{children}</Tag>
  );
}
