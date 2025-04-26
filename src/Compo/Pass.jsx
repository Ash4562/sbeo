import React from 'react'
import SBOA from '/src/assets/SBOA_logo2.png'
import pencil from '/src/assets/pencil.png'
import user from '/src/assets/user.png'
import L from '/src/assets/lock.png'

function Log() {
  return (
    <div className='min-h-screen font-poppins flex items-center justify-center p-2' style={{ background: 'linear-gradient(180deg, #003151 0%, #000000 100%)' }}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>

        <div className='flex justify-center'>
          <div 
            className='w-full rounded-lg max-w-[300px] md:max-w-[380px] lg:max-w-[450px] p-3 md:p-4 lg:p-5'
            style={{ 
              background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
              border: '1px solid',
              // borderImageSource: 'linear-gradient(180deg, #FFCC33 0%, #00AFEF 100%)',
              borderImageSlice: 1
            }}
          >

            <img className='mx-auto w-20 md:w-24 lg:w-28' src={SBOA} alt="SBOA Logo" />

            <h1 className='font-playfair text-white text-center py-2 text-[14px] md:text-[16px] lg:text-[18px]'>S.B.O.A School Of Aurangabad</h1>

            <h1 className='text-[#FFFFFF6E] text-[18px] md:text-[22px] lg:text-[24px] text-center mb-4'>Forgot Password</h1>

            <form className='space-y-2'>

              <div className='flex'>
                <img className='h-8 md:h-10 py-2 px-2 border-r rounded border-[rgba(255, 255, 255, 0.24)]' style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }} src={user} alt="" />
                <input className='h-8 md:h-10  w-full px-2 md:px-3 rounded text-sm' style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }} type="text" placeholder='Username' />
              </div>

              <div className='flex'>
                <img className='h-8 md:h-10 py-2 px-2 border-r rounded' style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }} src={L} alt="" />
                <input className='h-8 md:h-10 w-full px-2 md:px-3 rounded text-sm' style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }} type="password" placeholder='Password' />
              </div>

            </form>

            <h1 className='text-white text-left text-xs mt-2 mb-3 cursor-pointer'>Enter OTP For Verification</h1>

            <div className='flex justify-between px-10 mb-6'>
              {[...Array(4)].map((_, i) => (
                <div key={i} className='h-8 w-8 md:h-10 md:w-10 rounded' style={{ background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)' }}></div>
              ))}
            </div>

            <button className='w-full py-2 bg-[#00AFEF] text-white rounded text-sm'>Proceed</button>

          </div>
        </div>

        <div className=''>
          <img className='w-full px-6 max-w-[450px] mx-auto' src={pencil} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Log
