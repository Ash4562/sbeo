import React from "react";
import topImg from "../assets/techer_image.png";
import topImg2 from "../assets/techer_image2.png";
import bottomImg from "../assets/28.png";
import Marquee from "react-fast-marquee";

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
        image: topImg2,
        tilt: "tilt-left",
    },
];



const teacherNames = [
    { name: "Mrs. SHUBHADA PURANDARE" },
    { name: "Ms. YOGITA MANWATKAR" },
    { name: "Dr. SUNITA MUDHOLKAR" },
    { name: "APARNA KULKARNI" },
    { name: "SNEHALATA BHALEKAR" },
    { name: "SHAILA AGRAWAL" },
    { name: "MITALI SHIRSAVKAR" },
    { name: "GEETA DEO" },
    { name: "RITA BODHANKAR" },
    { name: "SANDHYA DHARMADHIKARI" },
    { name: "SEEMA WAKUDE" },
    { name: "VIJAYALAKSHMI TARIGOPULA" },
    { name: "APARNA JAHAGIRDAR" },
    { name: "SHAILAJA POTDAR" },
    { name: "REKHA GAWAI" },
    { name: "MADHURI NOHA" },
    { name: "TANUJA DESHPANDE" },
    { name: "CHITRA GUDHEKAR" },
    { name: "SMITA LASURKAR" },
    { name: "SUNITA KADAM" },
    { name: "MANISHA YADAV" },
    { name: "YASHODA PAWAR" },
    { name: "MANJUSHA JORE" },
    { name: "GAURI TANKSALI" },
    { name: "NEELIMA BHALERAO" },
    { name: "RUPALI BIRADAR" },
    { name: "DIPTY DESHMUKH" },
    { name: "MAHESH BHAVSAR" },
    { name: "SWATI KULKARNI" },
    { name: "JEEVA ANTHONY" },
    { name: "ROHINI CHIMNE" },
    { name: "RUPALI BANDALE" },
    { name: "SUJATA MALOSE" },
    { name: "GOURI KULKARNI" },
    { name: "SEEMA KOSAME" },
    { name: "RAJASHRI BHAVTHANKAR" },
    { name: "DEEPIKA WAVRE" },
    { name: "RASHMI JAGAT" },
    { name: "POOJA POLKAM" },
    { name: "SHILPA KULKARNI" },
    { name: "ANURADHA KULKARNI" },
    { name: "VEENA KSHIRSAGAR" },
    { name: "SUPRIYA DESHPANDE" },
    { name: "VEENA PANDE" },
    { name: "ANAGHA KHAWASE" },
    { name: "ARCHANA PISU" },
    { name: "MADHURI JOSHI" },
    { name: "MANISHA DHEPLE" },
    { name: "PADMINI NAGAPURKAR" },
    { name: "CHHAYA BALDAWA" },
    { name: "MANJIRI GAIKWAD" },
    { name: "PRADNYA DESHPANDE" },
    { name: "VARTIKA SRIVASTAVA" },
    { name: "RITA CHANDAK" },
    { name: "BHAKTI JOSHI" },
    { name: "RASHMI RAJE" },
    { name: "MANJIRI TAMNE" },
    { name: "MANJARY MARLEGAONKAR" },
    { name: "TANUJA CHATUPHALE" },
    { name: "APARNA SAID" },
    { name: "SONAL KARWAL" },
    { name: "MANISHA KULKARNI" },
    { name: "SANGITA NILEKAR" },
    { name: "VIJAYA SHIRNATH" },
    { name: "SNEHAL DESHMUKH" },
    { name: "ARCHANA MADHEKAR" },
    { name: "ANURADHA KATHAVI" },
    { name: "MANASI PANSE" },
    { name: "SONALI DARWHEKAR" },
    { name: "AMRUTA PATHAK" },
    { name: "JYOTI SAVAJI" },
    { name: "PRAFULLA KULKARNI" },
];



const EducatorsSection = () => {
    const cards = Array.from({ length: 72 }, (_, i) => {
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
        <div className="w-full mx-auto text-center py-12 ">
            <h2 className="text-2xl md:text-3xl font-playfair text-blue-400 uppercase">
                Meet Our Educators – The Pillars of Excellence
            </h2>
            <p className="text-gray-400 px-2 sm:px-0 max-w-4xl mx-auto mt-2 font-poppins">
                Our dedicated and experienced teachers are the heart of our institution. With a passion for teaching and a commitment to student success, they create an engaging and supportive learning environment.
            </p>

            {/* Top Educators */}
            <div className="flex flex-wrap justify-center gap-20 mt-10">
                {topEducators.map((teacher, index) => (
                    <div
                        key={index}
                        className={`max-w-xs transition-all duration-500 `}
                    >
                        {/* from-blue-900 to-gray-900  */}
                        <div className="bg-gradient-to-b p-3 ">
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="rounded-lg mx-auto w-64 h-80 object-cover"
                            />
                        </div>
                        <h3 className="mt-4 font-medium font-poppins text-gray-800">{teacher.name}</h3>
                        <p className={`mt-1 font-poppins font-medium ${teacher.roleClass}`}>{teacher.role}</p>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="mt-16 flex items-center justify-center gap-4">
                <div className="sm:w-40 w-16 border-t-2 border-blue-500"></div>
                <h3 className="sm:text-xl font-semibold text-gray-800 uppercase font-playfair">Secondary Teachers</h3>
                <div className="sm:w-40 w-16 border-t-2 border-blue-500"></div>
            </div>

            {/* Bottom Teachers Grid */}
            <div className="mt-10 min-h-[50vh] bg-blue-100 flex items-center justify-center p-4">
                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-6xl">
                    <div className="sm:grid grid-cols-4 gap-px border border-blue-300">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducatorsSection;
