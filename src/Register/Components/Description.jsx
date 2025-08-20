import React from "react";

const Description = ({ description, setDescription }) => {
  return (
    <div className="p-6 items-center flex flex-col rounded-lg w-full">
      <h1 className="text-xl text-white font-semibold mb-2">Description</h1>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-[70%] bg-gray-300 h-52 p-3 border rounded-lg"
        placeholder="Describe your property..."
      />
    </div>
  );
};

export default Description;