import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("maygzadj");
  if (state.succeeded) {
    return <div className="h-[43vh] text-center">
    <p className="text-4xl font-extrabold text-white">Grazie per averci contattato</p>
    </div>
  }
  return (
    <div className="md:w-[60%] m-auto">
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/maygzadj"
        className="bg-white p-5 rounded-xl"
      >
        <div className="form-input">
          <label htmlFor="nome" className="text-blue-dark">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Inserisci il tuo nome"
            required
          />
          <ValidationError prefix="Nome" field="nome" errors={state.errors} />
        </div>
        <div className="form-input">
          <label htmlFor="cognome" className="text-blue-dark">
            Cognome
          </label>
          <input
            id="cognome"
            type="text"
            name="cognome"
            placeholder="Inserisci il tuo cognome"
            required
          />
          <ValidationError
            prefix="Cognome"
            field="cognome"
            errors={state.errors}
          />
        </div>
        <div className="form-input">
          <label htmlFor="emal" className="text-blue-dark">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Inserisci la tua email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-input">
          <label htmlFor="cell" className="text-blue-dark">
            Telefono
          </label>
          <input
            id="cell"
            type="tell"
            name="cell"
            placeholder="Inserisci il tuo numero di telefono"
            required
          />
          <ValidationError
            prefix="Telefono"
            field="cell"
            errors={state.errors}
          />
        </div>
        <div className="form-input">
          <label htmlFor="recipe" className="text-blue-dark">
            Ricetta
          </label>
          <textarea
            id="recipe"
            name="recipe"
            placeholder="Descrivi la tua ricetta"
            required
          />
          <ValidationError
            prefix="Ricetta"
            field="recipe"
            errors={state.errors}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-orange-light mt-5 text-white uppercase"
          >
            Invia ricetta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
