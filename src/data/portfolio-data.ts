import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  hero: {
    name: "Anthony Crausus",
    title: "Full-Stack Developer",
    subtitle:
      "Building scalable, high-performance web and mobile applications using React, Next.js, Node.js, and Prisma.",
  },
  about: {
    description:
      "I am a Full-stack developer with 4+ years experience building real-world web and mobile applications. I specialize in React, Next.js, Node.js, Prisma, MongoDB, and Firebase. I design scalable, maintainable applications with clean code and focus on solving practical business problems.",
    highlights: [
      "Full-stack web and mobile applications",
      "API integrations, authentication, database management",
      "Real-time dashboards, inventory, and business management systems",
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "SiReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "Laravel", icon: "SiLaravel" },
        { name: "REST APIs", icon: "SiPostman" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "Firebase", icon: "SiFirebase" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "React Native (Expo)", icon: "SiExpo" },
        { name: "Java (Android Studio)", icon: "SiAndroidstudio" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "SiGit" },
        { name: "GitHub", icon: "SiGithub" },
        { name: "Docker", icon: "SiDocker" },
        { name: "CI/CD", icon: "SiGithubactions" },
        { name: "Prisma", icon: "SiPrisma" },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "API integrations", icon: "SiSwagger" },
        { name: "AI integration", icon: "SiOpenai" },
        { name: "Form validation (Zod)", icon: "SiZod" },
        { name: "react-hook-form", icon: "SiReactquery" },
      ],
    },
  ],
  projects: [
    {
      id: "AI-TRAVEL-PLANNER",
      title: "AI Travel Planner (Mobile App)",
      problem:
        "Travelers face challenges in planning trips efficiently—such as choosing destinations, optimizing itineraries, booking accommodations, and ensuring all travel details are organized. Manual planning can be time-consuming, prone to missing information, and often lacks personalization.",
      solution:
        "A full-stack AI-powered travel planning platform that helps users seamlessly design personalized itineraries, book hotels, flights, and activities, and manage all trip details in one place. The system uses AI to recommend destinations, create optimized travel schedules, and suggest experiences based on user preferences.",
      technologies: [
        "React Native (Expo)",
        "Firebase (Authentication + Firestore)",
        "Gemini AI",
      ],
      results: [
        "Enabled travelers to create personalized travel plans in minutes rather than hours",
        "Improved itinerary accuracy by using AI recommendations and real-time data  ",
        "Streamlined booking and trip management, reducing stress and manual errors",
      ],
      githubUrl: "https://github.com/anthonyc-dev/AI-TRAVEL-PLANNER",
      // demoUrl: "https://doctor-info-fetcher.vercel.app",
      imageUrl: "/projectImage/1.png",
    },
    {
      id: "inventory-sales",
      title: "Inventory & Sales System",
      problem:
        "Small businesses often struggle to manage inventory and sales manually, leading to stock-outs, duplicate entries, and inaccurate financial reports.",
      solution:
        "A full-stack web application that allows businesses to track inventory, process sales, and generate financial reports in real-time. The system includes modules for inventory management, sales tracking, and financial reporting with role-based access for staff and admins.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "ShadCN UI",
      ],
      results: [
        "Reduced inventory errors by enabling real-time stock updates",
        "Improved sales tracking accuracy and reporting efficiency",
        "Simplified workflows for staff and administrators, saving time and reducing manual errors",
      ],
      githubUrl: "https://github.com/anthonyc-dev/inventory-management-system",
      // demoUrl: "https://inventory-sales-demo.vercel.app",
      imageUrl: "/projectImage/2.png",
    },
    {
      id: "queue-management-system",
      title: "Queue Management System",
      problem:
        "Many businesses and service centers face challenges in managing customer queues manually, leading to long wait times, missed appointments, and poor customer satisfaction.",
      solution:
        "A desktop application that allows businesses to efficiently manage customer queues, monitor service flow, and streamline appointment handling. Administrators have tools to track customer records, maintain real-time queue status, and oversee service allocation. The application provides secure access, an intuitive GUI, and robust data management through database integration.",
      technologies: ["Python (TkInter)", "MySQL", "TkBootstrap", "WebSocket"],
      results: [
        "Streamlined queue management, reducing manual paperwork, missed appointments, and service errors",
        "Improved administrative efficiency with organized customer/service records and real-time updates",
        "Provided staff and administrators with an easy-to-use interface for queue monitoring and management",
      ],
      githubUrl: "https://github.com/anthonyc-dev/Queue-Management-System",
      // demoUrl: "https://enrollment-system-demo.vercel.app",
      imageUrl: "/projectImage/3.jpg",
    },
    {
      id: "barangay-record-management-system",
      title: "Barangay Record Management System",
      problem:
        "Barangays often rely on manual record-keeping for resident profiles, document requests, and clearance issuance. This leads to slow processing, misplaced records, and difficulty maintaining accurate, up-to-date information.",
      solution:
        "A full web application that digitizes barangay operations, including resident records, document requests, barangay clearances, and official logs. Administrators can manage records easily, reduce errors, and process documents faster. The system provides secure authentication, an organized dashboard, and a structured data flow to improve overall barangay service efficiency.",
      technologies: [
        "React.Js",
        "TailwindCSS",
        "TypeScript",
        "Laravel 12",
        "MySQL",
        "XAMPP",
      ],
      results: [
        "Digitized resident and document records for improved accuracy and faster retrieval",
        "Reduced manual processing time for barangay clearances and certifications",
        "Improved administrative workflow with centralized and secure data management",
      ],
      githubUrl:
        "https://github.com/anthonyc-dev/Barangay-record-management-system-V1",
      // demoUrl: "",
      imageUrl: "/projectImage/BRMS/4.png",
    },
  ],
  contact: {
    description:
      "Interested in collaborating or hiring a full-stack developer? Let's connect!",
    links: [
      {
        label: "Email me",
        href: "mailto:anthonycrausus.dev@gmail.com",
        icon: "mail",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/anthony-crausus-19b974269/",
        icon: "linkedin",
      },
      {
        label: "Download Resume",
        href: "/Anthony Crausus CV.pdf",
        icon: "download",
      },
    ],
  },
};
