import React from "react";

const FeaturedCard = ({ img, name, price }) => {
  return (
    <div className="p-4 border-2 border-black mb-5">
      <div className="w-full">
        <img src={img} alt={name} className='w-full h-[300px] object-cover rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear' />
      </div>
      <div className="text-center mt-2">
        <h1 className="font-bold text-lg">{name}</h1>
        <div className="text-gray-600">
          <h2>Desde ${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
