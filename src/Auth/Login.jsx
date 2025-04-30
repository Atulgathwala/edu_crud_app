import { Form, Formik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
import FormikControl from "../components/FormikComponents/FormikControl";
import { AuthContextAPI } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let { login, state } = useContext(AuthContextAPI);

  let navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  let validationSchema = yup.object({
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  let handleSubmit = (values) => {
    login(values);
    navigate("/");
  };
  return (
    <section className=" min-h-[calc(100vh-70px)] flex justify-center  ">
      <section className="w-[25%]  mt-[10vh]">
        <article className="  py-6 px-6 rounded-md bg-white">
          <h1 className="font-semibold text-[20px] text-center ">Login</h1>
          <Formik
            initialValues={initialState}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(field) => {
              return (
                <Form className="flex flex-col gap-4">
                  <FormikControl
                    control="input"
                    name="email"
                    label="Email"
                    placeholder="enter your email"
                  />
                  <FormikControl
                    control="input"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="enter your password"
                  />
                  <div>
                    <button
                      className="bg-button-color text-white w-full py-2 rounded-md mt-4 cursor-pointer hover:bg-[#4f4f99]"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </article>
      </section>
    </section>
  );
};

export default Login;
