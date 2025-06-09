import { useState } from "react";
import SongCard from "./SongCard";
import { PlayerContext } from "../context/PlayerContext";

function LibraryCard({ card }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="flex justify-between"
        onClick={() => setShow((show) => !show)}
      >
        <div className="">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-md flex items-center justify-center uppercase font-bold">
              {card.name === "Liked Songs" ? (
                <svg
                  class="w-5 h-5 text-white"
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
              <p class="font-semibold">{card.name}</p>
              <p class="text-sm text-neutral-400">
                📌 Playlist • {card.songs.length} songs
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold">{show ? "-" : "+"}</div>
      </div>
      {show && (
        <div className="bg-gray-800 rounded-lg border flex flex-col justify-center items-center pb-4">
          {card.songs.map((item, index) => (
            <SongCard key={index} index={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default LibraryCard;
