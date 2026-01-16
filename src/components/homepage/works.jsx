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
							<div className="work-duration">Sep 2024 - Present</div>
							<div className="work-description">
								Led large-scale migrations reducing technical debt and improving system stability. Automated cross-platform facility reconciliation across multiple FMS, reducing manual effort by 80%. Designed and implemented a Bid Optimizer for SpareFoot, boosting efficiency in dynamic bidding.
							</div>
						</div>

						<div className="work">
							<img
								src="./rootquotient.png"
								alt="rootquotient"
								className="work-image"
							/>
							<div className="work-title">
								Software Development Engineer 1
							</div>
							<div className="work-subtitle">RootQuotient</div>
							<div className="work-duration">Jun 2022 - Aug 2024</div>
							<div className="work-description">
								Led end-to-end development of scalable applications including Hospital Management, Job Management, and Carbon Footprint Analytics platforms. Built reusable UI components and contributed to frontend standardization. Developed REST and GraphQL APIs with JWT-based authentication, optimizing data flow across MongoDB-based systems.
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
