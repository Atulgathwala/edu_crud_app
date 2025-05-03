import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import FormikControl from "../FormikComponents/FormikControl";
import { userContextApi } from "../../context/UserContext";
import { AuthContextAPI } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  let navigate = useNavigate();
  let { authUser, state } = useContext(AuthContextAPI);
  let { updateUser } = useContext(userContextApi);
  let indianStates = [
    { key: "Select State", value: "" },
    { key: "Karnataka", value: "karnataka" },
    { key: "Tamil Nadu", value: "tamil_nadu" },
    { key: "Maharashtra", value: "maharashtra" },
    { key: "Kerala", value: "kerala" },
    // Add more states and their corresponding values as needed
  ];

  const cityOptionsByState = {
    karnataka: [
      { key: "Select City", value: "" },
      { key: "Bengaluru", value: "bengaluru" },
      { key: "Mysuru", value: "mysuru" },
      { key: "Hubballi-Dharwad", value: "hubballi_dharwad" },
    ],
    tamil_nadu: [
      { key: "Select City", value: "" },
      { key: "Chennai", value: "chennai" },
      { key: "Coimbatore", value: "coimbatore" },
      { key: "Madurai", value: "madurai" },
    ],
    maharashtra: [
      { key: "Select City", value: "" },
      { key: "Mumbai", value: "mumbai" },
      { key: "Pune", value: "pune" },
      { key: "Nagpur", value: "nagpur" },
    ],
    kerala: [
      { key: "Select City", value: "" },
      { key: "Thiruvananthapuram", value: "thiruvananthapuram" },
      { key: "Kochi", value: "kochi" },
      { key: "Kozhikode", value: "kozhikode" },
    ],
    // Add city options for other states here
    andhra_pradesh: [
      { key: "Select City", value: "" },
      { key: "Visakhapatnam", value: "visakhapatnam" },
      { key: "Vijayawada", value: "vijayawada" },
      { key: "Tirupati", value: "tirupati" },
    ],
    arunachal_pradesh: [
      { key: "Select City", value: "" },
      { key: "Itanagar", value: "itanagar" },
      { key: "Naharlagun", value: "naharlagun" },
    ],
    assam: [
      { key: "Select City", value: "" },
      { key: "Guwahati", value: "guwahati" },
      { key: "Silchar", value: "silchar" },
      { key: "Dibrugarh", value: "dibrugarh" },
    ],
    bihar: [
      { key: "Select City", value: "" },
      { key: "Patna", value: "patna" },
      { key: "Gaya", value: "gaya" },
      { key: "Bhagalpur", value: "bhagalpur" },
    ],
    chhattisgarh: [
      { key: "Select City", value: "" },
      { key: "Raipur", value: "raipur" },
      { key: "Bhilai", value: "bhilai" },
      { key: "Bilaspur", value: "bilaspur" },
    ],
    goa: [
      { key: "Select City", value: "" },
      { key: "Panaji", value: "panaji" },
      { key: "Margao", value: "margao" },
      { key: "Vasco da Gama", value: "vasco_da_gama" },
    ],
    gujarat: [
      { key: "Select City", value: "" },
      { key: "Ahmedabad", value: "ahmedabad" },
      { key: "Surat", value: "surat" },
      { key: "Vadodara", value: "vadodara" },
    ],
    haryana: [
      { key: "Select City", value: "" },
      { key: "Faridabad", value: "faridabad" },
      { key: "Gurugram", value: "gurugram" },
      { key: "Panipat", value: "panipat" },
    ],
    himachal_pradesh: [
      { key: "Select City", value: "" },
      { key: "Shimla", value: "shimla" },
      { key: "Dharamshala", value: "dharamshala" },
    ],
    jharkhand: [
      { key: "Select City", value: "" },
      { key: "Ranchi", value: "ranchi" },
      { key: "Jamshedpur", value: "jamshedpur" },
      { key: "Dhanbad", value: "dhanbad" },
    ],
    madhya_pradesh: [
      { key: "Select City", value: "" },
      { key: "Indore", value: "indore" },
      { key: "Bhopal", value: "bhopal" },
      { key: "Jabalpur", value: "jabalpur" },
    ],
    manipur: [
      { key: "Select City", value: "" },
      { key: "Imphal", value: "imphal" },
    ],
    meghalaya: [
      { key: "Select City", value: "" },
      { key: "Shillong", value: "shillong" },
    ],
    mizoram: [
      { key: "Select City", value: "" },
      { key: "Aizawl", value: "aizawl" },
    ],
    nagaland: [
      { key: "Select City", value: "" },
      { key: "Kohima", value: "kohima" },
      { key: "Dimapur", value: "dimapur" },
    ],
    odisha: [
      { key: "Select City", value: "" },
      { key: "Bhubaneswar", value: "bhubaneswar" },
      { key: "Cuttack", value: "cuttack" },
      { key: "Rourkela", value: "rourkela" },
    ],
    punjab: [
      { key: "Select City", value: "" },
      { key: "Ludhiana", value: "ludhiana" },
      { key: "Amritsar", value: "amritsar" },
      { key: "Chandigarh", value: "chandigarh" },
    ],
    rajasthan: [
      { key: "Select City", value: "" },
      { key: "Jaipur", value: "jaipur" },
      { key: "Jodhpur", value: "jodhpur" },
      { key: "Udaipur", value: "udaipur" },
    ],
    sikkim: [
      { key: "Select City", value: "" },
      { key: "Gangtok", value: "gangtok" },
    ],
    telangana: [
      { key: "Select City", value: "" },
      { key: "Hyderabad", value: "hyderabad" },
      { key: "Warangal", value: "warangal" },
    ],
    tripura: [
      { key: "Select City", value: "" },
      { key: "Agartala", value: "agartala" },
    ],
    uttar_pradesh: [
      { key: "Select City", value: "" },
      { key: "Lucknow", value: "lucknow" },
      { key: "Kanpur", value: "kanpur" },
      { key: "Varanasi", value: "varanasi" },
    ],
    uttarakhand: [
      { key: "Select City", value: "" },
      { key: "Dehradun", value: "dehradun" },
      { key: "Haridwar", value: "haridwar" },
    ],
    west_bengal: [
      { key: "Select City", value: "" },
      { key: "Kolkata", value: "kolkata" },
      { key: "Asansol", value: "asansol" },
    ],
    andaman_nicobar: [
      { key: "Select City", value: "" },
      { key: "Port Blair", value: "port_blair" },
    ],
    chandigarh: [
      { key: "Select City", value: "" },
      { key: "Chandigarh", value: "chandigarh" },
    ],
    dadra_daman_diu: [
      { key: "Select City", value: "" },
      { key: "Silvassa", value: "silvassa" },
      { key: "Daman", value: "daman" },
      { key: "Diu", value: "diu" },
    ],
    delhi: [
      { key: "Select City", value: "" },
      { key: "New Delhi", value: "new_delhi" },
      { key: "Delhi", value: "delhi" },
    ],
    jammu_kashmir: [
      { key: "Select City", value: "" },
      { key: "Srinagar", value: "srinagar" },
      { key: "Jammu", value: "jammu" },
    ],
    ladakh: [
      { key: "Select City", value: "" },
      { key: "Leh", value: "leh" },
      { key: "Kargil", value: "kargil" },
    ],
    lakshadweep: [
      { key: "Select City", value: "" },
      { key: "Kavaratti", value: "kavaratti" },
    ],
    puducherry: [
      { key: "Select City", value: "" },
      { key: "Puducherry", value: "puducherry" },
      { key: "Karaikal", value: "karaikal" },
    ],
  };

  let highestDegreeOptions = [
    { key: "Select Highest degree", value: "" },
    { key: "Msc", value: "msc" },
    { key: "B.tech", value: "btech" },
    { key: "BA", value: "ba" },
    { key: "B.sc", value: "bsc" },
  ];
  const [showForm, setShowForm] = useState(false);
  const [cityOptions, setCityOptions] = useState([
    { key: "Select City", value: "" },
  ]);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const initialState = {
    username: state?.user?.username || authUser?.username || "",
    email: state?.user?.email || authUser?.email || "",
    dob: state?.user?.dob || authUser?.dob || "",
    highestDegree: state?.user?.highestDegree || authUser?.highestDegree || "",
    state: state?.user?.state || authUser?.state || "",
    city: state?.user?.city || authUser?.city || "",
    compleAddress: state?.user?.compleAddress || authUser?.compleAddress || "",
  };

  let { fetchOneUser } = useContext(userContextApi);

  const handleSubmit = async (values) => {
    console.log("Submitted ", values);
    try {
      let userDataFromdb = await fetchOneUser(authUser?.id);
      let payLoad = { ...userDataFromdb, ...values };
      await updateUser(authUser?.id, payLoad);
      window.localStorage.setItem("USERLOGIN", JSON.stringify(payLoad));
      navigate("/user-profile");
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = yup.object({
    username: yup.string().required("Required"),
    email: yup.string().required("Required").email("Invalid email format"),
    dob: yup.date().required("Required"),
    highestDegree: yup
      .string()
      .required("Required")
      .notOneOf([""], "Please select your highest degree"),
    state: yup
      .string()
      .required("Required")
      .notOneOf([""], "Please select a state"),
    city: yup
      .string()
      .required("Required")
      .notOneOf([""], "Please select a city"),
    compleAddress: yup.string().required("Required"),
  });

  return (
    <section className="w-full h-full flex justify-center items-center">
      <article
        className={`w-[45%] min-h-[500px] bg-white shadow-md rounded-md py-6 px-10 transform transition-transform duration-500 ${
          showForm ? "scale-in" : "scale-0"
        }`}
      >
        <header>
          <h1 className="text-[24px] text-center font-semibold text-primary-color">
            Add details
          </h1>
          <hr className="my-2 border-1 border-[#727778]" />
        </header>
        <main className="mt-6">
          <Formik
            initialValues={initialState}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              useEffect(() => {
                if (
                  formik.values.state &&
                  cityOptionsByState[formik.values.state]
                ) {
                  setCityOptions(cityOptionsByState[formik.values.state]);
                } else {
                  setCityOptions([{ key: "Select City", value: "" }]);
                }
              }, [formik.values.state]);

              return (
                <FormikForm className="flex flex-wrap gap-4">
                  <div className="w-full flex justify-between gap-4">
                    <article className="w-[50%]">
                      <FormikControl
                        control="input"
                        name="username"
                        label="Name"
                        type="text"
                        placeholder="enter your name"
                      />
                    </article>
                    <article className="w-[50%]">
                      <FormikControl
                        control="input"
                        name="email"
                        label="Email"
                        placeholder="enter your email"
                      />
                    </article>
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <article className="w-[50%]">
                      <FormikControl
                        control="input"
                        name="dob"
                        label="Dob"
                        type="date"
                      />
                    </article>
                    <article className="w-[50%]">
                      <FormikControl
                        control="select"
                        name="highestDegree"
                        label="Highest degree"
                        options={highestDegreeOptions}
                      />
                    </article>
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <article className="w-[50%]">
                      <FormikControl
                        control="select"
                        name="state"
                        label="State"
                        options={indianStates}
                      />
                    </article>
                    <article className="w-[50%]">
                      <FormikControl
                        control="select"
                        name="city"
                        label="City"
                        options={cityOptions}
                      />
                    </article>
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <article className="w-[100%]">
                      <FormikControl
                        control="textarea"
                        name="compleAddress"
                        label="Complete Address"
                      />
                    </article>
                  </div>
                  <div className="w-full">
                    <button
                      className="bg-button-color text-white w-full py-2 rounded-md mt-4 hover:bg-[#4f4f99]"
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

export default AddProfile;
