/** @format */

import React from "react";

type InputPropsType = {
  type: string;
  placeholder: string;
  name?: string;
  value?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent = ({
  type,
  placeholder,
  name,
  value,
  handleInputChange,
  ...props
}: InputPropsType) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className='max-w-[400px] w-full h-[35px] outline-0 border border-stone-400 m-1 pl-2 rounded-md text-sm font-normal'
        value={value}
        onChange={(e) => handleInputChange(e)}
        {...props}
      />
    </>
  );
};

export default InputComponent;
