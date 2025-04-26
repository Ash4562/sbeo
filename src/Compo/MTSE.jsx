import React from 'react'
import Mtse1 from '../assets/MtseImg.png'
import Mtse2 from '../assets/MtseImg2.png'
import SBOA from '../assets/SBOA_logo2.png'
import AboutHero from './AboutHero'

function MTSE() {
  return <>

            <AboutHero/>
    <div className='my-5 font-playfair h-auto lg:h-screen mb-24'>
      <h1 className='text-[28px] sm:text-[32px] md:text-[35px] text-[#003151] pb-5 mx-5 md:mx-10 font-medium text-center md:text-left'>
        Maharashtra Talent Search Exam (MTSE)
      </h1>

      <div className="py-10 px-5 bg-[#E0F5FD6B] mx-5 md:mx-10 flex flex-col lg:flex-row gap-10">

        {/* Images Section */}
        <div className="grid grid-rows-2 gap-10 text-center sm:pl-0 lg:pl-12">
          {/* Student 1 */}
          <div className="relative">
            <img 
              className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[900px] object-cover mx-auto lg:mx-0' 
              src={Mtse1} 
              alt="Kabra Anshul Govind" 
            />
          </div>

          {/* Student 2 */}
          <div className="relative">
            <img 
              className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[900px] object-cover mx-auto lg:mx-0' 
              src={Mtse2} 
              alt="Gharse Indrajeet Bhushan" 
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='px-2 text-center lg:text-left'>
          <img className='mx-auto lg:ml-4 w-[100px] sm:w-[120px] md:w-[140px]' src={SBOA} alt="" />
          <h1 className='text-[#003151] text-[22px] sm:text-[25px] md:text-[30px] sm:ml-7 font-playfair mt-4 leading-tight'>
            MTSE
          </h1>
          <h2 className='text-[#003151] text-[18px] sm:text-[20px] md:text-[22px] font-playfair pt-2 px-3 md:ml-5 md:mr-40 leading-[28px] sm:leading-[32px]'>
            Stunning performance of the students at MTSE Examination has added a feather in the school cap.
          </h2>
          <p className='text-[#0000008F] leading-[28px] sm:leading-[32px] md:leading-[35px] tracking-wide pt-5 text-[15px] sm:text-[16px] md:text-[18px] px-3 sm:px-5 md:ml-5 md:mr-16'>
            The Maharashtra Talent Search Examination (MTSE) is a prestigious state-level exam designed to identify and nurture talented students in Maharashtra. Conducted by the Centre for Talent Search and Excellence at Nowrosjee Wadia College, Pune, since 1992, MTSE aims to prepare students for future competitive exams by enhancing their academic competencies.
          </p>
        </div>

      </div>
    </div>
    </>
}

export default MTSE