import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo.png';
import bg from '../assets/63.png';

export default function SchoolSelectionForm() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="bg-white border border-blue-300 max-w-md w-full rounded-md p-8 pt-20 relative shadow-xl">

                {/* Logo floating on top linked to home */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-24 h-24 rounded-full bg-white border-4 border-white shadow hover:scale-105 transition"
                        />
                    </Link>
                </div>

                {/* Title */}
                <h2 className="text-center text-lg font-semibold text-blue-900 tracking-wide mb-8">
                    S.B.O.A SCHOOL OF AURANGABAD
                </h2>

                {/* Form */}
                <form className="space-y-4">
                    <select className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>School Name</option>
                        <option>SBOA Aurangabad</option>
                        <option>SBOA Nashik</option>
                    </select>

                    <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Select Batch</option>
                        <option>Morning</option>
                        <option>Evening</option>
                    </select>

                    <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Select Standard</option>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                    </select>

                    {/* Button linked to next page */}
                    <div className="pt-4">
                        <Link to="/StudentInfoForm">
                            <button
                                type="button"
                                className="w-full bg-[#062b46] text-white py-2 rounded hover:bg-blue-900 transition"
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
