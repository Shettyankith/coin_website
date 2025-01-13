import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

function AlsoLike() {
  // Initialize emptyCoin with values (array of 16 items)
  const emptyCoin = new Array(16).fill({});

  // State for trending coins
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch trending coins
  const getTrendingCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending",
        { headers: { accept: "application/json" } }
      );
      if (response.data.coins) {
        setTrendingCoins(response.data.coins);
        setLoading(false);
      }
    } catch (e) {
      console.error("Error fetching also like coins:", e);
      setLoading(false); 
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
        {loading
          ? emptyCoin.map((coin, index) => (
              <div
                key={index}
                className="border-gray-200 p-4 border-[1px] flex flex-col justify-around items-center rounded-md min-w-[250px] w-[fit-content] overflow-hidden"
              >
                <div className="flex space-x-2 items-center justify-even shrink-0 w-full">
                  <p className="w-[50px] h-[50px] rounded-full object-cover mr-1 px-5 py-4 bg-slate-200 animate-pulse"></p>
                  <p className="bg-slate-200 animate-pulse p-3 w-[80%]"></p>
                  <button className="text-sm lg:text-[15px] rounded-md bg-slate-200 animate-pulse p-3 px-5"></button>
                </div>
                <h4 className="font-medium justify-self-start bg-slate-200 animate-pulse py-3 my-2 w-full"></h4>
                <p className="w-[220px] h-[80px] object-cover animate-pulse bg-slate-200"></p>
              </div>
            ))
          : trendingCoins.map((coin, index) => <Coin coin={coin.item} key={index} />)}
      </div>

      <h2 className="text-black text-xl font-medium my-4 capitalize">
        Trending Coins
      </h2>
      <div className="flex space-x-4 overflow-x-auto w-full">
        {loading
          ? emptyCoin.map((coin, index) => (
              <div
                key={index}
                className="border-gray-200 p-4 border-[1px] flex flex-col justify-around items-center rounded-md min-w-[250px] w-[fit-content] overflow-hidden"
              >
                <div className="flex space-x-2 items-center justify-even shrink-0 w-full">
                  <p className="w-[50px] h-[50px] rounded-full object-cover mr-1 px-5 py-4 bg-slate-200 animate-pulse"></p>
                  <p className="bg-slate-200 animate-pulse p-3 w-[80%]"></p>
                  <button className="text-sm lg:text-[15px] rounded-md bg-slate-200 animate-pulse p-3 px-5"></button>
                </div>
                <h4 className="font-medium justify-self-start bg-slate-200 animate-pulse py-3 my-2 w-full"></h4>
                <p className="w-[220px] h-[80px] object-cover animate-pulse bg-slate-200"></p>
              </div>
            ))
          : trendingCoins.map((coin, index) => <Coin coin={coin.item} key={index} />)}
      </div>
    </div>
  );
}

export default AlsoLike;
