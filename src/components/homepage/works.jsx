import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./storable.jpg"
								alt="storable"
								className="work-image"
							/>
							<div className="work-title">
							  Software Engineer II - Fullstack
							</div>
							<div className="work-subtitle">Storable</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./rootquotient.png"
								alt="rootquotient"
								className="work-image"
							/>
							<div className="work-title">
								Software Engineer I
							</div>
							<div className="work-subtitle">Rootquotient</div>
							<div className="work-duration">2022 - 2024</div>
						</div>
						<div className="work">
							<img
								src="./learnapp.png"
								alt="LearnApp"
								className="work-image"
							/>
							<div className="work-title">
								Software Engineer
							</div>
							<div className="work-subtitle">LearnApp</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
