import React from "react";
import sboaLogo from "../assets/logo.png"; // Update the path if needed


const teacherNames = [
    { name: "Rameshwar Gajalkar" },
    { name: "Jaisingh Jadhav" },
    { name: "Kautik Mandade" },
    { name: "Rushikesh Pande" },
    { name: "Sindhubai Chadidar" },
    { name: "Nanda Suradkar" },
    { name: "Vijaya Kulkarni" },
    { name: "Anita Melgar" },
    { name: "Maya Gaikwad" },
    { name: "Savita Danke" },
    { name: "Ramnath Magare" },
    { name: "Laxmi Gaikwad" },
    { name: "Kamal Gadekar" },
    { name: "Sharda Lokhande" },
    { name: "Usha Khetre" },
    { name: "Sunita Gofane" },
    { name: "Kalpana Pawar" },
    { name: "Sandeep Chavan" },
    { name: "Vijay Sonuse" }
];



const HelpingHandsSection = () => {
    const name = "Mrs. Yogita Mahendra Manwatkar";
    const cards = Array.from({ length: 20 }, (_, i) => {
        const teacher = teacherNames[i % teacherNames.length];
    
        // Each row has 4 items => row index = Math.floor(i / 4)
        const isOddRow = Math.floor(i / 2) % 2 !== 0;
    
        return (
            <div
                key={i}
                className={`border border-gray-300 p-3 text-center text-sm font-medium text-gray-700 ${isOddRow ? "bg-gray-100" : ""
                    }`}
            >
                <p className="font-semibold">{teacher.name}</p>
                <p className="text-orange-500 text-xs">{teacher.role}</p>
            </div>
        );
    });
    return (
        <div className="bg-white min-h-screen py-12 px-4">
            <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section - Fully Centered */}
                <div className="bg-blue-50 rounded-md p-4 flex flex-col items-center  justify-center text-center ">
                    <img
                        src={sboaLogo}
                        alt="SBOA Logo"
                        className="w-24 h-20 mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800 tracking-wide uppercase mb-4">
                        Helping Hands of SBOA
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-left text-sm">
                        We gratefully acknowledge the dedicated efforts of every member who
                        has shaped our school’s journey. Here’s a tribute to all the hands
                        that helped build and nurture our vision.
                    </p>
                </div>

                {/* Right Section */}
                <div className="bg-white rounded-xl shadow-sm p-4 overflow-x-auto">
                    <div className="grid grid-cols-2 gap-px border border-gray-200 rounded-lg">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpingHandsSection;
