import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-4">
        <div
          onClick={() => dispatch(decrement())}
          className="border-red-400 border-2 px-6  text-center"
        >
          <button className="font-bold text-[20px]"> -</button>
        </div>
        <div>{count}</div>
        <div
          onClick={() => dispatch(increment())}
          className="border-green-500 border-2 px-6  text-center"
        >
          <button className="font-bold text-[20px]">+</button>
        </div>
        <div
          onClick={() => dispatch(incrementByValue(5))}
          className="border-green-500 border-2 px-6  text-center"
        >
          <button className="font-bold text-[20px]">+</button>
        </div>
      </div>
    </>
  );
}

export default App;
