import MinusBtn from "./MinusBtn";

const Buttons = ({ handleChangeCounter, counterProps }) => {
  return (
    <div>
      <button onClick={() => handleChangeCounter(counterProps + 1)}>+1</button>
      <MinusBtn
        handleChangeCounter={handleChangeCounter}
        counterProps={counterProps}
      />
    </div>
  );
};

export default Buttons;
