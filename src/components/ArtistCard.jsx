function ArtistCard({ card }) {
  return (
    <div className="flex items-center space-x-3 bg-gray-800 rounded-md p-2 cursor-pointer hover:bg-gray-700">
      <img
        src={card.image}
        alt="Gurnam Bhullar"
        class="w-12 h-12 rounded-full object-cover"
      />
      <span class="font-medium text-white">{card.name}</span>
    </div>
  );
}

export default ArtistCard;
