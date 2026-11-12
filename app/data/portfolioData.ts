import maxxhero from "../assets/Images/maxxHero.png";
import maxxpro from "../assets/Images/MaxxPro.png";
import oses from "../assets/Images/Oses.jpeg";
import puttyhero from "../assets/Images/puttyhero.png";
import puttyfloor from "../assets/Images/puttyfloor.png";

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  url: string;
  displayUrl: string;
  description: string;
  tags: string[];
  metrics?: string;
  images?: string[];
  category: "backend" | "frontend" | "apps";
}

export interface PortfolioData {
  person: {
    name: string;
    role: string;
    year: string;
    location: string;
    phone: string;
    address: string;
    email: string;
    portfolioUrl: string;
    githubUrl: string;
    bio: string;
    avatarUrl: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    databaseCloud: string[];
    seoAnalytics: string[];
    remoteWorkflow: string[];
  };
  education: Array<{
    period: string;
    degree: string;
    institution: string;
    description: string;
  }>;
  experience: Array<{
    period: string;
    role: string;
    company: string;
    url?: string;
    description: string;
    tags: string[];
  }>;
  projects: {
    loftIkoyi: ProjectItem;
    gliity: ProjectItem;
    maxxWallpaper: ProjectItem;
    mrPutty: ProjectItem;
    voltz360: ProjectItem;
    designature: ProjectItem;
    // Backwards compatibility aliases
    project1?: {
      title: string;
      description: string;
      images: string[];
    };
    project2?: {
      title: string;
      description: string;
      images: string[];
    };
  };
  gallery: {
    title: string;
    images: string[];
  };
  contact: {
    thankYouText: string;
    heading: string;
    references: string;
    draftingImageUrl: string;
  };
}

