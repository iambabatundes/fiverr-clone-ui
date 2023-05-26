import React from "react";

import "./modal.css";

function ModalForm({ checked, desc, email, password, subscribe, title }) {
  return (
    <section>
      <form>
        <input type="text" placeholder={email} />
        {password && <input type="password" placeholder={password} />}

        {desc && <p className="modal-desc">{desc}</p>}

        <button className="continue" type="submit">
          {title}
        </button>

        {checked && (
          <div className="form-check">
            <div className="checkbox">
              <input type="checkbox" />
              <label className="remember">Remember me</label>
            </div>
            <a className="forget" href="#">
              Forget Password
            </a>
          </div>
        )}

        {subscribe && <p className="modal-subscribe">{subscribe}</p>}
      </form>
    </section>
  );
}

export default ModalForm;
