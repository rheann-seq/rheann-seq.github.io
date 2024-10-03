import { Container } from "react-bootstrap";
import timelineElements from "../timeLineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from "../assets/img/work.svg";
import "react-vertical-timeline-component/style.min.css";

function ExperienceComponent() {
	let workIconStyles = { background: "#f9ebff" };
	return (
		<Container>
			<section className="experienceSection" id="experience">
				<h2>Experience</h2>
				<VerticalTimeline>
					{timelineElements.map((element) => {
						return (
							<VerticalTimelineElement
								key={element.key}
								date={element.date}
								dateClassName="date"
								icon={<WorkIcon />}
								iconStyle={workIconStyles}
							>
								<h3 className="vertical-timeline-element-title">{element.company}</h3>
								<h5 className="vertical-timeline-element-subtitle">{element.role}</h5>
								<div dangerouslySetInnerHTML={{ __html: element.description }} />
								{/* <p id="description">{element.description}</p> */}
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</section>
		</Container>
	);
}

export default ExperienceComponent;
