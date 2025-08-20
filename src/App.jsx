import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const sentence1 = "YOUR PERFECT STAY";
  const sentence2 = "JUST A CLICK AWAY";

  const nextStep = () => {
    setCurrentStep((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="w-full min-h-screen bg-[#12323a] overflow-x-hidden font-[Aboreto] bg-gradient-to-r from-[#12323a] to-[#2a7588] text-white ">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative justify-center ">
        {/* Triangle Background */}
        <div className="absolute  right-0 w-[50%] h-[130%] bg-[#12323a] rounded-l-full"></div>
        <div className="absolute  right-0 w-[40%] h-[110%] bg-[#1B4B57] rounded-l-full"></div>

        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="text-center h-[400px] p-6 rounded-[20px] w-[50%] lg:text-left relative">
            <h1 className="text-[85px]  text-white flex ">
              {sentence1.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="inline-block "
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <h1 className="text-6xl text-white m-4 flex overflow-hidden">
              {sentence2.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <div className="gap-[130px] z-4 flex flex-row mt-[25%]">
              <button className="mt-6 z-6 px-6 py-3 bg-[#12323a] w-[40%] border-3 border-[#12323a] text-white text-lg font-semibold rounded-[45px] hover:bg-[#334a51]  transition">
                <Link to="/register" className="">
                  REGUISTER A PROP
                </Link>
              </button>
              <button className="mt-6 z-4 px-6 py-3 bg-[#12323a] border-3 border-[#12323a] w-[40%] text-white text-lg font-semibold rounded-[45px] hover:bg-[#334a51]  transition">
                <Link to="/searchresult" className="">
                  SEARCH PROPERTY
                </Link>
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden & lower
            animate={{ opacity: 1, y: 0 }} // Fade in & move up
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
            className=" flex justify-center items-center w-[30%] z-5 ml-auto"
          >
            <img src="/herosection.png" alt="Hero" className="h-auto " />
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="flex-grow flex flex-col mt-[10%] rounded-[25px] relative items-center justify-center">
        <div className="w-[1200px] h-[75vh] flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-lg transition-all duration-500  relative mb-20">
          <div
            className={`w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 transition-opacity duration-500 rounded-[25px]  ${
              currentStep === 0
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } bg-[#12323a]`}
          >
            <h2 className="text-4xl font-bold">WHAT IS DORMEASE?</h2>

            <div className="flex font-bold flex-col md:flex-row items-center justify-center w-4/5 gap-6 mt-6">
              <p className="text-lg text-center md:text-left w-full md:w-2/5">
                DormEase is a housing platform offering safe, affordable, and
                verified dorms and PG accommodations. With trusted listings,
                budget-friendly filters, and direct landlord communication, it
                ensures a hassle-free experience for all users.
              </p>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/why.jpg"
                  alt="DormEase Hero"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div
            className={`w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 transition-opacity duration-500 rounded-[25px]  ${
              currentStep === 1
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } bg-[#12323a]`}
          >
            <h2 className="text-4xl font-bold">KEY FEATURES</h2>

            <div className="flex flex-col md:flex-row items-center justify-center w-4/5 gap-6 mt-6">
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/key.jpg" alt="Key Features" className="rounded-lg" />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                <p className="text-lg font-bold text-white">
                  DormEase offers verified listings, roommate matching, budget
                  filtering, and direct chat with property owners.
                </p>
                <p className="text-lg font-bold text-white">
                  Our smart search ensures students find safe, affordable, and
                  comfortable housing with ease.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 transition-opacity duration-500 rounded-[25px]  ${
              currentStep === 2
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } bg-[#12323a]`}
          >
            <h2 className="text-4xl font-bold">WHY CHOOSE DORMEASE?</h2>

            <div className="flex flex-col md:flex-row items-center justify-between w-4/5 gap-6 mt-6">
              {/* Left Section */}
              <p className="text-lg font-bold text-white text-center md:text-left w-full md:w-1/3 space-y-6">
                <span className="block">✅ Verified Listings</span>
                <span className="block">✅ Budget Filtering</span>
                <span className="block">✅ Roommate Matching</span>
              </p>

              {/* Center Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src="/whyus.jpg"
                  alt="Why Choose DormEase"
                  className="rounded-lg"
                />
              </div>

              {/* Right Section */}
              <p className="text-lg font-bold text-white text-center md:text-left w-full md:w-1/3 space-y-6">
                <span className="block">✅ Direct Chat</span>
                <span className="block">✅ Seamless Booking</span>
                <span className="block">✅ Student-Centric</span>
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute w-full flex justify-between px-10">
            <button
              onClick={prevStep}
              className="p-4 rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#12323a] transition"
            >
              <img src="next.png" alt="" className="w-[10px] rotate-180" />
            </button>
            <button
              onClick={nextStep}
              className="p-4 rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#12323a] transition"
            >
              <img src="next.png" alt="" className="w-[10px]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
