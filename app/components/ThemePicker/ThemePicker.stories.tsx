import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemePicker } from "./ThemePicker";

export default {
  title: "components/ThemePicker",
  component: ThemePicker,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof ThemePicker>;

export const Default: ComponentStory<typeof ThemePicker> = () => (
  <div className="m-8">
    <ThemePicker />
  </div>
);
