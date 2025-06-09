function NewReleaseCard({ card }) {
  return (
    <div class="flex-shrink-0 w-40 cursor-pointer">
      <img
        src={card.image}
        alt="Assi Code"
        class="rounded-lg object-cover w-full h-40"
      />
      <p class="mt-2 font-semibold text-white">{card.name}</p>
      <p class="text-gray-400 text-sm truncate">{card.artist}</p>
    </div>
  );
}

export default NewReleaseCard;
