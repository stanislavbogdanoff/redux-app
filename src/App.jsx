import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Redux Example App</h1>
      <Display counterProps={counter} />
      <Buttons handleChangeCounter={setCounter} counterProps={counter} />
    </>
  );
}

export default App;
