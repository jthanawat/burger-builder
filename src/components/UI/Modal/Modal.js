import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("[Modal] DidUpdate");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {/* this.props children can be own components, some text, that is totally up to us how we use the modal 
    Of xourse thr wrapping div should receive some styling to well, to look good */}
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
