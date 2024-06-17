import Image from "next/image";
import Container from "./common/container";
import Text from "./common/text";
import Link from "next/link";
import { categoryList } from "@/data";

export default function Category() {
  return (
    <Container title="Kategori">
      <div className="md:px-[10px]">
        <div className="grid grid-cols-3 gap-[1px] bg-neutral-2 md:grid-cols-6">
          {categoryList.map(item => (
            <Link
              key={item.title}
              href={`/`}
              className="flex cursor-pointer flex-col items-center bg-neutral-4 px-1 py-2 text-center transition-all hover:shadow-[inset_0_0_0_2px_var(--color-p00)] md:px-2 md:py-4"
            >
              <div className="relative size-[70px] md:size-[100px]">
                <Image
                  src={`/illustrations/${item.icon}`}
                  alt={item.title}
                  className="object-contain p-[10px]"
                  fill
                />
              </div>
              <Text variant="title/medium">{item.title}</Text>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
