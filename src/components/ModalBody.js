import React from "react";
import Modal from "react-modal";

const ModalBody = props => {
  //takes an open modal varaible and function as a prop and a form as a child

  const closeModal = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal
      ariaHideApp={false}
      className="modal"
      contentLabel="Modal"
      isOpen={props.isOpen}
      onRequestClose={closeModal}
    >
      <button onClick={closeModal}>X</button>
      {props.children}
    </Modal>
  );
};

export default ModalBody;
