import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Settlement Platform",
    company: "Hydrogen",
    problem: "Hydrogen needed a high-performance settlement system capable of processing massive transaction volumes for their $30.6B+ fintech platform.",
    approach: "Designed an event-driven settlement architecture using Kafka for real-time message streaming, Azure cloud services for scalability, and SQL-based systems for transactional integrity. Implemented idempotency patterns and retry mechanisms for financial accuracy.",
    impact: "Platform processes over $1 billion in transactions with high availability and zero data loss.",
    metrics: [
      { label: "Transaction Volume", value: "$1B+" },
      { label: "Platform Scale", value: "$30.6B+" },
      { label: "Availability", value: "99.99%" },
    ],
    technologies: ["C#", ".NET Core", "Kafka", "Azure", "SQL Server", "Microservices"],
  },
  {
    title: "Affiliate Partner Network",
    company: "Kindred",
    problem: "Kindred required a scalable system to ingest and reconcile affiliate transactions from a growing network of global partners in the gaming industry.",
    approach: "Built Azure Functions for serverless, event-driven transaction ingestion. Designed integrations for 20+ partner APIs with standardized data transformation and real-time reconciliation using Azure Service Bus.",
    impact: "System generates over £2 million in affiliate revenue with 20+ partner integrations operating reliably.",
    metrics: [
      { label: "Revenue Generated", value: "£2M+" },
      { label: "Partner Integrations", value: "20+" },
      { label: "Processing", value: "Real-time" },
    ],
    technologies: ["C#", ".NET Core", "Azure Functions", "Azure Service Bus", "SQL Server", "REST APIs"],
  },
  {
    title: "AML Compliance Engine",
    company: "Heirs Technologies / UBA",
    problem: "United Bank for Africa needed a robust Anti-Money Laundering screening system that could operate across their pan-African banking network spanning 28 countries.",
    approach: "Developed message screening integration with Actimize AML platform. Built scalable rule engines and real-time transaction monitoring with configurable compliance policies per jurisdiction.",
    impact: "AML system now actively screens transactions across 28 African countries, ensuring regulatory compliance.",
    metrics: [
      { label: "Countries Active", value: "28" },
      { label: "Compliance", value: "100%" },
      { label: "Monitoring", value: "Real-time" },
    ],
    technologies: ["C#", ".NET", "Actimize", "SQL Server", "Azure", "Microservices"],
  },
  {
    title: "Cross-Border Payment Integration",
    company: "Union Bank of Nigeria",
    problem: "Union Bank needed to integrate with PAPSS (Pan-African Payment and Settlement System) to enable seamless cross-border transactions across Africa.",
    approach: "Led the PAPSS integration project, connecting Union Bank's core banking system with the pan-African payment infrastructure. Enhanced NIBSS NIP and NAPS gateways for improved domestic and international payment routing.",
    impact: "Enabled seamless cross-border payments for Union Bank customers, expanding transaction capabilities across Africa.",
    metrics: [
      { label: "System", value: "PAPSS" },
      { label: "Scope", value: "Pan-African" },
      { label: "Channels", value: "NIP + NAPS" },
    ],
    technologies: ["C#", ".NET", "PAPSS", "NIBSS", "SQL Server", "REST APIs"],
  },
  {
    title: "Enterprise Platform Redesign",
    company: "Africa Prudential (Heirs Technologies)",
    problem: "Africa Prudential's Grinpole and Invearn platforms needed modernization to handle growing user demand and deliver better performance.",
    approach: "Redesigned both platforms with modern .NET architecture, implementing improved data access patterns, caching strategies, and responsive frontend interfaces for enhanced user experience.",
    impact: "Modernized platforms serving millions of users with improved performance and reliability.",
    metrics: [
      { label: "Users", value: "Millions" },
      { label: "Platforms", value: "2" },
      { label: "Performance", value: "3x faster" },
    ],
    technologies: ["C#", ".NET Core", "Angular", "SQL Server", "Azure", "Redis"],
  },
];
