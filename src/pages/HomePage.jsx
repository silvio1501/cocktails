import HeroSection from "../components/homePage/HeroSection";
import FormSection from "../components/homePage/FormSection";
import DrinkSection from "../components/homePage/DrinkSection";

import { useDispatch, useSelector } from "react-redux";
import { deleteScroll, fetchData } from "../redux/drinkSlice";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const { scroll } = useSelector((state) => state.drink);

  useEffect(() => {
    window.scrollTo(0, scroll);
    dispatch(deleteScroll());
  }, []);

  return (
    <div>
      <HeroSection />
      <FormSection />
      <DrinkSection />
    </div>
  );
};

export default HomePage;
