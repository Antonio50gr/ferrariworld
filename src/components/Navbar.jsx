import React from 'react'
import { SiFerrari } from "react-icons/si";
const Navbar = () => {
  return (
    <header className='fixed w-full z-10 bg-red-600 py-5'>
        <nav className='container flex justify-between items-center'>
            <div className='flex items-center gap-2'>
            <SiFerrari size={50} />
                <a href="" className='font-bold text-3xl text-primary'>Ferrari</a>
            </div>
            <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
                <a href="" className='hover:text-white transition duration-200 ease-linear'>Home</a>
                <a href="" className='hover:text-white transition duration-200 ease-linear'>About us</a>
                <a href="" className='hover:text-white transition duration-200 ease-linear'>Coches</a>
                <a href="" className='hover:text-white transition duration-200 ease-linear'>Servicios</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar