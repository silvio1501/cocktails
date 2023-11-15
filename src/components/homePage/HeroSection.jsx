import heroImage from "../../assets/hero-image.jpeg";
import animate from "../../assets/Animation - 1699476824425.json";
import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-[600px]">
        <img src={heroImage} alt="hero image" className="h-[100%] w-[100%]" />
        <div className=" absolute top-0 bottom-0 bg-[rgb(0,0,0,0.5)] w-[100%] h-[100%]">
          <div className="w-[80%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            <section className="text-center">
              <div>
                <h1 className="text-orange-dark font-bold">Titolo</h1>
                <p className="text-white mt-3 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, laudantium.
                </p>
                <button className="bg-orange-dark mt-3 text-white hover:bg-orange-light">
                  Contattaci
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
