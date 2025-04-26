import React from 'react'
import SBOA from '/src/assets/SBOA_logo2.png'
import image7 from '/src/assets/image7.png'
import image8 from '/src/assets/image8.png'
import AboutHero from './AboutHero'

function Scholor() {
  return <>
            <AboutHero/>
    <div className='font-poppins'>
      <h1 className='text-[28px] md:text-[35px] text-[#003151] pb-5 font-playfair mx-5 md:mx-16 font-bold text-center md:text-left'>
        SCHOLARSHIP
      </h1>

      <div className='bg-[#D9D9D969] text-center mx-5 md:mx-14 h-[400px] md:h-[330px] leading-9 tracking-wider relative'>
        <img className='mx-auto' src={SBOA} alt="SBOA Logo" />
        <h1 className='text-[#003151] pt-5 font-playfair text-center font-medium text-2xl md:text-xl'>
          Success At Scholarship Examinations
        </h1>
        <p className='text-[#00000085] pt-3 md:leading-9 md:tracking-widest px-5 md:px-28 mb-14 md:mb-20 text-sm'>
          The students proved their flair by achieving spectacular success at Scholarship Exam.
          26 students of Std V and 37 students of Std VIII qualified this exam & are now eligible
          for Govt. Scholarship for the 3 consecutive years.
        </p>
      </div>

      {/* Image Grid Section */}
      <div className='w-full px-5 md:px-0 mt-5 -mt-3 md:-mt-16 mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:ml-80'>
          <img className='w-full h-auto' src={image7} alt="Scholarship Image 1" />
          <img className='w-full h-auto' src={image8} alt="Scholarship Image 2" />
        </div>
      </div>
    </div>
  </>
  
}

export default Scholor