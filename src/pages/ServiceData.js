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
  SiDiagramsdotnet,
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
import { FaNode } from "react-icons/fa6";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.webp";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.webp";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";
import icon11 from "../assets/icon11.png";
import icon12 from "../assets/icon12.png";
import icon13 from "../assets/icon13.webp";
import icon14 from "../assets/icon14.png";
import icon15 from "../assets/icon15.png";

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
        { name: "Angular", icon: icon7 },
        { name: "React", icon: icon10 },
        { name: "NestJS", icon: icon11 },
      ],
      languages: [
        { name: "JavaScript", icon: icon5 },
        { name: "PHP", icon: icon2 },
        { name: "Python", icon: icon3 },
      ],
      mobDev: [
        { name: "React Native", icon: icon10 },
        { name: "Swift", icon: icon4 },
        { name: "Kotlin", icon: icon1 },
      ],
      database: [
        { icon: icon15, name: "PostgreSQL" },
        { icon: icon14, name: "MySQL" },
        { icon: icon13, name: "MongoDB" },
        { icon: icon12, name: "Firebase" },
      ],
      devops: [
        { icon: icon12, name: "Firebase" },
        { icon: icon9, name: "Docker" },
      ],
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

    team: [
      { name: "Amad ur Rehman", role: "Team Lead" },
      { name: "Abdullah", role: "Senior App Developer" },
      { name: "Affan", role: "Junior App Developer" },
      // { name: "Zubair", role: "Intern" },
      { name: "Salam", role: "Trainee" },
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
        { name: "Angular", icon: icon7 },
        { name: "React", icon: icon10 },
        { name: "NestJS", icon: icon11 },
      ],
      languages: [
        { name: "JavaScript", icon: icon5 },
        { name: "PHP", icon: icon2 },
        { name: "Python", icon: icon3 },
      ],
      webDev: [
        { name: "JavaScript", icon: icon5 },
        { name: "PHP", icon: icon2 },
        { name: "Python", icon: icon3 },
      ],
      database: [
        { icon: icon15, name: "PostgreSQL" },
        { icon: icon14, name: "MySQL" },
        { icon: icon13, name: "MongoDB" },
        { icon: icon12, name: "Firebase" },
      ],
      devops: [
        { icon: icon12, name: "Firebase" },
        { icon: icon9, name: "Docker" },
      ],
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

    team: [
      {
        name: "Hasnain Hafeez",
        role: "Team Lead",
        LinkedIn: "https://www.linkedin.com/in/hasnain-hafeez/",
      },
      {
        name: "Mazhar Ahmad",
        role: "Senior Web Developer",
        LinkedIn: "https://www.linkedin.com/in/mazhar-ahmad/",
      },
      {
        name: "Zaigham",
        role: "Junior Web Developer",
        LinkedIn: "https://www.linkedin.com/in/zaigham/",
      },
      {
        name: "Musa Bukhari",
        role: "Junior Web Developer",
        LinkedIn: "https://www.linkedin.com/in/amin/",
      },
      {
        name: "Amin",
        role: "Intern",
        LinkedIn: "https://www.linkedin.com/in/amin/",
      },
    ],
  },

  ai: {
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
      frameworks: [
        { name: "Angular", icon: icon7 },
        { name: "React", icon: icon10 },
        { name: "NestJS", icon: icon11 },
      ],
      languages: [
        { name: "JavaScript", icon: icon5 },
        { name: "PHP", icon: icon2 },
        { name: "Python", icon: icon3 },
      ],
      ai: [
        { name: "JavaScript", icon: icon5 },
        { name: "PHP", icon: icon2 },
        { name: "Python", icon: icon3 },
      ],
      database: [
        { icon: icon15, name: "PostgreSQL" },
        { icon: icon14, name: "MySQL" },
        { icon: icon13, name: "MongoDB" },
        { icon: icon12, name: "Firebase" },
      ],
      devops: [
        { icon: icon12, name: "Firebase" },
        { icon: icon9, name: "Docker" },
      ],
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

    team: [
      { name: "Ihtisham Ul Haq", role: "Team Lead" },
      { name: "Hashir Ali Shah", role: "Senior AI Engineer" },
      { name: "Umer", role: "Senior AI Engineer" },
      // { name: "Ahmad", role: "Junior AI Engineer" },
      { name: "Hasnain Aziz", role: "Trainee" },
      { name: "Riyan", role: "Trainee" },
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
      frameworks: [
        { name: "Angular", icon: icon7 },
        { name: "React", icon: icon10 },
        { name: "NestJS", icon: icon11 },
      ],
      languages: [
        { name: "JavaScript", icon: icon5 },
        { name: "PHP", icon: icon2 },
        { name: "Python", icon: icon3 },
      ],
      cybersecurity: [{ name: "Python", icon: icon3 }],
      database: [
        { icon: icon15, name: "PostgreSQL" },
        { icon: icon14, name: "MySQL" },
        { icon: icon13, name: "MongoDB" },
        { icon: icon12, name: "Firebase" },
      ],
      devops: [
        { icon: icon12, name: "Firebase" },
        { icon: icon9, name: "Docker" },
      ],
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
    team: [
      { name: "Shaheer", role: "Team Lead" },
      { name: "Haziq", role: "Intern" },
    ],
  },

  "ui-ux": {
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
      frameworks: [
        { name: "Angular", icon: icon7 },
        { name: "React", icon: icon10 },
        { name: "NestJS", icon: icon11 },
      ],
      devops: [
        { icon: icon12, name: "Firebase" },
        { icon: icon9, name: "Docker" },
      ],
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
    team: [],
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
      frameworks: [
        { name: "Angular", icon: icon7 },
        { name: "React", icon: icon10 },
        { name: "NestJS", icon: icon11 },
      ],
      languages: [
        { icon: icon2, name: "Python" },
        { icon: icon3, name: "Java" },
      ],
      database: [
        { icon: icon15, name: "PostgreSQL" },
        { icon: icon14, name: "MySQL" },
        { icon: icon13, name: "MongoDB" },
        { icon: icon12, name: "Firebase" },
      ],
      devops: [
        { icon: icon12, name: "Firebase" },
        { icon: icon9, name: "Docker" },
      ],
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
    team: [],
  },
};
   