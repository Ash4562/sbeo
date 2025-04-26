import React from 'react'
import SBOA from '/src/assets/SBOA_logo2.png'
import pencil from '/src/assets/pencil.png'

function Log() {
  return (
    <div
      className="min-h-screen font-poppins flex px-4 md:px-10 items-center justify-center py-5"
      style={{ background: 'linear-gradient(180deg, #003151 0%, #000000 100%)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-[1200px]">

        {/* Left Side - Form */}
        <div className="flex justify-center w-full">
          <div
            className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[490px] p-5 md:p-8 rounded-xl"
            style={{
              background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
              border: '1px solid',
              borderImageSlice: 1
            }}
          >
            <img className="mx-auto w-20 md:w-32" src={SBOA} alt="SBOA Logo" />

            <h1 className="font-playfair text-white text-center py-3 text-lg md:text-xl">
              S.B.O.A School Of Aurangabad
            </h1>

            <h2 className="text-[#FFFFFF6E] md:mb-28 text-base md:text-[20px] text-center mb-10">
              Password Changed <br />
              Successfully !!
            </h2>

            <button className="w-full py-2 md:py-3 bg-[#00AFEF] text-white rounded text-sm md:text-base">
              Proceed
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[400px] h-auto"
            src={pencil}
            alt="pencil"
          />
        </div>

      </div>
    </div>
  )
}

export default Log
