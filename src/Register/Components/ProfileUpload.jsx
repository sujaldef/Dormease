import React from "react";

const ProfileUpload = ({ profilePic, handleImageUpload }) => {
  return (
    <div className="w-[20%] flex flex-col items-center gap-4 p-4 bg-opacity-20 rounded-lg">
      <div className="w-52 h-52 rounded-full flex items-center justify-center text-gray-600 bg-gray-300">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile Preview"
            className="w-52 h-52 rounded-full object-cover"
          />
        ) : (
          <span>profile picture</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="profile-upload"
      />
      <label
        htmlFor="profile-upload"
        className="bg-[#475452] border-grey hover:bg-[#12323a] border text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        Upload Pic
      </label>
    </div>
  );
};

export default ProfileUpload;