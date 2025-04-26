import React from 'react';
import award1 from '../assets/31.png';

function Award() {
    return (
        <div className="max-w-7xl mx-auto text-center py-12 px-4">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-playfair text-blue-400 uppercase">
                Academic Excellence Award
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-2 font-poppins">
                Our students secured top ranks in board examinations with a 100% pass rate.
            </p>

            {/* No-Gap Image Row */}
            <div className="mt-10 flex justify-center items-center flex-wrap gap-8 mx-2 ">
                <img src={award1} alt="Award 1" className="w-[94] h-80 object-cover rounded-none m-0 p-0" />
                <img src={award1} alt="Award 2" className="w-[94] h-80 object-cover rounded-none m-0 p-0" />
                <img src={award1} alt="Award 3" className="w-[94] h-80 object-cover rounded-none m-0 p-0" />
            </div>
        </div>
    );
}

export default Award;
