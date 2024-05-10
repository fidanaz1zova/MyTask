import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";
import "./App.css";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="counterttl">Counter</h1>
      <div className="counter">
        <button className="dec" onClick={() => dispatch(decrement())}>
          Decrement{" "}
        </button>
        <h1 className="count">{count}</h1>
        <button className="inc" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
