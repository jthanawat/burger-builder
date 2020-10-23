import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {/* props children can be own components, some text, that is totally up to us how we use the modal 
    Of xourse thr wrapping div should receive some styling to well, to look good */}
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
