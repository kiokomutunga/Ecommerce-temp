import {useState, useEffect} from 'react';

function HeroSection (){



    return (
        <section className="relative h-[600px] overflow-hidden">
        <div
        className={`absolute inset-0 flex h-full ${
          isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
          </div>
        ))}
      </div>

        </section>


    );

}

export default HeroSection;