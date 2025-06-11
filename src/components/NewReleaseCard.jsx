import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";

function NewReleaseCard({ card }) {
  const { playWithId } = useContext(PlayerContext);
  const navigate = useNavigate();

  function handleSongPlay() {
    playWithId(card.id);
    navigate("/player");
  }

  return (
    <div className="flex-shrink-0 w-40 cursor-pointer" onClick={handleSongPlay}>
      <img
        src={card.image}
        alt="Assi Code"
        className="rounded-lg object-cover w-full h-40"
      />
      <p className="mt-2 font-semibold text-white">{card.name}</p>
      <p className="text-gray-400 text-sm truncate">{card.artist}</p>
    </div>
  );
}

export default NewReleaseCard;
