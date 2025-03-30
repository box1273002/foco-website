'use client'
import { useState } from "react";
export const PricingBox = ({ title, year, month, lifetime, benefits }: { title: string, year: number, month: number, lifetime: number, benefits: string[] }) => {
  const buttons = ["Yearly", "Monthly", "Lifetime"]
  const texts = [[year, "month", 12],
  [month, "month", 1],
  [lifetime, "forever", 1]]
  const [selected, setSelected] = useState(0);
  return (

    <>
      <div className="border hover:border-2 m-4 h-96 p-8 rounded-3xl bg-gradient-to-br from-gray-200 dark:from-gray-900 to-white dark:to-black">

        <div className="text-5xl py-4 font-semibold">{title}</div>
        <div className="flex-nowrap">
          {buttons.map((label, index) => (
            <button className={`text-sm rounded-3xl p-2 m-1 w-20  ${selected == index ? "dark:bg-white dark:text-gray-800" : "dark:bg-gray-900"}`}
              onClick={() => setSelected(index)} key={label}> {label}</button>
          ))}
          <div className="transition-all ease-in-out duration-900">
            <div className="text-xl font-semibold py-4">
              £
              <span className="text-5xl">
                {(Number(texts[selected][0]) / Number(texts[selected][2])).toFixed(2)}
              </span>
              /{texts[selected][1]}
            </div>
            <div className="flex items-center h-2 mb-4">
              <hr className="flex-1" />
              {Number(texts[selected][0]) != 0 && texts[selected][1] != "forever" && <span className="mx-2"> £{(Number(texts[selected][0]) * 12 / Number(texts[selected][2])).toFixed(2)} billed annually</span>}
              {Number(texts[selected][0]) != 0 && texts[selected][1] == "forever" && <span className="mx-2">One time payment</span>}
              <hr className="flex-1" />
            </div>
          </div>
          {benefits.map((benefit) => (
            <div className="py" key={benefit}>
              ✔ {benefit}
            </div>
          ))}
        </div>
      </div >
    </>

  )
}
