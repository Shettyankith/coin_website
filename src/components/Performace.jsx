import React from "react";

function Performace() {
  return (
    <div className="text-gray text-sm bg-white p-4 rounded-md font-normal">
        <h2 className="text-black text-xl font-medium mb-4">Performance</h2>
        <div className="flex items-center justify-around my-4">
            <div className="text-gray-500">
                <p >Today's Low</p>
                <p className="font-medium">49,930.22</p>
            </div>
            <div  className="h-[3px] w-[80%] bg-[#efd002] bg-gradient-to-r from-[#efd002] via-[#31b74a] to-[#442ce0]">
           
            </div>
            <div className="text-gray-500">
                <p>Today's High</p>
                <p className="font-medium">49,343.83</p>
            </div>
        </div>

        <div className="flex items-center justify-around my-4">
            <div className="text-gray-500">
                <p >52W Low</p>
                <p className="font-medium">16,930.22</p>
            </div>
            <div  className="h-[3px] w-[80%] bg-[#efd002] bg-gradient-to-r from-[#efd002] via-[#31b74a] to-[#442ce0]">
           
            </div>
            <div className="text-gray-500">
                <p>Today's High</p>
                <p className="font-medium">49,743.83</p>
            </div>
        </div>
      <h4 className="text-black text-lg font-medium my-2">
        Fundamentals{" "}
        <img src="./infoTag.png" alt="" className="inline w-[16px]" />
      </h4>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 m-3">
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">Bitcoin Price</p>
            <p className="font-medium">$16,815.46</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">24h Low / 24h High</p>
            <p className="font-medium">$16,382.07/$16,874.12</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">7d Low / 7d High</p>
            <p className="font-medium">$16,382.07/$16,874.12</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">Trading Volume</p>
            <p className="font-medium">$23,249,202,782</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">Market Cap Rank</p>
            <p className="font-medium">#1</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 m-3 ">
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">Market Cap</p>
            <p className="font-medium">$23,249,202,782</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">Market Cap Dominance</p>
            <p className="font-medium">38.343%</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">Volume / Market Cap</p>
            <p className="font-medium">0.0718</p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">All Time High</p>
            <p className="font-medium">
              <span>
                <p>
                  $69,044.77{" "}
                  <span className="text-red-500 font-medium">-75.6%</span>
                </p>{" "}
                <p className="font-normal text-[10px]">
                  Nov 10, 2021(about 1 year)
                </p>
              </span>
            </p>
          </div>
          <div className="flex justify-between border-b-[1px] border-gray-200 p-2">
            <p className="text-gray-600">All Time Low</p>
            <p className="font-medium">
              <span>
                $67.8 <span className="text-green-500">24729.1%</span>{" "}
                <p className="font-normal text-[10px]">
                  Jul 06, 2013(over 9 years)
                </p>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performace;
