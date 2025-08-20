import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  "Annapurna Road", "Bhawarkuan", "Bholaram Ustad Marg", "Chhatribagh",
  "Geeta Bhawan Square", "Kanadia Road", "Khajrana Square", "LIG Colony",
  "MIG Colony", "Malwa Mill", "Musakhedi", "Palasia", "Rajendra Nagar",
  "Rau", "Sapna Sangeeta Road", "Scheme No. 78", "Silicon City",
  "Sudama Nagar", "Tilak Nagar", "Vijay Nagar"
];

const Searchprop = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#12323a] to-[#2a7588] min-h-screen flex justify-center items-center">
      <div className="w-[100%] h-[70vh] md:w-[60%] flex bg-white rounded-lg shadow-lg overflow-hidden">
        
        <div className="w-2/3">
          <img src="searchbg.jpg" alt="Property Search" className="w-full h-full object-cover" />
        </div>

        <div className="w-1/3 flex flex-col justify-center p-6 relative">
        
          {/* Location Dropdown */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full p-3 pl-10 border-2 border-gray-300 rounded-full text-gray-700 focus:ring-[#12323a] appearance-none cursor-pointer"
            >
              <option value="">Select a Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-full text-gray-700 focus:ring-[#12323a] cursor-pointer"
          >
            <option value="">Select category</option>
            <option value="Houses">Houses</option>
            <option value="Apartments">Apartments</option>
            <option value="PG/Hostels">PG/Hostels</option>
          </select>

          {/* Search Button */}
          <button
            className="mt-6 px-6 py-3 bg-[#12323a] w-full text-white text-lg font-semibold rounded-lg transition hover:bg-[#0f292f] disabled:bg-gray-400"
            disabled={!selectedLocation || !selectedOption}
          >
            <Link
              to={`/searchresult?location=${encodeURIComponent(selectedLocation)}&category=${encodeURIComponent(selectedOption)}`}
              className="hover:text-blue-300"
            >
              SEARCH PROPERTY
            </Link>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Searchprop;
