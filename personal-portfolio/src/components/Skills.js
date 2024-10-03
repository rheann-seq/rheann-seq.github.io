import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javaLogo from "../assets/img/Java-Logo.png";
import pythonLogo from "../assets/img/python.png";
import sqlLogo from "../assets/img/sql.png";
import springLogo from "../assets/img/spring-boot-logo.png";
import djangoLogo from "../assets/img/django.png";
import jsLogo from "../assets/img/js.png";
import reactLogo from "../assets/img/react.png";

function SkillsSection() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skillsSection" id="skills">
			<span className="skills">
				<h2>Skills</h2>
			</span>
			<span className="skillType">
				<h5>Programming languages</h5>
			</span>
			<Carousel responsive={responsive} className="skillCarousel">
				<div>
					<img src={javaLogo} alt="skill1"></img>
				</div>
				<div>
					<img src={pythonLogo} alt="skill2"></img>
				</div>
				<div>
					<img src={sqlLogo} alt="skill3"></img>
				</div>

				<div>
					<img src={jsLogo} className="javascript" alt="skill6"></img>
				</div>
			</Carousel>
			<span className="skillType">
				<h5>Frameworks</h5>
			</span>
			<Carousel responsive={responsive} className="skillCarousel">
				<div>
					<img src={springLogo} alt="spring"></img>
				</div>
				<div>
					<img src={djangoLogo} alt="django"></img>
				</div>
				<div>
					<img src={reactLogo} alt="react"></img>
				</div>
			</Carousel>
		</section>
	);
}

export default SkillsSection;
