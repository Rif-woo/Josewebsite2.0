import React from "react";
import Link from "next/link";
import Image from "next/image";

const GradientCard = ({ title, videoSrc, linkHref, imageSrc, containerWidth }) => {
  return (
    <div
      className={`relative w-full md:w-[${containerWidth}] h-[300px] md:h-[600px] rounded-lg bg-black`}
    >
      {/* Gradient Text */}
      <p className="absolute z-10 left-6 md:left-10 top-6 md:top-16 text-3xl md:text-4xl font-normal text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text">
        {title}
      </p>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="opacity-40 w-full h-full object-cover rounded-lg shadow-lg"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Link Button */}
      <Link
        href={linkHref}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-10 flex items-center justify-center w-16 md:w-20 h-10 md:h-12 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
      >
        <Image
          src={imageSrc}
          alt="Arrow"
          fill
          className="object-contain"
          draggable="false"
          priority={true}
        />
      </Link>
    </div>
  );
};

export default GradientCard;
