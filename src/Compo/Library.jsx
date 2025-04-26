import React from "react";
import LabImage from "../assets/50.1.png"; // Replace with your actual lab image path
import Logo from "../assets/58.png"; // Replace with your actual logo image path
import Facilitieshero from "./Facilitieshero";

const Computerlab = () => {
  return (
    <>
      <Facilitieshero />

      <div className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <p className="text-8xl">
              <p className="text-8xl">📚</p>
            </p>
          </div>
          <h2 className="text-3xl font-bold mb-2">LIBRARY</h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            A Gateway to Knowledge & Imagination!
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg md:pr-10   ">
            The primary objective of a library is to provide the right
            information at the right time in the right form to the students. It
            fosters a learning environment that encourages investigation allows
            for independent thinking and develops effective study habits for all
            age groups. It also provides materials that support curriculum,
            student’s interests and staff needs.We too have a wonderful library
            set up with high class amenities. The library is supported with E-
            learning set up, books for the age group ranging from 3 years to 15
            years i.e. Nur. to Std X.{" "}
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
