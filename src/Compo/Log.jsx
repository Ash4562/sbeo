import React from 'react'
import SBOA from '/src/assets/SBOA_logo2.png'
import pencil from '/src/assets/pencil.png'
import user from '/src/assets/user.png'
import L from '/src/assets/lock.png'

function Log() {
  return (
    <div className='min-h-screen font-poppins flex items-center justify-center p-4' style={{ background: 'linear-gradient(180deg, #003151 0%, #000000 100%)' }}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

        <div className='flex justify-center'>
          <div
            className='w-full max-w-[350px] md:max-w-[450px] p-4 py-6 rounded-lg'
            style={{
              borderRadius: "22px",
              background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
              border: '1px solid',
              borderImageSlice: 1
            }}
          >

            <img className='mx-auto w-20 md:w-24' src={SBOA} alt="SBOA Logo" />

            <h1 className='font-playfair text-white text-center py-2 text-[14px] md:text-[16px]'>S.B.O.A School Of Aurangabad</h1>

            <div className='flex justify-center gap-3 mb-3 flex-wrap'>
              <button className='bg-white px-4 py-1 rounded text-xs'>Sign up</button>
              <button className='bg-[#00AFEF] px-4 py-1 rounded text-white text-xs'>Login</button>
            </div>

            <form className='space-y-2 px-2 md:px-10'>
              <input className='h-9 w-full px-3 rounded text-sm' style={{ background: 'rgba(217, 217, 217, 0.2)' }} type="text" placeholder='Select School' />
              <input className='h-9 w-full px-3 rounded text-sm' style={{ background: 'rgba(217, 217, 217, 0.2)' }} type="text" placeholder='Select Year' />

              <div className='flex'>
                <img className='h-9 py-2 px-3 border-r rounded border-[rgba(255, 255, 255, 0.24)]' style={{ background: 'rgba(217, 217, 217, 0.2)' }} src={user} alt="" />
                <input className='h-9 w-full px-3 rounded text-sm' style={{ background: 'rgba(217, 217, 217, 0.2)' }} type="text" placeholder='Username' />
              </div>

              <div className='flex'>
                <img className='h-9 py-2 px-3 border-r rounded border-[rgba(255, 255, 255, 0.24)]' style={{ background: 'rgba(217, 217, 217, 0.2)' }} src={L} alt="" />
                <input className='h-9 w-full px-3 rounded text-sm' style={{ background: 'rgba(217, 217, 217, 0.2)' }} type="password" placeholder='Password' />
              </div>
            </form>

            <h1 className='text-[#FFCC33] text-right text-xs mt-1 mb-3 pr-2 md:pr-10 cursor-pointer'>Forgot password?</h1>

            <button className='w-full mx-auto py-2 bg-[#00AFEF] text-white rounded text-sm'>Login</button>

          </div>
        </div>

        <div className='flex justify-center'>
          <img className='h-[350px] md:h-[450px] w-auto' src={pencil} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Log
