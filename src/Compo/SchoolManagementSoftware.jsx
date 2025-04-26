import React from "react";
import LabImage from "../assets/53.2.png"; // Replace with your actual lab image path
import Logo from "../assets/61.png"; // Replace with your actual logo image path
import Facilitieshero from "./Facilitieshero";

const SchoolManagementSoftware = () => {
  return (
    <>
      <Facilitieshero />
      <div className="flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-4">
            <p className="text-8xl">🖥️</p>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            School Management Software
          </h2>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            STATE-OF-THE-ART SCIENCE LAB
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg md:pr-10">
            Next step in digitization SBOA Public School started using a web
            based software named DIVINE CAMPUS for school management in the year
            2018-19. It provides the facilities like  Attendance of students &
            teachers, certificates and Documents, fee & finance, HR & Payroll
            inventory & purchase, transportation management etc. Migration to
            the Divine Campus platform has ensured effective control over
            attendance & fee, circulars, Homework etc. This has also reduced a
            lot of duplication of the work, where by Teachers can devote more
            time towards the academics.
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

export default SchoolManagementSoftware;
