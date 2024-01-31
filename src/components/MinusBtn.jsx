import { useDispatch } from "react-redux";

const MinusBtn = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>;
};

export default MinusBtn;
