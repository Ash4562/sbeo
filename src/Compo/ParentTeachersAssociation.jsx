import React from "react";
import img from "../assets/19.png";
import Galleryphoto from "./Galleryphoto";
import Navbar from "./Navbar";
import GallerySection from "./Gallerysection";

const PrimarySectionMembers = [
  {
    position: "President",
    name: "Mrs. Sunita J. Shitre",
    contact: "9423779653",
  },
  {
    position: "Vice President",
    name: "Mrs. Sadhana D. Bhise",
    contact: "9765683325",
  },
  {
    position: "Secretary",
    name: "Mrs. Pratibha R. Somde",
    contact: "9421308717",
  },
  {
    position: "Jt. Secretary",
    name: "Mrs. Supriya R. Kulkarni",
    contact: "8600398511",
  },
  {
    position: "Jt. Secretary",
    name: "Mrs. Sonali S. Suradkar",
    contact: "8149609069",
  },
];

const primarySectionClasses = [
  {
    std: "STD I",
    representatives: [
      {
        name: "Mr. Bharat B. Mote",
        designation: "Class Representative",
        contact: "9404505867",
      },
      {
        name: "Mrs. Seema Damdhar",
        designation: "Teacher",
        contact: "9028041625",
      },
    ],
  },
  {
    std: "STD II",
    representatives: [
      {
        name: "Mrs. Pooja R. Patil",
        designation: "Class Representative",
        contact: "8459292800",
      },
      {
        name: "Mrs. Seema Sangle",
        designation: "Teacher",
        contact: "8856834214",
      },
    ],
  },
  {
    std: "STD III",
    representatives: [
      {
        name: "Mrs. Aboli P. Wankar",
        designation: "Class Representative",
        contact: "9767094743",
      },
      {
        name: "Mrs. Asmita Puri",
        designation: "Teacher",
        contact: "7030615559",
      },
    ],
  },
  {
    std: "STD IV",
    representatives: [
      {
        name: "Mrs. Anita P. Bansode",
        designation: "Class Representative",
        contact: "7420838509",
      },
      {
        name: "Mrs. Priya Kulkarni",
        designation: "Teacher",
        contact: "7588794024",
      },
    ],
  },
];

const SecondarySectionMembers = [
  {
    position: "President",
    name: "Mrs. Shubhada Purandare",
    contact: "9011098030",
  },
  {
    position: "Vice President",
    name: "Mrs. Vidya More",
    contact: "8007720820",
  },
  {
    position: "Secretary",
    name: "Mrs. Yogita Manwatkar",
    contact: "9011098020",
  },
  {
    position: "Joint- Secretary",
    name: "Mr. Vishal Shastri",
    contact: "7588521971",
  },
  {
    position: "Joint- Secretary",
    name: "Mrs. Ashwini Lembhe",
    contact: "9552050431",
  },
];

const secondarySectionClasses = [
  {
    standard: "STD V",
    representatives: [
      {
        name: "Mr. Shrikant P. Tat",
        designation: "Parent",
        mobile: "9022338988",
      },
      {
        name: "Mrs. Aparna Said",
        designation: "Teacher",
        mobile: "9850477662",
      },
    ],
  },
  {
    standard: "STD VI",
    representatives: [
      {
        name: "Mr. Sujit P. Kulkarni",
        designation: "Parent",
        mobile: "9850044088",
      },
      {
        name: "Mrs. Manasi Panse",
        designation: "Teacher",
        mobile: "9765555486",
      },
    ],
  },
  {
    standard: "STD VII",
    representatives: [
      {
        name: "Mr. Bhausaheb R. Somvanshi",
        designation: "Parent",
        mobile: "9850014846",
      },
      {
        name: "Mrs. Bhakti Joshi",
        designation: "Teacher",
        mobile: "9422703688",
      },
    ],
  },
  {
    standard: "STD VIII",
    representatives: [
      {
        name: "Mrs. Deepali S. Waykos",
        designation: "Parent",
        mobile: "9921466655",
      },
      {
        name: "Mrs. Pooja Polkam",
        designation: "Teacher",
        mobile: "9923793916",
      },
    ],
  },
  {
    standard: "STD IX",
    representatives: [
      {
        name: "Mrs. Shubhangi V. Chopde",
        designation: "Parent",
        mobile: "9421429711",
      },
      {
        name: "Mrs. Smita Lasurkar",
        designation: "Teacher",
        mobile: "7350552928",
      },
    ],
  },
  {
    standard: "STD X",
    representatives: [
      {
        name: "Mr. Suresh S. Bhale",
        designation: "Parent",
        mobile: "9933665625",
      },
      {
        name: "Mrs. Vijayalakshmi T.",
        designation: "Teacher",
        mobile: "8793101026",
      },
    ],
  },
];

