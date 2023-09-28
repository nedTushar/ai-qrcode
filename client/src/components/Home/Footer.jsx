import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const twitterProfileUrl = "https://twitter.com/xQRCode";
  const instagramProfileUrl = "https://www.instagram.com/xqrcode/";
  const githubProfileUrl = "https://github.com/nedTushar";
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className=" flex gap-2 p-2">
        <a
          href={twitterProfileUrl}
          className="social__link"
          target="_blank"
          rel="noopener noreferrer "
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            size="xl"
            className="social__icon"
          />
        </a>
        <a
          href={instagramProfileUrl}
          className="social__link"
          target="_blank"
          rel="noopener noreferrer "
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            className="social__icon"
          />
        </a>
        <a
          href={githubProfileUrl}
          className="social__link"
          target="_blank"
          rel="noopener noreferrer "
        >
          <FontAwesomeIcon icon={faGithub} size="xl" className="social__icon" />
        </a>
      </div>
      <div className="p-2">
        <p>©2023 xQRCode</p>
      </div>
    </div>
  );
};

export default Footer;
