import React from "react";

function article_1() {
	return {
		date: "14 May 2022",
		title: "How to Contribute to any project on GitHub",
		description:
			"A beginner-friendly guide to help you start contributing to open-source projects on GitHub with easy steps and useful tips.",
		link: "https://yasararafath.hashnode.dev/contribute-github",
		keywords: [
			"Contribute to Github",
			'Contribute to Open Source',
			"Contribute to Open Source Projects",
			"Contribute to Open Source Projects on Github",
			"Yasar",
			"Yasar Arafath",
			"Yasar Arafath Ali",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}



function article_2() {
	return {
		date: "14 May 2024",
		title: "Deep Dive into JavaScript Events: Bubbling, Propagation, Capturing & More",
		description:
			"Explore JavaScript event handling: understand bubbling, capturing, propagation phases, and methods to control event flow effectively.",
		link: "https://yasararafath.hashnode.dev/deep-dive-into-javascript-events-bubbling-propagation-capturing-and-more",
		style: ``,
		keywords: [
			"Deep Dive into JavaScript Events: Bubbling, Propagation, Capturing & More",
			"JavaScript Events",
			"JavaScript Event Bubbling",
			"JavaScript Event Propagation",
			"JavaScript Event Capturing",
			"JavaScript Event Handling",
			"JavaScript Event Listeners",
			"Yasar",
			"Yasar Arafath",
			"Yasar Arafath Ali",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}
function article_3() {
	return {
		date: "24 October 2024",
		title: "React Hooks Explained with Real-Life Examples",
		description:
			"Explore the power of React Hooks in this article, with clear explanations and real-life examples. Learn how to manage state, side effects, and more in functional components.",
		link: "https://yasararafath.hashnode.dev/react-hooks",
		style: ``,
		keywords: [
			"React Hooks Explained with Real-Life Examples",
			"React Hooks",
			"React Hooks Examples",
			"React Functional Components",
			"React State Management",
			"React Side Effects",
			"React useState",
			"React useEffect",
			"Yasar",
			"Yasar Arafath",
			"Yasar Arafath Ali",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}
function article_4() {
	return {
		date: "8 April 2025",
		title: "Understanding WebSocket Communication: How Clients and Servers Talk in Real-Time",
		description:
			"Explore the fundamentals of WebSockets, their role in enabling real-time communication, and how they differ from traditional HTTP protocols.",
		link: "https://yasararafath.hashnode.dev/understanding-websockets",
		style: ``,
		keywords: [
			"Understanding WebSocket Communication: How Clients and Servers Talk in Real-Time",
			"WebSocket Communication",
			"WebSocket",
			"WebSocket Communication in Real-Time",
			"client-server communication",
			"Yasar",
			"Yasar Arafath",
			"Yasar Arafath Ali",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}


export const homeArticles = [article_3, article_4]
const myArticles = [article_4, article_3, article_2, article_1];

export default myArticles;
