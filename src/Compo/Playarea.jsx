import React from "react";
import LabImage from "../assets/53.1.png"; // Replace with your actual lab image path
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
            <p className="text-8xl">🏀</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">PLAY AREA</h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Where Fitness Meets Fun!{" "}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Keeping in mind the importance of sports in every child’s life the
            school has provided two play areas for the students from Nursery to
            Std. X. Various Indoor as well as Outdoor activities / games are
            conducted. Also various competitions and matches are also conducted.
            The students are selected to represent the school for all DSO and
            other matches. {" "}
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
