import React from 'react';

export default function InvestNow() {
  return (
    <div>
      <div className=' flex flex-col gap-y-4 card3 p-6 text-xl '>
        <div className='flex justify-between  uppercase'>
          <p>Senior</p>
          <p>APY: 12%</p>
        </div>
        <div className='flex h-20 w-full px-4 rounded-full border-4 border-primary-100 hover:border-primary-200 shadow-[inset_0_-5px_15px_rgba(0,0,256,0.3)] '>
          <input className='w-full mr-4 bg-transparent' type={'number'}></input>
          <button className='text-primary hover:text-primary-700 font-semibold'>
            max
          </button>
        </div>
        <button className='mt-4 bg-primary h-12  w-full hover:bg-primary-600 text-white py-2 text-center rounded-full'>
          <p>Invest Now</p>
        </button>
      </div>
      <div className=' flex flex-col gap-y-4 card2 p-6 text-xl mt-6 '>
        <div className='flex justify-between uppercase'>
          <p>Junior</p>
          <p>APY: +28%</p>
        </div>
        <div className='flex h-20 w-full px-4 rounded-full border-4 border-primary-100 hover:border-primary-200 shadow-[inset_0_-5px_15px_rgba(0,0,256,0.3)] '>
          <input className='w-full mr-4 bg-transparent' type={'number'}></input>
          <button className='text-primary hover:text-primary-700 font-semibold'>
            max
          </button>
        </div>
        <button className='mt-4 bg-primary h-12  w-full hover:bg-primary-600 text-white py-2 text-center rounded-full'>
          <p>Invest Now</p>
        </button>
      </div>
    </div>
  );
}
