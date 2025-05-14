import React from "react";

// Imágenes importadas desde src/assets/img
import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";
import car5 from "../../assets/img/car5.jpg";
import car6 from "../../assets/img/car6.jpg";
import car7 from "../../assets/img/car7.jpg";
import car8 from "../../assets/img/car8.jpg";
import car9 from "../../assets/img/car9.jpg";
import car10 from "../../assets/img/car10.jpg";
import car11 from "../../assets/img/car11.jpg";
import car12 from "../../assets/img/car12.jpg";
import car13 from "../../assets/img/car13.jpg";
import car14 from "../../assets/img/car14.jpg";
import car15 from "../../assets/img/car15.jpg";
import car16 from "../../assets/img/car16.jpg";
import car17 from "../../assets/img/car17.jpg";
import car18 from "../../assets/img/car18.jpg";
import car19 from "../../assets/img/car19.jpg";
import car20 from "../../assets/img/car20.jpg";
import car21 from "../../assets/img/car21.jpg";


const coches = [
  {
    nombre: "Ferrari SF90 Stradale",
    imagen: car1,
    año: 2024,
    precio: "483.000 €",
    cv: "986 CV",
  },
  {
    nombre: "Ferrari SF90 Spider",
    imagen: car2,
    año: 2024,
    precio: "529.000 €",
    cv: "986 CV",
  },
  {
    nombre: "Ferrari 296 GTB",
    imagen: car3,
    año: 2023,
    precio: "315.000 €",
    cv: "819 CV",
  },
  {
    nombre: "Ferrari 296 GTS",
    imagen: car4,
    año: 2024,
    precio: "346.000 €",
    cv: "819 CV",
  },
  {
    nombre: "Ferrari Roma",
    imagen: car5,
    año: 2024,
    precio: "227.500 €",
    cv: "612 CV",
  },
  {
    nombre: "Ferrari Roma Spider",
    imagen: car6,
    año: 2024,
    precio: "239.000 €",
    cv: "612 CV",
  },
  {
    nombre: "Ferrari Portofino M",
    imagen: car7,
    año: 2023,
    precio: "222.000 €",
    cv: "612 CV",
  },
  {
    nombre: "Ferrari F8 Tributo",
    imagen: car8,
    año: 2023,
    precio: "258.000 €",
    cv: "710 CV",
  },
  {
    nombre: "Ferrari F8 Spider",
    imagen: car9,
    año: 2023,
    precio: "278.000 €",
    cv: "710 CV",
  },
  {
    nombre: "Ferrari 812 GTS",
    imagen: car10,
    año: 2023,
    precio: "391.000 €",
    cv: "789 CV",
  },
  {
    nombre: "Ferrari 812 Competizione",
    imagen: car11,
    año: 2022,
    precio: "552.000 €",
    cv: "830 CV",
  },
  {
    nombre: "Ferrari 812 Competizione A",
    imagen: car12,
    año: 2022,
    precio: "644.000 €",
    cv: "830 CV",
  },
  {
    nombre: "Ferrari Purosangue",
    imagen: car13,
    año: 2024,
    precio: "368.000 €",
    cv: "715 CV",
  },
  {
    nombre: "Ferrari Monza SP1",
    imagen: car14,
    año: 2023,
    precio: "1.564.000 €",
    cv: "809 CV",
  },
  {
    nombre: "Ferrari Monza SP2",
    imagen: car15,
    año: 2023,
    precio: "1.564.000 €",
    cv: "809 CV",
  },
  {
    nombre: "Ferrari Daytona SP3",
    imagen: car16,
    año: 2023,
    precio: "2.050.000 €",
    cv: "829 CV",
  },
  {
    nombre: "Ferrari F80 ",
    imagen: car17,
    año: 2024,
    precio: "3.300.000 €",
    cv: "1.200 CV",
  },
  {
    nombre: "Ferrari 12Cilindri",
    imagen: car18,
    año: 2024,
    precio: "384.000 €",
    cv: "819 CV",
  },
  {
    nombre: "Ferrari 12Cilindri Spider",
    imagen: car19,
    año: 2024,
    precio: "428.000 €",
    cv: "819 CV",
  },
  {
    nombre: "Ferrari LaFerrari Aperta",
    imagen: car20,
    año: 2016,
    precio: "4.600.000 €",
    cv: "949 CV",
  },
  {
  nombre: "Ferrari LaFerrari",
  imagen: car21,
  año: 2013,
  precio: "3.000.000 €",
  cv: "963 CV",
}

];

const Gallery = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-10 uppercase tracking-wide">
          Galería Ferrari
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coches.map((coche, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={coche.imagen}
                alt={coche.nombre}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {coche.nombre}
                </h3>
                <p className="text-zinc-300 text-sm">Año: {coche.año}</p>
                <p className="text-zinc-300 text-sm">Potencia: {coche.cv}</p>
                <p className="text-red-500 text-lg font-bold mt-2">
                  {coche.precio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
