import img from '/src/assets/img.png'
import React from 'react'

const AlumniEnroll = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center font-playfair flex items-center justify-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="bg-white p-8 shadow-lg w-full max-w-[600px] h-[530px] flex mx-6 flex-col justify-between">
          <h2 className="text-center text-lg sm:text-xl mb-4">ENROLL ALUMNI</h2>
          <form action="" className="flex flex-col justify-between h-full text-[10px] sm:text-sm">
            <input
              className="bg-[#D9D9D969] text-[#00000063] w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Enter Name"
            />
            <input
              className="bg-[#D9D9D969] text-[#00000063] w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Year of Passout"
            />
            <input
              className="bg-[#D9D9D969] text-[#00000063] w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Current Designation"
            />
            <input
              className="bg-[#D9D9D969] text-[#00000063] w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Graduate & Undergraduate Stream"
            />
            <input
              className="bg-[#D9D9D969] text-[#00000063] w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Graduation University"
            />
            <input
              className="bg-[#D9D9D969] text-[#00000063] w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Upload Photo"
            />
            <button className="w-[200px] py-3 mx-auto rounded-lg bg-[#00AFEF] text-white" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AlumniEnroll;