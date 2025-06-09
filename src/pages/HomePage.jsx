import Artists from "../components/Artists";
import NewRelease from "../components/NewRelease";
import JumpBack from "../components/JumpBack";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import SongItem from "../components/SongItem";
import Space from "../components/Space";
import Album from "../components/Album";

function HomePage() {
  return (
    <>
      <TopBar />
      <SongItem />
      <Artists />
      <Album />
      <NewRelease />
      <JumpBack />
      <Space />
      <BottomBar />
    </>
  );
}

export default HomePage;
