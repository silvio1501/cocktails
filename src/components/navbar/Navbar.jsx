import Logo from "./Logo";
import Links from "./Links";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="w-[90%] m-auto md:flex justify-between items-center  ">
        <Logo />
        <Links />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;
