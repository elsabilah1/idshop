import Image from "next/image";
import Text from "./common/text";
import { compactIdFormatter, formatRupiah } from "@/lib/utils";

interface ProductCardProps {
  item: {
    name: string;
    price: number;
    discount: number;
    image: string;
    sold?: number;
  };
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="relative max-w-[152px] rounded bg-neutral-4 p-4">
      <div className="absolute right-0 top-[6px] rounded-l-sm bg-primary-0 px-2 text-neutral-4">
        {item.discount > 0 && (
          <Text variant="label/medium">-{item.discount}%</Text>
        )}
      </div>
      <Image
        src={`/images/${item.image}`}
        alt="product"
        width={120}
        height={120}
        className="mb-4"
      />
      <div className="space-y-1">
        <Text as="p" variant="body/small" className="truncate">
          {item.name}
        </Text>
        <Text
          as="p"
          variant="title/small"
          className="font-medium tracking-[0.12px]"
        >
          {formatRupiah(item.price)}
        </Text>
        {item.sold && (
          <Text
            variant="label/small"
            className="font-medium tracking-[0.6px] text-neutral-1"
          >
            {compactIdFormatter(item.sold)} Terjual
          </Text>
        )}
      </div>
    </div>
  );
}
