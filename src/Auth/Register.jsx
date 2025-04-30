import { Form as FormikForm, Formik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
import FormikControl from "../components/FormikComponents/FormikControl";
import { AuthContextAPI } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let { state, signUp } = useContext(AuthContextAPI);
  let navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  let validationSchema = yup.object({
    username: yup.string().required("Required"),
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  let handleSubmit = async (values) => {
    let Payload = {
      ...values,
      userImg: "https://i.ibb.co/RbWGZ2p/person.png",
    };
 
    signUp(Payload);
    navigate("/login");
  };
  return (
    <section className=" min-h-[calc(100vh-70px)] flex justify-center  ">
      <section className="w-[25%]  mt-[10vh]">
        <article className="  py-6 px-6 rounded-md bg-white">
          <h1 className="font-semibold text-[20px] text-center ">Register</h1>
          <Formik
            initialValues={initialState}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <FormikForm className="flex flex-col gap-4">
                  <FormikControl
                    control="input"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="enter your name"
                  />
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
                </FormikForm>
              );
            }}
          </Formik>
        </article>
      </section>
    </section>
  );
};

export default Register;
