import { GoogleGenAI } from "@google/genai";

const genAi = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default genAi;