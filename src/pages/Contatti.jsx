import Form from "../components/contatti/form";

const Contatti = () => {
  return (
    <div className="w-[100%] gradiant pb-[100px]">
      <div className="w-[90%] mx-auto">
        <div className="font-bold w-[70%] m-auto text-center md:w-[50%] py-10">
          <h1 className="text-4xl">Vorresti aggiungere un cocktail?</h1>
          <h2 className="text-white text-lg mt-5">
            Contattaci e valuteremo la tua proposta
          </h2>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contatti;
