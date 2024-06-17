import Image from "next/image";
import { Button } from "./common/button";
import Text from "./common/text";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface OfferCardProps {
  variant: "primary" | "secondary";
  data: {
    img: string;
    title: string;
    desc: ReactNode;
    buttonTitle: string;
  };
}

export default function OfferCard({ variant, data }: OfferCardProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={cn(
        "grid gap-10 px-6 py-4 md:grid-cols-3 md:rounded-[10px]",
        isPrimary ? "bg-primary-0" : "bg-secondary-0"
      )}
    >
      <div className="relative min-h-[200px]">
        <Image
          fill
          src={`/images/${data.img}.png`}
          alt={data.img}
          className="object-cover"
        />
      </div>
      <div className="md:col-span-2">
        <Text
          variant="display/medium"
          className={cn("mb-6", isPrimary && "text-secondary-0")}
          as="h2"
        >
          {data.title}
        </Text>
        <Text
          variant="title/large"
          className={cn(
            "mb-8",
            isPrimary ? "text-neutral-4" : "text-neutral-1"
          )}
          as="p"
        >
          {data.desc}
        </Text>
        <Button
          variant={isPrimary ? "filled/secondary" : "filled/primary"}
          size="large"
          className="w-full"
        >
          {data.buttonTitle}
        </Button>
      </div>
    </div>
  );
}
