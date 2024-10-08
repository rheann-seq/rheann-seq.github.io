import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profileImg from "../assets/img/profile-img.png";

function CreateBanner() {
	const toRotate = ["Software Developer", "Backend Developer", "Fullstack Developer"];
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsdeleting] = useState(false);
	const [text, setText] = useState("");
	// const [delta, setDelta] = useState(100 - Math.random() * 150);
	const [delta, setDelta] = useState(150);
	const period = 150;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);
		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
		setText(updatedText);
		// if (isDeleting) {
		// 	setDelta((prevDelta) => prevDelta / 4);
		// }
		if (!isDeleting && updatedText === fullText) {
			setIsdeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsdeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(150);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome to my Portfolio</span>
						<h1>{`Hi, I'm Rheann \n \n`}</h1>
						<h2>
							<span className="wrap">{text}</span>
						</h2>
						{/* <a href="#connect">
							<button onClick={() => console.log("connect button clicked")}>
								Let's connect <ArrowRightCircle></ArrowRightCircle>
							</button>
						</a> */}
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={profileImg} alt="Header Img"></img>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default CreateBanner;
