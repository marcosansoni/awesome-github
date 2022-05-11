import type { ComponentMeta } from "@storybook/react";
import type { ComponentStory } from "@storybook/react";
import { Homepage } from "./Homepage";

export default {
  title: "components/Homepage",
  component: Homepage,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Homepage>;

export const Default: ComponentStory<typeof Homepage> = () => <Homepage />;
