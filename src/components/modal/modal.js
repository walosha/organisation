import { GrFormClose } from "react-icons/gr";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";
import "./modal.module.css";

const Modal = (props) => {
  const nodeRef = useRef(null);
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal-hook");
    setMounted(true);
  }, []);

  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div ref={nodeRef} className="modal" onClick={props.onClose}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <h4 className="modal__title">{props.title}</h4>
            <i>
              <GrFormClose size="2.5rem" onClick={props.onClose} />
            </i>
          </div>
          <div className="modal__body">{props.children}</div>
          <div className="modal__footer">{props.footer}</div>
        </div>
      </div>
    </CSSTransition>
  );
  return mounted && ref.current ? createPortal(content, ref.current) : null;
};

export default Modal;
