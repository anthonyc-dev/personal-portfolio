import { ChatbotResponse } from "@/types/chatbot";

export const chatbotResponses: ChatbotResponse[] = [
  // Greetings
  {
    pattern: /^(hi|hello|hey|good morning|good afternoon|good evening)/i,
    responses: [
      "Hello! I'm Cody, Anthony's virtual assistant. How can I help you today?",
      "Hi there! I'm Cody. Feel free to ask me about Anthony's skills, projects, or experience!",
      "Hey! I'm Cody, here to help you learn more about Anthony. What would you like to know?",
    ],
    priority: 1,
  },

  // About Anthony
  {
    pattern:
      /who (is|are) (you|anthony)|tell me about (yourself|anthony)|about anthony/i,
    responses: [
      "Anthony Crausus is a Full-Stack Developer with 4+ years of experience building web and mobile applications. He specializes in React, Next.js, Node.js, and modern web technologies.",
      "Anthony is a passionate full-stack developer who loves solving real-world problems through code. He has expertise in both frontend and backend development, with a focus on creating scalable applications.",
    ],
  },

  // Skills
  {
    pattern:
      /skills|technologies|tech stack|what (do you|does anthony) (know|use)/i,
    responses: [
      "Anthony is proficient in:\n• Frontend: React.js, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Express.js, Laravel\n• Databases: MongoDB, PostgreSQL, MySQL, Firebase\n• Mobile: React Native (Expo), Java (Android Studio)\n• Tools: Git, Docker, CI/CD, Prisma",
      "Anthony works with a modern tech stack including React, Next.js, Node.js, TypeScript, and various databases like MongoDB and PostgreSQL. He also develops mobile apps with React Native!",
    ],
  },

  // Projects
  {
    pattern:
      /projects|portfolio|what (have you|has anthony) (built|made|created)/i,
    responses: [
      "Anthony has built several impressive projects:\n1. AI Travel Planner - A mobile app using React Native and Gemini AI\n2. Inventory & Sales System - Full-stack web app with Next.js and MongoDB\n3. Queue Management System - Desktop app with Python\n4. Barangay Record Management System - Web app with React and Laravel",
      "Check out Anthony's projects section below! He's built everything from AI-powered travel planners to inventory management systems and government record systems.",
    ],
  },

  // Experience
  {
    pattern: /experience|years|how long/i,
    responses: [
      "Anthony has 4+ years of professional experience in full-stack development, working on real-world web and mobile applications.",
      "With over 4 years in the field, Anthony has extensive experience building scalable applications and solving complex business problems.",
    ],
  },

  // Contact
  {
    pattern: /contact|email|reach|hire|linkedin/i,
    responses: [
      "You can contact Anthony at anthonycrausus.dev@gmail.com or connect on LinkedIn. Check the contact section below for more details!",
      "Want to get in touch? Email Anthony at anthonycrausus.dev@gmail.com or visit his LinkedIn profile. You can also download his resume from the contact section!",
    ],
  },

  {
    pattern: /github|resume.*github|where.*find.*github|github link/i,
    responses: [
      "You can find Anthony's GitHub link in his resume, typically located in the footer or projects section. On this portfolio, you can also look for a GitHub icon or section below to view his repositories!",
      "Anthony's GitHub is linked directly from his resume and portfolio—just look for the GitHub icon or visit the contact section for the link to his GitHub profile.",
    ],
  },

  // Mobile development
  {
    pattern: /mobile|react native|android|ios|app development/i,
    responses: [
      "Yes! Anthony develops mobile applications using React Native (Expo) and has experience with Java (Android Studio). He's built AI-powered travel planners and other mobile apps.",
      "Anthony is skilled in mobile development with React Native and Java for Android. Check out his AI Travel Planner project - it's a great example of his mobile development skills!",
    ],
  },

  // AI/Machine Learning
  {
    pattern: /ai|artificial intelligence|machine learning|gemini/i,
    responses: [
      "Anthony has experience integrating AI into applications! He built an AI Travel Planner using Gemini AI that creates personalized itineraries and travel recommendations.",
      "Anthony works with AI integrations, including Gemini AI. He's passionate about leveraging AI to solve real-world problems and enhance user experiences.",
    ],
  },

  // Database
  {
    pattern: /database|mongodb|postgresql|mysql|firebase/i,
    responses: [
      "Anthony has extensive database experience with MongoDB, PostgreSQL, MySQL, and Firebase. He knows how to design efficient database schemas and optimize queries.",
      "Anthony works with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases, choosing the right tool for each project's needs.",
    ],
  },

  // Frontend
  {
    pattern: /frontend|react|next|nextjs|typescript|tailwind/i,
    responses: [
      "Anthony is a frontend expert! He specializes in React.js, Next.js, TypeScript, and Tailwind CSS to build beautiful, responsive user interfaces.",
      "For frontend development, Anthony uses modern technologies like React, Next.js, and TypeScript, along with Tailwind CSS for styling. This portfolio is built with Next.js!",
    ],
  },

  // Backend
  {
    pattern: /backend|node|express|laravel|api/i,
    responses: [
      "Anthony builds robust backends using Node.js with Express.js and Laravel. He's experienced in creating RESTful APIs, handling authentication, and managing databases.",
      "On the backend side, Anthony works with Node.js, Express.js, and Laravel, building secure and scalable APIs for web and mobile applications.",
    ],
  },

  // Help/What can you do
  {
    pattern: /help|what can you (do|tell me)|how (can you|do you) help/i,
    responses: [
      "I can answer questions about Anthony's:\n• Skills and technologies\n• Projects and portfolio\n• Work experience\n• Contact information\n• Specific tech stacks (frontend, backend, mobile, databases)\n\nJust ask me anything!",
      "Feel free to ask me about Anthony's skills, projects, experience, or how to contact him. I'm here to help you learn more about his work!",
    ],
  },

  // Thanks
  {
    pattern: /thanks|thank you|appreciate|okay/i,
    responses: [
      "You're welcome! Feel free to ask if you have more questions!",
      "Happy to help! Let me know if there's anything else you'd like to know about Anthony.",
      "My pleasure! Don't hesitate to ask more questions!",
    ],
  },

  // Cody identity
  {
    pattern: /who are you|what are you|your name/i,
    responses: [
      "I'm Cody, Anthony's virtual assistant! I'm here to help answer your questions about Anthony's skills, projects, and experience.",
      "My name is Cody! I'm an automated assistant created to help visitors learn more about Anthony and his work.",
    ],
  },

  // Default fallback (should be last)
  {
    pattern: /.*/,
    responses: [
      "I'm not sure I understand. Try asking me about Anthony's skills, projects, experience, or how to contact him!",
      "Hmm, I didn't quite get that. You can ask me about Anthony's tech stack, portfolio projects, or work experience!",
      "I'm still learning! Try asking about Anthony's skills, projects, contact information, or specific technologies he uses.",
    ],
    priority: -1,
  },
];

export const getResponse = (userMessage: string): string => {
  // Sort by priority (higher priority first)
  const sortedResponses = [...chatbotResponses].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  );

  for (const response of sortedResponses) {
    if (response.pattern.test(userMessage)) {
      // Return a random response from the array
      const randomIndex = Math.floor(Math.random() * response.responses.length);
      return response.responses[randomIndex];
    }
  }

  // Fallback (should never reach here due to catch-all pattern)
  return "I'm not sure how to respond to that. Try asking about Anthony's skills or projects!";
};
