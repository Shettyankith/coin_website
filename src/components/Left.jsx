import React from "react";
import Chart from "./Chart";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import Sentiment from "./Sentiment";

function Left() {
  return (
    <div className="w-[100%] lg:w-[70%] bg-transparent  h-[max-content]">
      <Chart/>
        <div className="flex space-x-5 overflow-x-auto md:overflow-hidden capitalize text-gray-500 font-normal my-3 px-3">
            <p className="text-blue-900 underline">Overview</p>
            <p className="w-[fit-content]">Fundamentals</p>
            <p className="w-[fit-content]">New insights</p>
            <p className="w-[fit-content]">sentiments</p>
            <p className="w-[fit-content]">team</p>
            <p className="w-[fit-content]">technicals</p>
            <p className="w-[fit-content]">tokenomics</p>
        </div>
        <hr />
        <Sentiment/>
        <About/>
        <Tokenomics/>
        <Team/>
    </div>
  );
}

export default Left;
