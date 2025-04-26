import React from 'react'
import SBOA from '/src/assets/SBOA_logo2.png'
import pencil from '/src/assets/pencil.png'
import user from '/src/assets/user.png'
import L from '/src/assets/lock.png'

function Log() {
  return (
    <div className='min-h-screen font-poppins flex px-10 items-center justify-center py-10 px-4' 
      style={{ background: 'linear-gradient(180deg, #003151 0%, #000000 100%)' }}>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-[1200px]'>

        {/* Left Side - Form */}
        <div className='flex justify-center w-full'>
          <div className='w-full max-w-[400px] md:max-w-[450px] lg:max-w-[490px] p-6 md:px-10 rounded-xl' 
            style={{ 
              background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
              border: '1px solid',
              // borderImageSource: 'linear-gradient(180deg, #FFCC33 0%, #00AFEF 100%)',
              borderImageSlice: 1
            }}>

            <img className='mx-auto w-24 md:w-32' src={SBOA} alt="SBOA Logo" />

            <h1 className='font-playfair text-white text-center py-3 text-lg md:text-xl'>
              S.B.O.A School Of Aurangabad
            </h1>

            <h2 className='text-[#FFFFFF6E] text-[24px] text-center mb-5'>Forgot Password</h2>

            <form className='space-y-4 pb-28'>
              <div className='flex items-center '>
               
                <input className='h-10 md:h-12 w-full px-3 rounded text-sm' 
                  style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }} 
                  type="text" placeholder='Username' />
              </div>

              <div className='flex items-center '>
                
                <input className='h-10 md:h-12 w-full px-3 rounded text-sm' 
                  style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }} 
                  type="password" placeholder='Password' />
              </div>
            </form>



            <button className='w-full py-2 md:py-3 bg-[#00AFEF] text-white rounded text-sm md:text-base'>
              Proceed
            </button>

          </div>
        </div>

        {/* Right Side - Image */}
        <div className='flex justify-center'>
          <img className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[500px] h-auto' src={pencil} alt="pencil" />
        </div>

      </div>
    </div>
  )
}

export default Log
