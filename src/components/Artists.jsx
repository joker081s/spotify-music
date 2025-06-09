import data from "../assets/Artists";
import ArtistCard from "./ArtistCard";

function Artists() {
  return (
    <div>
      <div className="font-bold text-[30px] px-4 py-2">Artists</div>
      <section className="px-4 grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 ml-3">
        {data.map((card, index) => (
          <ArtistCard key={index} card={card} />
        ))}
      </section>
    </div>
  );
}

export default Artists;
