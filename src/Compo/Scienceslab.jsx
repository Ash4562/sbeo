import React from "react";
import { Link } from "react-router-dom";
import LabImage from "../assets/47.png";
import Logo from "../assets/48.png";
import Facilitieshero from "../Compo/Facilitieshero";

const ScienceLab = () => {
  return (
    <>
      <Facilitieshero />
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 mt-20 md:mt-0 md:mb-0">
          <div className="mb-4">
            {/* <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" /> */}
            <p className="text-8xl">🔬</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">SCIENCE LAB</h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide uppercase">
            State-of-the-Art Science Lab{" "}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We at SBOA believe that science lab equipments allow students to
            interact directly with the data gathered. They get first hand
            learning experience by performing various experiments on their own.
            School science lab equipments make teaching and learning easy and
            interesting for the students.The lab experiences enhance mastery of
            science , develop scientific reasoning abilities, increasing
            understanding of the complexity and ambiguity of empirical work.{" "}
          </p>
        </div>

        {/* Right Image that navigates to Computer Lab route */}
        <div className="md:w-1/2">
          <Link to="./computerlab">
            <img
              src={LabImage}
              alt="Science Lab"
              className="w-full h-auto rounded shadow-lg cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ScienceLab;
