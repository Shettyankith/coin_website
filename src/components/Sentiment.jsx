import React, { useState } from "react";

function Sentiment() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
        bg: "#e8f4fd",
        icon:"fa-file-lines",
        iconBg: "#0082ff",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      },
      {
        bg: "#ebf9f4",
        icon:"fa-arrow-trend-up",
        iconBg: "#0fba83",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac risus est faucibus metus quis. Ametс viverra adipiscing condimentum. Acc Jct pretium in a bibendum in. Sed vitae sit nisi v in a adipisinc metus quis del.",
      },
      {
        bg: "#e8f4fd",
        icon:"fa-file-lines",
        iconBg: "#0082ff",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      },
      {
        bg: "#ebf9f4",
        icon:"fa-arrow-trend-up",
        iconBg: "#0fba83",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ac risus est faucibus metus quis. Ametс viverra adipiscing condimentum. Acc Jct pretium in a bibendum in. Sed vitae sit nisi v in a adipisinc metus quis del.",
      },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - 2 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="text-gray text-sm bg-white p-4 rounded-md font-normal my-5 w-full">
      <h2 className="text-black text-xl font-medium mb-4">Sentiment</h2>
      <h4 className="text-black text-lg font-medium my-2">
        Key Events{" "}
        <img src="./infoTag.png" alt="" className="inline w-[16px]" />
      </h4>
      <div className="flex items-center space-x-4 mt-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`p-2 ${
            currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : "text-black"
          }`}
          disabled={currentIndex === 0}
        >
          <i className="fa-solid fa-angle-left text-2xl"></i>
        </button>

        {/* Visible Divs */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-500 space-x-4"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
              width: `${events.length * 25}%`,
            }}
          >
            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-md p-4 flex items-start space-x-3"
                style={{
                  backgroundColor: event.bg,
                  flex: "0 0 50%",
                  boxSizing: "border-box",
                }}
              >
                <i
                  className={`fa-solid  text-white text-lg rounded-full py-2 px-4 ${event.icon} `}
                  style={{ backgroundColor: event.iconBg }}
                ></i>
                <div>
                  <h6 className="font-medium mb-2">{event.title}</h6>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`p-2 ${
            currentIndex === events.length - 2
              ? "text-gray-400 cursor-not-allowed"
              : "text-black"
          }`}
          disabled={currentIndex === events.length - 2}
        >
          <i className="fa-solid fa-angle-right text-2xl"></i>
        </button>
      </div>

      <h4 className="text-black text-lg font-medium my-4">
        Analyst Estimates{" "}
        <img src="./infoTag.png" alt="" className="inline w-[16px]" />
      </h4>
      <div className="flex space-x-5 items-center mb-8">
        <h1 className="bg-[#ebf9f4] text-green-500 font-medium text-4xl px-5 py-8 text-center rounded-full">76%</h1>
        <div className="w-full"> 
            <div className="flex space-x-5 w-full text-gray-700 items-center">
                <p>Buy</p>
                <div className="bg-green-900 w-[70%] h-[8px] text-green-900"></div>
                <p>76%</p>
            </div>
            <div className="flex space-x-5 w-full text-gray-700 items-center">
                <p>Hold</p>
                <div className="bg-gray-500 w-[10%] h-[8px] text-green-900"></div>
                <p>8%</p>
            </div>
            <div className="flex space-x-5 w-full text-gray-700 items-center">
                <p>Sell</p>
                <div className="bg-red-600 w-[20%] h-[8px] text-green-900"></div>
                <p>16%</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
