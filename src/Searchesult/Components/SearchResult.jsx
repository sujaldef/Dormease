import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import PropertyCard from "./PropertyCard";
import { fetchProperties } from "../../redux/slices/peopertySlice";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector((state) => state.property);
  const [filters, setFilters] = useState({
    searchQuery: "",
    propertyType: "",
    furnishedType: "",
    allowGenders: "",
    foodType: "",
    facilities: [],
  });

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.searchQuery) {
      result = result.filter(
        (property) =>
          property.name?.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          property.address?.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    if (filters.propertyType) {
      result = result.filter((property) => property.propertyType === filters.propertyType);
    }

    if (filters.furnishedType) {
      result = result.filter((property) => property.furnishedType === filters.furnishedType);
    }

    if (filters.allowGenders) {
      result = result.filter((property) => property.allowGenders === filters.allowGenders);
    }

    if (filters.foodType) {
      result = result.filter((property) => property.foodType === filters.foodType);
    }

    if (filters.facilities.length > 0) {
      result = result.filter((property) =>
        filters.facilities.every((facility) => property.facilities?.includes(facility))
      );
    }

    return result;
  }, [properties, filters]);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="w-full flex flex-col md:flex-row pt-16">
      {/* Left Side: Filters (Sticky) */}
      <div className="w-full md:w-[20%] p-4 sticky top-16">
        <FilterPanel onFilterChange={handleFilterChange} />
      </div>

      {/* Right Side: Search and Property List */}
      <div className="w-full md:w-[80%] p-4 flex flex-col h-[calc(100vh-8rem)]">
        <SearchBar onSearch={(query) => handleFilterChange({ searchQuery: query })} />
        {loading && (
          <p className="text-white text-center mt-4 text-sm">Loading properties...</p>
        )}
        {error && (
          <p className="text-red-400 text-center mt-4 text-sm">Error: {error}</p>
        )}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4 overflow-y-auto scrollbar-gutter-stable
          [&::-webkit-scrollbar]:w-2 
          [&::-webkit-scrollbar-track]:bg-[#12323a]
          [&::-webkit-scrollbar-thumb]:bg-[#12323a]
          [&::-webkit-scrollbar-thumb]:rounded-full 
          [&::-webkit-scrollbar-thumb]:hover:bg-[#00cc70]"
        >
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property._id || `${property.name}-${Math.random()}`} property={property} />
            ))
          ) : (
            !loading && (
              <p className="text-white text-center mt-4 text-sm">No properties found.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;