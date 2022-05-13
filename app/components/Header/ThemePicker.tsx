import { useState } from "react";
import clsx from "clsx";

export enum ThemeType {
  Light = "Light",
  Dark = "Dark",
}

export const ThemePicker = () => {
  const [theme, setTheme] = useState<ThemeType | null>(null);

  const animationClassName = clsx({
    "animate-[bounce-left-right_0.8s_ease-in_forwards]":
      theme === ThemeType.Dark,
    "animate-[bounce-right-left_0.8s_ease-in_forwards]":
      theme === ThemeType.Light,
  });

  const handleChangeTheme = () => {
    // null means light theme
    setTheme(theme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark);
  };

  return (
    <button className="flex h-6 items-center" onClick={handleChangeTheme}>
      <div className="relative flex h-3 w-10 rounded-lg border border-gray-120">
        <div
          className={`absolute -top-1.5 -left-1.5 h-6 w-6 rounded-full border border-gray-120 bg-white ${animationClassName}`}
        />
      </div>
    </button>
  );
};
