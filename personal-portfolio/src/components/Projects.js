import { Container, Row, Col } from "react-bootstrap";
import blockchain from "../assets/img/blockchain.png";
import bookstore from "../assets/img/bookstore.png";
import wordish from "../assets/img/wordish.png";
import puppy from "../assets/img/dog-food.png";

function ProjectComponent() {
	return (
		<section className="projectSection" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<h2>Projects</h2>
					</Col>
				</Row>
				<Row>
					<Col md={6} xs={12}>
						<a href="https://github.com/rheann-seq/BlockchainSimulator" target="_blank" rel="noreferrer">
							<div className="project1">
								<img src={blockchain} alt="project1" />
								<h2>Blockchain simulator</h2>
								<p>A dynamic blockchain simulation with real-time client-server interaction using JSON over TCP sockets</p>
							</div>
						</a>
					</Col>
					<Col md={6} xs={12}>
						<a href="https://github.com/rheann-seq/Scalable-ecommerce-bookstore" target="_blank" rel="noreferrer">
							<div className="project2">
								<img src={bookstore} alt="project2" />
								<h2>Scalable Ecommerce bookstore</h2>
								<p>
									A robust e-commerce bookstore created leveraging EC2, RDS, EKS, and Kafka to ensure seamless, resilient
									performance.
								</p>
							</div>
						</a>
					</Col>
				</Row>
				<Row>
					<Col md={6} xs={12}>
						<a href="https://github.com/rheann-seq/Wordish" target="_blank" rel="noreferrer">
							<div className="project3">
								<img src={wordish} alt="project3" />
								<h2>Wordish</h2>
								<p>
									A fun word game where players have six attempts to guess a five-letter word, with color-coded feedback provided
									after each guess.
								</p>
							</div>
						</a>
					</Col>
					<Col md={6} xs={12}>
						<a href="https://github.com/rheann-seq/puppy-pal" target="_blank" rel="noreferrer">
							<div className="project4">
								<img src={puppy} alt="project4" />
								<h2>Puppy Pal</h2>
								<p>Unleash puppy knowledge with Puppy Pal - your pocket guide to pawsome breeds!</p>
							</div>
						</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ProjectComponent;
