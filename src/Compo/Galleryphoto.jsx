import React from "react";
import img2 from "../assets/21.png";
import img3 from "../assets/22.1.png";
import img from "../assets/23.png";
import img1 from "../assets/24.1.png";
import img4 from "../assets/20.png";

const ImageSection = () => {
  const images = [img, img1, img2, img3, img4];

  const captions = [
    "Sports And Competition",
    "Academic And Learning",
    "Secondary",
    "Cultural Events",
    "Pre Primary And Primary",
  ];

  // Responsive widths for cards based on index
  const baseSizes = [
    "w-[180px] h-[280px]",
    "w-[200px] h-[320px]",
    "w-[220px] h-[360px]",
    "w-[200px] h-[320px]",
    "w-[180px] h-[280px]",
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 mt-20">
      {/* Responsive flex-wrap row layout */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl shadow-md ${baseSizes[index]} sm:${baseSizes[index]} md:${baseSizes[index]} lg:${baseSizes[index]}`}
          >
            {/* Image */}
            <img
              src={src}
              alt={`section-${index}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-white shadow-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Sliding caption */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-medium text-center">
                {captions[index]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Section footer text */}
      <p className="mt-16 font-normal text-2xl text-center">
        See From Above Sections
      </p>
    </div>
  );
};

export default ImageSection;