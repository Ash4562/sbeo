import React from "react";
import logo from "../assets/logo.png";
import img from '../assets/63.png'
import { Link } from 'react-router-dom';
// Replace with your logo path

const StudentInfoForm = () => {
    return (
        <div
            className="h-screen w-full overflow-hidden bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="relative z-10 bg-white shadow-lg border border-blue-300 w-full max-w-5xl rounded-md p-12 ">

                {/* Floating Logo */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 mb-12 z-20 w-36 h-36 bg-white rounded-full  ">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                {/* Header */}
                <div className="mb-3 bg-gray-100 p-2 rounded mt-8">
                    <h2 className="text-xl font-extrabold text-[#062b46] flex items-center gap-2">
                        🧑‍🎓 OTHER DETAILS
                    </h2>
                </div>

                {/* Form - maximum 4 rows */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
                    <input type="text" placeholder="Family Caste" className="border p-2 rounded" />
                    <input type="text" placeholder="Category" className="border p-2 rounded" />
                    <input type="text" placeholder="Blood Group" className="border p-2 rounded" />
                    <input type="text" placeholder="Adhaar Number" className="border p-2 rounded" />
                    <input type="text" placeholder="Bus Service" className="border p-2 rounded" />
                    <input type="text" placeholder="Preferable Bus Stop" className="border p-2 rounded" />
                    <input type="text" placeholder="Previous School UDISE Number" className="border p-2 rounded" />
                    <input type="text" placeholder="Approximate distance Residence to school" className="border p-2 rounded" />
                </form>

                {/* Buttons */}
                <div className="flex justify-center gap-6 mt-4">
                    <Link to="/Detailsother">
                        <button className="bg-[#062b46] text-white px-8 py-2 rounded hover:bg-blue-900 transition">
                            Previous
                        </button>
                    </Link>
                    <Link to="/Fatherinfo">
                        <button className="bg-[#062b46] text-white px-8 py-2 rounded hover:bg-blue-900 transition">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default StudentInfoForm;
