import HeroSection from "../components/homePage/HeroSection";
import FormSection from "../components/homePage/FormSection";
import DrinkSection from "../components/homePage/DrinkSection";

import { useDispatch } from "react-redux";
import { fetchData } from "../redux/drinkSlice";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
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
