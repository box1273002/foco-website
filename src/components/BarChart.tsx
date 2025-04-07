"use client"
import React from 'react';

const BarChart: React.FC = () => {
    const data = [423, 124];
    const labels = ["With FOCO", "Without FOCO"];
    const maxHeight = 300;
    const scaleFactor = maxHeight / Math.max(...data);

    return (
        <div className="w-full flex items-end justify-center space-x-20 bg-transparent py-4">
            {data.map((value, index) => {
                const barHeight = value * scaleFactor;
                return (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            style={{
                                height: `${barHeight}px`,
                                backgroundImage: 'linear-gradient(to top, #5f3dc4, #4c6ef5)',
                            }}
                            className="w-14 rounded-md shadow-md"
                        ></div>
                        <div className="mt-2 text-center font-medium text-blue-300">
                            {labels[index]}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BarChart;
