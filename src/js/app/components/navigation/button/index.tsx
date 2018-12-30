import React from "react";

const Button: React.FunctionComponent<{
  buttonClass?: string;
  onClick: () => void;
}> = ({ buttonClass, onClick }) => {
  return (
    <div
      className={"btn btn__round nav-global__toggle " + buttonClass}
      onClick={onClick}
    >
      <div className="bars">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Button;
