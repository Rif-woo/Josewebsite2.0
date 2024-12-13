"use client"; // Nécessaire pour les composants interactifs dans Next.js
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ProductCarrousel = ({ products, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla w-full h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex">
          {/* Boucle sur la liste des produits */}
          {products.map((product, index) => (
            <div className="embla__slide flex flex-col items-center" key={index}>
              {/* Image du produit */}
              <div className="w-[280px] h-[380px] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  draggable="false"
                />
              </div>
              {/* Détails du produit */}
              <div className="flex w-full justify-between items-center mt-4">
                <div className="flex flex-col gap-1">
                <h3 className="text-[#000000] text-lg font-normal">{product.name}</h3>
                <p className="text-[#181818] text-sm font-semibold">{product.price}</p>
                </div>
               
                <div>
                  <button className="flex items-center justify-center px-2 py-2 bg-[#181818] text-black text-sm font-bold rounded hover:bg-gray-200">
                    {/* Icône du panier */}
                    <div className="relative w-5 h-5">
                      <Image
                        src="/shopping-cart.svg"
                        alt="Shopping Cart Icon"
                        fill
                        objectFit="contain"
                        draggable="false"
                      />
                    </div>
                  </button>
              </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarrousel;
