import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import BottomBar from "./BottomBar";

function Album() {
  return (
    <div className="mb-4 ml-5">
      <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
      <div className="flex overflow-auto">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            name={item.name}
            desc={item.desc}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Album;
