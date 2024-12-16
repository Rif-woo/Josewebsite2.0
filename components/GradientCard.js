"use client";

import React, { useState } from "react";
import Image from "next/image";

export const GradientCard = ({ title, videoSrc, modalContent, containerWidth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative w-full md:w-[${containerWidth}] h-[300px] md:h-[600px] rounded-lg bg-black`}
      >
        {/* Gradient Text */}
        <p className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-normal text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text">
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

        {/* Button to Open Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-10 flex items-center justify-center w-16 md:w-20 h-10 md:h-12 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <Image
            src="/arrow-white.svg"
            alt="Arrow"
            width={30}
            height={30}
            draggable="false"
          />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[500px] md:w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 w-6 h-6 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Modal Content */}
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};