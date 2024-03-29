import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../redux/auth/authSlice";
import MainPage from "../../components/MainPage.jpg"
import Spinner from "../../components/Spinner";


const Register = () => {
  // Start with sign up because user has to be a member of the and will provide a unique  ID during on boarding
  // Basically it's a service that helps users get advanced health Care analytics, information about certain conditions that they might be facing
  // And solutions that they can find in s, through medication,
  // Then their data can be gotten from past and they can see if they have been making health progress and they can as well identify changes that may have made them suffer from
  // Current conditions
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="relative">
        <img
          src={MainPage}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24">
            <div className="relative flex grid items-center grid-cols-2">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center "
              >
                <svg
                  className="w-8 text-deep-purple-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
                Life of health
                </span>
              </a>
            </div>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className="max-w-lg mb-6 font-sans text-4xl  font-bold text-red-600 ">
                  Electronic
                  <br className="hidden md:block" />
                  Management{" "}
                  <span className="text-teal-accent-400">Records</span>
                </h1>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Contains notes and information collected by and for the
                  clinicians in that office, clinic, or hospital and are mostly
                  used by providers for diagnosis and treatment.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="max-w-xl xl:px-8 xl:w-5/12 mb-6">
                <div className="bg-white rounded shadow-2xl px-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign Up
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <input
                        placeholder="Enter your name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Email
                      </label>
                      <input
                        placeholder="Enter your email"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-2 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="*********"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-2 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Confirm Password
                      </label>
                      <input
                        placeholder="*********"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <Link to="!#"

                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Register
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-red-600 sm:text-sm font-bold">
                        Forgot password
                      </span>
                      <Link
                        to="/login"
                        className="text-sm text-green-600 font-bold"
                      >
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
