import { Link } from "react-router-dom";

import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const links = [
  {
    url: "/",
    text: "Home",
    icon: <AiFillHome className="text-2xl text-orange-dark " />,
  },
  // {
  //   url: "/about",
  //   text: "Chi siamo",
  //   icon: <RiTeamFill className="text-2xl text-orange-dark" />,
  // },
  {
    url: "/contatti",
    text: "Contattaci",
    icon: <AiFillMessage className="text-2xl text-orange-dark" />,
  },
];

export const LinkComponent = ({ linksClass }) => {
  return links.map((el) => {
    return (
      <Link to={el.url} key={el.text}>
        <div className={linksClass}>
          {el.icon}
          <h5 className="text-blue-dark font-bold">{el.text}</h5>
        </div>
      </Link>
    );
  });
};

const socialLink = [
  {
    url: "https://facebook.com",
    icon: <FaFacebookSquare className="text-2xl text-orange-dark" />,
  },
  {
    url: "https://instagram.com",
    icon: <FaInstagramSquare className="text-2xl text-orange-dark" />,
  },
  {
    url: "https://youtube.com",
    icon: <FaYoutubeSquare className="text-2xl text-orange-dark" />,
  },
];

export const SocialComponent = ({ socialClass }) => {
  return socialLink.map((el) => {
    return (
      <a href={el.url} key={el.url} className={socialClass}>
        {el.icon}
      </a>
    );
  });
};
