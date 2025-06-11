import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";

const SongItemCard = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  const navigate = useNavigate();

  function handleSongPlay() {
    playWithId(id);
    navigate("/player");
  }

  return (
    <div
      onClick={handleSongPlay}
      className=" min-w-[180px] hover:bg-[#ffffff26] p-2 px-3 rounded cursor-pointer"
    >
      <img className="rounded w-[300px] h-[300px] object-cover" src={image} alt="" />
      <p className=" font-bold mt-2 mb-1">{name}</p>
      <p className=" text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItemCard;
