import "./Footer.css";
import github from "/assets/Github.png";
import insta from "/assets/Insta.png";
import x from "/assets/X.png";
import linkedin from "/assets/Linkedin.png";
import mail from "/assets/Mail.png";
import { Link } from "react-router-dom";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="project-footer jakarta">
				<h2>Start a project</h2>
				<p className="contentp">
					Interested in working together? We should queue up a time to
					chat. I'll buy the coffee.
				</p>
				<div className="button-container">
					<button
						className="cta-button"
						onClick={() => window.open("https://www.yourlink.com")}
					>
						🤘 Let's do this
					</button>
				</div>
			</footer>

			<div className="footer">
				<div className="footer-contents ">
					<h2 className="logo logo-spin">
						<Link to="/">Prateek</Link>
					</h2>
					<p>
						Living, learning, & leveling up <br /> one day at a
						time.
					</p>
					<div className="social-div">
						<a
							href="https://github.com/lohaniprateek"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icons invert-clr"
								src={github}
								alt="GitHub"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/prat33k/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icons invert-clr"
								src={linkedin}
								alt="LinkedIn"
							/>
						</a>
						<a
							href="https://www.instagram.com/prateek_kumar23/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icons"
								src={insta}
								alt="Instagram"
							/>
						</a>
						<a
							href="https://x.com/pr4teekkumar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icons invert-clr"
								src={x}
								alt="X (Twitter)"
							/>
						</a>
						<a
							href="kprateek9315@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icons"
								src={mail}
								alt="Mail"
							/>
						</a>
					</div>
				</div>
				<div className="footer-credits pt-regular">
					<p>
						Handcrafted by me © {currentYear} All Rights Reserved.
					</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
