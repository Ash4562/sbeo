import React from 'react';
import bgImg from '../assets/43.png'; // Replace with your actual image

const SchoolTimings = () => {
    return (
        <div className="bg-white font-poppins px-4 py-10">
            <div className="max-w-8xl ">

                {/* Main Title */}
                <h2 className="text-xl md:text-4xl mx-10 font-playfair text-blue-900 mb-10 uppercase">School Timings</h2>

                {/* Monday to Friday Section */}
                <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
                    {/* Label */}
                    <div className="flex justify-start ">
                        <div className="bg-[#F6Fcfe] px-16 font-playfair py-12 text-[#003151] text-2xl font-semibold  uppercase ">
                            Monday to Friday
                        </div>
                    </div>

                    {/* Timing Info */}
                    <div className="md:col-span-2">
                        <div className="relative rounded-lg overflow-hidden shadow-md h-[34rem]">
                            <img src={bgImg} alt="Classroom" className="w-full h-full object-cover opacity-40" />
                            <div className="absolute inset-0 bg-[#003151] bg-opacity-70 text-white p-6 flex flex-col justify-center text-center space-y-8">

                                <div>
                                    <h3 className="text-3xl font-semibold">Nursery to Sr.Kg</h3>
                                    <div className="w-16 h-[2px] bg-[#FFD633] mx-auto  mt-3 relative">
                                        {/* Vertical line below horizontal line */}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#FFD633]"></div>
                                    </div>
                                    <p className="text-xl mt-4">12:45pm to 5:00pm</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-xl sm:text-3xl">Std I to Std IV</h4>
                                        <div className="w-16 h-[2px] bg-[#FFD633] mx-auto relative mt-3">
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#FFD633]"></div>
                                        </div>
                                        <p className="text-xl mt-4">12:45 p.m. TO 5.10 P.M</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl sm:text-3xl">Std V to Std X</h4>
                                        <div className="w-16 h-[2px] bg-[#FFD633] mx-auto relative mt-3">
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#FFD633]"></div>
                                        </div>
                                        <p className="text-xl mt-4">7:20 a.m. TO 12:45 p.m.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                {/* Saturday Timing Section */}
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Label */}
                    <div className="flex justify-end items-center md:order-2">
                        <div className="bg-[#F6Fcfe] font-playfair px-16 py-10 text-[#003151] text-2xl font-semibold tracking-wide uppercase ">
                            Saturday Timing
                        </div>
                    </div>

                    {/* Timing Info */}
                    <div className="md:col-span-2 md:order-1">
                        <div className="relative rounded-lg overflow-hidden shadow-md h-[32rem]">
                            <img src={bgImg} alt="Classroom" className="w-full h-full object-cover opacity-40" />
                            <div className="absolute inset-0 bg-[#003151] bg-opacity-70 text-white p-6 flex flex-col justify-center text-center space-y-4">

                                <div>
                                    <h3 className="text-3xl font-semibold">Nursery to Sr.Kg</h3>
                                    <div className="w-16 h-[2px] bg-[#FFD633] mx-auto relative mt-2">
                                        <div className="absolute top-full left-1/2 bg-[#FFD633] transform -translate-x-1/2 w-[2px] h-3"></div>
                                    </div>

                                    <p className="text-xl  mt-3">12:45pm to 5:00pm</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-xl sm:text-3xl">Nursery to Sr.Kg</h4>
                                        <div className="w-16 h-[2px] bg-[#FFD633] mx-auto relative mt-1">
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#FFD633]"></div>
                                        </div>

                                        <p className="text-xl mt-3">4th Saturday Holiday</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl sm:text-3xl">Std I to Std V</h4>
                                        <div className="w-16 h-[2px] bg-[#FFD633] mx-auto relative mt-1">
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#FFD633]"></div>
                                        </div>

                                        <p className="text-xl mt-3">12:45 p.m. TO 5.10 P.M</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-xl sm:text-3xl">Std VI to Std XII</h4>
                                    <div className="w-16 h-[2px] bg-[#FFD633] mx-auto relative mt-1">
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#FFD633]"></div>
                                    </div>

                                    <p className="text-xl mt-3">7:20 a.m. TO 10:30 a.m.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SchoolTimings;
