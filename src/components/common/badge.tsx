import Image from "next/image";

interface BadgeProps {
  item: string;
}

export default function Badge({ item }: BadgeProps) {
  return (
    <div
      key={item}
      className="relative h-[33px] w-[66px] rounded-[5px] bg-neutral-4"
    >
      <Image
        src={`/images/${item}.png`}
        alt={item}
        className="object-contain px-2 py-1"
        sizes="50px"
        fill
      />
    </div>
  );
}
