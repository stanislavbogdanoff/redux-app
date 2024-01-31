import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsEven, setIsOdd } from "../redux/slices/isEvenSlice";

const Display = () => {
  const counter = useSelector((state) => state.counter);
  const status = useSelector((state) => state.status);
  const isEven = useSelector((state) => state.isEven);

  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 0) {
      dispatch({ type: "NEG" });
    } else {
      dispatch({ type: "POS" });
    }
  }, [counter]);

  useEffect(() => {
    if (counter % 2 === 0) {
      dispatch(setIsEven());
    } else {
      dispatch(setIsOdd());
    }
  }, [counter]);

  console.log(isEven);

  return (
    <div>
      <h3>Current value: {counter}</h3>
      <h3>The value is {status}</h3>
      <h3>{isEven.isEven ? <i>Even</i> : <i>Odd</i>}</h3>
    </div>
  );
};

export default Display;
