import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/5.png';
import { Link } from "react-router-dom"; // Import Link for navigation

const Facilities = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out",
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col md:flex-row bg-white py-8 px-4 md:px-16">
            {/* Left Side - Image */}
            <div
                className="relative md:w-1/2 flex justify-center"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <div className="relative w-full h-80 max-w-md">
                    <img
                        src={img}
                        alt="Happy Students"
                        className="w-96 h-96 mx-auto"
                    />
                </div>
            </div>

            {/* Center - Text Content */}
            <div
                className="md:w-1/3 text-left mt-6 md:mt-0 md:pl-8"
                data-aos="fade-right"
                data-aos-delay="300"
            >
                <h2 className="text-4xl font-bold mb-6">FACILITIES</h2>
                <p className="text-gray-600 leading-relaxed">
                    We provide a dynamic and modern learning environment where students
                    can excel academically, explore their creativity, and stay physically active.
                    Our state-of-the-art facilities ensure a well-rounded educational experience.
                    With our world-class facilities, we empower students to explore, innovate, and
                    grow in a space designed for their success!
                </p>
            </div>

            {/* Right - Menu Links */}
            <div
                className="hidden md:flex flex-col ml-8 border-l pl-8 border-blue-500 text-gray-700"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                <ul>
                    {[
                        { name: "Science Lab", path: "./Sciencelab" },
                        { name: "Computer Lab", path: "./Computerlab" },
                        { name: "Library", path: "./Library" },
                        { name: "Play Area", path: "/playarea" },
                        { name: "Smart Classes", path: "./Smartclass" },
                        { name: "School Software", path: "/school-software" },
                        { name: "RTE Facility", path: "./Rta" },
                        { name: "Bus Facility", path: "./Bus" },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="mb-2 pb-1 relative overflow-hidden
                            before:absolute before:bottom-0 before:left-0 before:w-0
                            before:h-[2px] before:bg-blue-500 before:transition-all
                            before:duration-300 hover:before:w-full"
                        >
                            <Link
                                to={item.path}
                                className="hover:text-blue-600 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Facilities;
