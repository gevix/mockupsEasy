import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  return (
    <header className="bg-white dark:shadow-md">
      <div className="container flex items-center justify-between h-14 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" to="/">
            <span className="font-semibold">MockupsEasy</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </header>
  );
}
