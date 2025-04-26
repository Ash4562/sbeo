import React from 'react'
import SBOA from '/src/assets/SBOA_logo2.png'
import image1 from '/src/assets/image1.png'
import image2 from '/src/assets/image2.png'
import image4 from '/src/assets/image4.png'
import AboutHero from './AboutHero'

function StdX() {
  return <>
    <div className='font-poppins'>
            <AboutHero/>
      <section>
        <h1 className='text-[28px] md:text-[35px] text-[#003151] pb-5 font-playfair mx-5 md:mx-16 font-bold text-center md:text-left'>
          HOMIBHABA EXAMINATION
        </h1>

        <div className='bg-[#D9D9D969] text-center mx-5 md:mx-14 leading-9 tracking-wider pt-5 pb-20 '>
          <img className='mx-auto' src={SBOA} alt="" />
          <h1 className='text-[#003151] font-playfair pt-5 text-2xl'>
            Dr. HomiBhabha Young Scientist exam for Std VI & Std IX
          </h1>
          <p className='text-[#00000085] pt-3 px-5 md:px-16 text-sm md:text-[13px] tracking-wider leading-8'>
            Mumbai Science Teacher's Association conducts Dr. HomiBhabha Young Scientist Exam for Std VI & Std IX. The aim of the exam is to make the next generation students well versed and aware of the scientific developments globally so that they contribute effectively to the scientific research and environment, enhancement within the communities. Fifteen Students of Std IX and Seven Students of Std VI qualified for Second Level Practical Exam.
          </p>
        </div>

        <div className='grid grid-cols-1  -mt-11 sm:grid-cols-3 gap-5 px-5 md:px-36  mb-24'>
          <img className='w-full' src={image1} alt="" />
          <img className='w-full' src={image2} alt="" />
          <img className='w-full' src={image4} alt="" />
        </div>
      </section>
    </div>
  </>
  
}

export default StdX;