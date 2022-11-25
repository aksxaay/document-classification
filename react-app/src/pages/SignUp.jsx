import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./css/SignUp.css";
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setaddress] = useState();
  const [password, setPassword] = useState();
  const [cnfPassword, setCnfPassword] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (cnfPassword !== password) {
      alert("Password not matched");
    } else {
      const data = {
        name,
        email,
        address,
        password,
      };
      axios
        .post("http://127.0.0.1:5000/user/", data)
        .then((res) => {
          navigate('/login');

          console.log(res)
        })
        .catch((err) => console.log(err));
      setName("");
      setEmail("");
      setPassword("");
      setaddress("");
      setCnfPassword("");
    }
  };

  return (
    <>
      <section className="bg-gray-300 dark:bg-gray-900 h-full">
        <div className=" flex h-screen flex-col items-center justify-center px-6 py-8">
          <div className=" mt-20 w-3/4 rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={onSubmitHandler}
              >
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    required={true}
                    value={name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="name@company.com"
                    required={true}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    address
                  </label>
                  <input
                    onChange={(e) => setaddress(e.target.value)}
                    style={{ WebkitAppearance: "none" }}
                    type="address"
                    name="address"
                    id="address"
                    placeholder="+91"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    required={false}
                    value={address}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="current-password"
                    id="current-password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    required=""
                    value={password}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    onChange={(e) => setCnfPassword(e.target.value)}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    required=""
                    value={cnfPassword}
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link
                        className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5 h-16 w-full rounded-full border-black bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-md focus:outline-none focus:ring-4 dark:text-white"
                >
                  Create an Account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
