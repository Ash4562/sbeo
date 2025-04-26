import React from "react";
import img from "../assets/19.png";
import Galleryphoto from "./Galleryphoto";
import Navbar from "./Navbar";
import GallerySection from "./Gallerysection";

const Gallery = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div
        className={`relative h-screen w-full bg-cover bg-center                    bg-[url('/GalleryBGSmallScreen.png')] 
                   md:bg-[url('/GalleryBG.png')]`}
        // style={{
        //   backgroundImage: `url(${img})`,
        // }}
      >
        <div className="absolute text-center inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair">
          <h1 className="text-4xl font-bold  font-playfair">
            EXPLORE OUR CAMPUS LIFE
          </h1>
          <p className="text-lg mt-2">Scroll Down</p>
        </div>
      </div>
      <Galleryphoto />
      <GallerySection />
    </>
  );
};

export default Gallery;
