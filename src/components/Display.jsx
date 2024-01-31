import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Display = () => {
  const counter = useSelector((state) => state.counter);
  const status = useSelector((state) => state.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 0) {
      dispatch({ type: "NEG" });
    } else {
      dispatch({ type: "POS" });
    }
  }, [counter]);

  return (
    <div>
      <h3>Current value: {counter}</h3>
      <h3>The value is {status}</h3>
    </div>
  );
};

export default Display;
