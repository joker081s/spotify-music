import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Player() {
  const { user, addSongToPlaylist, removeSongFromPlaylist } = useAuth();
  const list = user ? JSON.parse(localStorage.getItem(user.email)) : null;

  const {
    track,
    playStatus,
    play,
    pause,
    previous,
    next,
    seekBar,
    seekBg,
    seekSong,
    time,
    isLoading,
  } = useContext(PlayerContext);

  const [value, setValue] = useState(-1);
  const [like, setLike] = useState(function () {
    if (!user) {
      return false;
    }
    const data = JSON.parse(localStorage.getItem(user.email)).at(0);
    return data.songs.find((song) => track.id === song.id);
  });

  useEffect(() => {
    if (!user || !track) return;

    if (like) {
      addSongToPlaylist("Liked Songs", track);
    } else {
      removeSongFromPlaylist("Liked Songs", track);
    }
  }, [like, track, user]);

  function handleLike() {
    setLike((a) => !a);
    console.log(like);
  }

  useEffect(() => {
    if (value === -1) {
      return;
    }

    addSongToPlaylist(list.at(value).name, track);
    setValue(-1);
  }, [track, value, addSongToPlaylist, list]);

  return (
    <div>
      <TopBar />
      <div className="mt-5 flex justify-center px-4 w-full">
        <h2 className="text-3xl font-bold">Player</h2>
      </div>

      <div className="mt-6 px-4 h-[50vh] w-full">
        <div className="items-center gap-4 flex flex-col justify-center h-full">
          <img className="w-[40vw] lg:w-[10vw]" src={track.image} alt="" />

          <div>
            <p>{track.name}</p>
            <p className="text-gray-400 text-sm">{track.desc.slice(0, 12)}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 px-4 w-full">
        <div className="flex items-center gap-5 justify-center">
          <p className="w-10 text-xs text-right">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[80vw] h-1 bg-gray-600 rounded-full cursor-pointer group relative"
          >
            <div
              ref={seekBar}
              className="h-full bg-white group-hover:bg-green-500 rounded-full transition-colors"
            />
            <div
              className="absolute top-1/2 right-0 w-3 h-3 bg-white rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                right: `${
                  (1 -
                    (time.currentTime.minute * 60 +
                      parseInt(time.currentTime.second)) /
                      (time.totalTime.minute * 60 +
                        parseInt(time.totalTime.second))) *
                  100
                }%`,
              }}
            />
          </div>
          <p className="w-10 text-xs">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      <div className="mt-6 px-10 flex items-center justify-between text-2xl">
        <img
          className="w-4 cursor-pointer opacity-50 hover:opacity-100"
          src={assets.shuffle_icon}
          alt="shuffle"
        />

        <img
          className="w-4 cursor-pointer opacity-75 hover:opacity-100"
          onClick={previous}
          src={assets.prev_icon}
          alt="previous"
        />
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        ) : playStatus ? (
          <img
            className="w-4 cursor-pointer opacity-75 hover:opacity-100"
            onClick={pause}
            src={assets.pause_icon}
            alt="pause"
          />
        ) : (
          <img
            className="w-4 cursor-pointer opacity-75 hover:opacity-100"
            onClick={play}
            src={assets.play_icon}
            alt="play"
          />
        )}
        <img
          className="w-4 cursor-pointer opacity-75 hover:opacity-100"
          onClick={next}
          src={assets.next_icon}
          alt="next"
        />
        <img
          className="w-4 cursor-pointer opacity-50 hover:opacity-100"
          src={assets.loop_icon}
          alt="loop"
        />
      </div>
      <div className="flex justify-between px-20 mt-4">
        <div onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={like ? "green" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="green"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div>
          {user && (
            <select
              className="bg-transparent ml-2 rounded-3xl px-2 py-1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option key={-1} value={-1}>
                Add to Library
              </option>
              {Array.from({ length: list ? list.length : 0 }, (_, i) => i).map(
                (num) => (
                  <option className="bg-black" value={num} key={num}>
                    {list.at(num).name}
                  </option>
                )
              )}
            </select>
          )}
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Player;
