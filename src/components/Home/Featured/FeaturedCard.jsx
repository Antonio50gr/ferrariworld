import React from "react";

const FeaturedCard = ({ img, name, price }) => {
   const scrollToHero = () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-black text-white rounded-4xl p-4 border-2 border-black mb-5">
      <div className="w-full">
        <img src={img} alt={name} className='w-full h-[300px] object-cover rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear' />
      </div>
      <div className="text-center mt-2">
        <h1 className="font-bold text-lg">{name}</h1>
        <div className="text-gray-600">
          <h2>Desde {price}</h2>
        </div>
        <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
        Contacta con nosotros
      </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
