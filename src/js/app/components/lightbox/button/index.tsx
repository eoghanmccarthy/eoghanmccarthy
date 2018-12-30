import React from "react";

const Button: React.FunctionComponent<{
  buttonClass?: string;
  onClick: () => void;
}> = ({ buttonClass, onClick }) => (
  <div className={"btn " + buttonClass} onClick={onClick}>
    <div className="bars">
      <span />
      <span />
    </div>
  </div>
);

export default Button;
