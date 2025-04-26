import React from 'react';
import principalImg from '../assets/techer_image.png'; // Replace with your actual image path

const WelcomeSection = () => {
    return (
        <div className="bg-gray-50 px-6 py-10 font-poppins">
            <div className="max-w-6xl mx-auto bg-[#E0F5FD]  p-8 md:p-12 rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Left Column - Image */}
                    <div className="w-full">
                        <img
                            src={principalImg}
                            alt="Principal"
                            className="rounded-lg object-cover w-3/2 h-auto item-end"
                        />
                    </div>

                    {/* Right Column - Text Section */}
                    <div className="text-gray-800 text-justify flex flex-col justify-between ">
                        {/* Heading */}
                        <div>
                            <p className="text-sm text-blue-900 font-semibold uppercase mb-2">Head of School</p>
                            <h2 className="text-3xl font-bold font-playfair mb-6">Welcome to S.B.O.A School</h2>

                            {/* Paragraphs Grid (2 columns) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-left text-gray-500">
                                <div>
                                    <p className="mb-4 leading-relaxed ">
                                        It’s a great pleasure to welcome you to SBOA Public School. I feel privileged to lead such an exciting and vibrant school. Our goal is to make each and every student succeed not only in their studies but also in their future endeavors.
                                    </p>
                                    <p className="mb-4 leading-relaxed">
                                        We offer our students the best opportunities to become confident and thoughtful young people who are prepared to face any future challenges in this exciting and rapidly changing globalized world.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-4 leading-relaxed">
                                        We set high standards and expectations for our students in behavior and strive for their very best. Our dedicated staff and superb facilities enable us to deliver our programs in a friendly environment that is conducive to learning and attuned to every student’s educational needs.
                                    </p>
                                    <p className="mb-4 leading-relaxed">
                                        We keep our classes and tutorial groups relatively small to create a comfortable and relaxed environment where learners get to know their teachers well.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Signature */}
                        <p className="font-semibold mt-2 text-gray-600 text-right">
                            – Mrs. Shubhada Dilip Purandare
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
