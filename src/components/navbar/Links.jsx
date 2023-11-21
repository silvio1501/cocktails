import { LinkComponent } from "../utils/links";

const Links = () => {
  return (
    <div className="hidden gap-12 md:flex uppercase">
      <LinkComponent
        linksClass={
          "flex items-center gap-3 hover:scale-[1.1] hover:text-orange-dark"
        }
      />
    </div>
  );
};

export default Links;
