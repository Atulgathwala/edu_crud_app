import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContextAPI } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import deleteimg from "../../assets/images/deleteGif-unscreen.gif";

const DeleteAccount = () => {
  let { authUser } = useContext(AuthContextAPI);
  let [inputText, setInputText] = useState("");
  let [animate, setAnimate] = useState(false);

  let navigate = useNavigate();

  let handleInputChange = (e) => {
    let inputText = e.target.value;
    setInputText(inputText);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputText);
      setAnimate(true);
      setTimeout(() => {
        toast.success("user Deleted Successfully");
        setAnimate(false);
        navigate("/register");
      }, 2900);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-full w-full flex justify-center items-center ">
      <article className="w-[60%] h-[300px] bg-white shadow-2xl rounded-md p-6 flex flex-col gap-6">
        <header>
          <h1 className="text-[32px] font-semibold">Deleting account</h1>
        </header>
        <main>
          <p className="w-[80%]">
            Deleting account will remove your all the infromation from database
            and it <b>it can't be reversed</b>
          </p>
        </main>

        <footer>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex justify-between items-end"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">
                To delete this account type{" "}
                <b className="text-red-500">DELETE</b>
              </label>

              <input
                type="text"
                className="outline-none border py-1 px-2 rounded-md bg-white text-red-600 w-[255px] font-semibold"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                disabled={inputText != "DELETE"}
                className={`px-16 py-2 rounded-md  ${
                  inputText != "DELETE"
                    ? "bg-slate-500 cursor-not-allowed text-white"
                    : "bg-red-600 cursor-pointer text-white"
                }`}
              >
                Delete account
              </button>
            </div>
          </form>
        </footer>
      </article>
      {animate && (
        <section className="h-full w-full bg-[#65636379] fixed left-0 top-0 flex justify-center items-center">
          <img src={deleteimg} alt="" />
        </section>
      )}
    </section>
  );
};

export default DeleteAccount;
