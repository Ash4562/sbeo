import React from 'react';
import { Link } from 'react-scroll';
import LabImage from '../assets/47.png'; // Replace with your actual lab image path
import Logo from '../assets/48.png'; // Replace with your actual logo image path

const ScienceLab = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 py-12 bg-white min-h-screen">
            {/* Left Content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="mb-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-12 h-12 object-contain"
                    />
                </div>
                <h2 className="text-3xl font-bold mb-2">SCIENCE LAB</h2>
                <h3 className="text-xl font-semibold mb-4 tracking-wide">
                    STATE-OF-THE-ART SCIENCE LAB
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Our fully-equipped Science Lab provides students with a hands-on learning experience,
                    fostering curiosity, critical thinking, and innovation. Designed to meet modern
                    educational standards, the lab allows students to perform experiments safely and
                    effectively under expert supervision.
                </p>
            </div>

            {/* Right Image (Clickable link) */}
            <div className="md:w-1/2 relative">
                <Link
                    to="computer-lab" // Target the section ID for the new page/section
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    <img
                        src={LabImage}
                        alt="Science Lab"
                        className="w-full h-auto rounded shadow-lg"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ScienceLab;
