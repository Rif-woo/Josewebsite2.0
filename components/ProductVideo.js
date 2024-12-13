import Link from "next/link";
import Image from "next/image";
import GradientCard from "./GradientCard";


export default function ProductVideo() {
  return (
    <div className="w-full h-[750px] flex flex-col items-start justify-center p-10 gap-1 mt-32 mb-32">
      
      <div>
        <h2 className="text-black font-medium text-5xl pb-8">
        Sélection du Moment
        </h2>
      </div>

      <div className="flex items-center justify-center gap-1 h-full">
      <GradientCard
        title="Tendances"
        videoSrc="/cocojojo.C.mp4"
        linkHref="/"
        imageSrc="/fleche.png"
        containerWidth="400px"
      />

      <GradientCard
        title="Offres Spéciales"
        videoSrc="/cocojojo.C.mp4"
        linkHref="/"
        imageSrc="/fleche.png"
        containerWidth="700px"
      />

      <GradientCard 
        title="Envoutant"
        videoSrc="/cocojojo.C.mp4"
        linkHref="/"
        imageSrc="/fleche.png"
        containerWidth="400px"
      />
        
        </div>
    </div>
  );
}
