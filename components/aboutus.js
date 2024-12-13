import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex items-center justify-center h-[900px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-start">
        {/* Image Section */}
        <div className="relative w-[800px] sm:h-[800px]">
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
        <div className="text-left w-[600px]">
          <h2 className= "text-transparent bg-gradient-to-r from-gray-600 via-white to-white bg-clip-text text-5xl font-medium mb-10">ABOUT US</h2>
          <p className="text-gray-700 text-2xl leading-relaxed">
            Chez <span className="font-semibold">reinoush</span>, nous créons des parfums uniques et raffinés qui racontent votre histoire. Inspirés par l’art de la parfumerie, nous sélectionnons les meilleurs ingrédients pour concevoir des fragrances alliant tradition, innovation et <span className="italic">élégance</span>. 
            <br /><br />
            Découvrez une collection pensée pour sublimer votre quotidien et révéler votre personnalité. Laissez chaque parfum écrire votre légende.
          </p>
        </div>
      </div>
    </div>
  );
}
