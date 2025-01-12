import React from "react";

function TrendingCoin({coin}) {
  const priceChange =coin.data.price_change_percentage_24h.usd || "N/A";
  return (
    <div className="flex items-center w-full justify-between my-4">
      <div className="flex items-center">
        <img src={coin.large} alt={coin.name} className="w-[50px] h-[50px] rounded-full object-cover mr-3" />
        <p className="font-medium">{`${coin.name} (${coin.symbol.toUpperCase()})`}</p>
      </div>
      <button className={`px-2 py-1 rounded-md ${priceChange !== "N/A" && priceChange >= 0 ? 'bg-[#ebf9f4] text-green-500' : 'bg-[#fbeae9] text-red-500'}`}>
        <i
          className={`fa-solid fa-caret-${
            priceChange >= 0 ? "up" : "down"
          } mx-1`}
        ></i>
        {priceChange !== "N/A" ? `${priceChange.toFixed(2)}%` : "N/A"}
      </button>
    </div>
  );
}

export default TrendingCoin;
