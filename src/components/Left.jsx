import React from "react";
import Chart from "./Chart";
import About from "./About";

function Left() {
  return (
    <div className="w-[70%] bg-transparent  h-[max-content]">
      <Chart/>
        <div className="flex space-x-5 capitalize text-gray-500 font-normal my-3 px-3">
            <p className="text-blue-900 underline">Overview</p>
            <p>Fundamentals</p>
            <p>New insights</p>
            <p>sentiments</p>
            <p>team</p>
            <p>technicals</p>
            <p>tokenomics</p>
        </div>
        <hr />
        <About/>
    </div>
  );
}

export default Left;
