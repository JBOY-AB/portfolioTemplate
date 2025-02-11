"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Fold Twist Abstract",
    category: "VISUAL ART • CONCEPT",
    image: "/hero-avatar.jpg",
  },
  {
    title: "Colors of Circle",
    category: "3D MODELING • VISUAL ART • CONCEPT",
    image: "/testimonial-1.jpg",
  },
  {
    title: "Abstract Flow",
    category: "DIGITAL ART • CONCEPT",
    image: "/hero-avatar.jpg",
  },
  {
    title: "Creative Wave",
    category: "3D RENDER • VISUAL DESIGN",
    image: "/testimonial-1.jpg",
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-16 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase text-gray-400 font-light tracking-wide font-outfit">Portfolio</h2>
        <h1 className="text-4xl md:text-5xl font-bold font-outfit">
          Recent <span className="text-purple-400">Works</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl text-lg font-open-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Navigation Arrows */}
        <div className="flex items-center space-x-4 mt-6 justify-center md:justify-start">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Horizontal Slider */}
        <div className="relative mt-10 overflow-hidden w-full flex justify-center">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="min-w-[80%] md:min-w-[50%] flex-shrink-0 px-2 flex justify-center"
              >
                <div className="bg-gray-900 rounded-2xl p-4 w-full max-w-lg">
                  <div className="relative group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={350}
                      className="rounded-xl w-full transform rotate-90"
                    />
                  </div>
                  <p className="text-gray-400 uppercase mt-4 font-open-sans">
                    {project.category}
                  </p>

                  {/* Title with Left Hover Arrow Effect */}
                  <div className="relative flex items-center group">
                    <ArrowRight 
                      className="absolute left-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300" 
                      size={20} 
                    />
                    <h3 className="text-2xl font-semibold font-outfit pl-6 transition-all group-hover:pl-8">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
