import React from "react";

function Coin({ coin }) {
  const priceChange =coin?.data?.price_change_percentage_24h?.usd ?? "N/A";
  const price =( coin?.data?.price*100).toFixed(2);

  return (
    <div className="border-gray-200 p-4 border-[1px] flex flex-col justify-around items-center rounded-md min-w-[200px] w-[fit-content] overflow-hidden">
      <div className="flex space-x-2 items-center shrink-0">
        <img
          src={coin?.large}
          alt={coin?.name}
          className="w-[50px] h-[50px] rounded-full object-cover mr-1"
        />
        <p>{coin?.name}</p>
        <button
          className={` p-1 text-sm lg:text-[15px] rounded-md ${
            priceChange !== "N/A" && priceChange >= 0
              ? "bg-[#ebf9f4] text-green-500"
              : "bg-[#fbeae9] text-red-500"
          }`}
        >
          <i
            className={`fa-solid fa-caret-${
              priceChange >= 0 ? "up" : "down"
            } mx-1`}
          ></i>
          {priceChange !== "N/A" ? `${Number(priceChange).toFixed(2)}%` : "N/A"}
        </button>
      </div>
      <h4 className="font-medium justify-self-start w-full">{price}</h4>
      {coin?.data?.sparkline ? (
        <img
          src={coin?.data?.sparkline}
          alt="graph"
          className="w-[150px] h-[80px] object-cover"
        />
      ) : (
        <p className="text-gray font-medium">No sparkline available</p>
      )}
    </div>
  );
}

export default Coin;
