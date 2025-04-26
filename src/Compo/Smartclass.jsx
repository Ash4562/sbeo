import React from "react";
import LabImage from "../assets/52.png"; // Replace with your actual lab image path
import Logo from "../assets/59.png"; // Replace with your actual logo image path
import Facilitieshero from "./Facilitieshero";

const Computerlab = () => {
  return (
    <>
      <Facilitieshero />{" "}
      <div className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <p className="text-8xl">📡</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">SMART CLASSES</h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Transforming Learning with Technology!{" "}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg md:pr-10">
            First step in this direction was installation of Tata Class edge 
            technology in the year 2017-18 . At present we have   Tata Class
            edge outlet installed in 21 classrooms. This has rendered both
            Teaching and learning more meaningful and interesting. Its multiple
            learning experience model is developed on premise that when students
            use multiple senses and are involved in variety of plan activities.
            They will be better involved in learning process and will retain the
            concepts better
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
