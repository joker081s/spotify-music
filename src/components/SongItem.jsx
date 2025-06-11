import { songsData } from "../assets/assets";
import SongItemCard from "../components/SongItemCard";

function SongItem() {
  return (
    <div className="mb-4 px-4">
      <h1 className="my-5 font-bold text-3xl">Today's biggest hits</h1>
      <div className="flex overflow-auto scrollbar scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {songsData.map((item, index) => (
          <SongItemCard
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SongItem;
