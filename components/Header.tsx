import Image from 'next/image';
import Link from "next/link";

import React from 'react'

function Header() {
  return (
    <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0
    w-full bg-white z-50 shadow'>
        <Link href='/'>
            <Image src="https://i.ibb.co/McdzmYG/logo-removebg-prieview-new.png"
            width={70}
            height={70}
            alt="logo" />
        </Link>
        <div className='flex items-center space-x-2.5 text-sm'>
            <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600
            hover:bg-transparent hover:text-black cursor-not-allowed' >
                Log In
            </button>
            <button className='button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white
            hover:border-transparent cursor-not-allowed'>
                        Sign Up
            </button>
        </div>
    </header>
  )
}

export default Header