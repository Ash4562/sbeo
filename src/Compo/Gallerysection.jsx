import React from "react";
import { motion } from "framer-motion";
import img1 from "/1.png";
import img2 from "/2.png";
import img3 from "/3.png";
import img4 from "/4.png";
import img5 from "/5.png";
import img6 from "/6.png";
import img7 from "/7.png";
import img8 from "/8.png";
import img9 from "/9.png";
import img10 from "/10.png";
import img11 from "/11.png";

const InfiniteScrollingGallery = () => {
  // Only using images 1-11
  const imageGroups = [
    // Group 1
    {
      col1: [img1, img2],
      col2: [img3, img4],
      col3: [img5],
      col4: [img6],
      col5: [img7],
      col6: [img8, img9],
      col7: [img10, img11],
    },
    // Group 2 (shifted for variety)
    {
      col1: [img11, img10],
      col2: [img9, img8],
      col3: [img7],
      col4: [img6],
      col5: [img5],
      col6: [img4, img3],
      col7: [img2, img1],
    },
    // Group 3 (mixed arrangement)
    {
      col1: [img5, img6],
      col2: [img7, img8],
      col3: [img9],
      col4: [img10],
      col5: [img11],
      col6: [img1, img2],
      col7: [img3, img4],
    },
  ];

  // Duplicate the groups to ensure infinite scrolling
  const allGroups = [...imageGroups, ...imageGroups, ...imageGroups];

  // Image component with hover effect
  const ImageWithHover = ({ src, className }) => {
    return (
      <div className="relative overflow-hidden group rounded-xl">
        <img
          src={src}
          className={`${className} transition-transform duration-500 group-hover:scale-110`}
          alt=""
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium">Image Caption</p>
        </div>
      </div>
    );
  };

  // Custom column components with specific alignments and sizes
  const Column1 = ({ images }) => (
    <div className="flex flex-col gap-4 self-start pt-0">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-36 object-cover"
        />
      ))}
    </div>
  );

  const Column2 = ({ images }) => (
    <div className="flex flex-col gap-4 self-start pt-12">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-40 object-cover"
        />
      ))}
    </div>
  );

  const Column3 = ({ images }) => (
    <div className="flex flex-col gap-4 self-center">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-44 object-cover"
        />
      ))}
    </div>
  );

  const Column4 = ({ images }) => (
    <div className="flex flex-col gap-4 self-start pt-6">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-44 object-cover"
        />
      ))}
    </div>
  );

  const Column5 = ({ images }) => (
    <div className="flex flex-col gap-4 self-center">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-44 object-cover"
        />
      ))}
    </div>
  );

  const Column6 = ({ images }) => (
    <div className="flex flex-col gap-4 self-center pt-8">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-32 object-cover"
        />
      ))}
    </div>
  );

  const Column7 = ({ images }) => (
    <div className="flex flex-col gap-4 self-start pt-0">
      {images.map((src, idx) => (
        <ImageWithHover
          key={idx}
          src={src}
          className="w-36 h-36 object-cover"
        />
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -3000], // Increased animation range for smoother looping
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // Adjust for speed (higher = slower)
            ease: "linear",
          },
        }}
      >
        {allGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex gap-6 min-w-max h-96">
            {/* All columns with their specific alignments */}
            <Column1 images={group.col1} />
            <Column2 images={group.col2} />
            <Column3 images={group.col3} />
            <Column4 images={group.col4} />
            <Column5 images={group.col5} />
            <Column6 images={group.col6} />
            <Column7 images={group.col7} />
            <Column4 images={group.col4} />
            <Column3 images={group.col3} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingGallery;