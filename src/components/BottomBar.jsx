import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { assets } from "../assets/assets";

function BottomBar() {
  const location = useLocation();
  const { track, playStatus, play, pause, next, previous, isLoading } =
    useContext(PlayerContext);

  const isPlayerPage =
    location.pathname === "/player" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 text-white">
      {!isPlayerPage && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <img
              src={track.image}
              alt={track.name}
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="text-sm font-medium">{track.name}</p>
              <p className="text-xs text-gray-400">{track.desc}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
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
          </div>
        </div>
      )}

      <div className="text-xs py-2 px-6 flex justify-between items-center">
        <NavLink to="/" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          <span>
            <p>Home</p>
          </span>
        </NavLink>
        <NavLink to="/search" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <p>Search</p>
          </span>
        </NavLink>
        <NavLink to="/libraries" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <p>Your Library</p>
          </span>
        </NavLink>
        <NavLink to="/premium" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="size-6"
          >
            <path
              fill="currentColor"
              d="M248 8C111 8 0 119.2 0 256c0 136.8 111 248 248 248s248-111.2 248-248C496 119.2 385 8 248 8zm101.7 365.4c-4.2 6.9-13.3 9.1-20.2 4.9-55.2-33.6-124.8-41.2-206.7-22.6-7.9 1.8-15.9-3.2-17.7-11.1-1.9-7.9 3.2-15.9 11.1-17.7 92.9-21.2 171.4-12.2 234.6 25.8 6.9 4.2 9.1 13.3 4.9 20.7zm27.6-56.3c-5.2 8.3-16.3 11.1-24.5 5.9-63.3-38.5-159.9-49.6-234.7-27.2-9.1 2.6-18.7-2.6-21.2-11.7-2.6-9.1 2.6-18.7 11.7-21.2 88.6-26.1 197.2-14.1 269.2 32.2 8.3 5.1 11 16.2 5.9 24zm2.8-58.5c-75.6-45-201.2-49.2-274.5-27.2-10.4 3.1-21.5-2.6-24.6-13-3.1-10.4 2.6-21.5 13-24.6 84.2-25.1 226.5-20.1 312.3 32.3 9.4 5.6 12.5 17.7 6.8 27.1-5.6 9.3-17.7 12.4-27.1 5.4z"
            />
          </svg>
          <span>
            <p>Premium</p>
          </span>
        </NavLink>
        <NavLink to="/player" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"
            />
          </svg>
          <span>
            <p>Player</p>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomBar;
