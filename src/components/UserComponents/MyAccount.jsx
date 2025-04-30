import React, { useContext } from "react";
import AuthContext, { AuthContextAPI } from "../../context/AuthContext";

const MyAccount = () => {
  let { authUser, state } = useContext(AuthContextAPI);

  return (
    <section className="h-full w-full ">
      <article className="h-full w-full flex justify-center items-center gap-10">
        <aside className="min-h-[500px] w-[22%] bg-white rounded-md shadow-lg flex flex-col items-center justify-between py-5">
          <header className="mt-10 ">
            <picture>
              <img
                src={state?.user?.userImg || authUser?.userImg}
                alt=""
                className="h-[150px] w-[150px] rounded-full "
              />
            </picture>

            <p className="flex flex-col items-center ">
              <span className="text-primary-color  text-[24px] mt-2">
                {state?.user?.username || authUser?.username}
              </span>
              <span className="font-[500] text-[#727778]">
                {state?.user?.role || authUser?.role}
              </span>
            </p>
          </header>

          <footer className=" bottom-0 w-[70%]">
            <main className="flex justify-between">
              <div className="flex flex-col items-center  border-r px-4 ">
                <span className="font-semibold text-[24px] text-accent-color">
                  5
                </span>
                <span className="text-[#727778] text-[14px]">courses</span>{" "}
              </div>
              <div className="flex flex-col items-center  border-r px-4 ">
                <span className="font-semibold text-[24px] text-accent-color">
                  5
                </span>
                <span className="text-[#727778] text-[14px]">prime</span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center  border-r px-4 ">
                <span className="font-semibold text-[24px] text-accent-color">
                  5
                </span>
                <span className="text-[#727778] text-[14px]">courses</span>{" "}
              </div>
            </main>
          </footer>
        </aside>
        <aside className="min-h-[500px] w-[40%] bg-white rounded-md shadow-lg"></aside>
      </article>
    </section>
  );
};

export default MyAccount;
