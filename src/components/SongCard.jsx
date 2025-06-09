import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";

function SongCard({ item, index }) {
  const { playWithId } = useContext(PlayerContext);
  const navigate = useNavigate();

  function handleSongPlay() {
    playWithId(item.id);
    navigate("/player");
  }

  return (
    <div className="flex m-auto justify-center w-[80vw] mt-5">
      <div
        onClick={handleSongPlay}
        className="flex w-full justify-between bg-[#1f2937] rounded-lg px-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        key={index}
      >
        <div className="text-white flex items-center">
          <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
          <img className=" w-10 mr-5 rounded-sm" src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
        <p className="text-[15px] text-center">{item.duration}</p>
      </div>
    </div>
  );
}

export default SongCard;
