import heroImage from "../../assets/hero-image.jpeg";
import animate from "../../assets/Animation - 1699476824425.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-[450px]">
        <img src={heroImage} alt="hero image" className="h-[100%] w-[100%]" />
        <div className=" absolute top-0 bottom-0 bg-[rgb(0,0,0,0.5)] w-[100%] h-[100%]">
          <div className="w-[80%] h-[100%] m-auto mt-5 flex flex-col md:flex-row items-center justify-center md:justify-between">
            <section className="text-center">
              <div className="md:w-[70%] m-auto">
                <p className="text-white text-3xl mt-3 font-bold">
                  Qui puoi trovare le ricette dei migliori cocktail al mondo
                </p>
                <button className="bg-orange-dark mt-3 text-white hover:bg-orange-light">
                  <Link to="/contatti" className="text-white uppercase">
                    Contattaci
                  </Link>
                </button>
              </div>
            </section>
            <section>
              <Player
                autoplay
                loop
                src={animate}
                style={{ height: "300px", width: "300px" }}
              ></Player>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
