import { FiSearch } from "react-icons/fi";

const FormSection = () => {
  return (
    <section className="w-[90%] mt-5 m-auto">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search your cocktail "
          className="border py-1 pl-3 rounded-xl text-lg text-blue-dark font-semibold"
        />
        <button className="flex bg-transparent p-0">
          <FiSearch className="text-3xl text-orange-dark" />
        </button>
      </div>
    </section>
  );
};

export default FormSection;
