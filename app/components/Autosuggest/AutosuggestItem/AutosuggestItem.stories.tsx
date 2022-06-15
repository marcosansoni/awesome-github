import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { AutosuggestItem } from "./AutosuggestItem";

export default {
  title: "components/Autosuggest/AutosuggestItem",
  component: AutosuggestItem,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
  args: {
    avatarUrl:
      "https://avatars.githubusercontent.com/u/17259768?s=60&u=6b7417489c5108464addaae462f2608429aab8ca&v=4",
    name: "Marco Burstein",
    login: "marco",
    bio: "Web and mobile developer. Usually working in JavaScript, TypeScript, Swift, or Python. WWDC 2019 scholarship recipient. Winner of Google Code-in 2017.",
  },
} as ComponentMeta<typeof AutosuggestItem>;

export const Default: ComponentStory<typeof AutosuggestItem> = (args) => (
  <AutosuggestItem {...args} />
);
