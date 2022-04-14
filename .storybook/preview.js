import fonts from "../public/styles/fonts.css";
import tailwindStylesheetUrl from "../app/styles/tailwind.css";

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
