import React from "react";
import { SmallBody } from "../Typography";

export const KeyCap: React.FC<{
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, onClick }) => {
  return (
    <button
      className="rounded-lg border border-gray-60 p-1 leading-5 hover:shadow-inner"
      onClick={onClick}
    >
      <SmallBody>{children}</SmallBody>
    </button>
  );
};
