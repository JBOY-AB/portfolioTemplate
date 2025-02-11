"use client";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="about" className="bg-black text-white min-h-screen p-0 m-0 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 z-50 flex justify-between items-center px-4 md:px-10 py-4 md:py-6 shadow-md w-full">
        <h1 className="text-2xl md:text-3xl text-white font-outfit">Mone</h1>
        <div className="flex space-x-2 md:space-x-4">
          {/* LET'S TALK Button */}
          <a href="#contact">
            <button className="cursor-pointer bg-transparent px-4 md:px-6 py-2 md:py-3 rounded-xl border border-slate-500 text-white font-medium group hover:bg-blue-800 hover:opacity-80 transition-opacity duration-300">
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-white">
                  LET'S TALK •
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-white">
                  LET'S TALK •
                </p>
              </div>
            </button>
          </a>

          {/* MENU Button */}
          <button
            onClick={toggleMenu}
            className={`cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-xl border ${showMenu ? 'bg-white text-black' : 'bg-white text-black'} font-medium group`}
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">MENU •</p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">MENU •</p>
            </div>
          </button>
        </div>
      </header>


      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center space-y-4 z-50">
          <a href="#about" className="text-white text-lg font-open-sans">About</a>
          <a href="#services" className="text-white text-lg font-open-sans">Services</a>
          <a href="#portfolio" className="text-white text-lg font-open-sans">Portfolio</a>
          <a href="#awards" className="text-white text-lg font-open-sans">Awards</a>
          <a href="#testimonial" className="text-white text-lg font-open-sans">Testimonial</a>
          <a href="#blog" className="text-white text-lg font-open-sans">Blog</a>
          <a href="#contact" className="text-white text-lg font-open-sans">Contact</a>
        </div>
      )}

      {/* Main Content Section */}
      <main className="bg-black text-white pt-[90px] z-40 relative px-4 md:px-0">
        <h2 className="text-5xl md:text-9xl mb-12 md:mb-24 mt-24 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-50 font-outfit flex justify-center items-center text-center">
          Arthur Jackson
        </h2>

        <div className="flex justify-center mt-6 md:hidden">
          <Image src="/hero-avatar.jpg" alt="Profile Image" width={384} height={384} className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg object-cover" />
        </div>

        {/* Biography & Skills Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 mt-10 lg:px-20 gap-10">
        
          <div className="md:w-1/3 text-left space-y-6">
            {/* Biography */}
            <div>
              <h3 className="text-lg font-bold font-outfit uppercase">Biography</h3>
              <p className="text-gray-400 mt-2 font-open-sans leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold font-outfit uppercase">Skills</h3>
              <p className="text-gray-400 leading-relaxed font-open-sans">
                • Web Development • UI & UX Design <br />
                • Marketing • SEO • Management
              </p>
            </div>
          </div>

          {/* Profile Image (Hidden in Mobile, Shown in Desktop) */}
          <div className="hidden md:flex md:w-1/3 justify-center mt-6 md:mt-0">
            <Image src="/hero-avatar.jpg" alt="Profile Image" width={384} height={384} className="w-80 h-80 rounded-full shadow-lg object-cover" />
          </div>

       
          <div className="flex flex-row md:flex-col justify-center md:justify-start items-center md:text-right text-center gap-8">
            <div className="md:w-[250px]">
              <h3 className="text-lg uppercase text-white font-open-sans">Projects Done</h3>
              <p className="text-4xl text-white">432</p>
            </div>
            <div className="md:w-[250px]">
              <h3 className="text-lg uppercase text-white font-open-sans">Years of Experience</h3>
              <p className="text-4xl text-white">13+</p>
            </div>
            <div className="md:w-[250px]">
              <h3 className="text-lg uppercase text-white font-open-sans">Worldwide Clients</h3>
              <p className="text-4xl text-white">900</p>
            </div>
          </div>

        </div>

        {/* Social Media Icons (Placed before Services Section) */}
        <div className="flex flex-col items-center md:items-start ml-[90px] mt-0">
          <h3 className="text-lg uppercase mb-4 font-open-sans">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="cursor-pointer bg-gray-800 p-3 rounded-full border border-slate-500 text-white group hover:bg-blue-800 hover:opacity-80 transition-opacity duration-300">
              <FaFacebookF size={18} className="text-white" />
            </a>
            <a href="#" className="cursor-pointer bg-gray-800 p-3 rounded-full border border-slate-500 text-white group hover:bg-blue-800 hover:opacity-80 transition-opacity duration-300">
              <FaTwitter size={18} className="text-white" />
            </a>
            <a href="#" className="cursor-pointer bg-gray-800 p-3 rounded-full border border-slate-500 text-white group hover:bg-blue-800 hover:opacity-80 transition-opacity duration-300">
              <FaInstagram size={18} className="text-white" />
            </a>
          </div>
        </div>

      </main>    </div>
  );
}
