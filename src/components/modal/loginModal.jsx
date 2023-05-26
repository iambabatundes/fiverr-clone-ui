import React from "react";
import "./modal.css";
import ModalFooter from "./modalFooter";
import ModalForm from "./modalForm";
import ModalHeading from "./modalHeading";
import SocialButton from "./socialButton";

function LoginModal({ onClose, onOpen }) {
  const handleFormClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <section className="modal" onClick={onClose}>
      <div className="modal-container">
        <div className="modal-content" onClick={handleFormClick}>
          <ModalHeading title="Sign in to Fiverr" />
          <SocialButton />
          <div className="separator">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <ModalForm
            email="Email / Password"
            password="Password"
            checked
            title="Continue"
          />
        </div>

        <ModalFooter
          onClick={handleFormClick}
          subtitle="Not a member yet?"
          link="Join now"
          onOpen={onOpen}
        />
      </div>
    </section>
  );
}

export default LoginModal;
