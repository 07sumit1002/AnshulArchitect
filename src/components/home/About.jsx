import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "18", label: "Design Awards" },
    { number: "20+", label: "Team Members" },
  ];

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            variants={fadeIn('left', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Architect working on blueprints"
              className="rounded-lg shadow-lg w-full object-cover"
              style={{ height: '550px' }}
            />
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold text-primary-800 hover:bg-gray-200 transition px-1 rounded">18+</span>
                <span className="text-primary-600">Years of Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SectionTitle title="About Anshul Architects" subtitle="Our story" />

            <motion.p
              className="text-primary-600 mb-5"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Anshul Architects, led by Architect Anshul Sharma, delivers comprehensive design solutions across cities like Kurukshetra, Mohali, Karnal, Ambala, and Panipat. With offices in Kurukshetra (Anshul Architects) and Mohali (AKA Architects), the firm serves residential, commercial, institutional, and industrial projects.
            </motion.p>

            <motion.p
              className="text-primary-600 mb-5"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Architect Anshul Sharma, the founder and principal architect, holds a Master’s in Architecture from Delhi and brings over 18 years of experience. Known for innovative design and client-focused solutions, the firm is a trusted partner for everything from new builds to renovations and large-scale developments.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white p-5 rounded-lg shadow-sm text-center"
                  variants={fadeIn('up', 0.5 + index * 0.2)}
                >
                  <div className="text-3xl font-bold text-primary-800 mb-2">{item.number}</div>
                  <div className="text-primary-600">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Button Centered on Mobile Only */}
            <motion.div
              variants={fadeIn('right', 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <Link
                to="/about"
                className="btn btn-primary inline-flex items-center"
              >
                Learn More About Us
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;