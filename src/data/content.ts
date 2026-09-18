export const NAV_LINKS = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Experience", href: "#experience" },
  { n: "03", label: "Projects", href: "#projects" },
  { n: "04", label: "Skills", href: "#skills" },
  { n: "05", label: "Certs", href: "#certs" },
  { n: "06", label: "Contact", href: "#contact" },
];

export const SOCIALS = {
  github: "https://github.com/khushi-gehlot",
  linkedin: "https://www.linkedin.com/in/khushi-gehlot-3aba082b2/",
  leetcode: "https://leetcode.com/klixie",
  email: "khushigehlot75@gmail.com",
  phone: "+917014306765",
  phoneDisplay: "+91 70143 06765",
};

export type Experience = {
  role: string;
  company: string;
  when: string;
  current?: boolean;
  desc: string;
  tech: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "Listen First Media",
    when: "May 2026 — Present",
    current: true,
    desc: "Build and ship AI solutions that analyze media coverage — detecting key messages and sentiment, building automation pipelines, and turning news & communications data into insight through robust, user-friendly dashboards.",
    tech: ["Python", "LLMs", "NLP", "Sentiment AI", "Automation", "Dashboards"],
  },
  {
    role: "Data Science Intern",
    company: "Celebal Technologies",
    when: "May 2026 — Jul 2026",
    desc: "Developed data-driven solutions using machine learning, statistical analysis and data engineering to solve real business problems end to end.",
    tech: ["Machine Learning", "Statistics", "Data Engineering", "Python"],
  },
  {
    role: "Python & Data Engineer Intern",
    company: "Coplur",
    when: "Jun 2025 — Aug 2025",
    desc: "Worked hands-on with Python, REST APIs, data-engineering workflows, data analysis, and Azure Data Lake concepts for cloud-scale data handling.",
    tech: ["Python", "APIs", "Azure Data Lake", "Data Analysis"],
  },
  {
    role: "3D Modeler",
    company: "SKIT Game Development Team",
    when: "Jan 2025 — Sep 2025",
    desc: "Designed maps and built 3D models and assets in Blender for an indie game, collaborating with developers to integrate assets into the Unity engine.",
    tech: ["Blender", "Unity", "3D Modelling", "Game Assets"],
  },
  {
    role: "Frontend Intern",
    company: "CodSoft",
    when: "Sep 2024 — Oct 2024",
    desc: "Crafted and deployed 3 interactive websites, improving UI/UX and responsive design with HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
  {
    role: "Web Development Intern",
    company: "KistechnoSoftware",
    when: "Jul 2024 — Aug 2024",
    desc: "Developed a responsive web application with HTML, CSS and JavaScript, improving interface usability and cross-device compatibility.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export type Project = {
  key: string;
  num: string;
  kicker: string;
  title: string;
  desc: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    key: "meltwater",
    num: "P/01 · ai · nlp",
    kicker: "ai / nlp",
    title: "Meltwater Sentiment Tagger",
    desc: "Automated sentiment-tagging pipeline for large-scale media coverage from Meltwater — classifying articles at scale so analysts stop tagging by hand.",
    tech: ["Python", "NLP", "LLMs", "Pandas"],
  },
  {
    key: "minimart",
    num: "P/02 · data eng",
    kicker: "data engineering",
    title: "Minimart — E-commerce + ETL",
    desc: "An e-commerce platform backed by Python + Apache Spark ETL pipelines that clean, transform and integrate datasets for analytics, surfaced in Power BI.",
    tech: ["Databricks", "Spark", "Flask", "Power BI"],
  },
  {
    key: "youtube",
    num: "P/03 · analytics",
    kicker: "analytics",
    title: "YouTube Channel Analysis",
    desc: "Pulled channel data via the YouTube API, transformed it with Pandas, and visualized subscriber growth, views and engagement in interactive Power BI dashboards.",
    tech: ["Python", "YouTube API", "Power BI"],
  },
  {
    key: "blissful",
    num: "P/04 · full-stack",
    kicker: "full-stack",
    title: "Blissful Events",
    desc: "A fully responsive event-management website that automates event registration end to end, improving planning efficiency for organizers.",
    tech: ["HTML", "CSS", "JS", "PHP"],
  },
  {
    key: "soc",
    num: "P/05 · security",
    kicker: "cybersecurity",
    title: "SOC Analyst Lab",
    desc: "Hands-on blue-team work behind my EC-Council Certified SOC Analyst credential — SIEM triage, packet analysis and vulnerability scanning.",
    tech: ["Splunk", "Wireshark", "Nessus", "SIEM"],
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  tech: string[];
  problem: string;
  approach: string;
  arch: string[];
  challenges: string;
  solution: string;
  result: string;
  learned: string;
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  loan: {
    tag: "Featured · AI / RAG",
    title: "AI Loan Advisory Chatbot",
    tech: ["Python", "LangChain", "RAG", "FAISS", "Mistral AI", "Hugging Face", "Streamlit"],
    problem:
      "Loan customers ask nuanced, policy-specific questions. A vanilla LLM confidently invents answers — dangerous when the topic is someone's money and eligibility.",
    approach:
      "I built a Retrieval-Augmented Generation system that only answers from the actual policy documents, with two guardrails layered on top of retrieval so the model can't drift into hallucination.",
    arch: [
      "PDF policy docs",
      "chunking + embeddings",
      "FAISS vector store",
      "relevance gate",
      "Mistral AI generation",
      "LLM faithfulness validation",
      "Streamlit chat UI",
    ],
    challenges:
      "Naive RAG still hallucinated when retrieval returned weakly-relevant chunks, and answered even when it shouldn't have.",
    solution:
      "Added a relevance-based gate that refuses low-confidence retrievals, plus an LLM-based faithfulness check that verifies every answer is grounded in the retrieved source before it reaches the user.",
    result:
      "Responses stay anchored to real policy text, hallucinations drop sharply, and the bot honestly says when it doesn't know — the behaviour you actually want in a financial advisory tool.",
    learned:
      "Retrieval quality — not the LLM — is the real product. Gating and verification matter more than a bigger model.",
  },
  meltwater: {
    tag: "AI / NLP · @ Listen First Media",
    title: "Meltwater Sentiment Tagger",
    tech: ["Python", "NLP", "LLMs", "Transformers", "Pandas", "Meltwater"],
    problem:
      "Media analysts had to manually read and tag the sentiment of a firehose of news articles pulled from Meltwater — slow, inconsistent, and impossible to scale.",
    approach:
      "I built an automated sentiment-tagging pipeline that ingests Meltwater coverage, cleans and normalizes the text, and classifies each article's sentiment so analysts start from a labelled dataset instead of a blank one.",
    arch: [
      "Meltwater coverage export",
      "text clean + normalize",
      "NLP / LLM sentiment model",
      "confidence scoring",
      "tagged dataset",
      "analyst review + dashboards",
    ],
    challenges:
      "Media language is subtle — sarcasm, mixed sentiment, and industry jargon break naive classifiers, and analysts needed to trust the output.",
    solution:
      "Combined language-model classification with confidence scoring so low-certainty articles are flagged for human review, keeping the human in the loop where it counts.",
    result:
      "Sharply cut manual tagging effort and made sentiment consistent across large volumes of coverage — freeing analysts to focus on insight instead of labelling.",
    learned:
      "AI should remove the boring 80% and route the ambiguous 20% to a human. Confidence-aware automation beats a black box.",
  },
  minimart: {
    tag: "Data Engineering",
    title: "Minimart — E-commerce + ETL",
    tech: ["Databricks", "Apache Spark", "Python", "Flask", "JavaScript", "Power BI"],
    problem:
      "An e-commerce store generates messy, fragmented data across products, orders and users — useless for decisions until it's cleaned and unified.",
    approach:
      "Designed and implemented ETL pipelines in Python and Apache Spark to clean, transform and integrate the datasets, then surfaced the results as analytics.",
    arch: [
      "raw store data",
      "Spark ETL (clean + transform)",
      "integrated dataset (Databricks)",
      "Flask app",
      "Power BI analytics",
    ],
    challenges:
      "Inconsistent, dirty data and the need to process it at scale without hand-writing brittle scripts.",
    solution:
      "Leaned on Spark for distributed, repeatable transformations and Databricks to orchestrate them, producing an analytics-ready dataset.",
    result:
      "A working e-commerce platform backed by clean, integrated data and Power BI dashboards that make store performance readable at a glance.",
    learned:
      "Good analytics is 90% pipeline. Model the transformations well and the dashboards write themselves.",
  },
  youtube: {
    tag: "Data Analytics",
    title: "YouTube Channel Analysis",
    tech: ["Python", "YouTube API", "Pandas", "Power BI", "CSV"],
    problem:
      "Channel performance is buried in raw API responses — no easy way to see what's actually growing.",
    approach:
      "Pulled channel data through the YouTube API, transformed it with Pandas, and built dashboards to visualize subscriber growth, views and engagement over time.",
    arch: ["YouTube Data API", "Pandas transform", "CSV store", "Power BI dashboards + charts"],
    challenges:
      "Turning raw, nested API data into consistent time-series metrics suitable for visualization.",
    solution:
      "A repeatable Pandas pipeline that flattens and aggregates the data into clean tables ready for Power BI.",
    result:
      "Clear, interactive dashboards showing growth and engagement patterns — decisions from data instead of guesswork.",
    learned: "The right chart answers a question in a second. Design the metric before the visual.",
  },
  blissful: {
    tag: "Full-Stack",
    title: "Blissful Events",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    problem: "Event organizers juggled registrations manually, which was slow and error-prone.",
    approach:
      "Planned and built a fully responsive event-management website that automates event registration end to end.",
    arch: ["responsive front-end (HTML/CSS/JS)", "PHP back-end", "registration automation"],
    challenges:
      "Making a smooth, responsive experience across devices while handling registration logic on the back end.",
    solution:
      "Clean responsive layouts paired with PHP-driven registration flow to remove the manual steps.",
    result:
      "Increased planning efficiency by automating registration, giving organizers a single place to manage events.",
    learned:
      "Automating one painful manual step is often more valuable than a dozen features nobody asked for.",
  },
  soc: {
    tag: "Cybersecurity",
    title: "SOC Analyst Lab",
    tech: ["Splunk", "Wireshark", "Nessus", "SIEM", "SOC"],
    problem: "Defending systems means spotting the real threat inside a flood of noisy logs and traffic.",
    approach:
      "Hands-on blue-team practice behind my EC-Council Certified SOC Analyst credential — SIEM-based triage, packet inspection and vulnerability scanning.",
    arch: [
      "log sources",
      "SIEM (Splunk) correlation",
      "packet analysis (Wireshark)",
      "vuln scanning (Nessus)",
      "triage + response",
    ],
    challenges: "Separating genuine incidents from false positives without alert fatigue.",
    solution: "Structured triage workflows and correlation rules to prioritize what actually matters.",
    result: "A working blue-team foundation and the Certified SOC Analyst credential from EC-Council.",
    learned: "Security is a data problem too — signal extraction under noise, just with higher stakes.",
  },
};

export type SkillGroup = { name: string; icon: string; skills: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "AI / ML",
    icon: "brain",
    skills: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "RAG",
      "LangChain",
      "LLMs",
      "FAISS / Vector DB",
      "NLP",
      "Hugging Face",
    ],
  },
  {
    name: "Data Engineering",
    icon: "database",
    skills: ["Apache Spark", "Databricks", "Azure Data Lake", "ETL / ELT", "Data Pipelines", "MySQL / RDBMS", "SQL"],
  },
  {
    name: "Software Engineering",
    icon: "code",
    skills: ["Python", "C", "C++", "JavaScript", "React", "Flask", "Firebase", "REST APIs"],
  },
  {
    name: "Data / Analytics",
    icon: "chart",
    skills: ["Power BI", "Pandas", "Advanced Excel", "DBMS"],
  },
  {
    name: "Cybersecurity",
    icon: "shield",
    skills: ["SIEM", "Splunk", "Wireshark", "Nessus", "SOC Concepts"],
  },
  {
    name: "Tools & Platforms",
    icon: "tools",
    skills: ["Git & GitHub", "Blender", "Unity", "FlutterFlow", "VS Code", "Linux"],
  },
];

export const CERTS = [
  { icon: "shield", title: "Certified SOC Analyst", org: "EC-Council" },
  { icon: "chart", title: "Data Analytics Job Simulation", org: "Deloitte Australia · Forage" },
  { icon: "sparkles", title: "Generative AI", org: "Databricks" },
  { icon: "database", title: "Databricks Fundamentals", org: "Databricks" },
];

export const BUILDING_NOW = [
  { title: "AI Media Intelligence", desc: "Sentiment + key-message detection over live news streams @ Listen First Media." },
  { title: "RAG Systems", desc: "Grounded retrieval with faithfulness checks — pushing past demo-grade chatbots." },
  { title: "Data Pipelines", desc: "Spark + Databricks ETL that stays clean, tested and analytics-ready." },
  { title: "Developer Tools", desc: "Automation and small tools that remove the boring parts of the workflow." },
];
