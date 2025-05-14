import React from "react";
import Gallery from "./Gallery";

const Cars = () => {
  return (
    <div className="container pt-24 mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-4xl">
          Nuestros  <span className="text-red-600">Coches</span>
        </h1>
      </div>
  <Gallery />
    </div>
  );
};

export default Cars;
