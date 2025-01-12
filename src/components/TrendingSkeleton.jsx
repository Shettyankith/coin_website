import React from "react";

function TrendingCoin() {
  return (
    <div className="flex items-center w-full justify-between my-4">
      <div className="flex items-center w-3/4">
        <p className="w-[50px] h-[50px] rounded-full object-cover mr-3 p-4 bg-slate-200 animate-pulse" ></p>
        <p className="font-medium py-3 bg-slate-200 animate-pulse w-[70%]"></p>
      </div>
      <button className="px-5 py-3 rounded-md bg-slate-200 animate-pulse">
      </button>
    </div>
  );
}

export default TrendingCoin;
