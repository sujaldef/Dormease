import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-3 flex items-center gap-2">
      <div className="relative flex-grow">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by property name or address"
          className="w-full p-2 pr-8 rounded-md bg-white text-black text-sm "
          aria-label="Search properties"
        />
       
      </div>
      <button
        onClick={handleSearch}
        className="bg-[#2a7588] text-white p-2 rounded-md hover:bg-[#00cc70] transition  "
        aria-label="Submit search"
      >
        <FaSearch className="text-sm" />
      </button>
    </div>
  );
};

export default SearchBar;