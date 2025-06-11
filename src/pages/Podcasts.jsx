import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Space from "../components/Space";

function Podcasts() {
  return (
    <>
      <TopBar />
      <h1 className="text-3xl px-4 font-bold mt-4">Podcasts</h1>
      <div className="px-4 py-6 space-y-4">
        <div className="bg-[#083b3f] p-4 rounded-xl space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold">Daily Affirmations</h2>
              <p className="text-gray-400 text-sm">Episode • It's Different</p>
            </div>
            <button className="text-white text-xl">+</button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="cover"
              className="w-32 h-32 rounded-lg object-cover"
            />
            <p className="text-sm text-gray-300 text-center">
              <span className="font-semibold text-white">
                Mar 19 • 21 min •
              </span>
              Daily affirmations are positive statements you repeat to
              yourself...
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 space-y-4">
        <div className="bg-[#083b3f] p-4 rounded-xl space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold">Daily Affirmations</h2>
              <p className="text-gray-400 text-sm">Episode • It's Different</p>
            </div>
            <button className="text-white text-xl">+</button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="cover"
              className="w-32 h-32 rounded-lg object-cover"
            />
            <p className="text-sm text-gray-300 text-center">
              <span className="font-semibold text-white">
                Mar 19 • 21 min •
              </span>
              Daily affirmations are positive statements you repeat to
              yourself...
            </p>
          </div>
        </div>
      </div>
      <Space />
      <BottomBar />
    </>
  );
}

export default Podcasts;
