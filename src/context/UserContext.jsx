import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let userContextApi = createContext();

const UserContext = ({ children }) => {
  let fetchAllusers = async () => {
    try {
      let { data } = await axios.get("http://localhost:5200/authuser");

      return data;
    } catch (error) {
      toast.error(error.message);
    }
  };
  let fetchOneUser = async (id) => {
    let { data } = await axios.get(`http://localhost:5200/authuser/${id}`);

    return data;
  };

  let updateUser = async (id, payload) => {
    try {
      let { data } = await axios.put(
        `http://localhost:5200/authuser/${id}`,
        payload
      );

      toast.success("User Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <userContextApi.Provider
      value={{ fetchOneUser, updateUser, fetchAllusers }}
    >
      {children}
    </userContextApi.Provider>
  );
};

export default UserContext;
