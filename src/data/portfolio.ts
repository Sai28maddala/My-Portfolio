// Central content file — edit text, links and image paths here.

export const profile = {
  name: "Maddala Venkata Sailakshmi",
  nameLines: ["MADDALA", "VENKATA", "SAILAKSHMI"],
  location: "Hyderabad, Telangana, India",
  email: "maddalasailakshmi28@gmail.com",
  linkedin: "https://www.linkedin.com/in/mvsailakshmi/",
  github: "https://github.com/Sai28maddala",
  resume: "/resume/Maddala_Venkata_Sailakshmi_Resume.pdf",
  image: "/images/profile/profile.jpg",
  tagline:
    "Building intelligent systems across AI, Machine Learning, Generative AI and Full-Stack Development.",
  intro:
    "Computer Science undergraduate passionate about building practical AI-powered and scalable software solutions, from machine learning and NLP systems to full-stack applications.",
};

export const stats = [
  { value: 9.15, decimals: 2, suffix: " / 10", label: "CGPA" },
  { value: 10, decimals: 0, suffix: "+", label: "Projects" },
  { value: 150, decimals: 0, suffix: "+", label: "LeetCode Problems" },
  { value: 2027, decimals: 0, suffix: "", label: "Graduation" },
];

export type Experience = {
  role: string; company: string; period: string; points: string[]; tech: string[];
};
export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "SANSI RF and Communication Systems",
    period: "Mar 2026 – Jul 2026",
    points: [
      "Developed a full-stack web application using React.js and Node.js with REST API integration.",
      "Designed and implemented frontend components and backend services based on business requirements.",
      "Performed application testing and debugging.",
      "Deployed and hosted the application on a Raspberry Pi running Linux.",
    ],
    tech: ["React.js", "Node.js", "REST APIs", "Linux", "Raspberry Pi"],
  },
  {
    role: "Agentic AI Intern",
    company: "Woxsen University",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Developed a modular multi-agent AI system in Python for automated hypothesis generation from scientific literature, using LLaMA 3 and Ollama.",
      "Designed a sequential pipeline of five specialized agents for literature mining, data analysis, reasoning, hypothesis generation and evaluation.",
      "Built document-processing workflows using PyMuPDF and Pandas, and a NetworkX-based knowledge graph.",
      "Built an interactive Streamlit interface for document upload, literature analysis, knowledge graph visualization, hypothesis generation and evaluation.",
    ],
    tech: ["Python", "LLaMA 3", "Ollama", "Multi-Agent AI", "PyMuPDF", "Pandas", "NetworkX", "Streamlit"],
  },
];

export const education = [
  { school: "Woxsen University, Hyderabad", degree: "B.Tech in Computer Science", period: "2023 – 2027", score: "CGPA 9.15/10" },
  { school: "VKDVS Raju Junior College", degree: "Intermediate", period: "2023", score: "98.7%" },
  { school: "Surya Public School", degree: "SSC", period: "2021", score: "95%" },
];

