import Image from "next/image";
import Container from "./common/container";
import Text from "./common/text";

const categoryList = [
  { title: "Tas", icon: "bag.svg" },
  { title: "Pakaian Wanita", icon: "dress.svg" },
  { title: "Pakaian Pria", icon: "shirt.svg" },
  { title: "Sepatu Wanita", icon: "woman-shoe.svg" },
  { title: "Sepatu Pria", icon: "man-shoe.svg" },
  { title: "Hobi", icon: "hobby.svg" },
  { title: "Makanan dan Minuman", icon: "food-and-drink.svg" },
  { title: "Perlengkapan Rumah", icon: "home-and-living.svg" },
  { title: "Komputer dan Aksesoris", icon: "laptop.svg" },
  { title: "Ibu dan Anak", icon: "baby.svg" },
  { title: "Perawatan dan Kecantikan", icon: "makeup.svg" },
  { title: "Kesehatan", icon: "medicine.svg" },
];

export default function Category() {
  return (
    <Container title="Kategori">
      <div className="md:px-[10px]">
        <div className="grid grid-cols-3 gap-[1px] bg-neutral-2 md:grid-cols-6">
          {categoryList.map(item => (
            <div
              key={item.title}
              className="flex cursor-pointer flex-col items-center bg-neutral-4 px-1 py-2 text-center transition-all hover:shadow-[inset_0_0_0_2px_var(--color-p00)] md:px-2 md:py-4"
            >
              <div className="relative size-[70px] md:size-[100px]">
                <Image
                  src={`/illustrations/${item.icon}`}
                  alt={item.title}
                  className="p-[10px]"
                  fill
                />
              </div>

              <Text
                variant="title/medium"
                className="font-medium tracking-[0.16px]"
              >
                {item.title}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
