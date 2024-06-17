import Image from "next/image";
import Text from "./common/text";
import { compactIdFormatter, formatRupiah } from "@/lib/utils";
import { Product } from "@/types";

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="relative max-w-[152px] rounded bg-neutral-4 p-4">
      <div className="relative mb-4 h-[120px] w-[120px]">
        <Image src={`/images/${item.image}`} alt="product" sizes="120px" fill />
      </div>
      <div className="space-y-1">
        <Text as="p" variant="body/small" className="truncate">
          {item.name}
        </Text>
        <Text as="p" variant="title/small">
          {formatRupiah(item.price)}
        </Text>
        {item.sold && (
          <Text variant="label/small" className="text-neutral-1">
            {compactIdFormatter(item.sold)} Terjual
          </Text>
        )}
      </div>
      <div className="absolute right-0 top-[6px] rounded-l-sm bg-primary-0 px-2 text-neutral-4">
        {item.discount > 0 && (
          <Text variant="label/medium">-{item.discount}%</Text>
        )}
      </div>
    </div>
  );
}
