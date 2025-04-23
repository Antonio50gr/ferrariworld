import React from 'react';
import img2 from '/src/assets/img/sobrenosotros.jpg';

const Approach = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-5 min-h-screen text-center lg:text-left px-5">
      {/* Imagen a la derecha en pantallas grandes */}
      <div className="w-full md:w-full lg:w-1/2 flex justify-center">
        <img src={img2} alt="Sobre Nosotros" className="rounded-lg w-full md:w-3/4 lg:w-auto mx-auto" />
      </div>

      {/* Texto a la izquierda en pantallas grandes */}
      <div className="w-full md:w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Nuestra Visión</h1>
        <h2 className="font-semibold text-lg lg:text-2xl">
          En Ferrari, impulsamos la innovación y el rendimiento para redefinir los límites de la automoción.
        </h2>
        <p className="text-sm lg:text-base">
          Con una historia marcada por la excelencia, seguimos evolucionando para ofrecer experiencias únicas en el mundo del automovilismo.
        </p>
        <p className="text-sm lg:text-base">
          Nuestra misión es superar las expectativas con cada diseño, combinando tecnología de vanguardia con la pasión por la velocidad.
        </p>
      </div>
    </div>
  );
};

export default Approach;
