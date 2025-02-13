"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Les garssssss",
    description: "Les gars, désolée si je sens divinement bon ces jours-ci, mais c’est grâce à Reinoush, la meilleure marque de parfum du moment ☺️☺️☺️.",
    author: "Annie Biagui",
    avatar: "https://github.com/shadcn.png",
    avatarFallback: "AN"
  },
  {
    quote: "Game Changer",
    description: "Merci beaucoup pour les parfums ! 😍 Chaque flacon est une véritable explosion de joie ! Je suis super contente d’avoir pris les quatre, ils sont tous incroyables. Continue à nous faire découvrir des trésors olfactifs comme ceux-ci !.",
    author: "Myriame Diame",
    avatar: "https://example.com/avatar1.png",
    avatarFallback: "MD"
  },
  {
    quote: "Incredible Solution",
    description: "Mais parfum bi tamit vraiment🥹🥹 même après un bain magui Kay sentir ba lègui sérieusement, je peux pas m'empêcher de renifler ma main à chaque instant🤣.",
    author: "Cheikhouna Balle",
    avatar: "https://example.com/avatar2.png",
    avatarFallback: "CB"
  },

  {
    quote: "Incredible Solution",
    description: "Nathi nieup taxaw ! Li nekh neu lolouuuu 😭❤️ Favor gui moy sama favori😍 😂 Mighty gui dangay bondit 😂❤️.",
    author: "Mor Badiane",
    avatar: "https://example.com/avatar2.png",
    avatarFallback: "MB"
  },

  {
    quote: "Incredible Solution",
    description: "Hello puce j’ai récupéré le parfum hier j’ai trop aimé ton choix 🥰🥰🥰🥰 en plus le cadeau dedans trop cute 🫠🥰.",
    author: "Marie Thioro Thiaw",
    avatar: "https://example.com/avatar2.png",
    avatarFallback: "MT"
  },

  {
    quote: "Incredible Solution",
    description: "Waaooooouuuuhhhhhh. Quel seennnteuuuuuur 🤩. Tes parfums sont des pépites.Le Mighty mon préféré.",
    author: "Franck OKE",
    avatar: "https://example.com/avatar2.png",
    avatarFallback: "FO"
  },

  {
    quote: "Incredible Solution",
    description: "Merci pour le parfum ça sent hyper bon en plus du petit cadeau dedans ♥️❤️🥰t la meilleure j’aime trop.",
    author: "Joséphine Diame",
    avatar: "https://example.com/avatar2.png",
    avatarFallback: "JD"
  },
];

function Testimonials() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2
            className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Vos Avis, Notre Plus Belle Fragrance
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div
                    className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.author}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.description}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        {/* <span>{testimonial.author}</span> */}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
