import { flashSaleList } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./common/carousel";
import Container from "./common/container";
import ProductCard from "./product-card";

export default function FlashSale() {
  return (
    <Container
      title="Diskon Hari Ini"
      link={{ title: "Lihat Semua", url: "/" }}
    >
      <Carousel className="mx-5">
        <CarouselContent>
          {flashSaleList.map((item, i) => (
            <CarouselItem key={i} className="basis-auto">
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
