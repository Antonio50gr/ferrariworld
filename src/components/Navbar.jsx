import React, { useState } from 'react'
import { SiFerrari } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu); // Alterno el estado del menú
  };
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
            <div className='md:hidden flex items-center'>
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange}/>
               ) : (
               <RiMenuUnfoldFill size={25} onClick={handleChange}/>
               )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar