import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const INPUT = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="input" name={name} id={name} {...rest} ></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default INPUT;
