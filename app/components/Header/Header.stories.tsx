import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "components/Header",
  component: Header,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => <Header />;
