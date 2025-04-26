import React from "react";
import logo from "../assets/logo.png";
import img from '../assets/63.png';
import { Link } from 'react-router-dom';

const StudentInfoForm = () => {
    return (
        <div
            className="h-screen w-screen overflow-hidden  bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="relative z-10 bg-white shadow-lg border-b-2 border-blue-200 mt-6 w-full max-w-5xl rounded-md p-8">

                {/* Floating Logo */}
                <div className="absolute -top-16 left-1/2 transform z-10 -translate-x-2/4 ">
                    <img src={logo} alt="Logo" className="w-32 h-32 rounded-full bg-white p-2" />
                </div>

                {/* Title */}
                <div className="mt-4 mb-2 bg-gray-100 p-2 rounded">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        🎓 STUDENT INFO
                    </h2>
                </div>

                {/* Form Grid */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Student Name"
                        className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        placeholder="Fathers Name"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        className="border p-1 rounded"
                    />
                    <input
                        type="date"
                        className="border p-1 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        className="border p-1 rounded"
                    />
                    <textarea
                        placeholder="Passport Photo"
                        className="border p-1 rounded col-span-1 md:col-span-1 h-36 resize-none"
                    ></textarea>
                </form>

                {/* Buttons */}
                <div className="flex justify-end mt-0 gap-6">
                    <Link to="/Selection">
                        <button className="bg-[#062b46] text-white px-8 py-2 rounded hover:bg-blue-900 transition">
                            Previous
                        </button>
                    </Link>
                    <Link to="/AddInfo">
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
