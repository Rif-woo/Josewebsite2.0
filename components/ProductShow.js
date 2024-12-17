import "../app/embla.css";
import ProductCarrousel from "./ProductCarrousel";

const OPTIONS = {}; // Configuration de Embla (ex: { loop: true })
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timeZone); // Exemple : "Europe/Paris"
let price = "20 €";
if (timeZone.includes("Africa")) {
  price = "5000 FCFA";
}

// Liste des produits avec leurs données
const PRODUCTS = [
  {
    id: 1,
    name: "Grace",
    price: price,
    typeParfum: "Parfum Femme",
    image: "/Grace.webp",
  },
  {
    id: 2,
    name: "Coco Jojo",
    price: price,
    typeParfum: "Parfum Femme",
    image: "/coco.webp",
  },
  {
    id: 3,
    name: "Favor",
    price: price,
    typeParfum: "Parfum Homme",
    image: "/Favor.webp",
  },
  {
    id: 4,
    name: "Mighty",
    price: price,
    typeParfum: "Parfum Homme",
    image: "/Mighty.webp",
  },
  {
    id: 5,
    name: "Divine",
    price: price,
    typeParfum: "Parfum Femme",
    image: "/Divine.webp",
  },
];

export default function ProductShow() {
//768 - 1280
  return (
    <div className="w-full h-[650px] min-[768px]:max-[1280px]:h-[750px] flex flex-col md:flex-row min-[768px]:max-[1280px]:flex-col items-center min-[768px]:max-[1280px]:items-center min-[768px]:max-[1280px]:justify-center md:items-start justify-center pt-11 ">
      {/* Section gauche (titre et description) */}
      <div className="w-[400px] h-[200px] min-[768px]:max-[1280px]:h-[200px] xl:max-[1515px]:w-[250px] xl:max-[1515px]:h-[350px] md:h-[450px] bg-transparent min-[768px]:max-[1280px]:border-none md:border-r-2 border-gray-300 flex flex-col justify-center items-center min-[768px]:max-[1280px]:justify-center min-[768px]:max-[1280px]:items-center md:items-start md:justify-start pt-6 px-6">
        <h2 className="text-black text-5xl min-[768px]:max-[1280px]:text-5xl font-medium md:text-2xl xl:max-[1515px]:text-xl">
          PRODUITS
        </h2>
        <p className="text-black text-sm xl:max-[1515px]:text-xs min-[768px]:max-[1280px]:text-sm mt-2">
          Nos produits de qualité
        </p>
      </div>

      {/* Carrousel des produits */}
      <ProductCarrousel products={PRODUCTS} options={OPTIONS} />
    </div>
  );
}
