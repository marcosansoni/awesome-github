import type { ComponentMeta } from "@storybook/react";
import type { ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import { PrimaryButton, SecondaryButton } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button",
  component: Button,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
  args: {
    children: "Insert content here",
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof PrimaryButton> = (props) => (
  <PrimaryButton {...props} onClick={action("onClick")} />
);

export const Secondary: ComponentStory<typeof SecondaryButton> = (props) => (
  <SecondaryButton {...props} onClick={action("onClick")} />
);
