import React from "react";

import classes from "../../styles/UI/Button.module.css";

const Button = (props) => {
  return (
    <div
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
