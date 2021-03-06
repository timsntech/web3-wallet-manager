import Head from "next/head";
import Layout from "../../components/layout/layout";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import LoadingScreen from "../../components/auth/loadingScreen";
import AuthContainer from "../../components/auth/authContainer";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useMoralis();
  const Router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password, {
      onError: () =>
        toast.error("Login credentials not correct! Try again, please. 💪"),
      onSuccess: () => {
        toast.success("Welcome back, friend! 🎉");
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Router.replace("/");
        }, 2000);
      },
    });
  };
  const backgroundText = "Login with Mail.";
  const title = "Welcome back!";

  return (
    <Layout>
      <div>
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="min-h-screen items-center flex flex-col justify-center sm:py-12">
            <div className="-mt-20 xs:p-0 mx-auto md:w-full">
              <AuthContainer
                backgroundText={backgroundText}
                title={title}
                content={
                  <>
                    <div className="w-full">
                      <div className="">
                        <form onSubmit={onSubmit}>
                          <label className="dark:text-white font-semibold text-sm text-gray-600 pb-1 block">
                            E-mail
                          </label>

                          <input
                            className="dark:border-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 border rounded-md px-3 py-3 mt-1 mb-5 text-sm w-full"
                            id="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={event =>
                              setEmail(event.currentTarget.value)
                            }
                            required
                          />

                          <label className="dark:text-white font-semibold text-sm text-gray-600 pb-1 block">
                            Password
                          </label>

                          <input
                            className="dark:border-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 border rounded-md px-3 py-3 mt-1 mb-5 text-sm w-full"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={event =>
                              setPassword(event.currentTarget.value)
                            }
                            autoComplete="current-password"
                          />

                          <button
                            type="submit"
                            className="w-full bg-blue-500 dark:hover:border-green-200 dark:border-2 dark:border-transparent hover:bg-blue-700 text-white font-bold my-4 py-4 px-4 rounded-lg"
                          >
                            <span className="inline-block mr-2">Login</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 inline-block"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </form>
                      </div>

                      <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-center sm:text-left whitespace-nowrap">
                            <Link href="/auth/reset-password">
                              <button className="transition duration-200 dark:text-gray-200 dark:hover:border-green-200 dark:border-2 dark:border-transparent dark:hover:bg-gray-800 dark:bg-gray-700 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-4 h-4 inline-block align-text-top"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                  />
                                </svg>
                                <span className="inline-block ml-1">
                                  Forgot Password
                                </span>
                              </button>
                            </Link>
                          </div>
                          <div className="text-center sm:text-right whitespace-nowrap">
                            <Link href="/auth/signup">
                              <button className="transition duration-200 dark:text-gray-200 dark:hover:border-green-200 dark:border-2 dark:border-transparent dark:hover:bg-gray-800 dark:bg-gray-700 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="w-4 h-4 inline-block align-text-bottom	"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                  />
                                </svg>

                                <span className="inline-block ml-1">
                                  <a>Sign Up</a>
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-5">
                      <div>
                        <div className="text-center sm:text-left whitespace-nowrap">
                          <Link href="/auth">
                            <button className="dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:border-green-200 dark:border-2 dark:border-transparent w-full bg-white transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block align-text-top"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                              </svg>
                              <span className="inline-block ml-1">
                                Back to Auth Page
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
