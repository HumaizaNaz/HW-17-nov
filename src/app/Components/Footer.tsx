
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className="bg-black
         text-center p-3">
                 <p className=" text-white text-center text-xs lg:text-base font-serif hover:text-blue-400">Homework Given by: <b>Sir Ali Jawwad</b></p>
                 <p className="lg:text-base text-xs font-serif text-white">Slot: sunday 2:00 p.m to 5:00 p.m</p>

                 <p className="text-white text-center text-md bg-black">Made by:
                 <Link href="https://www.linkedin.com/in/humaiza-naz/" target="_blank"
      className="hover:text-blue-400 cursor-pointer font-extrabold font-serif"
      aria-label="Visit Humaiza Naz's LinkedIn profile">
  Humaiza Naz
</Link>
                </p>
            </div> 
        </div>
    )
}

export default Footer
