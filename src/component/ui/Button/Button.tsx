/** @format */

import React, { ButtonHTMLAttributes, Fragment } from "react";

type ButtonProps = {
  text: string;
  varient: "default" | "ghost" | "success" | "warning" | "error";
  onClickHandler: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const VarientTypes: Record<ButtonProps["varient"], string> = {
  default: "bg-gray-900 text-white",
  ghost: "bg-transparent text-gray-900",
  success: "bg-[#2ed573] text-white",
  warning: "bg-[#ffa502] text-white",
  error: "bg-[#eb3b5a] text-white",
};

const Button = ({ text, varient, onClickHandler, ...props }: ButtonProps) => {
  return (
    <Fragment>
      <button
        role='button'
        className={`border rounded-md w-[100px] h-[35px] m-1 ${VarientTypes[varient]}`}
        onClick={onClickHandler}
        {...props}>
        <span className='font-light text-sm'>{text}</span>
      </button>
    </Fragment>
  );
};

export default Button;
