import { albumsData, assets, songsData } from "../assets/assets";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import SongCard from "../components/SongCard";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <TopBar />
      <div className="flex justify-center">
        <div className="mt-10 ml-4 flex gap-8 flex-col md:flex-row md:items-end">
          <img className="w-48 rounded" src={albumData.image} alt="" />
          <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">
              {albumData.name}
            </h2>
            <h4>{albumData.desc}</h4>
            <p className="mt-1">
              <img
                className="inline-block w-5"
                src={assets.spotify_logo}
                alt=""
              />{" "}
              <b>Spotify</b> • 1,323,154 likes • <b>50 songs,</b> about 2 hr 30
              min
            </p>
          </div>
        </div>
      </div>
      <div className="flex m-auto justify-center w-[80vw] mt-5">
        <div className="flex w-full justify-between bg-[#1f2937] rounded-lg px-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
          <div className="text-white flex items-center">
            <b className="mr-4 text-[#a7a7a7]">#</b>
            <p>Title</p>
          </div>
          <p className="text-[15px] text-center">
            <img className="m-auto w-4" src={assets.clock_icon} alt="" />
          </p>
        </div>
      </div>
      {songsData.map((item, index) => (
        <SongCard index={index} item={item} />
      ))}
    </>
  );
};

export default DisplayAlbum;
