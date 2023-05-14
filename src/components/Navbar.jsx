import React, { useState} from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-300 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
                    BRAND.
                </h1>
                <ul className='hidden md:flex'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Support</a></li>
                    <li><a href='/'>Platform</a></li>
                    <li><a href='/'>Pricing</a></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4 uppercase'>Sign In</button>
                <button className='px-6 py-1 uppercase'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                
            </div>
        </div>
        
        <ul className={!nav? 'hidden' : 'absolute bg-zinc-300 w-full px-8 text-center'}>
                    <li className='border-b-2 border-zinc-400 w-full'><a href='/'>Home</a></li>
                    <li className='border-b-2 border-zinc-400 w-full'><a href='/'>About</a></li>
                    <li className='border-b-2 border-zinc-400 w-full'><a href='/'>Support</a></li>
                    <li className='border-b-2 border-zinc-400 w-full'><a href='/'>Platform</a></li>
                    <li className='border-b-2 border-zinc-400 w-full'><a href='/'>Pricing</a></li>
                    <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8
                    py-3 mb-4 uppercase'>Sign In</button>
                <button className='px-8 py-3 uppercase'>Sign Up</button>
                    </div>
        </ul>
    </div>
  )
}

export default Navbar