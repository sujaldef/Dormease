import React from "react";

const Facilities = ({ facilities, selectedFacilities, handleFacilityChange }) => {
  return (
    <div className="flex flex-col mt-20 items-center w-full bg-opacity-20 rounded-lg p-4">
      <label className="text-white font-semibold">Facilities Provided</label>
      <div className="mt-4 w-full grid grid-cols-4 gap-2">
        {facilities.map((facility, index) => (
          <label
            key={index}
            className="flex items-center bg-gray-300 p-2 rounded-md cursor-pointer"
          >
            <input
              type="checkbox"
              value={facility}
              checked={selectedFacilities.includes(facility)}
              onChange={handleFacilityChange}
              className="mr-2"
            />
            {facility}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Facilities;