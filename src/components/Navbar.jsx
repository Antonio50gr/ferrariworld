import React, { useState } from 'react';
import { SiFerrari } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu); // Alterna el estado del menú
  };

  const handleLinkClick = () => {
    setMenu(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <header className='fixed w-full z-50 bg-red-600 py-5'>
        <nav className='container flex justify-between items-center'>
            <div className='flex items-center'>
              <Link to="/" className='font-bold text-3xl text-primary flex items-center'>
                <SiFerrari size={50} />
              </Link>
              <Link to="/" className='font-bold text-3xl text-primary ml-4'>
                Ferrari
              </Link>
            </div>

            <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
              <Link to="/" className='hover:text-white transition duration-200 ease-linear' onClick={handleLinkClick}>Home</Link>
              <Link to="/about" className='hover:text-white transition duration-200 ease-linear' onClick={handleLinkClick}>Sobre nosotros</Link>
              <Link to="/cars" className='hover:text-white transition duration-200 ease-linear' onClick={handleLinkClick}>Coches</Link>
            </div>

            <div className='md:hidden flex items-center'>
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} />
               ) : (
               <RiMenuUnfoldFill size={25} onClick={handleChange} />
              )}
            </div>
        </nav>

        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} 
          md:hidden flex flex-col absolute bg-black text-red-600 
          left-0 top-[90px] font-semibold text-2xl text-center pt-8 
          pb-4 gap-8 w-3/4 h-screen rounded-r-3xl 
          transition-all duration-500 ease-in-out`}>
          <Link to="/" className='hover:text-red-400 transition duration-200 ease-linear' onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className='hover:text-red-400 transition duration-200 ease-linear' onClick={handleLinkClick}>Sobre nosotros</Link>
          <Link to="/cars" className='hover:text-red-400 transition duration-200 ease-linear' onClick={handleLinkClick}>Coches</Link>
        </div>
    </header>
  );
}

export default Navbar;
