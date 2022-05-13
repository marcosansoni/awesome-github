import React from "react";
import clsx from "clsx";

export enum ButtonType {
  Primary = "Primary",
  Secondary = "Secondary",
}

export interface ButtonProps {
  onClick: () => void;
  type: ButtonType;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
}) => {
  const classNameColor = clsx({
    "bg-blue-100 text-white hover:bg-blue-120": type === ButtonType.Primary,
    "bg-gray-10 text-gray-120 hover:bg-gray-20": type === ButtonType.Secondary,
  });

  return (
    <button
      className={`rounded-lg p-3 ${classNameColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
