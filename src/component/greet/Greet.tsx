/** @format */

import React from "react";

type PropsType = {
  username: string;
};

const Greet = ({ username }: PropsType) => {
  return (
    <div className='text-xl font-bold'>Hello! {username}, how are you</div>
  );
};

export default Greet;
