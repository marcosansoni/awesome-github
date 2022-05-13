import React from "react";
import type { DefaultProps } from "types/common";
import { withCustomClassNames } from "../../../utils/style";

export const Heading1: DefaultProps = ({ classNames, children }) => (
  <div
    className={withCustomClassNames(
      "font-serif text-5xl font-bold sm:text-6xl",
      classNames
    )}
  >
    {children}
  </div>
);

export const Heading2: DefaultProps = ({ classNames, children }) => (
  <div
    className={withCustomClassNames(
      "font-serif text-3xl font-bold sm:text-4xl",
      classNames
    )}
  >
    {children}
  </div>
);

export const Heading3: DefaultProps = ({ classNames, children }) => (
  <div
    className={withCustomClassNames(
      "font-serif text-3xl font-bold",
      classNames
    )}
  >
    {children}
  </div>
);

export const Subheading1: DefaultProps = ({ classNames, children }) => (
  <div className={withCustomClassNames("font-serif text-2xl", classNames)}>
    {children}
  </div>
);

export const Subheading2: DefaultProps = ({ classNames, children }) => (
  <div className={withCustomClassNames("font-serif text-xl", classNames)}>
    {children}
  </div>
);

export const Body: DefaultProps = ({ classNames, children }) => (
  <div className={withCustomClassNames("font-sans sm:text-lg", classNames)}>
    {children}
  </div>
);
