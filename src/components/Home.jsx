import React from 'react'
import Left from './Left'
import Right from './Right'
import AlsoLike from './AlsoLike'

function Home() {
  return (
    <div className="px-8 py-4">
      <p className="text-gray-600 font-normal">
        Cryptocurrencies / <span className="text-black">Bitcoin</span>
      </p>
      {/* Main Wrapper */}
      <div className="w-full flex flex-col">
        {/* Left Component */}
        <div className="order-1">
          <Left />
        </div>
  
        {/* AlsoLike Section */}
        <div className="order-2 lg:order-3">
          <AlsoLike />
        </div>
  
        {/* Right Component */}
        <div className="order-3 lg:order-2 lg:ml-4 lg:w-[50%]">
          <Right />
        </div>
      </div>
  
      {/* Layout above lg */}
      <style>
        {`
          @media (min-width: 1024px) {
            .flex-row-lg {
              display: flex;
              flex-direction: row;
            }
            .flex-row-lg > div {
              flex: 1;
            }
          }
        `}
      </style>
    </div>
  );
  
  
}

export default Home