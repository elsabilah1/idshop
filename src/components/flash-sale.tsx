import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./common/carousel";
import Container from "./common/container";
import ProductCard from "./product-card";

const flashSaleList = [
  {
    name: "Nama Product",
    price: 10900,
    discount: 50,
    image: "product-1.png",
  },
  {
    name: "Nama Product",
    price: 120899,
    discount: 20,
    image: "product-2.png",
  },
  {
    name: "Nama Product",
    price: 67402,
    discount: 70,
    image: "product-3.png",
  },
  {
    name: "Nama Product",
    price: 49909,
    discount: 10,
    image: "product-4.png",
  },
  {
    name: "Nama Product",
    price: 80128,
    discount: 60,
    image: "product-5.png",
  },
  {
    name: "Nama Product",
    price: 59093,
    discount: 70,
    image: "product-6.png",
  },
  {
    name: "Nama Product",
    price: 35923,
    discount: 50,
    image: "product-1.png",
  },
  {
    name: "Nama Product",
    price: 23097,
    discount: 50,
    image: "product-2.png",
  },
  {
    name: "Nama Product",
    price: 75340,
    discount: 50,
    image: "product-3.png",
  },
  {
    name: "Nama Product",
    price: 59999,
    discount: 50,
    image: "product-4.png",
  },
];

export default function FlashSale() {
  return (
    <Container
      title="Diskon Hari Ini"
      link={{ title: "Lihat Semua", url: "/" }}
    >
      <Carousel className="mx-5">
        <CarouselContent>
          {flashSaleList.map(item => (
            <CarouselItem key={item.name} className="basis-auto">
              <ProductCard
                item={{ ...item, image: "flash-sale/" + item.image }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="disabled:hidden md:-translate-x-5"
          size="small"
        />
        <CarouselNext
          className="disabled:hidden md:translate-x-5"
          size="small"
        />
      </Carousel>
    </Container>
  );
}
