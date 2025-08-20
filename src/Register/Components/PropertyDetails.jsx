import React from "react";

const PropertyDetails = ({
  propertyName,
  setPropertyName,
  address,
  setAddress,
  allowGenders,
  setAllowGenders,
  furnished,
  setFurnished,
  food,
  setFood,
  rooms,
  updateRoom,
}) => {
  return (
    <div className="w-[60%] p-6 mr-40 bg-opacity-20 rounded-lg">
      <div className="grid grid-rows-3 gap-4">
        <div>
          <label className="block text-white font-semibold">Name of the Property</label>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 bg-gray-300 focus:ring-blue-400"
            placeholder="Enter property name"
          />
        </div>
        <div>
          <label className="block text-white font-semibold">Address of the Property</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-300"
            placeholder="Enter address"
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="flex flex-col items-center justify-center w-1/2 bg-opacity-20 rounded-lg p-4">
            <label className="text-white font-semibold text-center">Gender</label>
            <select
              value={allowGenders}
              onChange={(e) => setAllowGenders(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-300"
            >
              <option value="girls">Girls Only</option>
              <option value="boys">Boys Only</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 bg-opacity-20 rounded-lg p-4">
            <label className="text-white font-semibold text-center">Furnished</label>
            <select
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-300"
            >
              <option value="fully furnished">Fully Furnished</option>
              <option value="half furnished">Half Furnished</option>
              <option value="non furnished">Non Furnished</option>
            </select>
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex flex-col items-center justify-center w-1/2 bg-opacity-20 rounded-lg p-4">
            <label className="text-white font-semibold text-center">Food</label>
            <select
              value={food}
              onChange={(e) => setFood(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-300"
            >
              <option value="mess included">Mess Included</option>
              <option value="mess excluded">Mess Excluded</option>
            </select>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 bg-opacity-20 rounded-lg p-4">
            <label className="text-white font-semibold text-center">Sharing</label>
            <select
              value={rooms.length > 0 ? rooms[0].seater : ""}
              onChange={(e) => updateRoom(rooms[0]?.id, "seater", e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-300"
            >
              <option value="1 seater">1 Seater</option>
              <option value="1 & 2 seater">1 & 2 Seater</option>
              <option value="1 & 2 & 3 seater">1 & 2 & 3 Seater</option>
              <option value="1 & 2 & 3 & 4 seater">1 & 2 & 3 & 4 Seater</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;