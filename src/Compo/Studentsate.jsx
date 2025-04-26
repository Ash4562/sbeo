import React from 'react';

import prePrimaryImg from '../assets/35.png';
import primaryImg from '../assets/33.png';
import secondaryImg from '../assets/36.png';
import allStudentsImg from '../assets/34.png';

import srKg from '../assets/38.png';
import jrKg from '../assets/39.png';
import nursery from '../assets/32.png';

const stats = [
    {
        label: 'Pre Primary Students',
        count: 277,
        image: prePrimaryImg,
        bg: 'bg-[#0097E0]', // Light Blue
    },
    {
        label: 'Primary Students',
        count: 1182,
        image: primaryImg,
        bg: 'bg-[#001F3F]', // Navy Blue
    },
    {
        label: 'Secondary Students',
        count: 1965,
        image: secondaryImg,
        bg: 'bg-[#FBE2A3]', // Light Yellow
    },
    {
        label: 'All Students',
        count: 3424,
        image: allStudentsImg,
        bg: 'bg-[#1A1A1A]', // Dark Gray / Black
    },
];

const prePrimaryStats = [
    { label: 'SR – KG', count: 139, image: srKg },
    { label: 'JR – KG', count: 89, image: jrKg },
    { label: 'NURSURY', count: 47, image: nursery },
];

const StudentStats = () => {
    return (
        <div className="max-w-7xl items-center justify-center ml-12 py-6 text-center">
            {/* Top Heading */}
            <h2 className="text-xl font-playfair md:text-2xl font-bold text-blue-800 uppercase">
                Growing Every Year - A Thriving Learning Hub
            </h2>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg border border-gray-200 bg-white hover:shadow-lg transition w-60"
                    >
                        <div className={`${item.bg} rounded-t-lg p-6 flex items-center justify-center w-60 h-32`}>
                            <img src={item.image} alt={item.label} className="w-36 h-36 object-contain" />
                        </div>
                        <div className="p-4">
                            <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
                            <p className="text-blue-600 text-2xl font-bold mt-2">{item.count}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="my-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="w-20 border-t-2 border-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-700 uppercase">
                        Students Strength | Pre-Primary Section
                    </h3>
                    <div className="w-20 border-t-2 border-blue-500" />
                </div>
            </div>

            {/* Bottom Image Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 ">
                {prePrimaryStats.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#002F5F]  w-96 overflow-hidden hover:scale-105 transition-transform rounded-xl"
                    >
                        <img src={item.image} alt={item.label} className="w-96 h-64 object-cover" />
                        <div className="bg-[#002F5F] text-white p-4">
                            <h4 className="text-lg font-semibold">{item.label}</h4>
                            <p className="text-xl font-bold">{item.count}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentStats;
