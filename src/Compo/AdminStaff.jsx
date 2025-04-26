import React from "react";

const teacherNames = [
    { name: "DHANASHREE UTPAT" },
    { name: "SARITA LONIKAR" },
    { name: "RADHIKA BAMNODKAR" },
    { name: "SHRUTIKA JOSHI" },
    { name: "YOGINI MUNGIKAR" },
    { name: "MANALI CHAUDHARIE" },
    
    
];

const AdminStaff = () => {
    const name = "Mrs. Yogita Mahendra Manwatkar";
    const cards = Array.from({ length: 6 }, (_, i) => {
        const teacher = teacherNames[i % teacherNames.length];
    
        // Each row has 4 items => row index = Math.floor(i / 4)
        const isOddRow = Math.floor(i / 4) % 2 !== 0;
    
        return (
            <div
                key={i}
                className={`border border-gray-300 p-3 text-center text-sm font-medium text-gray-700 ${
                    isOddRow ? "bg-gray-100" : ""
                }`}
            >
                <p className="font-semibold">{teacher.name}</p>
                <p className="text-orange-500 text-xs">{teacher.role}</p>
            </div>
        );
    });
    

    return (
        <>
        <div className="flex items-center justify-center gap-4 my-14">
                <div className="w-28 sm:w-40 border-t-2 border-blue-500"></div>
                <h3 className="sm:text-xl font-semibold text-gray-800 uppercase font-playfair">
                    Admin Staff
                </h3>
                <div className="w-24 sm:w-40 border-t-2 border-blue-500"></div>
            </div>
            <div className="mt-10 mb-5  bg-blue-100 flex items-center justify-center p-4">
                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-6xl">
                    <div className="sm:grid grid-cols-4 gap-px border border-blue-300">
                        {cards}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminStaff;
