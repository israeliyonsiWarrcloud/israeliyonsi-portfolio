import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "AltexSoft",
    role: "Senior Software Engineer",
    period: "2024 – 2026",
    location: "United States (Remote)",
    description: "Designed AI-integrated enterprise systems for a global technology consulting company.",
    achievements: [
      "Architected AI-integrated enterprise solutions for global clients",
      "Led development of scalable distributed systems using .NET and Azure",
      "Implemented microservices architecture patterns for mission-critical applications",
    ],
    technologies: ["C#", ".NET 8", "Azure", "AI Integration", "Microservices", "Docker"],
  },
  {
    company: "Kindred",
    role: "Software Engineering Consultant",
    period: "2023 – 2024",
    location: "United Kingdom (Remote)",
    description: "Developed Azure-based functions for affiliate transaction ingestion across twenty global partner networks.",
    achievements: [
      "Built affiliate integrations generating more than £2 million in revenue",
      "Architected Azure Functions for real-time transaction ingestion across 20+ partner networks",
      "Designed event-driven systems handling high-throughput financial data",
    ],
    technologies: ["C#", ".NET Core", "Azure Functions", "Azure Service Bus", "SQL Server", "REST APIs"],
  },
  {
    company: "Hydrogen",
    role: "Software Engineer",
    period: "2022 – 2023",
    location: "Lagos, Nigeria",
    description: "Designed settlement platform using Kafka, Azure, and SQL-based systems for a $30.6B+ fintech platform.",
    achievements: [
      "Designed settlement platform processing over $1 billion in transactions",
      "Built event-driven architecture using Kafka for real-time financial processing",
      "Implemented high-availability systems for mission-critical payment infrastructure",
    ],
    technologies: ["C#", ".NET Core", "Kafka", "Azure", "SQL Server", "Microservices"],
  },
  {
    company: "Heirs Technologies",
    role: "Software Engineer",
    period: "2021 – 2022",
    location: "Lagos, Nigeria",
    description: "Built scalable enterprise applications and redesigned platforms for Africa Prudential Plc.",
    achievements: [
      "Developed message screening for Actimize AML system active across 28 African countries",
      "Redesigned Grinpole and Invearn platforms for Africa Prudential Plc",
      "Built scalable enterprise applications serving millions of users",
    ],
    technologies: ["C#", ".NET Core", "Azure", "SQL Server", "Angular", "Microservices"],
  },
  {
    company: "Union Bank of Nigeria",
    role: "Software Engineer",
    period: "2019 – 2021",
    location: "Lagos, Nigeria",
    description: "Led PAPSS integration and NIBSS payment system enhancements for cross-border payments.",
    achievements: [
      "Led PAPSS integration enabling seamless cross-border payments",
      "Enhanced NIBSS NIP and NAPS payment gateway systems",
      "Improved transaction reliability and processing speed across banking channels",
    ],
    technologies: ["C#", ".NET", "SQL Server", "PAPSS", "NIBSS", "REST APIs"],
  },
  {
    company: "Zenith Bank",
    role: "Software Developer",
    period: "2017 – 2019",
    location: "Lagos, Nigeria",
    description: "Developed domestic transfer application integrating NIBSS NIP, NAPS, and NEFT systems.",
    achievements: [
      "Developed domestic transfer application processing billions of naira in transactions",
      "Integrated NIBSS NIP, NAPS, and NEFT payment systems",
      "Built reliable financial transaction processing infrastructure",
    ],
    technologies: ["C#", ".NET", "SQL Server", "NIBSS", "Web APIs"],
  },
];
