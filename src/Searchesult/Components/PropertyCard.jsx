import React, { useState } from "react";
import { FaStar, FaWifi, FaParking, FaDumbbell, FaTshirt, FaShieldAlt, FaUtensils, FaSnowflake, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PropertyCard = React.memo(({ property }) => {
  const rating = property.rating || 3;
  const images = property.images?.length > 0 
    ? property.images 
    : [property.profilePic || "/placeholder.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const facilityIcons = {
    WiFi: <FaWifi />,
    Parking: <FaParking />,
    Gym: <FaDumbbell />,
    Laundry: <FaTshirt />,
    Security: <FaShieldAlt />,
    Mess: <FaUtensils />,
    AC: <FaSnowflake />,
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col z-10">
      <div className="relative w-full h-32">
        <img
          src={images[currentImageIndex]}
          alt={`${property.name} image ${currentImageIndex + 1}`}
          className="w-full h-32 object-cover rounded-md"
          loading="lazy"
          onError={(e) => (e.target.src = "/placeholder.webp")}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#00cc70] transition-colors"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#00cc70] transition-colors"
            >
              <FaChevronRight className="text-sm" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-gray-500/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col flex-grow mt-2">
        <h1 className="text-sm font-semibold text-[#12323a] truncate">{property.name}</h1>
        <p className="text-sm text-gray-500 mt-1 truncate">{property.address}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {property.facilities && property.facilities.length > 0 ? (
            property.facilities.map((facility, i) => (
              <span
                key={`${facility}-${i}`}
                className="text-[#2a7588] text-sm flex items-center gap-1"
              >
                {facilityIcons[facility] || null}
                <span>{facility}</span>
              </span>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No facilities listed</p>
          )}
        </div>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-sm ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
              aria-hidden="true"
            />
          ))}
          <span className="text-sm text-gray-500">({rating}/5)</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm font-semibold text-[#12323a]">
            ₹ {property.price || "N/A"} / month
          </div>
          <button
            className="bg-[#00cc70] text-white px-3 py-1 text-sm rounded-md hover:bg-[#00b35f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00cc70]"
            aria-label={`View details for ${property.name}`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
});

export default PropertyCard;