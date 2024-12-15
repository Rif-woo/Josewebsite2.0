import GradientCard from "./GradientCard";

export default function ProductVideo() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 gap-6 mt-16 mb-16">
      {/* Title */}
      <div>
        <h2 className="text-black font-medium text-3xl md:text-5xl text-center pb-6">
          Sélection du Moment
        </h2>
      </div>

      {/* Cards Container */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Card 1 */}
        <GradientCard
          title="Tendances"
          videoSrc="/cocojojo.C.mp4"
          linkHref="/"
          imageSrc="/arrow-white.svg"
          containerWidth="400px"
        />
        {/* Card 2 (Middle, Wider) */}
        <GradientCard
          title="Offres Spéciales"
          videoSrc="/Favor.mp4"
          linkHref="/"
          imageSrc="/arrow-white.svg"
          containerWidth="600px"
        />
        {/* Card 3 */}
        <GradientCard
          title="Envoutant"
          videoSrc="/Mighty.mp4"
          linkHref="/"
          imageSrc="/arrow-white.svg"
          containerWidth="400px"
        />
      </div>
    </div>
  );
}
