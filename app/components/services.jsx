"use client";
import { FaPaintBrush, FaCode, FaLaptop } from "react-icons/fa";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <section id="services" className="bg-black text-white py-20 px-6 md:px-20">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
         
          <div className="flex flex-col">
            <p className="text-gray-400 uppercase tracking-widest text-lg font-open-sans">● Services</p>
            <h2 className="text-4xl md:text-6xl font-bold mt-0 font-outfit">
              What I <span className="text-purple-500">Do</span> .
            </h2>
          </div>

        
          <div className="flex flex-col justify-between space-y-8">
           
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-md border border-purple-600 hover:shadow-purple-600 hover:shadow-lg transition-all duration-300 flex gap-6">
              
              <div className="flex flex-col items-start w-1/4">
                <span className="text-3xl font-bold text-gray-400">01/</span>
                <FaPaintBrush className="text-white text-4xl mt-2" />
              </div>
            
              <div className="flex flex-col justify-start text-left w-3/4">
                <h3 className="text-2xl font-semibold font-outfit">Design</h3>
                <p className="text-gray-400 text-lg mt-1 font-open-sans">
                  Creating modern UI/UX designs that enhance user experience and brand identity.
                </p>
              </div>
            </div>

       
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-md border border-purple-600 hover:shadow-purple-600 hover:shadow-lg transition-all duration-300 flex gap-6">
            
              <div className="flex flex-col items-start w-1/4">
                <span className="text-3xl font-bold text-gray-400">02/</span>
                <FaCode className="text-white text-4xl mt-2" />
              </div>
            
              <div className="flex flex-col justify-start text-left w-3/4">
                <h3 className="text-2xl font-semibold font-outfit">Development</h3>
                <p className="text-gray-400 text-lg mt-1 font-open-sans">
                  Building responsive websites and applications with the latest web technologies.
                </p>
              </div>
            </div>

          
            <div className="bg-gray-900 p-8 rounded-xl shadow-md border border-purple-600 hover:shadow-purple-600 hover:shadow-lg transition-all duration-300 flex gap-6">
            
              <div className="flex flex-col items-start w-1/4">
                <span className="text-3xl font-bold text-gray-400">03/</span>
                <FaLaptop className="text-white text-4xl mt-2" />
              </div>
            
              <div className="flex flex-col justify-start text-left w-3/4">
                <h3 className="text-2xl font-semibold font-outfit">Marketing</h3>
                <p className="text-gray-400 text-lg mt-1 font-open-sans">
                  Digital marketing strategies to increase brand awareness and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-black font-bold py-10 flex flex-wrap justify-center items-center space-x-12">
        
        <div className="text-center group mb-4 sm:mb-0">
          <img
            src="/client-1-light.png"
            alt="Logo 1"
            className="h-16 opacity-60 filter grayscale group-hover:grayscale-0 transition-all"
          />
        </div>

        
        <div className="text-center group mb-4 sm:mb-0">
          <img
            src="/client-2-light.png"
            alt="Logo 2"
            className="h-16 opacity-60 filter grayscale group-hover:grayscale-0 transition-all"
          />
        </div>

        <div className="text-center group mb-4 sm:mb-0 hidden sm:block">
          <img
            src="/client-4-light.png"
            alt="Logo 3"
            className="h-16 opacity-60 filter grayscale group-hover:grayscale-0 transition-all"
          />
        </div>

     
        <div className="text-center group mb-4 sm:mb-0 hidden sm:block">
          <img
            src="/client-5-light.png"
            alt="Logo 4"
            className="h-16 opacity-60 filter grayscale group-hover:grayscale-0 transition-all"
          />
        </div>

    
        <div className="text-center group mb-4 sm:mb-0 hidden sm:block">
          <img
            src="/client-6-light.png"
            alt="Logo 5"
            className="h-16 opacity-60 filter grayscale group-hover:grayscale-0 transition-all"
          />
        </div>
      </section>
    </>
  );
}
