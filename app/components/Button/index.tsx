import React from "react";
import type { ButtonProps } from "./Button";
import { Button, ButtonType } from "./Button";

export const PrimaryButton: React.FC<Omit<ButtonProps, "type">> = (props) => {
  return <Button {...props} type={ButtonType.Primary} />;
};

export const SecondaryButton: React.FC<Omit<ButtonProps, "type">> = (props) => {
  return <Button {...props} type={ButtonType.Secondary} />;
};
