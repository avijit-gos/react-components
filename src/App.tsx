/** @format */

import { useState } from "react";
import InputComponent from "./component/ui/Input/InputComponent";

function App() {
  const [name, setName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <InputComponent
        type='text'
        placeholder='Enter your name'
        value={name}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default App;
