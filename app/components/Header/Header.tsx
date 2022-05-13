import { Link } from "@remix-run/react";
import { LogoIcon, SearchIcon } from "~/components/SvgIcon";
import { ThemePicker } from "~/components/Header/ThemePicker";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <LogoIcon />
      </Link>
      <ul className="flex">
        <li className="ml-8">
          <button>
            <SearchIcon />
          </button>
        </li>
        <li className="ml-8">
          <ThemePicker />
        </li>
      </ul>
    </header>
  );
};
