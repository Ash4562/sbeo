import React from 'react'
import AL from '/src/assets/alumniimg.png'
import img from "../assets/bg-alumniimg.png";

const AlumniStudents = () => {
  return <>
    <div
        // className="relative h-screen w-full bg-cover bg-center bg-[url(`/NCCBGSmallScreen.png`)] md:url-[url('/NCCBG.png')]"
        // style={{ backgroundImage: `url(/NCCBG.png)` }}
        style={{ backgroundImage: `url(${img})` }}  className="relative h-screen w-full bg-cover bg-center"
      >
        <p className="text-4xl font-playfair z-40 text-center text-white items-center justify-center flex md:hidden">
          CO - CURRICULAR
        </p>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair"></div>
      </div>
      
     <div className='font-playfair py-9 tracking-[5%]  '>
            
            <div className='grid sm:grid-cols-3 pt-16 grid-rows-1 text-center sm:grid-rows-2 w-full px-16 sm:px-24 gap-5'> 
                <div  className=''>
                    <img className='mb-2 bg-center px-5 ' src={AL} alt="" />
                    <div className='relative bottom-24 text-white'>
                    <p className='text-[22px] '> (LILLY JOHNSON)</p>
                    <p className='text-[13px]'> Software Engineer</p>
                    <h2 className='text-[#FFCC33] text-[12px]'>Passout Year - 2010 </h2>
                    </div>
                   
                </div>
                <div  className=''>
                    <img className='mb-2 bg-center px-5 ' src={AL} alt="" />
                    <div className='relative bottom-24 text-white'>
                    <p className='text-[22px] '> (LILLY JOHNSON)</p>
                    <p className='text-[13px]'> Software Engineer</p>
                    <h2 className='text-[#FFCC33] text-[12px]'>Passout Year - 2010 </h2>
                    </div>
                   
                </div>

                <div  className=''>
                    <img className='mb-2 bg-center px-5 ' src={AL} alt="" />
                    <div className='relative bottom-24 text-white'>
                    <p className='text-[22px] '> (LILLY JOHNSON)</p>
                    <p className='text-[13px]'> Software Engineer</p>
                    <h2 className='text-[#FFCC33] text-[12px]'>Passout Year - 2010 </h2>
                    </div>
                   
                </div>
                <div  className=''>
                    <img className='mb-2 bg-center px-5 ' src={AL} alt="" />
                    <div className='relative bottom-24 text-white'>
                    <p className='text-[22px] '> (LILLY JOHNSON)</p>
                    <p className='text-[13px]'> Software Engineer</p>
                    <h2 className='text-[#FFCC33] text-[12px]'>Passout Year - 2010 </h2>
                    </div>
                   
                </div>
                <div  className=''>
                    <img className='mb-2 bg-center px-5 ' src={AL} alt="" />
                    <div className='relative bottom-24 text-white'>
                    <p className='text-[22px] '> (LILLY JOHNSON)</p>
                    <p className='text-[13px]'> Software Engineer</p>
                    <h2 className='text-[#FFCC33] text-[12px]'>Passout Year - 2010 </h2>
                    </div>
                   
                </div>
                <div  className=''>
                    <img className='mb-2 bg-center px-5 ' src={AL} alt="" />
                    <div className='relative bottom-24 text-white'>
                    <p className='text-[22px] '> (LILLY JOHNSON)</p>
                    <p className='text-[13px]'> Software Engineer</p>
                    <h2 className='text-[#FFCC33] text-[12px]'>Passout Year - 2010 </h2>
                    </div>
                   
                </div>

                </div>
                
                
            </div>
       
                        </>
  
}

export default AlumniStudents