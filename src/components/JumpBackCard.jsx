function JumpBackCard({ card }) {
  return (
    <div class="min-w-[150px] cursor-pointer hover:scale-105 transform transition rounded-lg bg-gray-800 p-3">
      <img src={card.image} alt="Notes" class="rounded-lg mb-2 w-full" />

      <h3 class="font-semibold text-lg">Notes</h3>

      <p class="text-gray-400">{card.name}</p>
    </div>
  );
}

export default JumpBackCard;
