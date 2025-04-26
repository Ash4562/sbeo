
import React from "react";
import img from '../assets/studentcommunity2.png';
import img2 from '../assets/bg-small.png';
import StudentStats from "./Studentsate";
import PrimarySection from "./Primarysection";
import SecondarySection from "./Secondarysection";

const Gallery = () => {
    return (
        <>
            <div
                className="hidden sm:block relative h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair">
                    {/* <h1 className="text-4xl font-bold  font-playfair">EXPLORE OUR CAMPUS LIFE</h1> */}
                    {/* <p className="text-lg mt-2">Scroll Down</p> */}
                </div>
            </div >
            <div
                className="sm:hidden relative h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img2})`,
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair">
                    <h1 className="text-3xl font-bold  font-playfair">OUR STUDENT COMMUNITY</h1> 
                     <p className="text-lg mt-2">Scroll Down</p>
                </div>
            </div >
            <StudentStats />
            <PrimarySection />
            <SecondarySection />

        </>
    );
};

export default Gallery;
