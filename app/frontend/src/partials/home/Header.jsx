import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import DarkMode from "../../utils/DarkMode";
import Logo from "../../utils/Logo";

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" to="/" aria-label="Logo">
              <Logo />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:text-gray-800 dark:hover:text-gray-100 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Se connecter
                </Link>
              </li>
              <li className="ml-3">
                <ButtonPrimary>Créer son premier projet</ButtonPrimary>
              </li>
              <li className="text-gray-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                <DarkMode />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
