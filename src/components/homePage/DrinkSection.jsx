import SingleDrink from "./SingleDrink";
import { useSelector } from "react-redux";

const DrinkSection = () => {
  const { data } = useSelector((state) => state.drink);

  return (
    <section className="w-[90%] mt-5 mx-auto">
      {data ? (
        data.map((el) => {
          return <SingleDrink />;
        })
      ) : (
        <p>Nessun cocktail trovato</p>
      )}
    </section>
  );
};

export default DrinkSection;
