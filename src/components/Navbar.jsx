import { useState } from "react";

const navLinks = [
  { name: "home", link: "#home" },
  { name: "Header", link: "#Header" },
  { name: "Cards", link: "#Cards" },
  { name: "Contact", link: "#Contact" },
];
const NavbarComponent = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
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
          }  gap-2 absolute z-40 w-56 h-56 bg-white top-8 right-0`}
        >
          {navLinks.map((v, i) => (
            <li key={i}>
              <a href={v.link}>{v.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
