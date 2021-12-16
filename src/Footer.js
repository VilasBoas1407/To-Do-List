import "./App.css";
import "./Footer.css";
import gitHub from "./assets/github.png";
import linkedIn from ".//assets/linkedIn.png";
const gitHubUrl = "https://github.com/VilasBoas1407/";
const linkedInUrl = "https://www.linkedin.com/in/lucas-vilas-boas-l-a348b313a/";

const Footer = () => {
  return (
    <div className="App">
      <div className="footer">
        <br />
        <label>Desenvolvido por Lucas Vilas Boas - 2021</label>
        <div className="social-media">
          <a href={gitHubUrl} className="github">
            <img src={gitHub} alt="GitHub" />
          </a>
          <a href={linkedInUrl} className="linkedIn">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
