import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#12323a] to-[#2a7588] min-h-[100vh] relative overflow-hidden">
      {/* Background Image Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[35vh] mt-10 w-full bg-cover bg-center z-4 bg-no-repeat"
        style={{ backgroundImage: "url('aboutbg.jpg')" }}
      >
        {/* "About Us" Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-7xl font-bold bg-opacity-50 px-6 py-3 rounded-lg"
          >
            About Us
          </motion.h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="relative h-[50vh] flex flex-col text-white ">
        
      
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 word-spacing:10px  w-[50%] text-2xl leading-relaxed bg-[#12323a] p-10 rounded-r-full f pr-20 font-space-10"
        >
          
          <span className=" font-bold text-4xl">DormEase</span>{" "}
          is an innovative platform that connects students and professionals
          with safe, affordable, and verified living spaces, including dorms and
          PGs. Our goal is to make the accommodation search process seamless by
          offering trusted listings, direct communication with property owners,
          and transparent pricing.
        </motion.p>

        {/* Abstract Shape Behind Image */}
        <motion.div
  initial={{ opacity: 0, y: -50 }} // Comes from the top
  animate={{ opacity: 1, y: 0 }} // Slides down smoothly
  transition={{ duration: 0.7, delay: 0.5 }}
  className="absolute flex top-0 right-0 w-[30%] mr-40 bg-[#12323a] rounded-b-full"
>

          <img
            src="daisy.jpg"
            alt=""
            className="rounded-b-full shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
