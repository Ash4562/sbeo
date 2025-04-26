import React from 'react';
import award1 from '../assets/29.png';

function Champions() {
    return (
        <div className="max-w-7xl  text-center pb-12 px-4">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-playfair text-blue-400 uppercase">
                National Science Olympiad Champions             </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-2 font-poppins">
                Winners of the National Science Olympiad, with students securing gold and silver medals.            </p>

            {/* No-Gap Image Row */}
            <div className="mt-10 flex justify-center items-center flex-wrap gap-12 mx-6 ">
                <img src={award1} alt="Award 1" className="w-[94] h-80 object-cover rounded-none m-0 p-0" />
                <img src={award1} alt="Award 2" className="w-[94] h-80 object-cover rounded-none m-0 p-0" />
                <img src={award1} alt="Award 3" className="w-[94] h-80 object-cover rounded-none m-0 p-0" />
            </div>
        </div>
    );
}

export default Champions;