const ParentTeachersAssociation = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div
        className={`relative h-screen w-full bg-cover bg-center                    bg-[url('/GalleryBGSmallScreen.png')] 
                   md:bg-[url('/GalleryBG.png')]`}
      >
        <div className="absolute text-center inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair">
          <h1 className="text-4xl font-bold  font-playfair tracking-wider">
            Parent teacher association
          </h1>
          <p className="text-lg mt-2">Scroll Down</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8">
        <p className="font-playfair font-bold text-4xl text-center">
          Parents Teacher Association{" "}
        </p>
        <p className="font-playfair font-bold text-4xl text-center text-black/40">
          Working Committee members 2024-25
        </p>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center bg-[#00AFEF1F] py-14 gap-8">
          <p className="font-normal text-center text-3xl font-playfair tracking-wider">
            Structure of primary section
          </p>
          <div className="flex flex-col items-center w-full px-4 md:px-16 gap-8">
            {/* Top row with 3 cards */}
            <div className="flex flex-col md:flex-row justify-center gap-8  w-full">
              {PrimarySectionMembers.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#003151] py-6 px-4 rounded-lg gap-2 w-full md:max-w-sm"
                >
                  <p className="text-[#FFCC33] font-bold text-2xl">
                    {member.position}
                  </p>
                  <p className="font-bold text-2xl text-white">{member.name}</p>
                  <p className="text-[#D9D9D9] font-playfair tracking-widest">
                    {member.contact}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row with 2 cards */}
            <div className="flex flex-col md:flex-row justify-center gap-8  w-full -mt-2">
              {PrimarySectionMembers.slice(3, 5).map((member, index) => (
                <div
                  key={index + 3}
                  className="flex flex-col items-center justify-center bg-[#003151] py-6 px-4 rounded-lg gap-2 w-full md:max-w-sm"
                >
                  <p className="text-[#FFCC33] font-bold text-2xl">
                    {member.position}
                  </p>
                  <p className="font-bold text-2xl text-white">{member.name}</p>
                  <p className="text-[#D9D9D9] font-playfair tracking-widest">
                    {member.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 ">
            {primarySectionClasses.map((classData, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-md">
                {/* Card Header */}
                <div className="bg-sky-500 text-white text-center py-2 font-medium text-2xl tracking-wide font-poppins">
                  {classData.std}
                </div>

                {/* Card Body */}
                {/* bg-[#00AFEF] */}
                <div className="bg-gradient-to-b from-[#062f4f] to-[#04314f] text-white px-6 py-4">
                  {classData.representatives.map((rep, repIdx) => (
                    <div key={repIdx}>
                      <p className="text-[#FFCC33] font-medium text-center mb-3 font-poppins tracking-wide">
                        {rep.name}
                      </p>
                      <p className="text-white font-normal text-center mb-3 text-lg font-poppins tracking-wide">
                        {rep.designation}
                      </p>
                      <p className="text-white font-medium text-center mb-3 font-poppins tracking-wide">
                        {rep.contact}
                      </p>
                      {/* Only show border after the first person */}
                      {repIdx === 0 && (
                        <div className="border border-b-[#D9D9D9] font-medium h-0.5 my-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center bg-[#00AFEF1F] py-14 gap-8">
          <p className="font-normal text-center  text-3xl font-playfair tracking-wider">
            Structure of Secondary Section
          </p>
          <div className="flex flex-col items-center w-full px-4 md:px-16 gap-8">
            {/* Top row with 3 cards */}
            <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
              {SecondarySectionMembers.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center items-center justify-center bg-[#003151] py-6 px-4 rounded-lg gap-2 w-full md:max-w-sm"
                >
                  <p className="text-[#FFCC33] font-bold text-2xl">
                    {member.position}
                  </p>
                  <p className="font-bold text-2xl text-white">{member.name}</p>
                  <p className="text-[#D9D9D9] font-playfair tracking-widest">
                    {member.contact}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row with 2 cards */}
            <div className="flex flex-col text-center md:flex-row justify-center gap-8 w-full -mt-2">
              {SecondarySectionMembers.slice(3, 5).map((member, index) => (
                <div
                  key={index + 3}
                  className="flex flex-col items-center justify-center bg-[#003151] py-6 px-4 rounded-lg gap-2 w-full md:max-w-sm"
                >
                  <p className="text-[#FFCC33] font-bold text-2xl">
                    {member.position}
                  </p>
                  <p className="font-bold text-2xl text-white">{member.name}</p>
                  <p className="text-[#D9D9D9] font-playfair tracking-widest">
                    {member.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4">
            {secondarySectionClasses.map((classData, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-md">
                {/* Card Header */}
                <div className="bg-sky-500 text-white text-center py-2 font-medium text-2xl tracking-wide font-poppins">
                  {classData.standard}
                </div>

                {/* Card Body */}
                <div className="bg-gradient-to-b from-[#062f4f] to-[#04314f] text-white px-6 py-4">
                  {classData.representatives.map((rep, repIdx) => (
                    <div key={repIdx}>
                      <p className="text-[#FFCC33] font-medium text-center mb-3 font-poppins tracking-wide">
                        {rep.name}
                      </p>
                      <p className="text-white font-normal text-center mb-3 text-lg font-poppins tracking-wide">
                        {rep.designation}
                      </p>
                      <p className="text-white font-playfair font-medium text-center mb-3 tracking-widest">
                        {rep.mobile}
                      </p>
                      {/* Only show border after the first person */}
                      {repIdx === 0 && (
                        <div className="border border-b-[#D9D9D9] font-medium h-0.5 my-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentTeachersAssociation;