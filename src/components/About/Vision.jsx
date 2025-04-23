import React from "react";
import img from "/src/assets/img/imgferrari2.jpg";

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-center items-start gap-5 mt-16 px-5">
      {/* Imagen arriba en móviles/tablets, izquierda en pantallas grandes */}
      <div className="w-full md:w-full lg:w-1/2 flex justify-center">
        <img src={img} alt="Ferrari" className="rounded-lg w-full md:w-3/4 lg:w-auto mx-auto" />
      </div>
      
      {/* Texto debajo en móviles/tablets, a la derecha en pantallas grandes */}
      <div className="w-full md:w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
        <h2 className="font-semibold text-lg lg:text-2xl">
          En Ferrari, la pasión por la excelencia y la innovación nos impulsa a redefinir los límites del rendimiento automovilístico.
        </h2>
        <p className="text-sm lg:text-base">
          Desde nuestra fundación en 1939 por Enzo Ferrari, hemos sido sinónimo de velocidad, lujo y una herencia incomparable en el mundo del automovilismo.
        </p>
        <p className="text-sm lg:text-base">
          Nuestra misión es crear vehículos que combinan ingeniería de vanguardia con un diseño icónico, brindando a nuestros clientes una experiencia de conducción inigualable.
        </p>
        <p className="text-sm lg:text-base">
          En Ferrari, no solo fabricamos automóviles: creamos sueños sobre ruedas.
        </p>
      </div>
    </div>
  );
};

export default Vision;
