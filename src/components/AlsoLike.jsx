import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

function AlsoLike() {
  // State for trending coins
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setloading] = useState(true);

  // Function to fetch trending coins
  const getTrendingCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending",
        { headers: { accept: "application/json" } }
      );
      if (response.data.coins) {
        setTrendingCoins(response.data.coins);
        setloading(false);
      }
    } catch (e) {
      console.error("Error fetching aslo like coins:", e);
    }
  };

  useEffect(() => {
    getTrendingCoins();
  }, []);
  return (
    <div className="bg-white w-full p-5 mt-5">
      <h2 className="text-black text-xl font-medium mb-4 capitalize">
        You may also like
      </h2>
      <div className="flex space-x-4 overflow-x-auto w-full">
        {loading ? (
          <p>Loading</p>
        ) : (
          trendingCoins.map((coin, index) => (
            <Coin coin={coin.item} key={index} />
          ))
        )}
      </div>

      <h2 className="text-black text-xl font-medium my-4 capitalize">
        Trending Coins
      </h2>
      <div className="flex space-x-4 overflow-x-auto w-full">
        {loading ? (
          <p>Loading</p>
        ) : (
          trendingCoins.map((coin, index) => (
            <Coin coin={coin.item} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default AlsoLike;
