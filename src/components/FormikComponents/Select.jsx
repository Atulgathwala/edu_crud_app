import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as="select" {...rest}>
        {options.map((opt, ind) => {
          return (
            <option key={ind} value={opt.value}>
              {opt.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
