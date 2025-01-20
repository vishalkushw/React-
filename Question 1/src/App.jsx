import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
const App = () => {

  const myval = useSelector(state => state.mycounter.count);
  const dispatch = useDispatch();
  return (
    <>
    
      <div style={{ textAlign: "center" }}>
        <h1> Counter program </h1>
        <button onClick={() => { dispatch(increment()) }}>Increment</button>
        <h1>{myval}</h1>
        <button onClick={() => { dispatch(decrement()) }}>decrement</button>
      </div>

    </>
  )
}

export default App;