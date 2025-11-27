import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "HSB Accounting & Advisory", a professional accounting firm.
Your role is to answer general questions about accounting, bookkeeping, taxes, and business advisory in a professional, concise, and friendly manner.

Key Information about HSB:
- Services: Bookkeeping, Tax Preparation, Payroll, Business Advisory, Financial Planning.
- Focus: Small to medium-sized businesses, accuracy, compliance, and growth.
- Tone: Professional, trustworthy, helpful.

Constraints:
1. Keep answers brief (under 100 words).
2. Do NOT give specific legal or binding financial advice for a specific user's complex situation. Instead, provide general information and strongly suggest they book a consultation using the link provided on the website.
3. If asked about pricing, mention that it varies by business size and complexity, and they should book a free consultation.
4. Always be polite.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI brain is currently offline (API Key missing). Please contact the firm directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to the server right now. Please try again later.";
  }
};