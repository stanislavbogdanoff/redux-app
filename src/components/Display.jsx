import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((state) => state);

  return <h3>Current value: {counter}</h3>;
};

export default Display;
