"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./common/carousel";
import Fade from "embla-carousel-fade";

export default function Banner() {
  return (
    <div className="w-full px-4 md:px-0">
      <Carousel opts={{ loop: true }} plugins={[Fade()]} withIndicator>
        <CarouselContent>
          {["banner-1", "banner-2", "banner-3"].map(item => (
            <CarouselItem key={item}>
              <div className="relative h-[200px] p-1 md:h-[400px]">
                <Image
                  src={`/images/${item}.png`}
                  alt={item}
                  className="rounded-[10px] object-cover"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
