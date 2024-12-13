import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GradientCard = ({
  title = 'Envoutant',
  videoSrc = '/cocojojo-compressed.mp4',
  linkHref = '/product-details',
  imageSrc = '/fleche.png',
  containerWidth = '400px',
  containerHeight = '600px',
}) => {
  return (
    <div
      className={`relative w-[${containerWidth}] h-[${containerHeight}] rounded-lg bg-black`}
    >
      {/* Gradient Text */}
      <p className="absolute z-10 left-48 top-28 text-5xl font-normal text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text">
        {title}
      </p>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        preload='none'
        className="opacity-40 w-full h-full object-cover rounded-lg shadow-lg"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Link Button with Image */}
      <Link
        href={linkHref}
        className="absolute left-72 bottom-28 flex items-center justify-center w-12 h-12 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
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
