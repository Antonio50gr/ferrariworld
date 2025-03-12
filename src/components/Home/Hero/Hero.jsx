import React from "react";
import img from "../../../assets/img/imgferrari1.jpg";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Sección Hero */}
      <div className="relative h-screen w-full">
        {/* Imagen de fondo */}
        <img
          src={img}
          alt="Ferrari"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Capa oscura para mejorar visibilidad */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Contenido encima de la imagen */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 ">
          <h1 className="text-4xl lg:text-4xl font-bold leading-tight">
          Desde los clásicos icónicos hasta las últimas innovaciones en velocidad y diseño. Explora nuestra colección y siente la pasión por Ferrari.
          </h1>
        
          <div className="flex gap-8 mt-6">
            <button className="bg-red-600 text-2xl py-6 px-12 rounded-md hover:scale-95 transition duration-150 ease-out">
              Explora la gama ferrari 
            </button>
            <button className="border-2 border-red-600 text-2xl py-6 px-12 rounded-md hover:bg-amber-600 transition duration-200 ease-linear">
              Ver coches
            </button>
          </div>
        </div>
      </div>



      {/* Nueva Sección */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          Descubre Nuestra Colección
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Explora nuestra amplia gama de modelos Ferrari, desde los clásicos hasta los más recientes, con un diseño inigualable y un rendimiento excepcional.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold">Modelos Clásicos</h3>
            <p className="text-gray-600 mt-2">Revive la historia con nuestros modelos icónicos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold">Nuevas Ediciones</h3>
            <p className="text-gray-600 mt-2">Descubre los últimos lanzamientos de Ferrari.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold">Personalización</h3>
            <p className="text-gray-600 mt-2">Diseña tu Ferrari a medida.</p>
          </div>
        </div>
      </section>
       {/* Nueva Sección */}



       
    </div>
  );
};

export default Hero;
