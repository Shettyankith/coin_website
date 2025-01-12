import React from "react";
import Left from "./Left";
import Right from "./Right";
import AlsoLike from "./AlsoLike";

function Home() {
  return (
    <div className="px-8 py-4">
      <p className="text-gray-600 font-normal">
        Cryptocurrencies / <span className="text-black">Bitcoin</span>
      </p>
      <div className="w-[100%] flex lg:space-x-4 flex-col lg:flex-row">
        <Left />
        <Right />
      </div>
      <AlsoLike />
    </div>
  );
}

export default Home;
