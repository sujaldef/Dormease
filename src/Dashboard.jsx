import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiSettings, FiLogOut, FiBell, FiUser } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="relative min-h-[100vh] bg-gradient-to-r from-[#12323a] to-[#2a7588] flex flex-row ">
       <div className="absolute top-0 right-0 w-[60%] h-full
        bg-[#12323a] rounded-b-full"></div>
       <div className="absolute top-0 right-0 w-[40%] h-[80%]
         bg-gradient-to-r from-[#12323a] to-[#2a7588] rounded-b-full"></div>
    

      {/* Sidebar */}
      <div className="w-64 z-4 mt-20 text-white min-h-screen p-5">
 

  <div className="space-y-4">
    <Link to="/" className="flex items-center gap-2 bg-[#12323a] hover:bg-[#2a7588] px-4 py-2 rounded-md transition-all">
      <FiHome /> Home
    </Link>
    
    <Link to="/register" className="flex items-center gap-2 bg-[#12323a] hover:bg-[#2a7588] px-4 py-2 rounded-md transition-all">
    Register Property
    </Link>

    <Link to="/loginsignin" className="flex items-center gap-2 bg-[#12323a] hover:bg-[#2a7588] px-4 py-2 rounded-md transition-all">
      Log In / Sign In
    </Link>

    <Link to="" className="flex items-center gap-2 bg-[#12323a] hover:bg-[#2a7588] px-4 py-2 rounded-md transition-all">
      <FiSettings /> Settings
    </Link>
  <button className="flex items-center gap-2 bg-[#12323a] hover:bg-[#2a7588] px-4 py-2 rounded-md w-full transition-all">
    <FiLogOut /> Logout
  </button>
  </div>

</div>


      {/* Main Content */}
      <div className="flex-1 z-4 mt-20">
     {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="bg-[#2a7588] p-5 shadow-md rounded-md text-white">
            <h3 className="text-gray-300">Total Properties</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-[#2a7588] p-5 shadow-md rounded-md text-white">
            <h3 className="text-gray-300">Active Listings</h3>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-[#2a7588] p-5 shadow-md rounded-md text-white">
            <h3 className="text-gray-300">Pending Approvals</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>

        {/* Property List */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Registered Properties</h2>
          <table className="w-full bg-[#1e4f5f] shadow-md rounded-lg">
            <thead>
              <tr className="bg-[#1e4f5f] rounded-lg text-white">
                <th className="p-3  text-left">Property Name</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b  hover:bg-gray-100">
                <td className="p-3 text-white">Luxury Villa</td>
                <td className="p-3 text-white">Los Angeles, CA</td>
                <td className="p-3 text-white font-semibold">Active</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3 text-white">Beach House</td>
                <td className="p-3 text-white">Miami, FL</td>
                <td className="p-3  text-white font-semibold">Pending</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-3 text-white">Mountain Cabin</td>
                <td className="p-3 text-white">Aspen, CO</td>
                <td className="p-3 text-white font-semibold">Active</td>
              </tr>
            </tbody>
          </table> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
