/** @format */
import Button from "./component/ui/Button/Button";

function App() {
  return (
    <>
      <Button
        text='Deafult'
        varient='default'
        onClickHandler={() => alert("DEFAULT BUTTON")}
      />
      <Button
        text='Ghost'
        varient='ghost'
        onClickHandler={() => alert("GHOST BUTTON")}
      />
      <Button
        text='Success'
        varient='success'
        onClickHandler={() => alert("SUCCESS BUTTON")}
      />
      <Button
        text='Warning'
        varient='warning'
        onClickHandler={() => alert("WARNING BUTTON")}
      />
      <Button
        text='Error'
        varient='error'
        onClickHandler={() => alert("ERROR BUTTON")}
      />
    </>
  );
}

export default App;
