import React from "react";
import LabImage from "../assets/55.png"; // Replace with your actual lab image path
import Logo from "../assets/62.png"; // Replace with your actual logo image path
import Facilitieshero from "./Facilitieshero";

const Computerlab = () => {
  return (
    <>
      <Facilitieshero />{" "}
      <div className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-3xl font-bold mb-2">BUS FACILITY</h2>
          <p className="text-gray-600 leading-relaxed text-lg md:pr-10">
            From the very first year of the school, the bus facility  is
            provided to all the students studying in both the shifts. This
            facility is given to the students who wish to opt it. Almost all the
            areas of Aurangabad city are covered. The bus facility is outsourced
            but monitored by the school.{" "}
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
