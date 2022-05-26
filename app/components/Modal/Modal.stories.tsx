import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { PrimaryButton } from "../Button";
import { Modal } from "./Modal";

export default {
  title: "components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>Toggle modal</PrimaryButton>
      {open && (
        <Modal onClose={() => setOpen(false)} title="Title of the modal">
          Roba
        </Modal>
      )}
    </>
  );
};
