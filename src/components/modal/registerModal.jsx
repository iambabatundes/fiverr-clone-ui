import React, { useState } from "react";
import "./modal.css";
import ModalFooter from "./modalFooter";
import ModalForm from "./modalForm";
import ModalHeading from "./modalHeading";
import SocialButton from "./socialButton";
import JoinModal from "./joinModal";
import { NavLink } from "react-router-dom";
import RegisterModalContent from "./registerModalContent";

function RegisterModal({ onClose, onOpen }) {
  const [showJoinModal, setShowJoinModal] = useState(false);

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="modal" onClick={onClose}>
      {showJoinModal ? (
        <JoinModal onClose={() => setShowJoinModal(false)} onOpen={onOpen} />
      ) : (
        <RegisterModalContent
          onClose={onClose}
          setShowJoinModal={setShowJoinModal}
          onOpen={onOpen}
        />
      )}
    </section>
  );
}

export default RegisterModal;
