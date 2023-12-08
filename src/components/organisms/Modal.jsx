import React from "react";

const ModalOverlay = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-black opacity-50 z-50"
    onClick={onClick}
  ></div>
);

const ModalContent = ({ closeModal, title, children }) => (
  <div
    className="modal-content bg-white text-black px-6 py-12 rounded flex flex-col items-center justify-center gap-6 lg:gap-8"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="flex flex-col text-center items-center justify-center gap-2 lg:gap-3">
      <h5 className="text-h2">{title}</h5>
      {children}
    </div>
    <button
      className="bg-black text-white p-4 w-full rounded"
      onClick={closeModal}
    >
      Close
    </button>
  </div>
);

const Modal = ({ showModal, closeModal, title, children }) => {
  // Handle the Escape key
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  // Add event listener for Escape key
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <ModalOverlay onClick={closeModal} />
      <div className="container max-w-xl relative z-[60]">
        <ModalContent closeModal={closeModal} title={title}>
          {children}
        </ModalContent>
      </div>
    </div>
  );
};

export default Modal;
