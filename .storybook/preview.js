import fonts from "../public/styles/fonts.css";
import tailwindStylesheetUrl from "../app/styles/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";

export const parameters = {
  options: {
    brandTitle: "awesome GitHub components",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [(storyFn) => <Router>{storyFn()}</Router>];
