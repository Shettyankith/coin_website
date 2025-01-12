import React from "react";
import axios from "axios";
import { useState } from "react";
import ChartWidget from "./ChartWidget"

function Chart() {
  // API request
  const [coinData, setCoinData] = useState(null);
  const getCoinValue = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price",
        {
          params: {
            ids: "bitcoin",
            vs_currencies: "inr,usd",
            include_24hr_change: "true",
          },
        }
      );
      setCoinData(response.data.bitcoin);
    } catch (error) {
      console.error("Error fetching coin value:", error.message);
    }
  };

  getCoinValue();

  return (
    <div className="p-4 bg-white my-3 rounded-md">
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3">
        <p className="flex justify-center items-center font-medium text-lg space-x-1 md:space-x-3">
          <img
            src="./bitcoin.png"
            alt="bitcoin"
            className="w-[60px] h-[60px]"
          />{" "}
          Bitcoin <span className="uppercase text-gray-600 text-sm">btc</span>
        </p>
        <p className="p-1 bg-gray-500 text-white rounded-md">Rank #1</p>
      </div>
      <div>
      {coinData ? (
        <>
          <div className="flex space-x-2 md:space-x-5 items-center">
            <h3 className="font-bold text-xl md:text-2xl">${coinData.usd.toFixed(2)}</h3>
            <p
              className={`p-1 rounded-md ${
                coinData.usd_24h_change > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {coinData.usd_24h_change.toFixed(2)}%
            </p>
            <p className="text-sm text-gray-500">(24H)</p>
          </div>
          <p className="font-mono my-2">
            &#8377;{coinData.inr.toLocaleString("en-IN")}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <hr />
      <div className="md:flex justify-between items-center my-3 space-y-2 md:space-y-0">
        <h2 className="font-medium">Bitcoin Price Chart USD</h2>
        <div className="flex text-sm text-gray-500 space-x-1 md:space-x-4">
          <p>1H</p>
          <p>24H</p>
          <p className="text-blue-800 bg-blue-200 rounded-lg px-2 ">7D</p>
          <p>1M</p>
          <p>3M</p>
          <p>6M</p>
          <p>1Y</p>
          <p>ALL</p>
        </div>
      </div>

      <div className="w-[100%] h-[500px]">
        <ChartWidget/>
      </div>
    </div>
  );
}

export default Chart;
