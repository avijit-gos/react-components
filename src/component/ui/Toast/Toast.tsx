/** @format */

import React, { useEffect, useState } from "react";

type ToastPropsType = {
  value: number;
};

function checkColorCode(value: number): string {
  if (value <= 35) {
    return "bg-[#eb4d4b]";
  } else if (value <= 70) {
    return "bg-[#f0932b]";
  } else {
    return "bg-[#2ed573]";
  }
}

const Toast = ({ value }: ToastPropsType) => {
  const [selectValue, setSelectValue] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectValue(value - 100);
    }, 100);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className='border border-gray-200 rounded-full max-w-[500px] m-1 overflow-hidden'>
      <div
        className={`rounded-full transition-colors duration-500 flex items-center justify-end pr-2 ${checkColorCode(
          value
        )}`}
        style={{
          transform: `translateX(${selectValue}%)`,
          transition: "transform 0.5s ease-in-out",
        }}>
        <span className='font-medium text-[10px] text-white'>{value}%</span>
      </div>
    </div>
  );
};

export default Toast;
