import Link from "next/link";
import Image from "next/image";
import GradientCard from "./GradientCard";


export default function ProductVideo() {
  return (
    <div className="w-full h-[700px] flex items-center justify-center gap-10 boerder-2 border-red-100">
      <GradientCard 
        title="Envoutant"
        videoSrc="/cocojojo.C.mp4"
        linkHref="/"
        imageSrc="/fleche.png"
        containerWidth="400px"
        containerHeight="700px"
      />

      <GradientCard 
        title="Envoutant"
        videoSrc="/cocojojo.C.mp4"
        linkHref="/"
        imageSrc="/fleche.png"
        containerWidth="400px"
        containerHeight="700px"
      />

      <GradientCard 
        title="Envoutant"
        videoSrc="/cocojojo.C.mp4"
        linkHref="/"
        imageSrc="/fleche.png"
        containerWidth="400px"
        containerHeight="700px"
      />
    </div>
  );
}
