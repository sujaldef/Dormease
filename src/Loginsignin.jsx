import React, { useState } from "react";
import { motion } from "framer-motion";

const Loginsignin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-[100vh] bg-gradient-to-r from-[#12323a] to-[#2a7588] flex flex-col p-6">
    {/* Header Section */}
    <div className="absolute top-0 mt-[-10%] left-0 w-full h-[80%] bg-[#12323a] rounded-b-full shadow-md"></div>
        <div className="m-40 z-4 rounded-2xl  bg-red-100 flex flex-rows">
        <img src="/why.jpg" alt="" className="w-1/2 rounded-l-2xl" />
        <div className="w-1/2 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white h-[100%] p-8 rounded-r-2xl  text-center flex items-center justify-center flex-col"
      >
        <h2 className="text-2xl font-semibold text-gray-700">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="mt-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full py-3 mt-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-gray-600 cursor-pointer hover:text-blue-500" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Loginsignin;
