import React from "react";
import { Image } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="logo">
          <Image src="images/logo.png" alt="logotype" />
        </div>
        <div className="media-location">
          <div className="social-media">
            <h2>Sociala Medier</h2>

            <div className="instagram">
              <BsInstagram color="#57106c" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/stylelivinghbg/"
              >
                stylelivinghbg
              </a>
            </div>

            <div className="facebook">
              <FaFacebook color="#57106c" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/www.styleliving.se"
              >
                Style & Living
              </a>
            </div>
          </div>

          <div className="location">
            <h2>Hitta till oss</h2>
            <p>
              Kullagatan 57 <br />
              252 20, Helsingborg <br />
            </p>
            <a href="tel:042135005">042-13 50 05</a> <br />
            <a href="mailto:info@styleliving.se">info@styleliving.se</a>
          </div>

          <div className="openHours">
            <h2>Öppettider</h2>
            <p>
              Mån-fre 10-18 <br />
              Lördag 10-16 <br />
              Söndag STÄNGT
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="arrow">
          <a href="#">
            <Image src="/images/arrow.png" alt="" />
          </a>
          <h3>© {new Date().getFullYear()} Style & Living</h3>
        </div>
        <p>
          Hemsida skapad av{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sonjasviden.com/"
          >
            Sonja Svidén
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
