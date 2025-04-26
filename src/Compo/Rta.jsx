import React from "react";
import LabImage from "../assets/53.png"; // Replace with your actual lab image path
import Logo from "../assets/61.png"; // Replace with your actual logo image path
import Facilitieshero from "./Facilitieshero";

const Computerlab = () => {
  return (
    <>
      <Facilitieshero />
      <div className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <p className="text-8xl">🖥️</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">RTE FACILITY</h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            STATE-OF-THE-ART SCIENCE LAB
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg md:pr-10">
            As per the 86th Constitution Amendment Act (Article 21 A), The Right
            to Education Act seeks to give free and compulsory Education to
            every child between the ages of 6 to 14 years. There is 25%
            reservation for economically disadvantaged Communities in class I.
            At present 494 students are covered under RTE and they are taking
            free education from 2010.{" "}
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={LabImage}
            alt="Science Lab"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Computerlab;
