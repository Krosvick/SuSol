// @ts-nocheck
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
     // @ts-ignore
    const plugin = useRef<AutoplayPlugin>();

    if (!plugin.current) {
        // @ts-ignore
        plugin.current = Autoplay({ delay: 4000, stopOnInteraction: true });
    }

    return(
    <Carousel
      // @ts-ignore
      plugins={plugin.current ? [plugin.current] : []}
      className="mx-10 max-w-xl"
      // @ts-ignore
      onMouseEnter={() => plugin.current?.stop()}
      // @ts-ignore
      onMouseLeave={() => plugin.current?.reset()}
    >
      <CarouselContent>
        {[...Array(7)].map((_, i) => (
          <CarouselItem key={i} className="flex justify-center">
            <Image
              src={`/images/termos/${i + 1}.jpg`}
              alt={`termo infografia ${i + 1}`}
              width={500}
              height={500}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    )
}