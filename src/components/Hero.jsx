import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-xl sm:text-2xl md:text-3xl text-[#00df9a] font-bold p-2">
          Growing with Data Analytics
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with Data{" "}
        </h1>
        <div className="flex justify-center items-center">
          <p className=" text-xl md:text-5xl sm:text-4xl font-bold py-4">
            Fast , Flexible Financing for
          </p>
       

<TypeAnimation
      sequence={[
      
        'BTB',
        1000, 
        'BTC',
        1000,
        'SASS',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
      className="text-xl md:text-5xl sm:text-4xl font-bold py-4 pl-3"
    />



        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero?</p>
       <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:text-[#00df9a] hover:bg-white hover:ease-in duration-100">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
