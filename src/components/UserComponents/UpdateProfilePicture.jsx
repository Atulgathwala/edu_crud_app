import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { Form as FormikForm } from "formik";
import FormikControl from "../FormikComponents/FormikControl";
import { AuthContextAPI } from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "../../utility/Spinner";

const UpdateProfilePicture = () => {
  let { state, authUser } = useContext(AuthContextAPI);

  let [isLoading, setisloading] = useState(false);
  let [profilePicFile, setProfilePicFile] = useState(null);
  let [previewImage, setPreviewImage] = useState(null);

  let handleChange = (e) => {
    let file = e.target.files[0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
      setProfilePicFile(file);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setisloading(true);
      let pictureFormData = new FormData();
      pictureFormData.append("file", profilePicFile);
      pictureFormData.append("upload_preset", "my_edu_app");
      pictureFormData.append("cloud_name", "dasa3kzyf");

      let cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dasa3kzyf/image/upload",
        pictureFormData
      );
      //   console.log(cloudinaryResponse.data.url);

      // ? upload the picture
      let picAcknowledgement = await axios.patch(
        `http://localhost:5200/authuser/${authUser?.id}`,
        {
          userImg: cloudinaryResponse.data.url,
        }
      );

      let newUserPayload = {
        ...authUser,
        userImg: cloudinaryResponse.data.url,
      };

      window.localStorage.setItem("USERLOGIN", JSON.stringify(newUserPayload));

      console.log(picAcknowledgement);

      toast.success("Profile Uploaded Successfully");
      setisloading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <article className="min-h-[500px] w-[26%] rounded-xl bg-white shadow-md p-8 flex flex-col justify-center items-center gap-4">
        <header>
          <h1 className="text-[24px] text-center  font-semibold">
            Update Picture
          </h1>
        </header>
        <main>
          <picture>
            <img
              src={previewImage || state?.user?.userImg || authUser?.userImg}
              alt="No image"
              className="h-[300px] w-[300px] border rounded-full"
            />
          </picture>
        </main>
        <footer className="w-full">
          <form className=" w-full" onSubmit={handleSubmit}>
            <input
              type="file"
              className="border px-4 py-1 rounded-md w-full file:bg-red-500 file:px-3 file:py-1 file:rounded-md file:mr-5 file:text-white file:font-semibold"
              onChange={handleChange}
            />
            <div>
              <button
                className="bg-button-color text-white w-full py-2 rounded-md mt-4 cursor-pointer hover:bg-[#4f4f99]"
                type="submit"
              >
                {isLoading ? "loading...." : "Submit"}
              </button>
            </div>
          </form>
        </footer>
      </article>
    
    </section>
  );
};

export default UpdateProfilePicture;
