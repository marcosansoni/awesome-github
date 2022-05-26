import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { KeyCap } from "./KeyCap";

export default {
  title: "components/KeyCap",
  component: KeyCap,
} as ComponentMeta<typeof KeyCap>;

export const Default: ComponentStory<typeof KeyCap> = (args) => (
  <KeyCap children="esc" onClick={action("onClick")} {...args} />
);
