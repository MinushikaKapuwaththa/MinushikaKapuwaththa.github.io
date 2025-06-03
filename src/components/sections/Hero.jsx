import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code, Bug, FlaskConical } from 'lucide-react';
import Button from '../Button';
import { HeroImg } from '../../assets';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const parallaxY = -scrollY * 0.5;

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-850 transition-colors duration-300"
    >
      {/* Animated Background Elements - Enhanced visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 rotate-12 scale-125 sm:scale-150"> {/* Adjusted grid columns and scale for mobile */}
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="h-24 sm:h-32 w-full bg-blue-500/30 dark:bg-blue-400/25 rounded-full blur-md"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"> {/* Improved responsive padding */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 sm:py-20 gap-8 sm:gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={{ y: parallaxY }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div className="inline-flex items-center space-x-2 mb-3 md:mt-0 mt-16">
                  <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
                  <motion.span
                    className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Hello, I'm
                  </motion.span>
                </motion.div>

                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 dark:text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Minushika<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Kapuwaththa
                  </span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Crafting robust testing frameworks and ensuring flawless user experiences through comprehensive quality assurance.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1rf2usOZQeu-_qM9nbaflzxD44nbWlhFM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      'https://drive.google.com/file/d/1rf2usOZQeu-_qM9nbaflzxD44nbWlhFM/view?usp=sharing',
                      '_blank'
                    );
                  }}
                  className="group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
                  Download CV
                </Button>

                <Button
                  variant="outline"
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  size="lg"
                  className="group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={HeroImg}
                  alt="Minushika Kapuwaththa"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] object-contain"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/0"></div>
              </motion.div>

              {/* Floating Icons - Better positioned for mobile */}
              <motion.div
                className="absolute -top-4 -left-6 sm:-top-4 left-5 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-12 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl z-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <Bug className="h-6 w-6 sm:h-8 sm:w-8 text-teal-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 sm:-bottom-12 left-1/4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl z-20"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                <FlaskConical className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500" />
              </motion.div>

              {/* Background Decorative Elements - Improved visibility */}
              <motion.div
                className="absolute -top-8 -left-8 w-40 sm:w-48 h-40 sm:h-48 bg-blue-300/70 dark:bg-blue-700/40 rounded-full -z-10 blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 sm:w-64 h-48 sm:h-64 bg-teal-300/70 dark:bg-teal-700/40 rounded-full -z-10 blur-md"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator with Smooth Scrolling - Better positioned for mobile */}
        <motion.div
          className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="animate-bounce w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-xl transition-all duration-300 group border border-gray-300 dark:border-gray-600 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;