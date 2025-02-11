"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

  
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

  
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6  bg-gray-500/50 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                } hover:bg-gray-500/40 z-50`} 
        >
            <FaArrowUp className="text-2xl" />
        </button>




    );
}
