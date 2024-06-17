import Image from "next/image";
import Text from "./common/text";
import { formatRupiah } from "@/lib/utils";

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
    <div className="relative rounded p-4">
      <div className="absolute right-0 top-0 rounded-l-sm bg-primary-0 px-2 text-neutral-4">
        {item.discount > 0 && (
          <Text variant="label/medium" className="font-medium tracking-[0.4px]">
            -{item.discount}%
          </Text>
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
        <Text as="p" variant="body/small" className="tracking-[0.2px]">
          {item.name}
        </Text>
        <Text
          as="p"
          variant="title/small"
          className="font-medium tracking-[0.12px]"
        >
          {formatRupiah(item.price)}
        </Text>
      </div>
    </div>
  );
}
