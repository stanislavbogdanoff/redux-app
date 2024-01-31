import MinusBtn from "./MinusBtn";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <MinusBtn />
    </div>
  );
};

export default Buttons;
