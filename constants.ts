import { ExperienceItem, EducationItem, SkillCategory } from './types';
import { Brain, Server, Database, Code, Cpu, Layers } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Arman Hosseinmardi",
  title: "AI/ML Engineer | Software Engineer",
  email: "armanhosseinmardi@gmail.com",
  phone: "438-439-3515",
  linkedin: "https://www.linkedin.com/in/arman-hosseinmardi",
  location: "Montreal, Quebec, Canada",
  summary: "Results-driven AI/ML Engineer with hands-on experience architecting backend systems and integrating AI solutions. Adept at bridging academic research and production applications for large-scale, AI-powered platforms. Passionate about delivering robust, distributed software that advances document management and intelligent automation."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "creo",
    role: "AI Software Engineer Intern",
    company: "CREO Solutions",
    location: "Montreal, Quebec, Canada",
    period: "Aug 2024 – Present",
    description: [
      "Architected scalable backend modules for deploying LLM-based NLP solutions using LangChain and Retrieval Augmented Generation (RAG) architectures.",
      "Enhanced contextual document querying within enterprise platforms.",
      "Designed modular AI pipelines to support LLM fine-tuning workflows using private domain-specific corpora, integrated with internal evaluation suites.",
      "Enabled human-in-the-loop review by integrating semantic validation layers with retrievers, increasing model trustworthiness."
    ],
    tags: ["LangChain", "RAG", "LLM", "NLP", "Python"]
  },
  {
    id: "concordia",
    role: "AI Software Engineer & Research Assistant",
    company: "Concordia University Innovation Lab",
    location: "Montreal, Quebec, Canada",
    period: "Jan 2024 – Present",
    description: [
      "Engineered backend and API infrastructure supporting a large-scale cyberviolence detection system.",
      "Deployed LLMs and fine-tuned classifiers in cloud-native environments (Azure Functions, Container Apps).",
      "Conducted R&D of RAG pipelines combining vector search, LangChain toolchains, and domain-specific context assembly.",
      "Created multi-stage NLP workflows integrating model chaining, prompt engineering, and LLM prompt evaluation frameworks (LMSys).",
      "Automated experimentation with parameter-efficient fine-tuning (PEFT, LoRA) for large-scale language models on constrained GPUs.",
      "Built scalable pipelines for structured extraction from unstructured documents (Transformer-based OCR)."
    ],
    tags: ["Azure", "PEFT", "LoRA", "Vector Search", "OCR", "Transformers"]
  },
  {
    id: "sbu-research",
    role: "Data Science Researcher",
    company: "Data Science Laboratory, Shahid Beheshti University",
    location: "Tehran, Iran",
    period: "Jun 2021 – July 2023",
    description: [
      "Engineered backend infrastructure for large-scale detection systems.",
      "Conducted research on RAG pipelines and domain-specific context assembly.",
      "Optimized large-scale language models using parameter-efficient fine-tuning techniques.",
      "Developed scalable pipelines for structured extraction and embedding generation."
    ],
    tags: ["Research", "Backend", "Embeddings", "Optimization"]
  },
  {
    id: "ta-ci",
    role: "Teaching Assistant - Computational Intelligence",
    company: "Shahid Beheshti University",
    location: "Tehran, Iran",
    period: "Sep 2021 – Feb 2022",
    description: [
      "Supported delivery of ML concepts, from neural network design to optimization.",
      "Guided students through algorithmic bias, benchmarking, and Python coding.",
      "Organized workshops on NLP and data-driven feature engineering."
    ],
    tags: ["Teaching", "Neural Networks", "Python"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "masc",
    institution: "Concordia University",
    degree: "Master of Applied Science, Information and Quality System Engineering",
    period: "Sep 2023 – Aug 2025",
    location: "Montreal, Quebec, Canada",
    description: [
      "Conducted specialized research in Systems Engineering, focusing on the quality assurance of large-scale AI pipelines.",
      "Developed advanced methodologies for integrating Machine Learning components into traditional software architectures.",
      "Investigated reliability patterns in Retrieval Augmented Generation (RAG) systems for enterprise applications."
    ],
    tags: ["System Engineering", "AI Quality Assurance", "RAG Research", "MLOps", "Software Architecture"]
  },
  {
    id: "bsc",
    institution: "Shahid Beheshti University",
    degree: "Bachelor's degree, Computer Engineering",
    period: "Sep 2018 – Jan 2023",
    location: "Tehran, Iran",
    description: [
      "Acquired deep theoretical knowledge in Distributed Systems, Advanced Algorithms, and Data Structures.",
      "Completed intensive coursework in Neural Networks and Computational Intelligence, serving as a foundation for future AI research.",
      "Executed a capstone project focused on scalable backend architectures, achieving high-performance benchmarks."
    ],
    tags: ["Computer Engineering", "Distributed Systems", "Algorithms", "Backend Development", "Computational Intelligence"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: ["Large Language Models", "RAG", "LangChain", "PEFT/LoRA", "NLP", "Machine Learning Algorithms", "Transformers", "Computer Vision"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Python", "Backend Development", "Azure Cloud Services", "Azure Functions", "Container Apps", "Snowflake", "Databricks", "Airflow", "Spark"]
  },
  {
    category: "Data & Databases",
    skills: ["SQL", "NoSQL", "Elasticsearch", "MongoDB", "Data Visualization", "Document Processing Pipelines"]
  },
  {
    category: "Development",
    skills: ["Full Stack Development", "API Design", "Software Architecture", "Distributed Systems"]
  }
];

export const STATS = [
  { label: "Years Experience", value: "3+", icon: Code },
  { label: "AI Models Deployed", value: "10+", icon: Brain },
  { label: "Backend Systems", value: "Scalable", icon: Server },
];