import React from "react";
import { Link } from "react-router-dom";

import AuthImage from "../images/auth-image.jpg";
import AuthDecoration from "../images/auth-decoration.png";
import DarkMode from "./../utils/DarkMode";
import Logo from "./../utils/Logo";
import Header from "../partials/home/Header";

function Signin() {
  return (
    <main className="bg-white dark:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Header />

      <div className="pt-32">
        <div className="md:flex">
          {/* Content */}
          <div className="md:w-1/2">
            <div className="max-h-screen flex flex-col after:flex-1">
              <div className="max-w-md mx-auto px-4 py-8">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                  Bon retour !
                </h1>
                {/* Form */}
                <form>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 dark:text-slate-500"
                        htmlFor="email"
                      >
                        Adresse email
                      </label>
                      <input
                        id="email"
                        className="form-input w-full"
                        type="email"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 dark:text-slate-500"
                        htmlFor="password"
                      >
                        Mot de passe
                      </label>
                      <input
                        id="password"
                        className="form-input w-full"
                        type="password"
                        autoComplete="on"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="mr-1">
                      <Link
                        className="text-sm underline hover:no-underline dark:text-slate-500"
                        to="/reset-password"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <Link
                      className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                      to="/dashboard"
                    >
                      Se connecter
                    </Link>
                  </div>
                </form>
                {/* Footer */}
                <div className="pt-5 mt-6 border-t border-slate-200">
                  <div className="text-sm dark:text-slate-500">
                    Pas de compte ?{" "}
                    <Link
                      className="font-medium text-indigo-500 hover:text-indigo-600"
                      to="/signup"
                    >
                      Créer un compte
                    </Link>
                  </div>
                  {/* Warning */}
                  <div className="mt-5">
                    <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                      <svg
                        className="inline w-3 h-3 shrink-0 fill-current mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span className="text-sm">
                        To support you during the pandemic super pro features
                        are free until March 31st.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            className="shadow-lg rounded-lg m-auto align-middle border-none mb-10"
            src={AuthImage}
            width="500px"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
