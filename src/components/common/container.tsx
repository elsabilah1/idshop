import { ReactNode } from "react";
import Text from "./text";
import { Button, buttonVariants } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContainerProps {
  title: string;
  children: ReactNode;
  link?: {
    title: string;
    url: string;
  };
  className?: string;
}

export default function Container({
  title,
  children,
  link,
  className,
}: ContainerProps) {
  return (
    <section className={cn("bg-neutral-4 p-4 md:rounded-[10px]", className)}>
      <div className="mb-4 flex items-center justify-between">
        <Text
          variant="title/large"
          as="h2"
          className="font-medium tracking-[0.4%]"
        >
          {title}
        </Text>
        {link && (
          <Link
            href={link.url}
            className={buttonVariants({
              variant: "ghost/primary",
              size: "small",
            })}
          >
            {link.title}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
