import React from "react";
import img from '../assets/40.png';
import Navbar from "./Navbar";

const Facilitieshero = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair">
                    {/* <h1 className="text-4xl font-bold  font-playfair">EXPLORE OUR CAMPUS LIFE</h1> */}
                    {/* <p className="text-lg mt-2">Scroll Down</p> */}
                </div>
            </div >
        </>
    );
};

export default Facilitieshero;
