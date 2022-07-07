import ReactModal from "react-modal";
import React from "react";
import { KeyCap } from "../KeyCap";

interface ModalProps {
  onClose: () => void;
  title?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => {
  return (
    <ReactModal
      className="border-1 rounded-4 absolute left-1/2 top-16 m-auto w-1/4 min-w-[680px] -translate-x-1/2 border-gray-120 bg-white p-8 shadow-2xl"
      isOpen
      onRequestClose={onClose}
    >
      <div>
        <div className="mb-2 flex items-center justify-between border-b border-gray-20 pb-2">
          <div className="w-full pr-1">{title}</div>
          <div>
            <KeyCap onClick={onClose}>esc</KeyCap>
          </div>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};
