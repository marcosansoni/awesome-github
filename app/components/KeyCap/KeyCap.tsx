import React from "react";
import clsx from "clsx";
import { SmallBody } from "../Typography";
import { withCustomClassNames } from "../../../utils/style";
import { DefaultProps } from "../../../types/common";

export const KeyCap: DefaultProps<{
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, onClick, classNames }) => {
  const className = clsx({
    "rounded-lg border border-gray-60 p-1 leading-5": true,
    "hover:shadow-inner": !!onClick,
    "cursor-auto": !onClick,
  });

  return (
    <button
      className={withCustomClassNames(className, classNames)}
      onClick={onClick}
    >
      <SmallBody>{children}</SmallBody>
    </button>
  );
};
