import { ReactNode } from "react";
import Text from "./text";

interface ContainerProps {
  title: string;
  children: ReactNode;
}

export default function Container({ title, children }: ContainerProps) {
  return (
    <section className="bg-neutral-4 p-4 md:rounded-[10px]">
      <Text
        variant="title/large"
        as="h2"
        className="mb-4 font-medium tracking-[0.4%]"
      >
        {title}
      </Text>
      {children}
    </section>
  );
}
