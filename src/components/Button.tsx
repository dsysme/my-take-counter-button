import React from "react";

type ButtonProps = {
  increment: any;
};

const Button: React.FC<ButtonProps> = ({ increment }) => {
  console.log("Button rendered");
  return (
    <div>
      <button onClick={increment}>ClickMe</button>
    </div>
  );
};

export default Button;
