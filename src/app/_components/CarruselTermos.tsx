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

export function CarruselTermos() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return(
    <Carousel
      plugins={[plugin.current]}
      className="mx-10 max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
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