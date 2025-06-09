import JumpBackCard from "./JumpBackCard";

const data = [
  { image: "/assets/jump.jpg", name: "Laddi Chahal" },
  { image: "/assets/jump.jpg", name: "Laddi Chahal" },
  { image: "/assets/jump.jpg", name: "Laddi Chahal" },
  { image: "/assets/jump.jpg", name: "Laddi Chahal" },
];

function JumpBack() {
  return (
    <div>
      <div className="font-bold text-[30px] px-4 py-2">Jump back in</div>

      <section class="mt-4 px-4">
        <div class="flex space-x-4 overflow-x-auto pb-4  ml-3">
          {data.map((card, index) => (
            <JumpBackCard key={index} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default JumpBack;
