"use client";
import Image from "next/image";
import { GradientCard } from "./GradientCard";
import { MaskVideo } from "./AnimatedVideo";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let price = "20 €";
if (timeZone.includes("Africa")) {
  price = "5000 FCFA";
}

export default function ProductVideo() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 gap-6 xl:max-[1515px]:mt-5 mt-16 mb-16">
      {/* Title */}
      <h2 className="text-black font-medium text-3xl xl:max-[1515px]:text-4xl md:text-5xl text-center pb-6">
        Sélection du Moment
      </h2>

      {/* Cards with animation */}
      <MaskVideo>
        {/* Card 1 - Tendances */}
        <GradientCard
          title="Tendances"
          videoSrc="/cocojojo.C.mp4"
          videoWebm="/cocojojo.C.webm"
          containerWidth="200px"
          modalContent={
            <div className="flex flex-col sm:flex-row sm:gap-4 items-center sm:items-start w-full max-w-lg sm:max-w-xl mx-auto">
              <Image
                src="/coco.webp"
                alt="Coco Jojo"
                width={300}
                height={300}
                className="rounded-lg mb-4 sm:mb-0"
              />
              <div className="w-full flex flex-col items-start gap-3">
                <h3 className="text-xl font-medium text-black xl:max-[1400px]:text-xl">
                  Coco Jojo
                  <br />
                  <span className="text-xs text-gray-600 font-bold">
                    Parfum Femme
                  </span>
                </h3>
                <p className="text-gray-600 text-lg xl:max-[1400px]:text-lg">
                  Un parfum féminin, unique avec une note sucrée miel.
                </p>
                <button
                  className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-xs font-bold rounded hover:bg-gray-800"
                  onClick={() => {
                    const message = `Coco Jojo (x1): ${price}`;
                    const encodedMessage = encodeURIComponent(
                      `Voici ma commande :\n${message}`
                    );
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+33789080132&text=${encodedMessage}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <div className="relative w-5 h-5 xl:max-[1400px]:w-4 xl:max-[1400px]:h-4">
                    <Image
                      src="/shopping-cart.svg"
                      alt="Shopping Cart Icon"
                      fill
                      style={{ objectFit: "contain" }}
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
          videoSrc="/boxVideo.mp4"
          videoWebm="/boxVideo.webm"
          containerWidth="600px"
          modalContent={
            <div className="text-center w-full max-w-lg mx-auto">
              <div className="flex flex-col items-center">
                <Image
                  src="/offre-speciale.png"
                  alt="Offre Spéciale"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl xl:max-[1400px]:text-xl font-medium text-black">
                  Offre Spéciale
                </h3>
              </div>
              <p className="text-gray-600 my-4 text-sm xl:max-[1400px]:text-lg">
                Créez le coffret de vos rêves ! 🎁 Reinoush vous offre la
                possibilité de composer votre coffret sur-mesure :
                <br />
                <span>✨ Choisissez vos parfums préférés parmi notre collection.</span>
                <br />
                <span>✨ Ajoutez une touche de luxe avec un packaging exclusif.</span>
              </p>
              <button
                className="bg-green-500 text-xs text-white py-2 px-4 xl:max-[1400px]:text-xs rounded hover:bg-green-600"
                onClick={() => {
                  const message = `Offre speciale (x1)`;
                  const encodedMessage = encodeURIComponent(
                    `Voici ma commande :\n${message}`
                  );
                  const whatsappUrl = `https://api.whatsapp.com/send?phone=+33789080132&text=${encodedMessage}`;
                  window.open(whatsappUrl, "_blank");
                }}
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
          videoWebm="/Mighty.webm"
          containerWidth="200px"
          modalContent={
            <div className="flex flex-col sm:flex-row sm:gap-4 items-center sm:items-start w-full max-w-lg sm:max-w-xl mx-auto">
              <Image
                src="/Mighty.webp"
                alt="Mighty"
                width={300}
                height={300}
                className="rounded-lg mb-4 sm:mb-0"
              />
              <div className="flex flex-col items-start gap-3">
                <h3 className="text-xl font-medium text-black xl:max-[1400px]:text-xl">
                  Mighty
                  <br />
                  <span className="text-xs text-gray-600 font-bold">
                    Parfum Homme
                  </span>
                </h3>
                <p className="text-gray-600  text-lg xl:max-[1400px]:text-lg">
                  un parfum qui peut surprendre de par ses notes de poire, menthe
                  alliée à la cannelle, la vanille et l'ambre.
                </p>
                <button
                  className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-xs font-bold rounded hover:bg-gray-800"
                  onClick={() => {
                    const message = `Mighty (x1): ${price}`;
                    const encodedMessage = encodeURIComponent(
                      `Voici ma commande :\n${message}`
                    );
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+33789080132&text=${encodedMessage}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <div className="relative w-5 h-5 xl:max-[1400px]:w-4 xl:max-[1400px]:h-4">
                    <Image
                      src="/shopping-cart.svg"
                      alt="Shopping Cart Icon"
                      fill
                      style={{ objectFit: "contain" }}
                      draggable="false"
                    />
                  </div>
                </button>
              </div>
            </div>
          }
        />
      </MaskVideo>
    </div>
  );
}
