import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav-bar/Navbar";

const root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>hello</h1>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default root;
