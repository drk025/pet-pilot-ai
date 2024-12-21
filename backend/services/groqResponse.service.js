import dotenv from "dotenv"; 
dotenv.config()

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion("Meal for Siberian Husky");
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

export async function getGroqChatCompletion(query) {
  const groqRawRes =  await groq.chat.completions.create({
    messages: [
        // Define the assistant's role as a pet care expert
        {
          role: "system",
          content: "You are a pet care assistant. You specialize in providing advice about pet health, nutrition, training, and general care for pets like dogs, cats, and other common pets.",
        },
        // User's dynamic query
        {
          role: "user",
          content: query,
        },
      ],
    model: "llama3-8b-8192",
  });
  
  return (groqRawRes.choices[0]?.message?.content || "");
}

