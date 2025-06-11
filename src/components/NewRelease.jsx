// import data from "../assets/NewRelease";
import { newRelases } from "../assets/assets";
import NewReleaseCard from "./NewReleaseCard";

function NewRelease() {
  return (
    <div>
      <div className="font-bold text-[30px] px-4 py-2 mt-5">
        New Release for you
      </div>
      <section className="mt-6 px-4">
        <div className="flex overflow-x-auto space-x-4 no-scrollbar pb-2 ml-3">
          {newRelases.map((card, index) => (
            <NewReleaseCard key={index} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewRelease;
