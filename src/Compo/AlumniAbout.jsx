import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import About from "../assets/Alumniabout.png";

const AlumniAbout = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in",
            once: true,
        });

        const handleScroll = () => {
            setVisible(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "Alumni", path: "/alumni-students" },
        { label: "Alumni Enroll", path: "/alumni/alumni-enroll" },
    ];

    if (!visible) return null;

    return (
        <>
            {/* Alumni Section */}
            <div className="flex flex-col md:flex-row items-center font-poppins bg-white px-4 py-12 gap-10">
                {/* Left - Image Section */}
                <div
                    className="flex justify-center md:w-1/2 w-full"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    <img
                        src={About}
                        alt="Happy Students"
                        className="w-80 h-80 md:w-96 md:h-80 object-cover"
                    />
                </div>

                {/* Text Section */}
                <div
                    className="md:w-1/3 text-center md:text-left xl:-ml-36 w-full mx-3 sm:ml-5"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <h2 className="text-4xl font-bold mb-6 font-playfair ">ALUMNI</h2>
                    <p className="text-gray-600 leading-relaxed">
                        At SBOA School Aurangabad, our alumni are a testament to the excellence
                        we strive for every day. From doctors, engineers, and civil servants to
                        entrepreneurs and global leaders, our former students have made their
                        mark across various fields and industries.
                    </p>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block h-72 border-l-2 border-blue-500 "></div>

                {/* Right - Menu Section */}
                {menuItems.length > 0 && (
                    <div
                        className="hidden md:flex flex-col items-start pl-6"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <ul className="space-y-4 text-gray-700">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <Link
                                        to={item.path}
                                        className="block hover:text-blue-600 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500 before:transition-all before:duration-300 group-hover:before:w-full"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div>
                    <ul data-aos="fade-right" data-aos-delay="100">
                        <li className="my-4">Alumni</li>
                        <li>Alumni Enroll</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AlumniAbout;