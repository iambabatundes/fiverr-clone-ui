import React from "react";
import ModalFooter from "./modalFooter";
import ModalForm from "./modalForm";
import ModalHeading from "./modalHeading";
import SocialButton from "./socialButton";

function RegisterModalContent({ onClose, setShowJoinModal, onOpen }) {
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const handleContinueClick = (e) => {
    e.preventDefault();
    setShowJoinModal(true);
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={handleFormClick}>
        <ModalHeading title="Join Fiverr" />
        <SocialButton />
        <div className="separator">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <form>
          <input type="text" placeholder="Enter your Email" />

          <button onClick={handleContinueClick} className="continue">
            Continue
          </button>

          <p className="modal-subscribe">
            By joining I agree to receive emails from Fiverr.
          </p>
        </form>
      </div>

      <ModalFooter
        onClick={handleFormClick}
        subtitle="Already A member"
        link="Sign in"
        onOpen={onOpen}
      />
    </div>
  );
}

export default RegisterModalContent;
