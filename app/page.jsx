"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/header"; 
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Award from "./components/award"; 
import Testimonial from "./components/testimonial";
import Blog from "./components/blog";
import Contact from "./components/contact";
import ScrollToTop from "./components/scroll";
import Loading from "./components/loading";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [ setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 9000); 
    const removeLoader = setTimeout(() => setIsLoading(false), 4000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
         
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          <Loading /> 
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <Header />
          <Services />
          <Portfolio />
          <Award />
          <Testimonial />
          <Blog />
          <Contact />
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}
