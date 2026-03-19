import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend & APIs",
    icon: "Server",
    skills: ["C#", ".NET Core / .NET 8", "Python", "FastAPI", "gRPC", "REST APIs", "GraphQL"],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: ["Azure Functions", "Azure Service Bus", "CosmosDB", "Azure AD", "AWS", "Docker", "Kubernetes"],
  },
  {
    name: "Architecture",
    icon: "Blocks",
    skills: ["Microservices", "Distributed Systems", "Event-Driven", "CQRS", "Domain-Driven Design", "Clean Architecture"],
  },
  {
    name: "Frontend",
    icon: "Monitor",
    skills: ["React", "Angular", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Data & Messaging",
    icon: "Database",
    skills: ["SQL Server", "PostgreSQL", "Kafka", "CosmosDB", "Redis", "RabbitMQ"],
  },
  {
    name: "AI & Tooling",
    icon: "Brain",
    skills: ["AI Integration", "Claude Code", "Cursor AI", "LangChain", "Prompt Engineering", "GitHub Copilot"],
  },
];
