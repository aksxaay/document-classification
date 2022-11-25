import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
};
const Modal3 = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 5000);
  }, []);

  const cancelButtonRef = useRef(null);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  let jwttoken = "";
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post("http://127.0.0.1:5000/user/login", data)
      .then((res) => {
        jwttoken = res.data.token;
        localStorage.setItem("userToken", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:max-w-lg">
                  {/* <div className="bg-white p-6 pt-5 pb-4 sm:pb-4 md:pr-6 md:pl-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Sign In
                        </Dialog.Title>
                      </div>
                    </div>
                  </div> */}

                  <section className="bg-gray-300 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-full min-w-[20em] rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
                        <div className="space-y-4 p-6  md:space-y-6">
                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                            Sign in to your account
                          </h1>
                          <form
                            className="space-y-4 md:space-y-6"
                            action="#"
                            onSubmit={onSubmitHandler}
                          >
                            <div>
                              <label
                                for="email"
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
                                required=""
                                value={email}
                              />
                            </div>
                            <div>
                              <label
                                for="password"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Password
                              </label>
                              <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                                required=""
                                value={password}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    required=""
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    for="remember"
                                    className="text-gray-500 dark:text-gray-300"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              <Link
                                href="#"
                                className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                              >
                                Forgot password?
                              </Link>
                            </div>
                            <button
                              type="submit"
                              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5 h-16 w-full rounded-full border-black bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-md focus:outline-none focus:ring-4 dark:text-white"
                            >
                              Sign in
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Don’t have an account yet?{" "}
                              <Link
                                to={"/signup"}
                                className="text-primary-600 dark:text-primary-500 font-medium hover:underline "
                              >
                                Sign up
                              </Link>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Modal3;
