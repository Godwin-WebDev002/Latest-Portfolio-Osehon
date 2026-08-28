export interface SlideData {
  id: number;
  slideNumber: number;
  type: 'cover' | 'about' | 'education' | 'experience' | 'project1' | 'project2' | 'project3' | 'gallery' | 'project4' | 'contact';
  title?: string;
  subtitle?: string;
  year?: string;
  content?: any;
}

import maxxhero from "../assets/Images/maxxHero.png"
import maxxpro from "../assets/Images/MaxxPro.png"
import oses from "../assets/Images/Oses.jpeg"
import puttyhero from "../assets/Images/puttyhero.png"
import puttyfloor from "../assets/Images/puttyfloor.png"

export interface PortfolioData {
  person: {
    name: string;
    role: string;
    year: string;
    bio: string;
    phone: string;
    address: string;
    email: string;
    avatarUrl: string;
  };
  education: Array<{
    period: string;
    institution: string;
    description: string;
  }>;
  experience: Array<{
    company: string;
    description: string;
  }>;
  projects: {
    project1: {
      title: string;
      description: string;
      images: string[];
    };
    project2: {
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
    draftingImageUrl: string;
  };
}

export const initialPortfolioData: PortfolioData = {
  person: {
    name: "OSEHON GODWIN",
    role: "Website Developer",
    year: "2026",
    bio: "I am a Full-Stack Web Developer and Creative Developer passionate about building high-performance web applications and visually compelling digital experiences. Blending clean technical architecture with interactive design, I specialize in translating complex ideas into seamless, intuitive user interfaces..",
    phone: "+234 902 1719 472",
    address: "Central Area, Abuja. Nigeria",
    email: "osehononos@gmail.com",
    avatarUrl: oses.src,
  },
  education: [
    {
      period: "2014-2020",
      institution: "Newton Educational Centre",
      description: "Completed secondary education with a strong focus on core sciences, analytical problem-solving, and foundational digital literacy.",
    },
    {
      period: "2023-till date",
      institution: "National Open University Nigeria",
      description: "Pursuing a degree in Tourism Studies, focusing on service management, customer experience design, and digital solutions for hospitality and leisure industries.",
    },
  ],
  experience: [
    {
      company: "Maxx Wallpaper & Decor Limited",
      description: "Designed and deployed the official web platform using Next.js and Tailwind CSS. Configured server infrastructure, DNS routing, and cPanel hosting while optimizing image assets and UI layout for fast load times.",
    },
    {
      company: "Mr Putty",
      description: "Crafted interactive UI components and custom responsive interfaces. Implemented smooth motion workflows with Framer Motion and transformed brand design mockups into high-performance production code.",
    },
  ],
  projects: {
    project1: {
      title: "MaxxWallpaper",
      description: "Engineered and launched the corporate web platform using Next.js and Tailwind CSS; configured Hostinger DNS, cPanel hosting, and SSL certificates to ensure optimum security and 99.9% uptime. Website URL: https://maxxwallpaper.com",
      images: [
        maxxhero.src,
        maxxpro.src,
      ],
    },
    project2: {
      title: "Mr Putty",
      description: "Developed a dynamic, responsive web presence featuring fluid interactive UI components, optimized asset delivery for sub-second load times, and seamless cross-browser performance. Website URL: https://mrputty.com.ng",
      images: [
        puttyhero.src,
        puttyfloor.src,
      ],
    },
  },
  gallery: {
    title: "Hospitality & Commercial Interiors",
    images: [
      "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1632&auto=format&fit=crop", // Restaurant high glass
      "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=880&auto=format&fit=crop", // Brick cafe with greenery
      "https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1170&auto=format&fit=crop", // Zen arched window room
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1305&auto=format&fit=crop", // Timber slatted wall
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop", // Yellow cloud seating venue
    ],
  },
  contact: {
    thankYouText: "Thank you",
    heading: "Contact Details",
    draftingImageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop", // Drafting compass hands
  },
};
