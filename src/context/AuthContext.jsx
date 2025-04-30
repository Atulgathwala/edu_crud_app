import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AuthReducer, { initialAuthState } from "../reducer/AuthReducer";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContextAPI = createContext(null);

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);
  let [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (window.localStorage.getItem("USERLOGIN")) {
      let validUser = JSON.parse(window.localStorage.getItem("USERLOGIN"));
      console.log(validUser);

      setAuthUser(validUser);
    }
  }, []);

  let signUp = async (payload) => {
    let allUsers = await axios.get("http://localhost:5200/authuser");

    let isvalidUser = allUsers.data?.filter((user) => {
      return user.email == payload.email;
    });

    if (isvalidUser.length == 0) {
      try {
        let { data } = await axios.post(
          "http://localhost:5200/authuser",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);

        toast.success("User Registered Successfully");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
      toast.error("User Already Presents");
    }
  };

  let login = async (payload) => {
    try {
      let { data } = await axios.get("http://localhost:5200/authuser");

      let mYuser = data?.filter((user, ind) => {
        let { email } = user;

        return email === payload.email;
      });

      if (
        mYuser[0]?.email == payload?.email &&
        mYuser[0]?.password == payload?.password
      ) {
        toast.success(`Welcome ${mYuser[0]?.username}`);
        dispatch({
          type: "LOGIN",
          payload: mYuser[0],
        });
        let stringdata = JSON.stringify(mYuser[0]);
        window.localStorage.setItem("USERLOGIN", stringdata);
      } else {
        toast.error("Invalid credentials !");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  // sign out

  let signOut = () => {
    setAuthUser(null);
    window.localStorage.clear();
    window.location.assign("/");
  };

  return (
    <AuthContextAPI.Provider
      value={{ state, dispatch, signUp, login, authUser, signOut }}
    >
      {children}
    </AuthContextAPI.Provider>
  );
};

export default AuthContext;
