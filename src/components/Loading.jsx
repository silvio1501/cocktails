import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimate from "../assets/loading-animate.json";

const Loading = () => {
  return (
    <div className="flex justify-center w-[90%] mx-auto">
      <Player
        autoplay
        loop
        src={loadingAnimate}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default Loading;
