import React from "react";

const MapSection = () => {
  return (
    <div className="bg-[#12323a] rounded-lg p-4 h-[30vh] w-full flex flex-col items-center justify-between text-white shadow-lg">
      <img
        src="/map.png"
        alt="Map"
        className="w-[80%] h-[70%] object-contain rounded-lg"
      />
      <button
        className="bg-white text-black p-2 px-4 rounded-full w-[80%] text-center hover:bg-[#00cc70] transition focus:outline-none focus:ring-2 focus:ring-[#00cc70]"
        aria-label="Search on map"
      >
        Search on Map
      </button>
    </div>
  );
};

export default MapSection;