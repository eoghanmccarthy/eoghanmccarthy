import React from "react";

const Button: React.FunctionComponent<{
  type?: string;
  role?: string;
  id?: string;
  style?: object;
  addClass?: string;
  disabled?: boolean;
  isActive?: boolean;
  onClick: () => void;
}> = ({
  children,
  type = "button",
  role = "button",
  id = undefined,
  style = {},
  addClass = "",
  disabled = false,
  isActive = false,
  onClick = null
}) => {
  const btnClass = classNames("", {
    active: isActive,
    disabled: disabled
  });

  return (
    <button
      type={type}
      role={role}
      id={id}
      style={style}
      disabled={disabled}
      className={`btn ${addClass && addClass} ${btnClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
