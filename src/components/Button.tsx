import React from "react";

type ButtonProps = {
  color: string;
  width: string;
  onClick: () => any;
  height: string;
  radius: string;
  children?: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
  color,
  children,
  height,
  onClick,
  width,
  radius,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, borderRadius: radius, height, width }}
    >
      {children}
    </button>
  );
};
export default Button;