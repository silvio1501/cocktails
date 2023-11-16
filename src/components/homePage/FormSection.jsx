import { React, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/drinkSlice";

const FormSection = () => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");

  const handleSearchDrink = () => {
    dispatch(fetchData(inputSearch));
  };

  return (
    <section className="w-[90%] mt-5 m-auto">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search your cocktail "
          className="border py-1 pl-3 rounded-xl text-lg text-blue-dark font-semibold"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button className="flex bg-transparent p-0" onClick={handleSearchDrink}>
          <FiSearch className="text-3xl text-orange-dark" />
        </button>
      </div>
    </section>
  );
};

export default FormSection;
