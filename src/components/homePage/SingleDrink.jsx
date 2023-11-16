import { HiClipboardList } from "react-icons/hi";
import {} from "react-router-dom";

const SingleDrink = ({ idDrink, strDrink, strDrinkThumb }) => {
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
        <button className="flex items-center gap-2 text-blue-dark bg-transparent">
          <h2 className="font-semibold">Ricetta</h2>
          <HiClipboardList className="text-orange-dark" />
        </button>
      </div>
    </article>
  );
};

export default SingleDrink;
