import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-red-500 text-xl font-bold">Ferrari</h3>
          <p className="mt-2 text-sm">
            Ferrari es una de las marcas más icónicas del mundo automovilístico,
            reconocida por su innovación, diseño y alto rendimiento. Desde su
            fundación en 1939, ha sido sinónimo de velocidad, lujo y pasión por
            la competición.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Páginas</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-white transition duration-200">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-white transition duration-200"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/cars"
              className="hover:text-white transition duration-200"
            >
              Coches
            </Link>

          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Ferrari" className="hover:text-white text-xl">
              <FaFacebook />
            </a>
            <a href="https://x.com/ScuderiaFerrari?" className="hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/ferrari/" className="hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Ferrari. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
