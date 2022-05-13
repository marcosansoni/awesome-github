export const withCustomClassNames = (
  defaultClassName: string,
  customClassNames?: string
) => {
  return [defaultClassName, customClassNames].filter(Boolean).join(" ");
};
