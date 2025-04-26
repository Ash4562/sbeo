import React from "react";
import logo from "../assets/logo.png";
import img from '../assets/63.png'
import { Link } from 'react-router-dom';
// Replace with your logo path

const StudentInfoForm = () => {
    return (
        <div className="min-h-screen   flex items-center justify-center bg-cover  bg-center   " style={{ backgroundImage: `url(${img})` }}
        >
            <div className="relative z-10 justify-center bg-white shadow-lg border-b-2 border-blue-200 w-full max-w-5xl  mt-20 rounded-md p-8">
                {/* Floating Logo Behind the Card */}
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0 mb-2">
                    <img src={logo} alt="Logo" className="w-36 h-36 rounded-full bg-white p-2" />
                </div>

                {/* Title */}
                <div className="mt-4 bg-gray-100 p-2 mb-2 rounded  ">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        OTHER DETAILS
                    </h2>
                </div>

                {/* Form Grid */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Birth Place"
                        className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        placeholder="Birth District"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Birth Country"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Relegion"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Mother Tongue"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Birth Taluka"
                        className="border p-1 rounded"
                    />
                    <input
                        placeholder="Birth Satate"
                        className="border p-1 rounded"
                    ></input>
                    <input
                        placeholder="Previous School"
                        className="border p-1 rounded"
                    ></input>
                    <input
                        type="text"
                        placeholder="Nationality"
                        className="border p-1 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Live with"
                        className="border p-1 rounded"
                    />



                </form>

                {/* Buttons */}
                <div className="flex justify-center mt-4 gap-6">
                    <Link to="/AddInfo">
                        <button className="bg-[#062b46] text-white px-8 py-2 rounded hover:bg-blue-900 transition">
                            Previous
                        </button>
                    </Link>
                    <Link to="/Otherdetail">
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
