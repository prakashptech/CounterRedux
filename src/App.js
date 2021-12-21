import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
export default function App() {
  const myState = useSelector((state) => state.ChangeTheNumber);
  console.log(myState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>welcome to Redux</h1>
      <div>
        <button onClick={() => dispatch(decNumber(6))}>
          <span> - </span>
        </button>
        {myState}
        <button onClick={() => dispatch(incNumber(5))}>
          <span> + </span>
        </button>
      </div>
    </div>
  );
}
