import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "../../assets/icons8-cocktail-58.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { openSidebar } from "../../redux/drinkSlice";

const Logo = () => {
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <div className="flex justify-between">
      <Link to="/" className="w-10 h-10">
        <img src={logo} alt="logo" />
      </Link>
      <div className="md:hidden">
        <button className=" bg-transparent flex" onClick={handleOpenSidebar}>
          <GiHamburgerMenu className="text-2xl hover:rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default Logo;
