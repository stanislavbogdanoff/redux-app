const MinusBtn = ({ handleChangeCounter, counterProps }) => {
  return (
    <button onClick={() => handleChangeCounter(counterProps - 1)}>-1</button>
  );
};

export default MinusBtn;
