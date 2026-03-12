import React from 'react';

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="w-[320px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="w-full h-[200px]">
        <img 
          src={imgSrc} 
          alt={venueName} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 text-left">
        <h3 className="font-serif text-[#704F54] text-xl font-bold m-0">
          {venueName}
        </h3>
      </div>
    </div>
  );
}