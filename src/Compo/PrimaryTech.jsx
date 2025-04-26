import React from "react";
import topImg from "../assets/27.png";
import bottomImg from "../assets/28.png";
import Marquee from "react-fast-marquee";

const teacherNames = [
    { name: "Sunita Shitre" },
    { name: "Pratibha Somde" },
    { name: "Lajwanti Dande" },
    { name: "Seema Damdhar" },
    { name: "Pallavi Kulkarni" },
    { name: "Manisha Khanale" },
    { name: "Manjusha Deshmukh" },
    { name: "Vaishali Deshpande" },
    { name: "Reshmi Nair" },
    { name: "Amruta Mundada" },
    { name: "Ashwini Dongarkar" },
    { name: "Poonam Aherewal" },
    { name: "Surekha Sheolikar" },
    { name: "Seema Sangale" },
    { name: "Surekha Chavan" },
    { name: "Manjiri Joshi" },
    { name: "Sangeeta Kharat" },
    { name: "Manjusha Bhalchandra" },
    { name: "Suvarna Kulkarni" },
    { name: "Sushma Pardeshi" },
    { name: "Shilpa Deshpande" },
    { name: "Varsha Kale" },
    { name: "Premlata Bodade" },
    { name: "Amruta Abhyankar" },
    { name: "Shalini Shelke" },
    { name: "Tanaya Patil" },
    { name: "Pallavi Tamane" },
    { name: "Yogita Parashar" },
    { name: "Priya Kulkarni" },
    { name: "Shital Kulkarni" },
    { name: "Suvarna Kulkarni" },
    { name: "Arshiya Ali" },
    { name: "Deepali Sonawane" },
    { name: "Asmita Puri" },
    { name: "Vinita Nihalani" },
    { name: "Sharvari Paturkar" },
    { name: "Kirti Patil" },
    { name: "Rohinee Deshmukh" },
    { name: "Namita Mohore" }
];


const topEducators = [
    {
        name: "Mrs. Yogita Mahendra Manwatkar",
        role: "Assistant Headmistress, Secondary",
        roleClass: "text-blue-600",
        image: topImg,
        tilt: "tilt-right",
    },
    {
        name: "Mrs. Sunita Prem Yadav",
        role: "Supervisor, Secondary",
        roleClass: "text-blue-600",
        image: topImg,
        tilt: "tilt-left",
    },
];

const bottomTeachers = Array(5).fill({
    name: "Mrs. Yogita Mahendra Manwatkar",
    role: "HOD, Sports",
    roleClass: "text-orange-500",
    image: bottomImg,
});

// NameCards component defined ABOVE EducatorsSection
const NameCards = () => {
    // const name = "Mrs. Yogita Mahendra Manwatkar";
    const cards = Array.from({ length: 39 }, (_, i) => {
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
        <div className="mt-10 min-h-[50vh] bg-blue-100 flex items-center justify-center p-4">
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-6xl">
            <div className="sm:grid grid-cols-4 gap-px border border-blue-300">
                {cards}
            </div>
        </div>
    </div>
    );
};

const EducatorsSection = () => {
    return (
        <div className=" w-full text-center">
            <div className="flex items-center justify-center gap-4">
                <div className="sm:w-40 w-16 border-t-2 border-blue-500"></div>
                <h3 className="sm:text-xl font-semibold text-gray-800 uppercase font-playfair">
                    Primary Teachers
                </h3>
                <div className="sm:w-40 w-20 border-t-2 border-blue-500"></div>
            </div>

            {/* Top Educators */}
            {/* <div className="flex flex-wrap justify-center gap-16 mt-12">
                {topEducators.map((teacher, index) => (
                    <div
                        key={index}
                        className={`max-w-xs transition-all duration-500 ${teacher.tilt}`}
                    >
                        <div className="bg-gradient-to-b from-blue-900 to-gray-900 p-3 rounded-lg shadow-xl h-[75] w-96">
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="rounded-lg mx-auto w-56 h-80 object-cover"
                            />
                        </div>
                        <h3 className="mt-4 font-medium font-poppins text-lg text-gray-800">
                            {teacher.name}
                        </h3>
                        <p
                            className={`mt-1 font-poppins text-lg font-medium ${teacher.roleClass}`}
                        >
                            {teacher.role}
                        </p>
                    </div>
                ))}
            </div> */}

            {/* Divider */}
            <div className="my-12">
                <NameCards />
            </div>
        </div>
    );
};

export default EducatorsSection;