export type Project = {
  title: string; subtitle?: string; description: string; tech: string[];
  github: string; demo?: string; image: string; badge?: string;
};
export const projects: Project[] = [
  { title: "FloodGuard AI", subtitle: "Real-Time Flood Monitoring Platform", description: "AI-powered early warning platform that analyzes traffic-camera feeds to detect potential flooding, classify risk levels and deliver multilingual alerts through an interactive dashboard.", tech: ["React", "TypeScript", "Express.js", "Computer Vision", "REST APIs", "WebSockets", "Multilingual Alerts"], github: "https://github.com/Sai28maddala/FloodGuardAI", image: "/images/projects/floodguard.png" },
  { title: "AgentMatch AI", subtitle: "AI Agent Matching Platform", badge: "MVP / Demo", description: "Agentic AI MVP for profile analysis, simulated agent interactions, compatibility scoring and ranking. Uses demo/synthetic profiles.", tech: ["Agentic AI", "Node.js", "Express.js", "AI", "Profile Analysis", "Compatibility Scoring"], github: "https://github.com/MADDALAGAYATHRI/AgentMatch-AI-MVP", demo: "https://agentmatch-ai-mvp.onrender.com/", image: "/images/projects/agentmatch.png" },
  { title: "Sentiment-Aware Multilingual Translator", description: "Neural machine translation application combining multilingual translation with emotion analysis, abbreviation expansion, voice input and BLEU-score evaluation.", tech: ["Python", "Streamlit", "NLLB-200", "Hugging Face Transformers", "PyTorch", "OpenAI Whisper", "SacreBLEU", "NLP"], github: "https://github.com/Sai28maddala/sentiment-aware-multilingual-translator", image: "/images/projects/translator.png" },
  { title: "DocParseWeb", description: "End-to-end document parsing and extraction system that processes PDFs, extracts structured content and metadata, and stores parsed results for downstream workflows.", tech: ["Python", "FastAPI", "PyMuPDF", "MongoDB", "REST APIs", "JSON"], github: "https://github.com/Sai28maddala/DocParseWeb", image: "/images/projects/docparse.png" },
  { title: "SmartHire", subtitle: "AI Recruitment Platform", description: "MERN-stack recruitment platform designed to streamline candidate screening and recruiter workflows through resume processing, authentication and recruiter management features.", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack", "JWT"], github: "https://github.com/Suvan-2005/Smarthire", image: "/images/projects/smarthire.png" },
  { title: "Multimodal Fake News Detection", subtitle: "GNN & Fuzzy BERT", description: "Fake-news detection system combining graph-based learning (GNN) and Fuzzy BERT to analyze news content and associated social-media relationships.", tech: ["GNN", "Fuzzy BERT", "PyTorch", "NLP", "Deep Learning"], github: "https://github.com/Sai28maddala/Multimodal-Fake-news-Detection", image: "/images/projects/fake-news.png" },
  { title: "NEU Surface Defect Analyzer", description: "Computer vision system for classifying six types of steel surface defects using a fine-tuned EfficientNet-B0 model.", tech: ["Python", "PyTorch", "EfficientNet-B0", "Computer Vision", "FastAPI"], github: "https://github.com/Sai28maddala/NEU-Surface-Defect-Classification", image: "/images/projects/neu-defect.png" },
  { title: "Healthcare-Based Recommendation System", badge: "Concept", description: "Machine-learning based healthcare services recommendation concept focused on personalized and context-aware recommendations.", tech: ["Python", "Machine Learning", "Recommendation Systems"], github: "https://github.com/Sai28maddala/Healthcare-Based-Recommendation-System", image: "/images/projects/healthcare.png" },
  { title: "E-Commerce Platform", description: "Full-stack e-commerce platform developed using an Agile SDLC approach, featuring product management, shopping cart, authentication, order tracking and administration workflows.", tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redis", "AWS"], github: "https://github.com/Bhavya-64/E-Commerce-using-Agile-SDLC-Model-Project-", image: "/images/projects/ecommerce.png" },
  { title: "Road Safety & E-Speed Breakers", badge: "Concept", description: "Technology-driven road safety concept using speed detection, RFID and sensor-based mechanisms to encourage safer driving and improve traffic flow.", tech: ["Radar", "RFID", "Sensors", "Microcontroller", "Embedded Systems"], github: "https://github.com/Sai28maddala/Road_Safety", image: "/images/projects/road-safety.png" },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"] },
  { category: "AI & Machine Learning", items: ["Scikit-learn", "TensorFlow", "NLP", "LLaMA 3", "Ollama", "Generative AI", "Machine Learning", "Deep Learning"] },
  { category: "Web Development", items: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "REST APIs"] },
  { category: "Core Computer Science", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Computer Networks", "Operating Systems"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "Cloud", items: ["AWS", "Microsoft Azure"] },
  { category: "Tools", items: ["Git", "GitHub", "Linux", "VS Code"] },
];

export type Certification = { name: string; issuer: string; year?: string; url?: string };
export const certifications: Certification[] = [
  { name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning", issuer: "DeepLearning.AI" },
  { name: "Introduction to Java", issuer: "LearnQuest" },
  { name: "Database Management Essentials", issuer: "University of Colorado System" },
  { name: "Introduction to NoSQL Databases", issuer: "IBM" },
  { name: "Crash Course on Python", issuer: "Google" },
  { name: "Generative AI", issuer: "IBM" },
  { name: "Agile Software Development", issuer: "University of Minnesota" },
  { name: "Machine Learning Operations (MLOps) for Generative AI", issuer: "Google Cloud Security" },
];

export type Achievement = {
  title: string;
  category: string;
  type: "Achievement" | "Leadership" | "Participation";
  org: string;
  description: string;
  highlight?: string;
};
export const achievements: Achievement[] = [
  {
    title: "LeetCode Problems",
    highlight: "150+",
    category: "LEETCODE",
    type: "Achievement",
    org: "LeetCode",
    description: "Strengthened problem-solving and algorithmic thinking through consistent coding practice.",
  },
  {
    title: "Volunteer Mentor — Elevate 4.0",
    category: "WOXSEN UNIVERSITY",
    type: "Leadership",
    org: "Woxsen University",
    description: "Supported and guided fellow students through the Elevate 4.0 initiative.",
  },
  {
    title: "HackSavvy-24 Hackathon",
    category: "MGIT",
    type: "Participation",
    org: "MGIT",
    description: "Participated in HackSavvy-24, a national-level hackathon focused on technology and innovation.",
  },
  {
    title: "Flipkart GRiD",
    category: "FLIPKART",
    type: "Participation",
    org: "Flipkart",
    description: "Participated in Flipkart GRiD, a student engineering and problem-solving challenge.",
  },
];
