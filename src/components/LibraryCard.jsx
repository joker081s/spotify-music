import { useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LibraryCard({ card }) {
  const [show, setShow] = useState(false);
  const { handleRemoveSongPlaylist } = useAuth();

  function handleRemoveList() {
    handleRemoveSongPlaylist(card.name);
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-md flex items-center justify-center uppercase font-bold">
              {card.name === "Liked Songs" ? (
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              ) : (
                <p>{card.name.at(0)}</p>
              )}
            </div>
            <div>
              <p className="font-semibold">{card.name}</p>
              <p className="text-sm text-neutral-400">
                📌 Playlist • {card.songs.length} songs
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold flex gap-5">
          <div onClick={() => setShow((show) => !show)}>{show ? "-" : "+"}</div>
          {card.name !== "Liked Songs" && (
            <div className="text-red-700" onClick={handleRemoveList}>
              x
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className="bg-gray-800 rounded-lg border flex flex-col justify-center items-center pb-4">
          {card.songs.length !== 0 ? (
            card.songs.map((item, index) => (
              <CardDisplay
                key={index}
                index={index}
                item={item}
                playlistName={card.name}
              />
            ))
          ) : (
            <div className="pt-4">Add songs to the playlist</div>
          )}
        </div>
      )}
    </>
  );
}

export default LibraryCard;

function CardDisplay({ item, index, playlistName }) {
  const { playWithId } = useContext(PlayerContext);
  const navigate = useNavigate();
  const { removeSongFromPlaylist } = useAuth();

  function handleSongPlay() {
    playWithId(item.id);
    navigate("/player");
  }

  function handleRemove() {
    removeSongFromPlaylist(playlistName, item);
  }

  return (
    <div className="flex m-auto justify-between items-center w-[80vw] mt-5">
      <div
        onClick={handleSongPlay}
        className="flex w-full justify-between bg-[#1f2937] rounded-lg px-4 mr-10 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        key={index}
      >
        <div className="text-white flex items-center">
          <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
          <img className=" w-10 mr-5 rounded-sm" src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
        <p className="text-[15px] text-center">{item.duration}</p>
      </div>
      <div
        className="text-xl font-bold text-red-700 ml-5"
        onClick={handleRemove}
      >
        x
      </div>
    </div>
  );
}
