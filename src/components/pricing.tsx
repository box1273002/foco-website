'use client'
import { useState } from "react";

export const PricingBox = ({ title, year, month, lifetime, benefits }: { title: string, year: number, month: number, lifetime: number, benefits: string[] }) => {
  const buttons = ["Yearly", "Monthly", "Lifetime"]
  const texts = [[year, "month", 12],
  [month, "month", 1],
  [lifetime, "forever", 1]]
  const [selected, setSelected] = useState(0);

  const glowColors = {
    rose: "hover:border-rose-400 hover:shadow-[0_0_30px_rgba(251,113,133,1)]",
    purple: "hover:border-purple-400 hover:shadow-[0_0_30px_rgba(153,209,250,1)]",
    violet: "hover:border-violet-600 hover:shadow-[0_0_30px_rgba(124,58,237,1)]",
    blue: "hover:border-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,1)]"
  };

  let glowColor = glowColors.violet;


  return (
    <div className={`border border-gray-800  m-4 h-full flex flex-col p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black transition-all duration-300 ${glowColor}`}>
      <div className="flex-grow flex flex-col">
        <div className="text-4xl py-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">{title}</div>

        <div>
          <div className="flex rounded-full bg-gray-900 p-1 mb-6 max-w-fit">
            {buttons.map((label, index) => (
              <button
                className={`text-sm rounded-full p-2 m-1 w-24 transition-all duration-300 ${selected === index
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium"
                  : "text-gray-400 hover:text-white"
                  }`}
                onClick={() => setSelected(index)}
                key={label}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="transition-all ease-in-out duration-500">
            <div className="text-xl font-normal py-4 text-gray-300">
              £<span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 text-transparent bg-clip-text ml-1">
                {(Number(texts[selected][0]) / Number(texts[selected][2])).toFixed(2)}
              </span>
              <span className="text-gray-400">/{texts[selected][1]}</span>
            </div>

            <div className="flex items-center h-2 mb-4">
              <hr className="flex-1" />
              {Number(texts[selected][0]) != 0 && texts[selected][1] != "forever" && <span className="mx-2"> £{(Number(texts[selected][0]) * 12 / Number(texts[selected][2])).toFixed(2)} billed annually</span>}
              {Number(texts[selected][0]) != 0 && texts[selected][1] == "forever" && <span className="mx-2">One time payment</span>}
              <hr className="flex-1" />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 mt-4">
            {benefits.map((benefit) => (
              <div className="py-2 flex items-start" key={benefit}>
                <span className="text-purple-400 mr-2">✓</span>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="w-full mt-8 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300">
        Get Started
      </button>
    </div>
  );
};
