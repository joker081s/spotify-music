function JumpBackCard({ card }) {
  return (
    <div className="min-w-[150px] cursor-pointer hover:scale-105 transform transition rounded-lg bg-gray-800 p-3">
      <img src={card.image} alt="Notes" className="rounded-lg mb-2 w-full" />

      <h3 className="font-semibold text-lg">Notes</h3>

      <p className="text-gray-400">{card.name}</p>
    </div>
  );
}

export default JumpBackCard;
