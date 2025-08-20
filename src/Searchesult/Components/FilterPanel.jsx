import React, { useState } from "react";
import { FaWifi, FaParking, FaDumbbell, FaTshirt, FaShieldAlt, FaUtensils, FaSnowflake } from "react-icons/fa";

const FilterPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    propertyType: "",
    furnishedType: "",
    allowGenders: "",
    foodType: "",
    facilities: [],
  });

  const facilityOptions = [
    { name: "WiFi", icon: <FaWifi /> },
    { name: "Parking", icon: <FaParking /> },
    { name: "Gym", icon: <FaDumbbell /> },
    { name: "Laundry", icon: <FaTshirt /> },
    { name: "Security", icon: <FaShieldAlt /> },
    { name: "Mess", icon: <FaUtensils /> },
    { name: "AC", icon: <FaSnowflake /> },
  ];

  const handleFacilityToggle = (facility) => {
    setFilters((prev) => {
      const newFacilities = prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility];
      onFilterChange({ facilities: newFacilities });
      return { ...prev, facilities: newFacilities };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange({ [name]: value });
      return newFilters;
    });
  };

  const clearFilters = () => {
    const resetFilters = {
      propertyType: "",
      furnishedType: "",
      allowGenders: "",
      foodType: "",
      facilities: [],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-[#12323a] p-3 rounded-lg text-white shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold uppercase">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-[#00cc70] hover:underline focus:outline-none focus:ring-2 focus:ring-[#00cc70]"
          aria-label="Clear all filters"
        >
          Clear All
        </button>
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm uppercase">Property Type</label>
        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white text-black text-sm"
        >
          <option value="">All</option>
          <option value="hostel">Hostel</option>
          <option value="apartment">Apartment</option>
          <option value="pg">PG</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm uppercase">Furnished Type</label>
        <select
          name="furnishedType"
          value={filters.furnishedType}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white text-black text-sm"
        >
          <option value="">All</option>
          <option value="fully furnished">Fully Furnished</option>
          <option value="semi furnished">Semi Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm uppercase">Allowed Genders</label>
        <select
          name="allowGenders"
          value={filters.allowGenders}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white text-black text-sm"
        >
          <option value="">All</option>
          <option value="girls">Girls</option>
          <option value="boys">Boys</option>
          <option value="coed">Coed</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm uppercase">Food Type</label>
        <select
          name="foodType"
          value={filters.foodType}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white text-black text-sm"
        >
          <option value="">All</option>
          <option value="mess included">Mess Included</option>
          <option value="self cooking">Self Cooking</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm uppercase">Facilities</label>
        <div className="grid grid-cols-2 gap-2">
          {facilityOptions.map((facility) => (
            <button
              key={facility.name}
              onClick={() => handleFacilityToggle(facility.name)}
              className={`p-2 rounded-md text-sm flex items-center gap-1 ${
                filters.facilities.includes(facility.name)
                  ? "bg-[#00cc70] text-white"
                  : "bg-[#2a7588] text-white"
              } hover:bg-[#00cc70] transition`}
              aria-label={`Toggle ${facility.name} filter`}
            >
              {facility.icon}
              <span>{facility.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;