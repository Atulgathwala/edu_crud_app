import React, { useContext, useEffect, useRef } from "react";
import { AuthContextAPI } from "../../context/AuthContext";
import PRIME from "../../assets/images/primeLogo.png";
import { LiaCertificateSolid } from "react-icons/lia";
import gsap from "gsap";
import { TbPhotoEdit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ADDPROFILE from "../../assets/images/add.png";
import { userContextApi } from "../../context/UserContext";

const MyAccount = () => {
  const { authUser, state } = useContext(AuthContextAPI);

  const countRef = useRef(null);
  const boxesRef = useRef([]);
  const leftAsideRef = useRef(null);
  const rightAsideRef = useRef(null);

  useEffect(() => {
    // Animate left aside from left
    gsap.from(leftAsideRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate right aside from right
    gsap.from(rightAsideRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate boxes inside left aside from top
    gsap.from(boxesRef.current, {
      y: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // Animate internal divs inside right aside from bottom
    const rightDivs = document.querySelectorAll("#right-aside .animate-box");
    gsap.from(rightDivs, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });

    // Count up animation for profile completeness
    let obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = `${Math.floor(obj.val)}%`;
        }
      },
    });
  }, []);

  return (
    <section className="h-full w-full">
      <article className="h-full w-full flex justify-center items-center gap-10">
        <aside
          ref={leftAsideRef}
          className="min-h-[500px] w-[25%] bg-white rounded-md shadow-lg flex flex-col items-center justify-between py-15"
        >
          <header>
            <picture className="relative">
              <img
                src={state?.user?.userImg || authUser?.userImg}
                alt=""
                className="h-[150px] w-[150px] rounded-full"
              />
              <NavLink
                to="/user-profile/update-profile-picture"
                className="absolute bg-blue-700 p-[1px] right-10 bottom-[-7px] rounded-md text-white"
              >
                <TbPhotoEdit />
              </NavLink>
            </picture>

            <p className="flex flex-col items-center">
              <span className="text-primary-color text-[24px] mt-2">
                {state?.user?.username || authUser?.username}
              </span>
              <span className="font-[500] text-[#727778]">
                {state?.user?.role || authUser?.role}
              </span>
            </p>
          </header>

          <footer className="bottom-0 w-[70%]">
            <main className="flex justify-between">
              <div
                ref={(el) => (boxesRef.current[0] = el)}
                className="flex flex-col items-center justify-between border-r border-[#727778] w-[33%]"
              >
                <span className="font-semibold text-[24px] text-accent-color">
                  5
                </span>
                <span className="text-[#727778] text-[14px]">courses</span>
              </div>

              <div
                ref={(el) => (boxesRef.current[1] = el)}
                className="flex flex-col items-center justify-between border-r border-[#727778] w-[33%]"
              >
                <span className="font-semibold text-[24px] text-accent-color">
                  {state?.user?.isPrime ? (
                    <span className="relative">
                      <LiaCertificateSolid className="text-[32px]" />
                      <span className="absolute text-[12px] top-[4px] text-red-700 right-3">
                        X
                      </span>
                    </span>
                  ) : (
                    <span className="relative">
                      <LiaCertificateSolid className="text-[34px]" />
                      <span className="absolute text-[12px] text-green-800 top-[3px] right-2">
                        ✔
                      </span>
                    </span>
                  )}
                </span>
                <span className="text-[#727778] text-[14px]">prime</span>
              </div>

              <div
                ref={(el) => (boxesRef.current[2] = el)}
                className="flex flex-col items-center justify-between w-[33%]"
              >
                <span
                  ref={countRef}
                  className="font-semibold text-[24px] text-accent-color"
                >
                  0%
                </span>
                <span className="text-[#727778] text-[14px]">profile</span>
              </div>
            </main>
          </footer>
        </aside>

        <aside
          ref={rightAsideRef}
          id="right-aside"
          className="h-[500px] w-[48%] bg-white rounded-md shadow-lg"
        >
          {state?.user?.dob != undefined || authUser?.dob != undefined ? (
            <section className="h-full w-full p-8 flex flex-wrap justify-between">
              <div className="animate-box h-[80px] w-[45%] bg-primary-color rounded-md p-2 shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  Name
                </p>
                <p>{authUser?.username}</p>
              </div>
              <div className="animate-box h-[80px] w-[45%] bg-primary-color rounded-md p-2 shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  Email
                </p>
                <p>{authUser?.email}</p>
              </div>
              <div className="animate-box h-[80px] w-[45%] bg-primary-color rounded-md p-2 shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  Date of birth
                </p>
                <p>{authUser?.dob}</p>
              </div>
              <div className="animate-box h-[80px] w-[45%] bg-primary-color rounded-md p-2 shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  Qualification
                </p>
                <p>{authUser?.highestDegree}</p>
              </div>
              <div className="animate-box h-[80px] w-[45%] bg-primary-color rounded-md p-2 shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  State
                </p>
                <p>{authUser?.state}</p>
              </div>
              <div className="animate-box h-[80px] w-[45%] bg-primary-color rounded-md p-2 shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  City
                </p>
                <p>{authUser?.city}</p>
              </div>
              <div className="animate-box h-[80px] bg-primary-color rounded-md p-2 w-full shadow-md">
                <p className="text-[20px] font-medium text-primary-color">
                  Address
                </p>
                <p>{authUser?.compleAddress}</p>
              </div>
            </section>
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              <main className="h-[300px] w-[300px] flex flex-col items-center">
                <picture>
                  <img src={ADDPROFILE} alt="" />
                </picture>
                <NavLink
                  to={"/user-profile/add-profile"}
                  className="bg-red-500 px-2 py-2 rounded-xl text-white"
                >
                  Complete profile
                </NavLink>
              </main>
            </div>
          )}
        </aside>
      </article>
    </section>
  );
};

export default MyAccount;
