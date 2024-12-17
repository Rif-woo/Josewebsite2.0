import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex items-center justify-center px-4 md:px-10 py-16" id="AboutUs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  xl:max-[1400px]:gap-15 md:gap-24 items-center">
        {/* Image Section */}
        <div className="relative hidden md:block w-full max-w-[400px] xl:max-[1400px]:w-[500px] xl:max-[1400px]:h-[500px] lg:max-w-[800px] h-[400px] lg:h-[800px]">
          <Image
            src="/Favor.webp"
            alt="Parfum Favor"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            draggable="false"
          />
        </div>

        {/* Text Section */}
        <div className="text-left w-full max-w-[600px] xl:max-[1400px]:w-[500px]">
          <h2 className="text-transparent bg-gradient-to-r from-gray-600 via-white to-white bg-clip-text xl:max-[1400px]:text-3xl text-4xl md:text-5xl font-medium mb-6 md:mb-10">
            ABOUT US
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl xl:max-[1400px]:text-base leading-relaxed">
            Chez <span className="font-semibold">reinoush</span>, nous créons des parfums uniques et raffinés qui racontent votre histoire. Inspirés par l’art de la parfumerie, nous sélectionnons les meilleurs ingrédients pour concevoir des fragrances alliant tradition, innovation et <span className="italic">élégance</span>.
            <br />
            <br />
            Découvrez une collection pensée pour sublimer votre quotidien et révéler votre personnalité. Laissez chaque parfum écrire votre légende.
          </p>
        </div>
      </div>
    </div>
  );
}
