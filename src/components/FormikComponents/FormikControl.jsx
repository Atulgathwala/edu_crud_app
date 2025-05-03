import React from "react";
import INPUT from "./INPUT";
import Select from "./Select";
import Textarea from "./Textarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <INPUT {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
