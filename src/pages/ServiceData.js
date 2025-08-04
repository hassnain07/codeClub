import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandFirebase,
  TbBrandKotlin,
  TbBrandCss3,
  TbBrandHtml5,
} from "react-icons/tb";
import {
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiFlutter,
  SiTypescript,
  SiSwift,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiR,
  SiFastapi,
  SiFlask,
  SiApachecassandra,
  SiApache,
  SiNginx,
  SiPython,
  SiCplusplus,
  SiRust,
  SiElastic,
  SiFigma,
  SiSketch,
  SiAdobe,
  SiInvision,
  SiJira,
  SiMiro,
  SiArduino,
  SiRaspberrypi,
  SiGooglecloud,
  SiInfluxdb,
} from "react-icons/si";

import { SiDotnet, SiElixir, SiNestjs } from "react-icons/si";
import { FaNodeJs, FaAngular, FaPython, FaJava, FaLinux } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import mobImg from "../assets/mobileService.webp";
import webImg from "../assets/webService.jpg";
import cyberImg from "../assets/cyberService.jpg";
import aiImg from "../assets/aiService.jpg";
import uiImg from "../assets/uiuxService.jpg";
import iotImg from "../assets/iotService.jpg";
import { RiFirebaseFill } from "react-icons/ri";

