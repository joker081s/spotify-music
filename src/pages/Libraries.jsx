import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import LibraryCard from "../components/LibraryCard";
import Space from "../components/Space";

function Libraries() {
  const navigate = useNavigate();
  const { user, createPlayList, playlist } = useAuth();
  const [show, setShow] = useState(false);
  const [playlistName, setPlayListName] = useState("");

  function openLibraryForm() {
    if (!user) {
      navigate("/login");
    }

    setShow((show) => !show);
  }

  function createLibrary(e) {
    createPlayList(playlistName);
    setShow(false);
  }

  return (
    <div>
      <TopBar user={user} />
      <div className="px-4">
        <div className="font-bold text-[30px] py-2 flex justify-between pr-8">
          Your Libraries
          <button className="" onClick={openLibraryForm}>
            <p className="text-sm font-bold">+ Create</p>
          </button>
        </div>
        {show && (
          <form
            onSubmit={createLibrary}
            className="space-y-4 px-5 py-3 bg-[#111830]"
          >
            <div className="flex gap-5 items-center">
              <label
                htmlFor="playlist"
                className="text-md font-medium text-gray-300"
              >
                Name :
              </label>
              <input
                type="text"
                id="email"
                name="playlist"
                value={playlistName}
                onChange={(e) => setPlayListName(e.target.value)}
                className="mt-1 block w-[40%] min-w-[100px] rounded-md px-3 bg-[#111827] border-transparent focus:border-green-500 focus:ring-0 text-white h-[30px]"
                required
              />
            </div>
            <div className="ml-[50%] flex gap-10">
              <button
                type="submit"
                className="text-[15px] font-semibold bg-green-500 text-white py-2 text-sm px-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Create
              </button>
              <button
                type="submit"
                className="text-[15px] font-semibold bg-green-500 text-white py-2 text-sm px-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        <div className="p-2 flex flex-col gap-5">
          {playlist.map((card, index) => (
            <LibraryCard key={index} card={card} />
          ))}
        </div>
      </div>
      <Space />
      <BottomBar />
    </div>
  );
}

export default Libraries;
