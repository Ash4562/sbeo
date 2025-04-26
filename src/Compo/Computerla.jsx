import React from "react";
import LabImage from "../assets/49.png"; // Replace with your actual lab image path
import Logo from "../assets/57.png"; // Replace with your actual logo image path
import Facilitieshero from "./Facilitieshero";

const Computerlab = () => {
  return (
    <>
      <Facilitieshero />
      <div
        id="computer-lab"
        className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 bg-white min-h-screen"
      >
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <p className="text-8xl">💻</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">COMPUTER LAB</h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Empowering Students with Digital Excellence!{" "}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our cutting-edge Computer Lab is designed to provide students with
            hands-on experience in programming, digital literacy, and modern
            technology. Equipped with high-performance systems and the latest
            software, the lab ensures a seamless learning experience.{" "}
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
