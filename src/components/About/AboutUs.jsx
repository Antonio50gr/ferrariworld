import React from "react";
import Vision from "./Vision";
import Approach from "./Approach";

const AboutUs = () => {
  return (
    <div className="container pt-24 mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-4xl">
          Sobre <span className="text-red-600">Nosotros</span>
        </h1>
      </div>
      <Vision />
      <Approach/>
    </div>
  );
};

export default AboutUs;
