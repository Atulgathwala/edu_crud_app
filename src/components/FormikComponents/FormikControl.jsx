import React from "react";
import INPUT from "./INPUT";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <INPUT {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
