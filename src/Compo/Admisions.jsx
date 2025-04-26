import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 🔗 Import Link
import img from "../assets/6.png";

export default function Admissions() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out",
            once: true,
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center bg-white"
        >
            <div className="flex max-w-1/2 items-center h-full bg-white ">
                {/* Left Image Section */}
                <div
                    className="relative max-w-2xl"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <img
                        src={img}
                        alt="Classroom"
                        className="w-full h-[380px]"
                    />
                </div>

                {/* Right Content Section */}
                <div
                    className="w-1/2 py-10 px-28"
                    data-aos="fade-right"
                    data-aos-delay="300"
                >
                    <h2 className="text-4xl font-bold text-gray-800">
                        <span className="text-yellow-500">Apply For </span>
                        <span className="text-blue-500">Admission</span>
                    </h2>
                    <p className="mt-2 text-gray-600 text-3xl">Join Our Learning Community</p>
                    <p className="mt-6 text-gray-500 text-xl">
                        We welcome students to be part of an enriching educational experience that fosters
                        academic excellence and holistic development.
                    </p>

                    {/* 🔗 Link to StudentInfoForm */}
                    <Link to="/Selection">
                        <button
                            className="mt-6 bg-blue-500 text-white px-10 py-3 text-xl font-bold rounded-lg shadow-md hover:bg-blue-600"
                            data-aos="fade-right"
                            data-aos-delay="100"


                        >
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
