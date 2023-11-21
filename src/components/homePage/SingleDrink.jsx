import { HiClipboardList } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveScroll } from "../../redux/drinkSlice";

const SingleDrink = ({ idDrink, strDrink, strDrinkThumb }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDrink = (id) => {
    dispatch(saveScroll(window.scrollY));
    navigate(`cocktail/${id}`);
  };

  return (
    <article className="w-[315px] ">
      <div className="w-[100%] h-[280px] ">
        <img
          src={strDrinkThumb}
          alt="image drink"
          className="h-[100%] w-[100%]  rounded-t-xl"
        />
      </div>
      <div className="bg-slate-100 flex justify-between items-center px-3 rounded-b-xl">
        <h2 className="font-bold text-orange-dark ">{strDrink}</h2>
        <button
          onClick={() => goToDrink(idDrink)}
          className="flex items-center gap-2 text-blue-dark bg-transparent"
        >
          <h2 className="font-semibold">Ricetta</h2>
          <HiClipboardList className="text-orange-dark" />
        </button>
      </div>
    </article>
  );
};

export default SingleDrink;
