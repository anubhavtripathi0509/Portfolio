import {
  educationIcon,
  experianceIcon,
  AIMaths,
  awrimgym,
  chatscope,
  apnadukaan,
} from "../assets/images";

import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  tailwindcss,
  threejs,
  react,
  java,
  androidDev,
  webDev,
  crossDev,
  ml,
  serverless,
  desktopDev,
  android,
  cpp,
  dart,
  docker,
  electron,
  flutter,
  firebase,
  flask,
  gcp,
  jetpack,
  kotlin,
  linux,
  mysql,
  nginx,
  postgresql,
  python,
  redis,
  sql,
  ts,
  sqlite,
  xml,
  nextjs,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
  },
  {
    imageUrl: ml,
    name: "Machine Learning",
  },
  {
    imageUrl: html,
    name: "HTML",
  },
  {
    imageUrl: css,
    name: "CSS",
  },
  {
    imageUrl: javascript,
    name: "JS",
  },
  {
    imageUrl: sql,
    name: "SQL",
  },
  {
    imageUrl: java,
    name: "Java",
  },
  {
    imageUrl: git,
    name: "Git",
  },
  {
    imageUrl: github,
    name: "GitHub",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
  },
  {
    imageUrl: sqlite,
    name: "SQLite",
  },
  {
    imageUrl: postgresql,
    name: "Postgres",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
  },
  {
    imageUrl: react,
    name: "ReactJS",
  },
  {
    imageUrl: electron,
    name: "Electron",
  },
  {
    imageUrl: threejs,
    name: "ThreeJS",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind",
  },
  {
    imageUrl: express,
    name: "Express",
  },
  {
    imageUrl: flask,
    name: "Flask",
  },
];

export const education = [
  {
    title: "Anjuman-I-Islam's Kalsekar Technical Campus",
    date: "Dec 2022 - Aug 2025   |   CGPA: 7.33",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I am currently pursuing my undergraduate degree with a focus on B.E. in Computer Engineering at Mumbai University.",
      "Through rigorous coursework and hands-on projects, I am developing a strong foundation in various domians of Computer Science, preparing myself for a successful career in Software Development.",
    ],
  },
  {
    title: "Elphinstone College",
    date: "Aug 2018 - July 2020   |   Grade: 67.38%",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I successfully completed the Maharashtra State Board of Higher Secondary Education (HSC), acquiring comprehensive knowledge and practical skills in Science.",
      "This educational foundation equips me to excel in my professional endeavors and contribute effectively to the field.",
    ],
  },
  {
    title: "Purushottam High School",
    date: "June 2008 - Mar 2018   |   Percentage: 80.80 %",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I successfully navigated a rigorous high school curriculum, demonstrating exceptional academic aptitude and a commitment to excellence.",
      "Engaging in diverse extracurricular activities, I honed leadership and interpersonal skills, fostering a well-rounded educational experience.",
    ],
  },
];

export const experiance = [
  {
    title: "AI Engineer",
    date: "Feb 2025 – Present",
    empolyer: "Nimap Infotech (Client Deployment – UAE)",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Worked as a client-facing AI Engineer delivering LLM-powered systems for UAE government, US healthcare, and enterprise clients.",
      "Built domain-specific expert LLMs using Supervised Fine-Tuning (SFT) with PEFT (LoRA) for high-precision task execution.",
      "Designed and implemented RAG-based information retrieval systems using embeddings and vector databases.",
      "Developed tool-augmented and agentic LLM workflows with controlled outputs and production reliability.",
      "Integrated and deployed LLM inference APIs with a focus on real-world constraints and scalability.",
    ],
  },
  {
    title: "Software Engineer (Contract)",
    date: "Sep 2024 – Jan 2025",
    empolyer: "SoftDigits",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Developed and trained a GAN-based image authentication model using PyTorch for AI-driven security verification.",
      "Optimized model performance to improve authentication accuracy and robustness against spoofing attempts.",
      "Deployed the trained model as a REST API, enabling seamless integration with external client applications.",
      "Collaborated with cross-functional teams to align model outputs with production requirements.",
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/anubhav-tripathi-bb8781246/",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/anubhavtripathi0509",
  },
];

export const projects = [
  {
    iconUrl: AIMaths,
    theme: "btn-back-blue",
    name: "AIMaths",
    description:
      "Maths AI Tutor is an interactive platform built with React.js and FastAPI that allows users to draw mathematical problems, receiving real-time, step-by-step solutions from an AI backend to enhance learning and accessibility.",
    link: "https://github.com/anubhavtripathi0509/AIMathsTutor",
  },
  {
    iconUrl: awrimgym,
    theme: "btn-back-blue",
    name: "AwrimGym",
    description:
      "The Awrim Gym Management System is a desktop app that enhances gym operations with SMS support, featuring QR code attendance tracking, membership management, and automated notifications for improved member satisfaction.",
    link: "https://github.com/anubhavtripathi0509/Awrim_GMS",
  },
  {
    iconUrl: chatscope,
    theme: "btn-back-blue",
    name: "ChatScope",
    description:
      "ChatScope is an insightful WhatsApp chat analysis tool that helps users visualize and understand their messaging patterns and trends for improved communication efficiency.",
    link: "https://github.com/anubhavtripathi0509/ChatScope",
  },
  {
    iconUrl: apnadukaan,
    theme: "btn-back-blue",
    name: "ApnaDukaan",
    description:
      "ApnaDukaan is an innovative ERP platform designed to empower retail shop owners with seamless inventory management, sales tracking, and business insights for enhanced operational efficiency.",
    link: "https://github.com/anubhavtripathi0509/ApnaDukaan-frontend",
  },
];

export const services = [
  {
    iconUrl: webDev,
    theme: "btn-back-blue",
    name: "Full-Stack Web Development",
    description:
      "I develop static and dynamic websites and web applications using the latest technologies available in the market along with responsive design.",
    link: "https://www.mongodb.com/mern-stack",
  },
  {
    iconUrl: desktopDev,
    theme: "btn-back-blue",
    name: "Desktop Development",
    description:
      "I build desktop applications using Electron.js. I use Electron.js to build desktop applications compatible with Windows, macOS, and Linux.",
    link: "https://en.wikipedia.org/wiki/Electron_(software_framework)",
  },
  {
    iconUrl: ml,
    theme: "btn-back-blue",
    name: "Machine Learning",
    description:
      "I train & fine-tune machine learning models using Python and TensorFlow & also have the ability to integrate existing ML solutions into our products.",
    link: "https://www.tensorflow.org/",
  },
  {
    iconUrl: serverless,
    theme: "btn-back-blue",
    name: "Serverless Computing",
    description:
      "I build serverless applications using Serverless Computing. I use Firebase to build serverless applications that scale automatically.",
    link: "https://firebase.google.com/",
  },
];
