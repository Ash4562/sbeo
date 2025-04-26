import React, { useEffect, useState } from "react"; // add useState
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import img from '../assets/4.png';

const AboutUs = () => {
    const [visible, setVisible] = useState(true); // ⬅️ state to track visibility

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in",
            once: true,
        });

        const handleScroll = () => {
            setVisible(false); // ⬅️ hide component when scrolling starts
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "Pricipaldesk", path: "./Pricipaldesk" },
        { label: "Trustee", path: "./Trustee" },
        
        { label: "Student Council", path: "/student-council" },
        { label: " PTA Members", path: "/about/parents-teachers-association" },
        { label: "Student Strength", path: "./Strength" },
        { label: "Student Timings", path: "./StudentTimings" },
        { label: "Office Timimgs", path: "./OfficeTimeing" },
        { label: "Help-Hands", path: "./Helphand" },
    ];

    // 🛑 Return nothing if not visible
    if (!visible) return null;

    return (
        <div className="flex flex-col md:flex-row items-center font-poppins bg-white px-4 py-8 gap-8">
            {/* Left Side - Image Section */}
            <div
                className="relative md:w-1/2 flex justify-center"
                data-aos="fade-right"
                data-aos-delay="100"
            >
                <div className="relative w-80 h-80 mx-auto">
                    <img
                        src={img}
                        alt="Happy Students"
                        className="w-96 h-80 object-cover"
                    />
                </div>
            </div>

            {/* Middle - Text Content */}
            <div
                className="md:w-1/3 text-left"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <h2 className="text-4xl font-bold mb-12 font-playfair">ABOUT US</h2>
                <p className="text-gray-600 leading-relaxed">
                    At SBOA School, we are dedicated to nurturing students with a holistic
                    learning experience that blends academics, creativity, and life
                    skills. Our state-of-the-art facilities and passionate faculty ensure
                    that every child receives the best education and opportunities to
                    succeed.
                </p>
            </div>

            {/* Rightmost - Responsive Menu */}
            <div
                className="w-full md:w-1/4"
                data-aos="fade-right"
                data-aos-delay="300"
            >
                <ul className="flex flex-wrap md:flex-col gap-4 md:gap-2 text-gray-700 border-t pt-4 md:border-t-0 md:border-l md:pl-6 border-blue-500">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <Link
                                to={item.path}
                                className="block pb-1 hover:text-blue-600 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500 before:transition-all before:duration-300 group-hover:before:w-full"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
