import React, { useContext, useEffect, useState } from "react";
import { Form as FormikForm, Formik } from "formik";
import * as yup from "yup";
import FormikControl from "../FormikComponents/FormikControl";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContextAPI } from "../../context/AuthContext";

const ChangePassword = () => {
  const [showForm, setShowForm] = useState(false);

  let { authUser } = useContext(AuthContextAPI);
  let initialState = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  let handleSubmit = async (values) => {
    let { newPassword, confirmNewPassword } = values;
    let getUser = await axios.get(
      `http://localhost:5200/authuser/${authUser?.id}`
    );

    console.log(getUser.data.password);
    console.log(oldPassword.value);
    console.log(oldPassword.value == getUser.data.password);

    if (getUser?.data.password == oldPassword.value) {
      if (newPassword == confirmNewPassword) {
        let { data } = await axios.patch(
          `http://localhost:5200/authuser/${authUser?.id}`,
          {
            password: newPassword,
          }
        );
        toast.success("Password Changed");
        console.log("Password changed successfully");
      } else {
        toast.error("new Password should match");
      }
    } else {
      toast.error("Wrong old password");
      console.log("Wrong old password");
    }
  };

  useEffect(() => {
    // Trigger animation after mount
    setShowForm(true);
  }, []);

  let validationSchema = yup.object({
    oldPassword: yup.string().required("Required"),
    newPassword: yup.string().required("Required"),
    confirmNewPassword: yup.string("required"),
  });
  return (
    <section className="h-full w-full flex items-center justify-center ">
      <article
        className={`w-[25%] min-h-[300px] bg-white shadow-xl rounded-md p-6  transform transition-transform duration-500 ${
          showForm ? "scale-in" : "scale-0"
        }`}
      >
        <header>
          <h1 className="text-center text-[24px] font-semibold">
            Change Password
          </h1>
          <hr className="my-4 border-b-1 border-[#727778]" />
        </header>
        <main>
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
                    name="oldPassword"
                    label="Old Password"
                    type="text"
                  />
                  <FormikControl
                    control="input"
                    name="newPassword"
                    label="New password"
                  />
                  <FormikControl
                    control="input"
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    type="password"
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
        </main>
      </article>
    </section>
  );
};

export default ChangePassword;
