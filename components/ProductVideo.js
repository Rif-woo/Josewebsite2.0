"use client";
import React, { useState } from "react";
import { GradientCard } from "./GradientCard";
import Image from "next/image";


export default function ProductVideo() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 gap-6 mt-16 mb-16">
      {/* Title */}
      <h2 className="text-black font-medium text-3xl md:text-5xl text-center pb-6">
        Sélection du Moment
      </h2>

      {/* Cards Container */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Card 1 - Tendances */}
        <GradientCard
          title="Tendances"
          videoSrc="/cocojojo.C.mp4"
          containerWidth="400px"
          modalContent={
            <div className="flex gap-4 items-center">
              <Image
                src="/coco.webp"
                alt="Coco Jojo"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="w-full">
                <h3 className="text-2xl font-medium text-black">Coco Jojo</h3>
                <p className="text-gray-600 my-4 text-xl">
                  Parfum doux et floral, idéal pour toutes les occasions.
                </p>
                <button
              className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-sm font-bold rounded hover:bg-gray-200"
              onClick={() => addToCart(product)}
            >
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
          }
        />

        {/* Card 2 - Offres Spéciales */}
        <GradientCard
          title="Offres Spéciales"
          videoSrc="/Favor.mp4"
          containerWidth="400px"
          modalContent={
            <div className="text-center">
              <h3 className="text-2xl font-medium text-black">Offre Spéciale</h3>
              <p className="text-gray-600 my-4">
                Profitez de nos réductions exceptionnelles sur vos parfums
                préférés.
              </p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() =>
                  window.open("https://api.whatsapp.com/send?phone=774197981")
                }
              >
                Commander sur WhatsApp
              </button>
            </div>
          }
        />

        {/* Card 3 - Envoutant */}
        <GradientCard
          title="Envoutant"
          videoSrc="/Mighty.mp4"
          containerWidth="400px"
          modalContent={
            <div className="flex gap-4 items-center">
              <Image
                src="/Mighty.webp"
                alt="Mighty"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-medium text-black">Mighty</h3>
                <p className="text-gray-600 my-4 text-xl">
                  Une fragrance puissante pour les moments inoubliables.
                </p>
                <button
              className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-sm font-bold rounded hover:bg-gray-200"
              onClick={() => addToCart(product)}
            >
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
          }
        />
      </div>
    </div>
  );
}


