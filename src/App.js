import bottle from "./assets/rhum_bottle.png";
import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, increment } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      dispatch(increment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Money : {count}$</p>
        <button
          class="rhum--button"
          onClick={() => {
            handleClick();
          }}
        >
          <img src={bottle} className="bottle" alt="bottle" />
        </button>
      </header>
    </div>
  );

  function handleClick() {
    dispatch(incrementByAmount(10));
  }
}

export default App;
