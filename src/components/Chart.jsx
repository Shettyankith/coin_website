import React from 'react'

function Chart() {
  return (
    <div className='p-4 bg-white my-3 rounded-md'>
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
      <div className="flex space-x-2 md:space-x-5 items-center">
        <h3 className="font-bold text-xl md:text-2xl">$46952.25</h3>
        <p className="bg-green-100 p-1 rounded-md text-green-700">2.51%</p>
        <p className="text-sm text-gray-500">(24H)</p>
      </div>
      <p className="font-mono my-2">&#8377;39,45,452</p>
      <hr />
      <div className="md:flex justify-between items-center my-3 space-y-2 md:space-y-0">
        <h2 className='font-medium'>Bitcoin Price Chart USD</h2>
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

      <div className='w-[100%] h-[500px] bg-red-50'>

      </div>
    </div>
  )
}

export default Chart