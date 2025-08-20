import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileUpload from './Components/ProfileUpload';
import OwnerDetails from './Components/OwnerDetails';
import PropertyDetails from './Components/PropertyDetails';
import Facilities from './Components/Facilities';
import RoomPricing from './Components/RoomPricing';
import Description from './Components/Description';
import {
  setSelectedFacilities,
  addRoom,
  updateRoom,
  removeRoom,
  setOwnerName,
  setPropertyType,
  setPhoneNumber,
  setGender,
  setPropertyName,
  setAddress,
  setAllowGenders,
  setFurnished,
  setFood,
  setDescription,
  uploadImage,
  submitProperty,
} from '../redux/slices/peopertySlice';

const Register = () => {
  const dispatch = useDispatch();
  const {
    selectedFacilities,
    rooms,
    ownerName,
    propertyType,
    phoneNumber,
    gender,
    propertyName,
    address,
    allowGenders,
    furnished,
    food,
    description,
    profilePic,
    loading,
    error,
  } = useSelector((state) => state.property);

  const facilities = [
    'WiFi',
    'Laundry',
    'Parking',
    'AC Rooms',
    'Gym',
    'Bed',
    'Washing Machine',
    'Bed Mattress',
    'Study Table',
    'Chair',
    'Almirah',
  ];

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml',
    ];

    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type. Please upload an image (JPG, PNG, GIF, WebP, SVG).');
      return;
    }

    dispatch(uploadImage(file));
  };

  const submitPropertyHandler = async () => {
    if (!ownerName || !phoneNumber || !propertyName || !address) {
      alert('Please fill all required fields!');
      return;
    }

    const newProperty = {
      name: propertyName,
      address,
      price: rooms.length > 0 ? rooms[0].price : '',
      owner: {
        name: ownerName,
        phone: phoneNumber,
        gender,
      },
      propertyType,
      sharingType: rooms.length > 0 ? rooms[0].seater : '',
      furnishedType: furnished,
      allowGenders,
      foodType: food,
      facilities: selectedFacilities,
      rooms,
      description,
      profilePic,
    };

    dispatch(submitProperty(newProperty)).then((result) => {
      if (submitProperty.fulfilled.match(result)) {
        alert('Property added successfully! ✅');
      } else if (submitProperty.rejected.match(result)) {
        alert(result.payload || 'Failed to submit property. Please try again.');
      }
    });
  };

  const handleFacilityChange = (e) => {
    dispatch(setSelectedFacilities(e.target.value));
  };

  return (
    <div className="relative min-h-[100vh] bg-gradient-to-r from-[#12323a] to-[#2a7588] flex flex-col p-6">
      <div className="absolute top-0 left-0 w-full h-[40%] mt-[-5%] bg-[#12323a] rounded-b-full shadow-md"></div>
      <div className="w-full flex justify-between gap-6 h-[10%] mt-[5%] z-10">
        <ProfileUpload profilePic={profilePic} handleImageUpload={handleImageUpload} />
        <OwnerDetails
          ownerName={ownerName}
          setOwnerName={(value) => dispatch(setOwnerName(value))}
          propertyType={propertyType}
          setPropertyType={(value) => dispatch(setPropertyType(value))}
          phoneNumber={phoneNumber}
          setPhoneNumber={(value) => dispatch(setPhoneNumber(value))}
          gender={gender}
          setGender={(value) => dispatch(setGender(value))}
        />
      </div>
      <div className="w-full flex justify-between gap-6 h-[10%] mt-[5%] z-10">
        <ProfileUpload profilePic={profilePic} handleImageUpload={handleImageUpload} />
        <PropertyDetails
          propertyName={propertyName}
          setPropertyName={(value) => dispatch(setPropertyName(value))}
          address={address}
          setAddress={(value) => dispatch(setAddress(value))}
          allowGenders={allowGenders}
          setAllowGenders={(value) => dispatch(setAllowGenders(value))}
          furnished={furnished}
          setFurnished={(value) => dispatch(setFurnished(value))}
          food={food}
          setFood={(value) => dispatch(setFood(value))}
          rooms={rooms}
          updateRoom={(id, field, value) => dispatch(updateRoom({ id, field, value }))}
        />
      </div>
      <Facilities
        facilities={facilities}
        selectedFacilities={selectedFacilities}
        handleFacilityChange={handleFacilityChange}
      />
      <RoomPricing
        rooms={rooms}
        updateRoom={(id, field, value) => dispatch(updateRoom({ id, field, value }))}
        removeRoom={(id) => dispatch(removeRoom(id))}
        addRoom={() => dispatch(addRoom())}
      />
      <Description
        description={description}
        setDescription={(value) => dispatch(setDescription(value))}
      />
      <button
        onClick={submitPropertyHandler}
        className="bg-[#2a7588] shadow-lg border text-white px-6 py-3 rounded-lg mt-4"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Property'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Register;