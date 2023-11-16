import { useDispatch } from "react-redux";

import Logo from "../navbar/Logo";
import { LinkComponent, SocialComponent } from "../utils/links";
import { closeSidebar } from "../../redux/drinkSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <div className="absolute z-10 top-0 w-[100%] h-[100%] bg-white py-4">
      <div className="w-[90%] m-auto">
        <Logo />
        <div className="mt-7 " onClick={handleCloseSidebar}>
          <LinkComponent
            linksClass={
              "flex justify-center gap-5 mb-5 uppercase hover:bg-slate-100 py-2"
            }
          />
        </div>
        <div className="flex gap-16 mt-16 justify-center">
          <SocialComponent socialClass={"hover:scale-[1.2]"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
