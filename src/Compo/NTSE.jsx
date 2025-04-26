import React from 'react'
import Stud from '/src/assets/stud1.png'
import Stud2 from '/src/assets/stud2.png'
import SBOA from '/src/assets/SBOA_logo2.png'
import AboutHero from './AboutHero'

function NTSE() {
  return <>

      <AboutHero/>
    <div className='my-5'>
    <h1 className='text-[35px] text-[#003151] pb-5 font-playfair mx-5 md:mx-10 font-medium text-center md:text-left'>
      NATIONAL TALENT SEARCH EXAMINATION (NTSE)
    </h1>

    <div className="py-10 px-5 bg-[#E0F5FD6B] mx-5 md:mx-10 my flex flex-col lg:flex-row gap-10">

     
      <div className="grid grid-rows-2 gap-10 text-center sm:pl-12">

        {/* Student 1 */}
        <div className="relative  ">
          <img className='h-[] w-[] object-cover' src={Stud} alt="Kabra Anshul Govind" />
          <div className="absolute bottom-0 w-full text-white py-2" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #000000 70%)' }}
          >
            <h1 className="text-sm font-semibold">Kabra Anshul Govind</h1>
            <h2 className="text-sm text-[#FFCC33]">Secured - 92.4 %</h2>
          </div>
        </div>

        {/* Student 2 */}
        <div className="relative">
          <img className='h-[] w-[900px] object-cover' src={Stud2} alt="Gharse Indrajeet Bhushan" />
          <div className="absolute bottom-0 w-full text-white py-2" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #000000 70%)' }}

          >
            <h1 className="text-sm font-semibold">Gharse Indrajeet Bhushan</h1>
            <h2 className="text-sm text-[#FFCC33]">Secured - 90.6 %</h2>
          </div>
        </div>

      </div>

      {/* Content Section */}
      <div className='px-2  text-center lg:text-left'>
        <img className='mx-auto lg:mx-0 ml-24' src={SBOA} alt="" />
        <h1 className='text-[#003151] text-[25px] md:text-[30px] font-playfair ml-5 leading-tight'>NTSE <br /> National Talent Search Examination</h1>
        <p className='text-[#0000008F] leading-[35px] tracking-[1px] pt-5 text-[16px] sm:ml-5 sm:mr-16 md:text-[18px]'>
          One of the Prestigious Exam conducted every year by the Govt. of India. 10 students of our school have successfully cleared National Talent Search Examination first level and they will receive one time scholarship of rupees 1000/-. Master Indrajeet Garse and Master Anshul Kabra have successfully cleared both the Levels and are eligible for the scholarship till his Post Graduation.
        </p>
      </div>

    </div>
  </div>
  </>
}

export default NTSE