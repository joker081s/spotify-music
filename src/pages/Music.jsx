import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import topPick from "../assets/TopPick";
import trending from "../assets/Trending";
import NewReleaseCard from "../components/NewReleaseCard";
import SideItem from "../components/SongItem";
import Space from "../components/Space";

function Music({ user }) {
  const index = new Date().getDay();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(day);
  return (
    <>
      <TopBar user={user} />
      <section class="mt-6 px-4">
        <h2 class="text-4xl font-extrabold text-green-400 tracking-tight">
          NEW MUSIC {day.at(index)}
        </h2>
        <p class="text-gray-400 mt-2">
          Catch all the latest music from artists, plus new singles. Updates
          everyday.
        </p>
      </section>
      <SideItem />
      <h2 className="text-4xl font-bold px-4 mt-5">Top picks for you </h2>
      <div className="flex gap-10 px-4 py-5">
        {topPick.map((card, index) => (
          <NewReleaseCard card={card} key={index} />
        ))}
      </div>
      <h2 className="text-4xl font-bold px-4 mt-5">Trending Songs</h2>
      <div className="flex gap-10 px-4 py-5">
        {trending.map((card, index) => (
          <NewReleaseCard card={card} key={index} />
        ))}
      </div>
      <Space />
      <BottomBar />
    </>
  );
}

export default Music;
