import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

import { useSelector } from "react-redux";

const Layout = () => {
  const { isOpen } = useSelector((state) => state.drink);

  return (
    <>
      <Navbar />
      <Footer />
      {isOpen && <Sidebar />}
    </>
  );
};

export default Layout;
