import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponant from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <NavbarComponant />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
