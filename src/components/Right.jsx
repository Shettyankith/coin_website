import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendingCoin from "./TrendingCoin";
import TrendingSkeleton from "./TrendingSkeleton";

function Right() {
  // State for trending coins
  const [trendingCoins, setTrendingCoins] = useState([]);

  // Function to fetch trending coins
  const getTrendingCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending",
        { headers: { accept: "application/json" } }
      );
      if (response.data) {
        const coins = response.data.coins.slice(0, 3);
        setTrendingCoins(coins);
      }
    } catch (e) {
      console.error("Error fetching trending coins:", e);
    }
  };

  useEffect(() => {
    getTrendingCoins();
  }, []);

  return (
    <div className="w-[85%] lg:w-[30%]">
      {/* Free KoinX Section */}
      <div className="bg-blue-700 h-fit mt-3 rounded-md flex flex-col space-y-3 text-center p-4 justify-center items-center">
        <h3 className="text-white font-medium text-2xl w-[70%]">
          Get Started with KoinX for FREE
        </h3>
        <p className="text-white text-sm w-[90%]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src="getStarted.png" alt="image" className="md:w-1/2 lg:w-full" />
        <button className="bg-white text-black rounded-md px-4 py-1 font-medium w-fit m-auto">
          Get Started for FREE <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Trending Coins Section */}
      <div className="bg-white p-4 rounded-md my-4">
        <h3 className="text-black text-xl font-medium mb-4">
          Trending Coins (24h)
        </h3>
        {trendingCoins.length > 0 ? (
          trendingCoins.map((coin, index) => (
            <TrendingCoin key={index} coin={coin.item} />
          ))
        ) : (
          <>
            <TrendingSkeleton />
            <TrendingSkeleton />
            <TrendingSkeleton />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;
