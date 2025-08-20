import React from "react";

const RoomPricing = ({ rooms, updateRoom, removeRoom, addRoom }) => {
  return (
    <div className="flex flex-col bg-opacity-20 rounded-lg p-4 w-full">
      <label className="text-white font-semibold text-center mb-3">
        Room Pricing (per month)
      </label>
      {rooms.map((room, index) => (
        <div
          key={room.id || index}
          className="flex justify-between items-center m-2 bg-gray-300 p-3 rounded-md"
        >
          <select
            value={room.seater}
            onChange={(e) => updateRoom(room.id, "seater", e.target.value)}
            className="px-5 py-1 border rounded-lg text-black"
          >
            <option value="1-seater">1 Seater</option>
            <option value="2-seater">2 Seater</option>
            <option value="3-seater">3 Seater</option>
            <option value="4-seater">4 Seater</option>
          </select>
          <select
            value={room.ac}
            onChange={(e) => updateRoom(room.id, "ac", e.target.value)}
            className="px-5 py-1 border rounded-lg text-black"
          >
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
          <select
            value={room.furnishing}
            onChange={(e) => updateRoom(room.id, "furnishing", e.target.value)}
            className="px-2 py-1 border rounded-lg text-black"
          >
            <option value="Furnished">Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Non-Furnished">Non-Furnished</option>
          </select>
          <input
            type="number"
            value={room.price}
            onChange={(e) => updateRoom(room.id, "price", e.target.value)}
            className="w-44 px-2 py-1 border rounded-lg text-black"
            placeholder="₹ Price"
          />
          <button
            onClick={() => removeRoom(room.id)}
            className="bg-red-200 px-3 py-1 rounded-lg"
          >
            remove ❌
          </button>
        </div>
      ))}
      <button
        onClick={addRoom}
        className="mt-3 bg-[#475452] border border-grey hover:bg-[#12323a] text-white px-4 py-2 rounded-lg"
      >
        + Add Room
      </button>
    </div>
  );
};

export default RoomPricing;