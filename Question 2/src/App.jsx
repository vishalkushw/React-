import { useState,useEffect } from "react";

const App = () => {
  const [num, setnum] = useState("0");
  const [square, setSquare] = useState("");
  const [cube, setCube] = useState("");

  const handleSubmit = () => {
    const number = parseInt(num);
   {
      setSquare(number * number);
      setCube(number * number * number);
    } 
  };

  useEffect(()=>{
  handleSubmit(); 
  },[])

  return (
    <>
      <div style={{ textAlign: "center", marginTop:"10%"}}>
        <input type="text"value={num}onChange={(e) => {setnum(e.target.value);}}/>
        <br />
        <br />
        <button onClick={handleSubmit} style={{marginRight:"7%"}}>Submit</button>
        <h1>Square of {num} is: {square}</h1>
        <h1>Cube of {num} is: {cube}</h1>
      </div>
    </>
  );
};

export default App;