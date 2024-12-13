import Image from "next/image";
import ProductCarrousel from "./ProductCarrousel";
import "../app/embla.css";

const OPTIONS = {}; // Configuration de Embla (ex: { loop: true })

// Liste des produits avec leurs données
const PRODUCTS = [
  {
    name: "Grace",
    price: "5000 FCFA",
    image: "/Grace.webp",
  },
  {
    name: "Coco Jojo",
    price: "5000 FCFA",
    image: "/coco.webp",
  },
  {
    name: "Favor",
    price: "5000 FCFA",
    image: "/Favor.webp",
  },
  {
    name: "Mighty",
    price: "5000 FCFA",
    image: "/Mighty.webp",
  },
  {
    name: "Divine",
    price: "5000 FCFA",
    image: "/Divine.webp",
  },
];

export default function ProductShow() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      {/* Section gauche (titre et description) */}
      <div className="w-[400px] h-full bg-transparent border-r-2 border-black flex flex-col justify-start pt-6 px-6">
        <h2 className="text-black text-2xl font-semibold">PRODUITS</h2>
        <p className="text-black text-sm mt-2">Nos produits de qualité</p>
      </div>

      {/* Carrousel des produits */}
      <ProductCarrousel products={PRODUCTS} options={OPTIONS} />
    </div>
  );
}
