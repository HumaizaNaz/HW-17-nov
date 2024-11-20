import React from 'react'
import Image from 'next/image';

const Card2 = () => {
  return (
   
   
    <div className='flex items-center flex-col gap-8 lg:flex-row justify-around mt-6'>
      <div className='lg:w-3/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-black mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/images/r1.jpg"
          alt="pic1"
          width={200}
          height={300}
          className='mx-auto h-44 w-36' />
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1.500</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 481 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-pink-700 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-3/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-black mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/images/r22.jpg"
          alt="pic2"
          width={200}
          height={300}
          className='mx-auto h-44 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,499</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 741 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-pink-700 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-3/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-black mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/images/r3.jpg"
          alt="pic3"
          width={200}
          height={300}
          className='mx-auto h-44 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,399</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 251 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-pink-700 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

     
      </div>
  
  )
}

export default Card2;