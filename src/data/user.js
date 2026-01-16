const INFO = {
	main: {
		title: "Yasar Arafath's Portfolio",
		name: "Yasar Arafath",
		email: "yasararafathali@outlook.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/yasarrarafathh",
		github: "https://github.com/yasararafathali",
		linkedin: "https://linkedin.com/in/yasararafathali",
		instagram: "https://instagram.com/arafathh__",
		hashnode: "https://yasararafath.hashnode.dev/"
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "I'm Yasar Arafath Ali, a Full-Stack Software Engineer building AI-powered applications.",
		description:
			"With 4+ years of experience designing and developing scalable web applications, I specialize in integrating AI capabilities using LLM APIs and Retrieval-Augmented Generation (RAG) systems. I architect end-to-end solutions using React, Next.js, Node.js, and Python, focusing on performance, security, and delivering measurable business impact.",
	},

	about: {
		title: "I'm Yasar Arafath. I build AI-enabled systems that solve real problems.",
		description:
			"As a Full-Stack Software Engineer, I've led development of production systems serving thousands of users, from hospital management platforms to AI-powered document chat applications. My work spans the entire stack—designing scalable architectures, building responsive UIs, developing robust APIs, and integrating AI capabilities that deliver tangible value. I'm passionate about writing maintainable code, reducing technical debt, and shipping features that matter.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "AI Knowledge Base / Document Chat (RAG)",
			description: "Problem: Organizations struggle to extract insights from large document repositories. Solution: Built an AI-powered document Q&A system using Retrieval-Augmented Generation (RAG) that enables semantic search and contextual answers from ingested documents. Impact: Users can query complex documents in natural language and receive accurate, context-aware responses. Tech Stack: NestJS, OpenAI API, Vector DBs (Qdrant, Pinecone), LangChain, document embeddings, semantic retrieval.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.svg",
			linkText: "View Project",
			link: "https://github.com/YasarArafathAli/phind-ai",
		},
		{
			title: "Real-Time Bitcoin Price Dashboard",
			description: "Problem: Cryptocurrency traders need reliable, real-time price data with minimal latency and high availability. Solution: Built a high-performance price tracker using React 18+ with hybrid data architecture combining Polygon REST API and Finnhub WebSocket. Implemented fault-tolerant WebSocket lifecycle management with exponential backoff and price-change filtering (>0.01%). Impact: Delivered sub-second price updates with 99.9% uptime and graceful degradation. Tech Stack: React 18, WebSockets, fault-tolerant architecture, exponential backoff, real-time data filtering.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.svg",
			linkText: "View Project",
			link: "https://live-bitcoin-dashboard.vercel.app/",
		},
		{
			title: "Open Diary",
			description: "Problem: Users wanted a modern social media platform with real-time updates and flexible data querying. Solution: Built a full-stack social media application with real-time data handling using React, Node.js, Apollo GraphQL, and MongoDB. Implemented JWT-based authentication and optimized GraphQL queries for efficient data fetching. Impact: Enabled real-time social interactions with flexible, performant data access patterns. Tech Stack: React, Node.js, Apollo GraphQL, MongoDB, JWT authentication, real-time subscriptions.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.svg",
			linkText: "View Client",
			link: "https://github.com/YasarArafathAli/OpenDiary-Client",	
		},
	],
};

export default INFO;
