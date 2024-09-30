import "./Footer.css";
import github from "../assets/Github.png";
import insta from "../assets/Insta.png";
import x from "../assets/X.png";
import linkedin from "../assets/Linkedin.png";
import mail from "../assets/Mail.png";
function Footer() {
  let currentYear = new Date().getFullYear();
  console.log(currentYear);

  return (
    <>
      <footer class="project-footer jakarta">
        <h2>Start a project</h2>
        <p className="contentp">
          Interested in working together? We should queue up a time to chat.
          I'll buy the coffee.
        </p>
        <div class="button-container">
          <button
            class="cta-button"
            onClick={() => window.open("https://wwwgoogle.com")}
          >
            🤘 Let's do this
          </button>
        </div>
      </footer>

      <div className="footer">
        <div className="footer-contents">
          <h2 className=" logo logo-spin">
            <a href="#">Prateek</a>
          </h2>
          <p>
            Living, learning, & leveling up <br /> one day at a date time.
          </p>
          <div className="social-div">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icons invert-clr"
                src={github}
                alt="GitHub Icon"
              />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icons invert-clr"
                src={linkedin}
                alt="LikedIn"
              />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icons" src={insta} alt="instagram" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icons invert-clr"
                src={x}
                alt="instagram"
              />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icons" src={mail} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="footer-credits pt-regular">
          <p>Handcrafted by me ©{currentYear} All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
