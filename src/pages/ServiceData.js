import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandFirebase,
} from "react-icons/tb";
import {
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiFlutter,
} from "react-icons/si";
import mobImg from "../assets/mobileService.webp";
import webImg from "../assets/webService.jpg";
import cyberImg from "../assets/cyberService.jpg";
import aiImg from "../assets/aiService.jpg";
import uiImg from "../assets/uiuxService.jpg";
import iotImg from "../assets/iotService.jpg";

export const serviceMap = {
  "mobile-apps": {
    title: "Mobile Apps Development",
    description:
      "Transform your vision into high-performance mobile applications that are intuitive, scalable, and built for both iOS and Android platforms.",
    bgImage: mobImg,
    features: [
      {
        title: "Cross-Platform Expertise",
        items: [
          "React Native & Flutter-based development",
          "Seamless performance across devices",
          "Unified codebase with native feel",
        ],
      },
    ],
    techStack: {
      frameworks: [TbBrandReactNative, TbBrandNextjs],
      langs: [SiJavascript],
      mobDev: [SiFlutter, TbBrandReactNative],
      database: [SiPostgresql],
      devops: [TbBrandFirebase, SiDocker],
    },
    industries: [
      {
        title: "FinTech",
        items: [
          "Secure mobile banking",
          "Instant payments & wallets",
          "Multi-factor authentication",
        ],
      },
      {
        title: "Healthcare",
        items: [
          "Appointment booking apps",
          "Remote patient monitoring",
          "HIPAA-compliant data handling",
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
        title: "Full-Stack Excellence",
        items: [
          "Scalable architecture design",
          "Responsive design implementation",
          "Progressive Web Apps (PWA)",
        ],
      },
    ],
    techStack: {
      frameworks: [TbBrandNextjs],
      langs: [SiJavascript],
      mobDev: [],
      database: [SiPostgresql],
      devops: [SiDocker],
    },
    industries: [
      {
        title: "Retail & E-Commerce",
        items: [
          "Custom storefronts",
          "Inventory & logistics dashboards",
          "Payment gateway integrations",
        ],
      },
      {
        title: "EdTech",
        items: [
          "Course platforms",
          "Real-time quiz systems",
          "Student progress tracking",
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
    ],
    techStack: {
      frameworks: [TbBrandNextjs],
      langs: [SiJavascript],
      mobDev: [],
      database: [SiPostgresql],
      devops: [SiDocker],
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
    ],
    techStack: {
      frameworks: [TbBrandNextjs],
      langs: [SiJavascript],
      mobDev: [],
      database: [SiPostgresql],
      devops: [SiDocker],
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
    ],
    techStack: {
      frameworks: [TbBrandNextjs],
      langs: [SiJavascript],
      mobDev: [],
      database: [SiPostgresql],
      devops: [SiDocker],
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
    ],
    techStack: {
      frameworks: [TbBrandNextjs],
      langs: [SiJavascript],
      mobDev: [],
      database: [SiPostgresql],
      devops: [SiDocker],
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
    ],
  },
};
