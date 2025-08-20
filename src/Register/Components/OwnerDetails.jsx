import React from "react";

const OwnerDetails = ({
  ownerName,
  setOwnerName,
  propertyType,
  setPropertyType,
  phoneNumber,
  setPhoneNumber,
  gender,
  setGender,
}) => {
  return (
    <div className="w-[60%] mr-40 p-6 bg-opacity-20 rounded-lg">
      <div className="grid grid-rows-3 gap-4">
        <div>
          <label className="block text-white font-semibold">Owner Name</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-300"
            placeholder="Enter owner name"
          />
        </div>
        <div>
          <label className="block text-white font-semibold">Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-300"
          >
            <option value="hostel">Hostel</option>
            <option value="pg">PG</option>
            <option value="flat">Flat</option>
          </select>
        </div>
        <div className="flex gap-10">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-300"
            placeholder="Enter phone number"
          />
          <label className="block text-white font-semibold">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-300"
          >
            <option value="he/him">He/Him</option>
            <option value="she/her">She/Her</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;