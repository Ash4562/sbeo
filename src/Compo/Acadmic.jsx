import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import img from "../assets/7.png";
import { Link } from "react-router-dom";

const AcademicsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Smooth animation duration
      easing: "ease-out",
      once: true, // Runs only once when scrolled into view
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Start off-screen left
      animate={{ opacity: 1, x: 0 }} // Fade in and move to position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="grid grid-cols-1 md:grid-cols-3 w-full bg-white"
    >
      {/* Column 1 - Image */}
      <div className="col-span-1" data-aos="fade-right" data-aos-delay="100">
        <img src={img} alt="Academics" className="w-96 h-80" />
      </div>

      {/* Column 2 - Content */}
      <div
        className="col-span-1 flex flex-col p-8"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h2 className="text-4xl font-serif font-bold tracking-wide">
          ACADEMICS
        </h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Different activities are performed in order to aware our students and
          enhance their persona so that they can compete head to head in today’s
          world.
        </p>
      </div>

      {/* Column 3 - Lists */}
      <div
        className="col-span-1 flex flex-col p-8 border-l"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Academics List */}
          <div>
            <h3 className="text-blue-600 font-semibold">Academics</h3>
            <ul className="mt-2 text-gray-700 space-y-1">
              {["SSC", "MTSC", "NTSC", "Homi Bhaba", "Scholarship",].map(
                (item, index) => (
                  <li
                    key={index}
                    className="mb-2 pb-1 relative overflow-hidden 
                    before:absolute before:bottom-0 before:left-0 before:w-0 
                    before:h-[2px] before:bg-blue-500 before:transition-all 
                    before:duration-300 hover:before:w-full"
                  >
                    <Link
                      to={`/academics/${item.toLowerCase().replace(/ /g, '-')}`} // Dynamic URL
                      className="block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Co-Curricular List */}
          <div>
            <h3 className="text-blue-600 font-semibold">Co - Curricular</h3>
            <ul className="mt-2 text-gray-700 space-y-1">
              {["NCC","SPORT"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/academics/${item.toLowerCase().replace(/ /g, '-')}`} // Dynamic URL
                    className="mb-2 pb-1 relative overflow-hidden 
                    before:absolute before:bottom-0 before:left-0 before:w-0 
                    before:h-[2px] before:bg-blue-500 before:transition-all 
                    before:duration-300 hover:before:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AcademicsSection;
