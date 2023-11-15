import { SocialComponent } from "../utils/links";

const SocialLinks = () => {
  return (
    <div className="hidden md:flex gap-8 ">
      <SocialComponent socialClass={"hover:scale-[1.2]"} />
    </div>
  );
};

export default SocialLinks;
