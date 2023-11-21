import SingleDrink from "./SingleDrink";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const DrinkSection = () => {
  const { data, isLoading } = useSelector((state) => state.drink);

  return (
    <section className="w-[90%] pb-[100px] items-center mt-5 mx-auto flex flex-col md:flex-row gap-8 flex-wrap">
      {/* {data ? (
        data.map((el) => {
          return <SingleDrink key={el.idDrink} {...el} />;
        })
      ) : (
        <p>Nessun cocktail trovato</p>
      )} */}
      {isLoading ? (
        <Loading />
      ) : data ? (
        data.map((el) => {
          return <SingleDrink key={el.idDrink} {...el} />;
        })
      ) : (
        <p>Nessun cocktail trovato</p>
      )}
    </section>
  );
};

export default DrinkSection;
