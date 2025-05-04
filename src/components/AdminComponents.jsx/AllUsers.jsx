import React, { useContext, useEffect, useState } from "react";
import { userContextApi } from "../../context/UserContext";

const AllUsers = () => {
  let { fetchAllusers } = useContext(userContextApi);
  let [allUsers, setAllusers] = useState(null);

  console.log(allUsers);

  let fetching = async () => {
    let newData = await fetchAllusers();
    setAllusers(newData);
    console.log("new Datat", newData);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">All Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allUsers?.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl border"
          >
            <img
              src={user?.userImg || "https://via.placeholder.com/300"}
              alt="User Profile"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>

              <div className="flex justify-between mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
