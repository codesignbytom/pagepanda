import { useState } from "react";
import Modal from "../organisms/Modal";

const Button = ({
  text = "",
  link = "",
  classes,
  icon = "",
  iconClasses = "",
}) => {
  const [showModal, setShowModal] = useState(false);

  const buttonClass = icon ? `${classes} button !py-3.5` : `${classes} button`;

  const openModal = (event) => {
    if (link === "#" || !link) {
      event.preventDefault();
      setShowModal(true);
    }
    // For external links, the default behavior will proceed
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <a className={buttonClass} href={link || "#"} onClick={openModal}>
        {icon && <i className={`ph-light ph-${icon} ${iconClasses}`}></i>}
        {text && <span>{text}</span>}
      </a>
      {showModal && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          title="Unable to proceed"
          client:load
        >
          Sorry, this is just a demo. You can't proceed further.
        </Modal>
      )}
    </>
  );
};

export default Button;
