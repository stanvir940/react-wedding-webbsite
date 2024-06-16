// import { key } from "localforage";
import { useState } from "react";
import { Link } from "react-router-dom";

const navRoutes = [
  { path: "", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 w-full z-10 bg-white text-black border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <img
            src="https://www.weddingwire.com/assets/img/logos/gen_logoHeader-pride.svg"
            alt=""
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <ul className="menu menu-horizontal p-0">
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link to={route.path} className="hover:text-gray-300">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <ul className="list-none">
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
