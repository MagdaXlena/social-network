import React from 'react';
import { GrBlockQuote } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import Link from 'next/link';

export default function LeftLayout() {
  return (
    <div className='flex flex-col p-3 items-center h-screen justify-between'>
        <Link href='/'>
            <GrBlockQuote className='w-20 h-20 cursor-pointer bg-gray-50 rounded-full text-black p-3' />
        </Link>
        <Link className='flex flex-row gap-3' href='/'>
            <IoHomeSharp className='' />
            <span>Home</span>
        </Link>
        <button className='bg-orange-500 text-black p-4 rounded-full w-40' > Sign in</button>
    </div>
  )
}
