import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../../utils/DarkMode';
import Logo from '../../utils/Logo';

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" to="/" aria-label="Cruip">
              <Logo />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Se connecter
                </Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm" to="/signup">
                  Créer son premier projet
                </Link>
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
