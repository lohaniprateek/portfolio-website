import myimg from "../assets/img.png";
import front from "../assets/hbg.png";
export default function HeroSection() {
	return (
		<div className="hero-section">
			<h1 className=" pt-italic">DevOps & Frontend Developer</h1>
			<p className="pt-regular ">
				I build Beautiful website and automate the virtualization
				process for Money and i Love it ❤️.
			</p>
			<img className="my-img" src={myimg} alt="" />
			<div className="circle"></div>

			<img className="front-img" src={front} alt="" />

			<div className="about">
				<h3>Hi, I'm Prateek. Nice to meet you.</h3>
				<p>
					Since beginning my journey as a web developer, I’ve worked
					with clients, built websites for startups, and collaborated
					with talented teams to create impactful digital solutions.
					Whether it’s designing a simple landing page or developing
					complex websites with payment systems, I thrive on tackling
					challenges and continuously honing my skills. I’m passionate
					about Web3, DevOps, and FOSS, and I’m always exploring new
					technologies to push the boundaries of what I can create.
					Confident yet curious, I strive to deliver both technical
					excellence and user-focused experiences.
				</p>
			</div>
		</div>
	);
}
