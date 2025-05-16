import React from 'react';

const Hero = ({ title, desc, image, price, items, description,name}) => {
  return (
    <>
    
    <div
      className="w-full h-[800px] mb-4 bg-gray-200 text-center pt-10 relative"
      style={{
        background: `url(${image}) no-repeat center/cover`,
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondni o'qilishi uchun qora qatlam */}
      <div className="relative z-10 text-white">
        <h2 className="text-5xl font-semibold">{title}</h2>
        <p className="text-2xl mt-2">{desc}</p>
        {price && <p className="text-xl mt-2">{price}</p>}
        <ul className="flex gap-4 justify-center mt-4">
          {items?.map((i) => (
            <li key={i} className="text-lg">
              {i}
            </li>
          ))}
        </ul>

        <div className="mt-[30%]">
          <p className="text-[48px] font-medium">{name}</p>
          <p className="text-[18px] font-light">{description}</p>
        
        </div>
        
      </div>
    </div>
    
    </>
  );
};

export default Hero;