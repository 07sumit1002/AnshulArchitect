import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import m6 from "../../assets/project1/m6.jpeg";
import m7 from "../../assets/project4/m5.png";
import m8 from "../../assets/project1/m3.jpeg";

const processSteps = [
  {
    number: "01",
    title: "Visit our office",
    description: "",
    image: "image.png",
  },
  {
    number: "02",
    title: "Preliminary discussion and conceptual design",
    description: "",
    image: "bg-2.jpg",
  },
  {
    number: "03",
    title: "Begin The Detailed Designing Process",
    description: "",
    image: "bg-4.jpg",
  },
  {
    number: "04",
    title: "Project Execution",
    description: "",
    image: "bg-5.jpg",
  },
];

const heroSlides = [
  {
    id: 9,
    image: m6,
    title: "Designing Dreams, Building Realities",
    subtitle: "Turning your vision into living form.",
  },
  {
    id: 1,
    image: "/homepage/project3.jpeg",
    title: "Where Vision Meets Structure",
    subtitle: "From concept to creation — reimagining every detail.",
  },
  {
    id: 10,
    image: m7,
    title: "Timeless Designs, Modern Institutions",
    subtitle: "Elevating institutional designs with iconic spaces.",
  },
  // {
  //   id: 4,
  //   image: '/homepage/hero5.jpeg',
  //   title: 'Spaces That Inspire and Endure',
  //   subtitle: 'Crafting architectural legacies for generations to come.'
  // },
  // {
  //   id: 5,
  //   image: '/homepage/hero12.jpeg',
  //   title: 'Innovative Concepts, Lasting Impact',
  //   subtitle: 'Redefining spaces with creativity and purpose.'
  // },
  // {
  //   id: 6,
  //   image: '/homepage/hero13.jpeg',
  //   title: 'Architecture for Modern Life',
  //   subtitle: 'Designing functional spaces for evolving needs.'
  // },
  {
    id: 2,
    image: "/homepage/hero1.jpeg",
    title: "Where Ideas Take Shape",
    subtitle: "Transforming concepts into stunning realities.",
  },
  {
    id: 3,
    image: "/homepage/hero6.jpeg",
    title: "Crafting Iconic Landmarks",
    subtitle: "Building spaces that stand the test of time.",
  },
  {
    id: 4,
    image: m8,
    title: "Design with Purpose and Passion",
    subtitle: "Merging creativity with practical solutions.",
  },
  {
    id: 5,
    image: "/homepage/hero8.jpeg",
    title: "Elevating Everyday Spaces",
    subtitle: "Making ordinary places truly remarkable.",
  },
  {
    id: 6,
    image: "/homepage/hero9.jpeg",
    title: "Inspired by Innovation",
    subtitle: "Leading design trends with visionary thinking.",
  },
  {
    id: 7,
    image: "/homepage/hero10.jpeg",
    title: "Your Vision, Our Expertise",
    subtitle: "Partnering with you to build extraordinary spaces.",
  },
  {
    id: 8,
    image: "/homepage/hero11.jpeg",
    title: "Building a Better Tomorrow",
    subtitle: "Sustainable architecture for future generations.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white">
      {/* Hero Slider */}
      <div className="relative min-h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-screen w-full"
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover brightness-60"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight text-center sm:text-left">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl text-center sm:text-left">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <Link
                  to="/projects"
                  className="btn bg-white text-primary-800 hover:bg-primary-50 hover:text-primary-900 transition-all duration-300"
                >
                  View Our Projects
                </Link>
                <Link
                  to="/contact"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col items-center pt-5">
        {/* <h3 className="text-gray-600 text-3xl text-center font-semibold uppercase tracking-wider pt-3 pb-0.5">
        How We Works
      </h3> */}

        <motion.div
          className="w-48 h-0.5 bg-primary-700 mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: "18rem" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center p-6 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center leading-tight mb-6 tracking-wide">
          4 Easy Steps to Get <br />
          Architecture Design in Kurukshetra
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-xl leading-relaxed">
          The final design of your space varies from one layout to another. The
          shape of individual spaces also determines the space for cabinets,
          countertops, and accessories.
        </p>
      </motion.div>
      <div className="bg-gray-100 py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  height: "90vh",
                  width: "110%",
                  zIndex: 10,
                  position: "relative",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="relative bg-gray-500 text-white p-8 rounded-2xl overflow-hidden group h-[600px] w-full shadow-lg transition-all duration-300"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="absolute inset-0 opacity-60 group-hover:opacity-90 group-hover:brightness-150 group-hover:contrast-120 transition-all duration-500">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-2xl"
                    style={{
                      height: "600px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="absolute -top-6 -left-2 text-[140px] font-heading font-bold text-white opacity-15 select-none">
                    {step.number}
                  </span>
                  <h3 className="text-3xl font-heading font-semibold mt-12 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-white text-opacity-90 text-lg mb-6">
                      {step.description}
                    </p>
                  )}
                  <div className="mt-auto">
                    <Link
                        to="/contact"
                      className="inline-block text-white text-lg font-semibold underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Get in Touch →
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-500 rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
