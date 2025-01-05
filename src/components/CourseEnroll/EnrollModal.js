import React, { useEffect } from "react";
import Modal from "react-modal";
import EnrollForm from "./EnrollForm";

const EnrollModal = ({ isOpen, onClose }) => {
  const handleFormSubmit = (data) => {
    console.log(data); // Process form data (e.g., send to an API)
    onClose(); // Close modal after submission
  };

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY; // Get current scroll position
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1); // Restore scroll position
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Enroll Form Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="px-2 mb-4">
        <h2>Join Our Mushroom Cultivation Journey</h2>
      </div>
      <div className="p-2">
        <EnrollForm onSubmit={handleFormSubmit} />
      </div>
    </Modal>
  );
};

export default EnrollModal;