export const serviceMap = {
  "mobile-apps": {
    title: "Mobile Apps Development",
    description:
      "Transform your vision into high-performance mobile applications that are intuitive, scalable, and built for both iOS and Android platforms.",
    bgImage: mobImg,
    features: [
      {
        title: "Cross-Platform App Development",
        items: ["Messaging apps", "Social media apps", "Productivity tools"],
      },
      {
        title: "Native App Development",
        items: ["Mobile banking apps", "Fitness tracking apps", "Gaming apps"],
      },
      {
        title: "Hybrid App Development",
        items: ["E-commerce apps", "Educational apps", "Event management apps"],
      },
    ],
    techStack: {
      frameworks: [
        SiDotnet, // .NET
        FaNodeJs, // Node.js
        FaAngular, // Angular
        TbBrandReact, // React
        SiElixir, // Elixir
        SiNestjs, // NestJS
      ],
      langs: [SiJavascript, SiTypescript, FaPython],
      mobDev: [TbBrandReactNative, SiSwift, TbBrandKotlin],
      database: [SiPostgresql, SiMysql, SiMongodb, RiFirebaseFill],
      devops: [TbBrandFirebase, SiDocker, SiKubernetes],
    },
    industries: [
      {
        title: "FinTech",
        items: [
          "Billing & Payment Solutions",
          "Financial Analytics",
          "Personal Finance Management Apps",
        ],
      },
      {
        title: "HealthTech",
        items: [
          "EHR, EMR, Patient Portal",
          "Telemedicine Platforms",
          "Patient Monitoring",
        ],
      },
      {
        title: "  E-commerce",
        items: [
          "B2B, B2C, C2C Platforms",
          "Shopping Cart Solutions",
          "Customer Relationship Management",
        ],
      },
    ],
  },

  "web-development": {
    title: "Web Development",
    description:
      "Craft performant, user-focused web applications with robust backends and pixel-perfect frontends that elevate your brand’s digital presence.",
    bgImage: webImg,
    features: [
      {
        title: "E-commerce Development",
        items: [
          "Online retail stores",
          "Subscription services",
          "Multi-vendor marketplaces",
        ],
      },
      {
        title: "Content Management Systems (CMS)",
        items: [
          "Blogging platforms",
          "Corporate websites",
          "Online publications",
        ],
      },
      {
        title: "Customer Portals",
        items: [
          "Customer service portals",
          "Account management systems",
          "Self-service dashboards",
        ],
      },
    ],
    techStack: {
      frameworks: [
        SiDotnet, // .NET
        FaNodeJs, // Node.js
        FaAngular, // Angular
        TbBrandReact, // React
        SiElixir, // Elixir
        SiNestjs, // NestJS
      ],
      langs: [SiJavascript, SiTypescript, FaPython],
      webDev: [TbBrandNextjs, TbBrandHtml5, TbBrandCss3],
      database: [SiPostgresql, SiMysql, SiMongodb, RiFirebaseFill],
      devops: [TbBrandFirebase, SiDocker, SiKubernetes],
    },
    industries: [
      {
        title: "FinTech",
        items: [
          "Billing & Payment Solutions",
          "Financial Analytics",
          "Personal Finance Management",
        ],
      },
      {
        title: "HealthTech",
        items: [
          "EHR, EMR, Patient Portal",
          "Telemedicine Platforms",
          "Patient Monitoring",
        ],
      },
      {
        title: "  E-commerce",
        items: [
          "B2B, B2C, C2C Platforms",
          "Shopping Cart Solutions",
          "Customer Relationship Management",
        ],
      },
    ],
  },

  "ai-ml": {
    title: "AI & ML Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to build predictive, intelligent, and adaptive software systems that evolve with your data.",
    bgImage: aiImg,
    features: [
      {
        title: "Intelligent Automation",
        items: [
          "AI chatbots & assistants",
          "Image & speech recognition",
          "Predictive analytics",
        ],
      },
      {
        title: "Data-Driven Insights",
        items: [
          "Natural Language Processing (NLP)",
          "Deep learning models",
          "Computer vision",
        ],
      },
      {
        title: "Scalable & Adaptive Systems",
        items: [
          "Machine learning pipelines",
          "Model deployment & management",
          "AI-powered recommendation engines",
        ],
      },
    ],
    techStack: {
      frameworks: [SiTensorflow, SiPytorch, SiScikitlearn],
      langs: [FaPython, SiR, SiJavascript],
      ai: [TbBrandNextjs, SiFastapi, SiFlask],
      database: [SiPostgresql, SiMongodb, SiApachecassandra],
      devops: [SiDocker, SiKubernetes],
    },
    industries: [
      {
        title: "Healthcare",
        items: [
          "Medical image diagnostics",
          "Patient data predictions",
          "Chatbot triage systems",
        ],
      },
      {
        title: "Finance",
        items: [
          "Risk assessment engines",
          "Smart fraud detection",
          "Automated credit scoring",
        ],
      },
      {
        title: "Retail",
        items: [
          "Personalized product recommendations",
          "Supply chain optimization",
          "Demand forecasting",
        ],
      },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with proactive security solutions, penetration testing, and 24/7 monitoring tailored to your risk profile.",
    bgImage: cyberImg,
    features: [
      {
        title: "Enterprise-Grade Security",
        items: [
          "Threat modeling & mitigation",
          "Zero-trust architecture",
          "Incident response & forensics",
        ],
      },
      {
        title: "Vulnerability Management",
        items: [
          "Penetration testing",
          "Security audits & assessments",
          "Compliance & governance",
        ],
      },
      {
        title: "24/7 Security Operations",
        items: [
          "Real-time threat monitoring",
          "Intrusion detection systems",
          "Security Information and Event Management (SIEM)",
        ],
      },
    ],
    techStack: {
      frameworks: [SiNginx, SiApache, TbBrandNextjs],
      langs: [SiPython, FaJava, SiCplusplus, SiRust],
      cybersecurity: [FaLinux],
      database: [SiElastic],
      devops: [SiDocker, SiKubernetes],
    },
    industries: [
      {
        title: "Banking & Finance",
        items: [
          "Transaction security layers",
          "Real-time anomaly detection",
          "Regulatory compliance enforcement",
        ],
      },
      {
        title: "Healthcare",
        items: [
          "Encrypted medical records",
          "Breach simulations",
          "HIPAA readiness assessments",
        ],
      },
      {
        title: "E-commerce",
        items: [
          "Payment gateway security",
          "DDoS protection",
          "Customer data protection",
        ],
      },
    ],
  },

  ui_ux: {
    title: "UI/UX Design",
    description:
      "Create human-centered, intuitive, and beautiful digital experiences that drive engagement and retention through strategic design.",
    bgImage: uiImg,
    features: [
      {
        title: "Design-Led Innovation",
        items: [
          "User journey mapping",
          "Design systems & components",
          "Interactive prototypes & testing",
        ],
      },
      {
        title: "User Research & Strategy",
        items: [
          "User persona creation",
          "Competitive analysis",
          "Usability testing & interviews",
        ],
      },
      {
        title: "Visual & Interaction Design",
        items: [
          "High-fidelity mockups",
          "Micro-interactions & animations",
          "Accessibility & inclusive design",
        ],
      },
    ],
    techStack: {
      frameworks: [SiFigma, SiSketch, SiAdobe, SiInvision],
      devops: [SiMiro, SiJira],
    },
    industries: [
      {
        title: "Startups",
        items: [
          "MVP design sprints",
          "Brand-first UI",
          "Fast iteration cycles",
        ],
      },
      {
        title: "Enterprise",
        items: [
          "Accessible UI at scale",
          "Multi-platform consistency",
          "Custom UI component libraries",
        ],
      },
      {
        title: "E-commerce & Retail",
        items: [
          "Optimized checkout flows",
          "Product catalog design",
          "Conversion rate optimization",
        ],
      },
    ],
  },
  iot: {
    title: "IoT Development",
    description:
      "Connect devices, data, and users through scalable IoT solutions — from smart homes to industrial automation and predictive maintenance.",
    bgImage: iotImg,
    features: [
      {
        title: "Connected Ecosystems",
        items: [
          "Sensor integration",
          "Real-time device dashboards",
          "Edge computing optimization",
        ],
      },
      {
        title: "Data Management & Analytics",
        items: [
          "Cloud integration & data lakes",
          "Real-time stream processing",
          "Machine learning for IoT data",
        ],
      },
      {
        title: "Security & Scalability",
        items: [
          "Device authentication & encryption",
          "Over-the-air (OTA) updates",
          "Scalable cloud infrastructure",
        ],
      },
    ],
    techStack: {
      frameworks: [SiArduino, SiRaspberrypi, SiGooglecloud],
      langs: [SiCplusplus, SiPython, FaJava],
      database: [SiInfluxdb, SiMongodb],
      devops: [SiDocker, SiKubernetes],
    },
    industries: [
      {
        title: "Smart Cities",
        items: [
          "Traffic & utility management",
          "Surveillance integrations",
          "Waste & water monitoring",
        ],
      },
      {
        title: "Manufacturing",
        items: [
          "Predictive maintenance",
          "Remote equipment control",
          "Production analytics",
        ],
      },
      {
        title: "Healthcare & Wellness",
        items: [
          "Remote patient monitoring",
          "Smart medical device management",
          "Personalized health tracking",
        ],
      },
    ],
  },
};
