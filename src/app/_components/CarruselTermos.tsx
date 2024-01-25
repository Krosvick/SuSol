/* eslint-disable */
"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";

type AutoplayPlugin = ReturnType<typeof Autoplay>;
export function CarruselTermos() {
    const plugin = useRef<AutoplayPlugin | null>(null);

    if (!plugin.current) {
        plugin.current = Autoplay({ delay: 4000, stopOnInteraction: true });
    }

    return(
    <Carousel
      plugins={plugin.current ? [plugin.current] : []}
      className="mx-10 max-w-xl"
      onMouseEnter={() => plugin.current?.stop()}
      onMouseLeave={() => plugin.current?.reset()}
    >
      <CarouselContent>
        {[...Array(6)].map((_, i) => (
          <CarouselItem key={i} className="flex justify-center">
            <Image
              src={`/images/termos/${i + 1}.jpg`}
              alt={`termo infografia ${i + 1}`}
              width={500}
              height={500}
              priority={true}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    )
}