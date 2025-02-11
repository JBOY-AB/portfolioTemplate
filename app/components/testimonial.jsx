import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <section  id="testimonial"  className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
        <div className="flex justify-center">
          <img
            src="/testimonial-1.jpg"
            alt="Marcella Leonard"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold font-outfit">Marcella Leonard</h3>
          <p className="text-gray-400 uppercase text-sm font-openSans font-bold mb-2">Creative Director</p>
          <p className="text-gray-300 italic font-openSans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="mt-4 border-t border-gray-700 relative">
            <div className="absolute top-0 left-0 w-1/4 h-0.5 bg-purple-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;