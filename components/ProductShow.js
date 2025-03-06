"use client";
import { useEffect, useState} from "react";
import "../app/embla.css";
import Image from "next/image";
import ProductCarrousel from "./ProductCarrousel";

const OPTIONS = {}; // Configuration de Embla (ex: { loop: true })
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Liste des produits avec leurs données
const PRODUCTS = [
  {
    id: 1,
    name: 'Grâce',
    typeParfum: 'Parfum Femme',
    description: 'Un parfum à la fois raffiné, élégant.',
    image: '/Grace.webp',
    innitialPrice: "5000 FCFA",
    showInnitialPrice: false,
  },
  {
    id: 2,
    name: 'Coco Jojo',
    typeParfum: 'Parfum Femme',
    description: 'Un parfum féminin, unique avec une note sucrée miel.',
    image: '/coco.webp',
    innitialPrice: "5000 FCFA",
    showInnitialPrice: false,
  },
  {
    id: 3,
    name: 'Favor',
    typeParfum: 'Parfum Homme',
    description:
      "une caractéristique sucrée ainsi qu'un aspect très masculin avec ses notes fumées et boisées, sans être agressif.",
    image: '/Favor.webp',
    innitialPrice: "5000 FCFA",
    showInnitialPrice: false,
  },
  {
    id: 4,
    name: 'Mighty',
    typeParfum: 'Parfum Homme',
    description:
      "un parfum qui peut surprendre de par ses notes de poire, menthe alliée à la cannelle, la vanille et l'ambre",
    image: '/Mighty.webp',
    innitialPrice: "5000 FCFA",
    showInnitialPrice: false,
  },
  {
    id: 5,
    name: 'Divine',
    typeParfum: 'Parfum Femme',
    description:
      'un parfum qui incarne à la perfection l’élégance intemporelle et la grâce céleste.',
    image: '/Divine.webp',
    innitialPrice: "5000 FCFA",
    showInnitialPrice: false,
  },
]

const phrases = [

  "It is a long established fact",

  "that a reader will be distracted",

  "by the readable content of a page",

  "when looking at its layout."

]

PRODUCTS.forEach(product => {
  let price = "20 €";
  if (timeZone.includes("Africa")) {
    if (product.typeParfum === "Parfum Femme") {
      price = "4000 FCFA";
    } else {
      price = "5000 FCFA";
    }
  }
  product.price = price;
});

export default function ProductShow() {
//768 - 1280
  return (
    <div className="w-full h-[650px] min-[768px]:max-[1280px]:h-[750px] flex flex-col md:flex-row min-[768px]:max-[1280px]:flex-col items-center min-[768px]:max-[1280px]:items-center min-[768px]:max-[1280px]:justify-center md:items-start justify-center pt-11 ">
      {/* Section gauche (titre et description) */}
      <div className="w-[400px] h-[200px] min-[768px]:max-[1280px]:h-[200px] xl:max-[1515px]:w-[250px] xl:max-[1515px]:h-[350px] md:h-[450px] bg-transparent min-[768px]:max-[1280px]:border-none md:border-r-2 border-gray-300 flex flex-col justify-center items-center min-[768px]:max-[1280px]:justify-center min-[768px]:max-[1280px]:items-center md:items-start md:justify-start pt-6 px-6" id="nos-parfums">
        <h2 className="text-black text-3xl min-[768px]:max-[1280px]:text-5xl font-medium md:text-2xl xl:max-[1515px]:text-xl">
          PRODUITS
        </h2>
        <p className="text-black text-sm xl:max-[1515px]:text-xs min-[768px]:max-[1280px]:text-sm mt-2">
          Nos produits de qualité
        </p>
      </div>

      {/* Carrousel des produits */}
      <ProductCarrousel products={PRODUCTS} options={OPTIONS} />
      <div className="relative md:hidden size-14 flex flex-col items-center justify-center bg-transparent">
      <Image
        src="/anim2.gif"
        alt="Header background"
        fill
        unoptimized
        className="opacity-50 object-cover z-0"
        draggable="false"
      />
        <p className="w-[250px] text-center text-black mt-16">Swipe pour voir plus</p>
      </div>
    </div>
  );
}
