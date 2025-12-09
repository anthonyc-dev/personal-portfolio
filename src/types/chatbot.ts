export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatbotResponse {
  pattern: RegExp;
  responses: string[];
  priority?: number;
}
