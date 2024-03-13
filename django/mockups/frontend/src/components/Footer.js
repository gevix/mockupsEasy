import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <footer className="bg-gray-50/90 backdrop-blur-lg border-t border-gray-200 dark:bg-gray-950/90 dark:border-gray-800">
      <div className="container flex items-center justify-between h-14 px-4 md:px-6">
        <nav className="flex items-center space-x-4 text-sm">
          <Link
            className="font-semibold tracking-wide transition-colors text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="font-semibold tracking-wide transition-colors text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            About
          </Link>
          <Link
            className="font-semibold tracking-wide transition-colors text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            Services
          </Link>
          <Link
            className="font-semibold tracking-wide transition-colors text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2 text-xs">
          <div className="font-semibold">MockupsEasy</div>
          <div className="text-gray-500 dark:text-gray-400">© 2024</div>
        </div>
      </div>
    </footer>
  );
}
