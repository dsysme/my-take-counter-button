import React from "react";
import "./styles.css";
import Button from "./components/Button";
import { Label } from "./components/Label";

export default function App() {
  const [count, setCount] = React.useState(0);
  // const increment = () => {
  //   console.log("increment called");
  //   setCount(c => c + 1);
  // };
  const increment = React.useCallback(() => {
    console.log("increment called");
    setCount(c => c + 1);
  }, []);
  return (
    <div className="App">
      <Label value={count} />
      <Button increment={increment} />
    </div>
  );
}
