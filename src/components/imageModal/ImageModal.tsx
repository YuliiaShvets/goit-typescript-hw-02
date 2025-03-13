import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={imageUrl} alt="Large view" className={s.modalImage} />
    </Modal>
  );
};

export default ImageModal;
