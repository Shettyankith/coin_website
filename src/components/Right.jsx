import React from "react";

function Right() {
  return (
    <div className="w-[30%]">
      <div className=" bg-blue-700 h-fit mt-3 rounded-md flex flex-col space-y-3 text-center p-4 justify-center items-center">
        <h3 className="text-white font-medium text-2xl w-[70%]">
          Get Started with KoinX for FREE
        </h3>
        <p className="text-white text-sm w-[90%]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src="" alt="" />
        <button className="bg-white text-black rounded-md px-4 py-1 font-medium w-fit m-auto">
          Get Started for FREE <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="bg-white p-4 rounded-md my-4">
          <h3 className="text-black text-xl font-medium mb-4">Trending Coins (24h)</h3>
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
            <img src="./bitcoin.png" alt="" className="w-[50px] h-[50px]"/>
            <p className="font-medium">Ethereum(ETH)</p>
            </div>
            <button className="bg-[#ebf9f4] text-green-500 px-2 py-1 rounded-md justify-self-end"><i class="fa-solid fa-caret-up mx-1"></i> 8.21%</button>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
            <img src="./bitcoin.png" alt="" className="w-[50px] h-[50px]"/>
            <p className="font-medium">Bitcoin(BTC)</p>
            </div>
            <button className="bg-[#ebf9f4] text-green-500 px-2 py-1 rounded-md justify-self-end"><i class="fa-solid fa-caret-up mx-1"></i> 5.26%</button>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
            <img src="./bitcoin.png" alt="" className="w-[50px] h-[50px]"/>
            <p className="font-medium">Polygon(MATIC)</p>
            </div>
            <button className="bg-[#ebf9f4] text-green-500 px-2 py-1 rounded-md justify-self-end"><i class="fa-solid fa-caret-up mx-1"></i>4.32%</button>
          </div>
      </div>
    </div>
  );
}

export default Right;
