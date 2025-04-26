import React from "react";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import bgImage from "../assets/63.png"; // Background image (optional)

const SuccessPage = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center px-4 py-12">

                {/* Floating Logo */}
                {/* <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20 w-32 h-32 bg-white rounded-full p-2 shadow-md border">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
                </div> */}

                {/* White Card */}
                <div className="bg-white rounded-full shadow-xl px-10 py-20 text-center mt-20">
                    <h3 className="text-blue-500 text-sm font-semibold">Welcome To SBOA School</h3>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Congratulations !!</h1>
                    <p className="text-green-700 mt-1 font-semibold">Application Submitted Successfully</p>

                    {/* Tick icon or ✔ */}
                    <div className="text-green-600 text-4xl my-6">✔</div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        Thank you for completing your admission application. <br />
                        Our team will review your details and get in touch with you shortly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
