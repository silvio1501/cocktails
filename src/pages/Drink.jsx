import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDrink } from "../redux/singleDrinkSlice";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Loading from "../components/Loading";

const Drink = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrink(id));
  }, []);

  const { drink, isLoading } = useSelector((state) => state.singleDrink);

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic,
    strGlass: glass,
    strInstructions,
    strInstructionsIT,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  } = drink;

  const istruzioni = [
    {
      ingrediente: strIngredient1,
      qty: strMeasure1,
    },
    {
      ingrediente: strIngredient2,
      qty: strMeasure2,
    },
    {
      ingrediente: strIngredient3,
      qty: strMeasure3,
    },
    {
      ingrediente: strIngredient4,
      qty: strMeasure4,
    },
    {
      ingrediente: strIngredient5,
      qty: strMeasure5,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-[90%] m-auto pt-[20px]  pb-[100px] ">
          {/* button back home */}
          <div className="mb-10 border-y-2 py-5">
            <div className="w-[225px]">
              <Link to={"/"}>
                <div className="flex items-center gap-3">
                  <FaArrowCircleLeft className="text-5xl text-orange-dark" />
                  <p className="text-2xl text-blue-dark font-semibold">
                    Torna in home
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="items-center flex flex-col md:flex-row">
            {/* section image */}
            <section>
              <div>
                <img className="w-[450px] h-[400px]" src={image} alt="" />
              </div>
            </section>

            {/* section info */}
            <section className="mt-8 md:mt-0 w-[100%] md:ml-10">
              <h2 className="text-3xl font-bold text-blue-dark">{name}</h2>
              <div className="flex gap-5 mt-5">
                <span className="p-2 px-5 bg-blue-100 font-semibold text-sm text-orange-light rounded-xl">
                  {category}
                </span>
                <span className="p-2 px-5 bg-blue-100 font-semibold text-sm text-orange-light rounded-xl">
                  {strAlcoholic}
                </span>
                <span className="p-2 px-5 bg-blue-100 font-semibold text-sm text-orange-light rounded-xl">
                  {glass}
                </span>
              </div>
              {/* sezione ingredienti */}
              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-blue-dark">
                  Ingredienti:{" "}
                </h2>
                <ul className="mt-3 font-medium text-orange-light">
                  {istruzioni.map((el) => {
                    if (el.ingrediente && el.qty) {
                      return (
                        <li key={el.ingrediente}>
                          {el.qty + " " + el.ingrediente}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              {/* sezione istruzioni */}
              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-blue-dark">
                  Istruzioni:{" "}
                </h2>
                {strInstructionsIT ? (
                  <p className="text-orange-light font-medium">
                    {strInstructionsIT}
                  </p>
                ) : (
                  <p className="text-orange-light font-medium">
                    {strInstructions}
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Drink;
