import { useContext } from "react";
import { mycontext } from "./ColorContext";

const App = () => {
  const { color, setColor } = useContext(mycontext);

  const handleChangeColor = () => {
    const colornm = prompt("Enter color name ");
    setColor(colornm);
  };

  return (
    <>
      <div style={{width: "100%", backgroundColor: color }}>
        <br />
        <br />
        <br />
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </>
  );
};

export default App;