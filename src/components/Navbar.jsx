import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const navLinks = [
  { name: "home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "Blog", link: "/Blog" },
  { name: "Contact", link: "/contact" },
];
const NavbarComponent = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="flex  justify-between py-3 px-8 relative">
      <h1>logo</h1>
      <div>
        <button
          className="block md:hidden"
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        >
          menu
        </button>
        <ul
          className={`md:flex flex-col md:flex-row  ${
            !menu ? "hidden" : "flex"
          }  gap-2 items-center justify-between p-3 absolute z-40 md:w-auto md:h-auto w-56 h-56 bg-white top-8 right-0`}
        >
          {navLinks.map((v, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "bg" : "";
                }}
                to={v.link}
              >
                {v.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