export const initialPortfolioData: PortfolioData = {
  person: {
    name: "ONOBHAYEDO OSEHON GODWIN",
    role: "Web Developer & Technical SEO Specialist",
    year: "2026",
    location: "Remote • Contract • Freelance | UTC+1",
    phone: "+234-902-171-9472",
    address: "Remote • Contract • Freelance | UTC+1",
    email: "osehononos@gmail.com",
    portfolioUrl: "https://osehon.netlify.app",
    githubUrl: "https://github.com/Godwin-WebDev002",
    bio: "Self-directed Web Developer & Technical SEO Specialist specializing in modern frontend architecture (React, Next.js, TypeScript, Tailwind CSS) alongside robust backend systems engineering (FastAPI, Python). Proven track record of independently architecting blazing-fast user interfaces, achieving sub-second load times, and designing scalable backend architectures. Adept at operating seamlessly across asynchronous remote, contract, and freelance environments, taking full ownership of deliverables, and driving projects independently without supervision.",
    avatarUrl: oses.src,
  },
  skills: {
    frontend: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Redux Toolkit",
      "Responsive UI Architecture",
    ],
    backend: [
      "Python",
      "FastAPI",
      "RESTful API Architecture",
      "Secure Admin Authorization & Authentication",
    ],
    databaseCloud: [
      "Aiven (Database Management)",
      "Cloudinary (Optimized Cloud Media Pipelines)",
      "Vercel",
      "Netlify",
      "Hostinger DNS/cPanel",
      "Git / GitHub",
    ],
    seoAnalytics: [
      "Core Web Vitals Optimization",
      "Search Architecture",
      "Google Business Profiles",
      "Performance Budgeting",
      "Sub-Second Load Tuning",
    ],
    remoteWorkflow: [
      "Asynchronous Communication",
      "Self-Managed Task Prioritization",
      "Independent Ownership",
      "Contract & Freelance Delivery",
      "Cross-Timezone Collaboration (UTC+1)",
      "Production Deployment Pipelines",
    ],
  },
  experience: [
    {
      period: "Recent",
      role: "Backend Engineer & Systems Architect",
      company: "The Loft Ikoyi",
      url: "https://theloftikoyi.com/",
      description:
        "Engineered the robust FastAPI and Python backend infrastructure deployed on Vercel, integrated with Aiven database architecture and Cloudinary media storage to support live dining menus, table reservation tracking, and an independent admin management portal for seamless inventory and booking control.",
      tags: ["FastAPI", "Python", "Aiven", "Cloudinary", "Vercel", "Admin Auth"],
    },
    {
      period: "Recent",
      role: "Backend Engineer & API Developer",
      company: "Gliity Jewelries",
      url: "https://gliity.com/",
      description:
        "Architected the secure backend services using FastAPI, Python, and Aiven, paired with Cloudinary asset pipelines, powering a comprehensive admin dashboard for product management (add, update, delete) and salon appointment workflows.",
      tags: ["FastAPI", "Python", "Aiven", "Cloudinary", "API Security", "Dashboard"],
    },
    {
      period: "Key Outcome",
      role: "Full-Stack Developer & SEO Lead",
      company: "Maxx Wallpaper & Decor",
      url: "https://maxxwallpaper.com",
      description:
        "Engineered and deployed the full-stack corporate web platform using Next.js, Tailwind CSS, and a FastAPI/Python backend hosted on Vercel; integrated Aiven databases and Cloudinary media pipelines while independently managing DNS routing, cPanel setup, and SSL installation to achieve 99.9% operational uptime.",
      tags: ["Next.js", "FastAPI", "Python", "Aiven", "Cloudinary", "Tailwind CSS", "Technical SEO", "99.9% Uptime"],
    },
    {
      period: "Key Outcome",
      role: "Frontend & Performance Engineer",
      company: "Mr. Putty Screeding Plasters",
      url: "https://mrputty.com.ng",
      description:
        "Developed a responsive web presence with modular UI components and streamlined asset pipelines, cutting page load duration to sub-second speed and ensuring cross-browser compatibility across mobile and desktop.",
      tags: ["Sub-Second Speed", "Core Web Vitals", "Modular UI", "Responsive Architecture"],
    },
    {
      period: "Key Outcome",
      role: "Lead Frontend Engineer",
      company: "Voltz360",
      url: "https://voltz360.com",
      description:
        "Designed an e-commerce platform for AI drones and camera gear; implemented client-side state management using Zustand/Redux for product filtering, increasing catalog navigation efficiency and reducing layout rendering overhead.",
      tags: ["React", "Next.js", "Zustand", "Redux Toolkit", "E-Commerce", "Filtering"],
    },
    {
      period: "Key Outcome",
      role: "Frontend Engineer",
      company: "DESIGNATURE",
      url: "https://designature.netlify.app",
      description:
        "Developed an interactive 3D digital design application featuring dynamic cursor states and motion UI using Framer Motion and Tailwind CSS, delivering a fluid 60 FPS user experience.",
      tags: ["Framer Motion", "3D Motion", "Dynamic Cursor", "60 FPS", "Tailwind CSS"],
    },
  ],
  projects: {
    loftIkoyi: {
      id: "loft-ikoyi",
      title: "The Loft Ikoyi",
      role: "Backend Engineer & Systems Architect",
      url: "https://theloftikoyi.com/",
      displayUrl: "theloftikoyi.com",
      description:
        "Engineered the robust FastAPI and Python backend infrastructure deployed on Vercel, integrated with Aiven database architecture and Cloudinary media storage to support live dining menus, table reservation tracking, and an independent admin management portal for seamless inventory and booking control.",
      tags: ["FastAPI", "Python", "Aiven", "Cloudinary", "Vercel", "REST APIs"],
      metrics: "Live dining & booking engine",
      category: "backend",
    },
    gliity: {
      id: "gliity",
      title: "Gliity Jewelries",
      role: "Backend Engineer & API Developer",
      url: "https://gliity.com/",
      displayUrl: "gliity.com",
      description:
        "Architected the secure backend services using FastAPI, Python, and Aiven, paired with Cloudinary asset pipelines, powering a comprehensive admin dashboard for product management (add, update, delete) and salon appointment workflows.",
      tags: ["FastAPI", "Python", "Aiven", "Cloudinary", "Secure Admin", "Appointments"],
      metrics: "Comprehensive admin dashboard",
      category: "backend",
    },
    maxxWallpaper: {
      id: "maxx-wallpaper",
      title: "Maxx Wallpaper & Decor",
      role: "Full-Stack Developer & SEO Lead",
      url: "https://maxxwallpaper.com",
      displayUrl: "maxxwallpaper.com",
      description:
        "Engineered and deployed the full-stack corporate web platform using Next.js, Tailwind CSS, and a FastAPI/Python backend hosted on Vercel; integrated Aiven databases and Cloudinary media pipelines while independently managing DNS routing, cPanel setup, and SSL installation to achieve 99.9% operational uptime.",
      tags: ["Next.js", "FastAPI", "Python", "Aiven", "Cloudinary", "Tailwind CSS", "Technical SEO", "99.9% Uptime"],
      metrics: "99.9% operational uptime",
      images: [maxxhero.src, maxxpro.src],
      category: "frontend",
    },
    mrPutty: {
      id: "mr-putty",
      title: "Mr. Putty Screeding Plasters",
      role: "Frontend & Performance Engineer",
      url: "https://mrputty.com.ng",
      displayUrl: "mrputty.com.ng",
      description:
        "Developed a responsive web presence with modular UI components and streamlined asset pipelines, cutting page load duration to sub-second speed and ensuring cross-browser compatibility across mobile and desktop.",
      tags: ["Modular UI", "Asset Pipelines", "Sub-Second Load", "Cross-Browser"],
      metrics: "Sub-second page load times",
      images: [puttyhero.src, puttyfloor.src],
      category: "frontend",
    },
    voltz360: {
      id: "voltz360",
      title: "Voltz360",
      role: "Lead Frontend Engineer",
      url: "https://voltz360.com",
      displayUrl: "voltz360.com",
      description:
        "Designed an e-commerce platform for AI drones and camera gear; implemented client-side state management using Zustand/Redux for product filtering, increasing catalog navigation efficiency and reducing layout rendering overhead.",
      tags: ["React", "Next.js", "Zustand", "Redux Toolkit", "Product Filtering"],
      metrics: "High-efficiency catalog state",
      category: "apps",
    },
    designature: {
      id: "designature",
      title: "DESIGNATURE",
      role: "Frontend Engineer",
      url: "https://designature.netlify.app",
      displayUrl: "designature.netlify.app",
      description:
        "Developed an interactive 3D digital design application featuring dynamic cursor states and motion UI using Framer Motion and Tailwind CSS, delivering a fluid 60 FPS user experience.",
      tags: ["Framer Motion", "3D Interactive", "Dynamic Cursor", "60 FPS UI"],
      metrics: "Fluid 60 FPS interactive UI",
      category: "apps",
    },
    // Backwards compatibility
    project1: {
      title: "Maxx Wallpaper & Decor",
      description:
        "Engineered and deployed the full-stack corporate web platform using Next.js, Tailwind CSS, and a FastAPI/Python backend hosted on Vercel; integrated Aiven databases and Cloudinary media pipelines while independently managing DNS routing, cPanel setup, and SSL installation to achieve 99.9% operational uptime. Website: https://maxxwallpaper.com",
      images: [maxxhero.src, maxxpro.src],
    },
    project2: {
      title: "Mr. Putty Screeding Plasters",
      description:
        "Developed a responsive web presence with modular UI components and streamlined asset pipelines, cutting page load duration to sub-second speed and ensuring cross-browser compatibility across mobile and desktop. Website: https://mrputty.com.ng",
      images: [puttyhero.src, puttyfloor.src],
    },
  },
  education: [
    {
      period: "2023 – Present",
      degree: "Bachelor of Science (B.Sc) in Tourism Studies",
      institution: "National Open University",
      description:
        "Focused on digital service architectures, customer experience optimization, and digital solutions for hospitality and digital service industries.",
    },
    {
      period: "2017 – 2020",
      degree: "Senior School Certificate",
      institution: "Newton Education Centre",
      description:
        "Completed secondary education with honors in sciences, analytical problem-solving, and foundational digital literacy.",
    },
  ],
  gallery: {
    title: "Engineering & Technical Architectures",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop", // Code editor
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop", // Web dev laptop
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop", // Matrix / backend cyber
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop", // Developer workstation
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // Analytics dashboard
    ],
  },
  contact: {
    thankYouText: "Thank you",
    heading: "Contact & Remote Work",
    references: "References available upon request.",
    draftingImageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
};
