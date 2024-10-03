import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import nav1 from "../assets/nav-icon1.svg";
import nav2 from "../assets/nav-icon2.svg";

import github from "../assets/img/github.png";
import email from "../assets/img/email.png";
import "../App.css";

function NavBar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar
			expand="lg"
			className={`${scrolled ? "scrolled" : ""} ${expanded ? "navbar-expanded" : ""}`}
			expanded={expanded}
			onToggle={(expanded) => setExpanded(expanded)}
		>
			<Container>
				<Navbar.Brand href="#home">Rheann</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#experience">Experience</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/rheann-sequeira">
								<img src={nav1} alt="linkedin" />
							</a>
							<a href="mailto:rheann.seq@gmail.com">
								<img src={email} alt="email" />
							</a>
							<a href="https://github.com/rheann-seq">
								<img src={github} alt="github" />
							</a>
						</div>
						{/* <HashLink to="#connect">
							<button className="vvd">
								<span>Let's Connect</span>
							</button>
						</HashLink> */}
						{/* <a href="#connect">
							<button className="vvd">
								<span>Let's Connect</span>
							</button>
						</a> */}
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
