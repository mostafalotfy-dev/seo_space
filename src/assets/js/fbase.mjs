/* eslint-disable no-undef */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-ai.js";

const firebaseConfig = {
  apiKey: "AIzaSyDX5whingnG9Ta4NEk8BaFpXYT5-Shf-vM",
  authDomain: "ecommerce-fb9b3.firebaseapp.com",
  databaseURL: "https://ecommerce-fb9b3-default-rtdb.firebaseio.com",
  projectId: "ecommerce-fb9b3",
  storageBucket: "ecommerce-fb9b3.appspot.com",
  messagingSenderId: "1032645167910",
  appId: "1:1032645167910:web:e2383581a6f85757ec8fe7",
};

// // Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);

// // Initialize the Gemini Developer API backend service
const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
const modelName = "gemini-2.5-flash"; // instead of gemini-3-pro-preview
const systemPrompt = `
You are a senior UX designer and SEO strategist specializing in English and Arabic digital marketing websites.

Your primary task is to generate high-quality FAQ sections that:
- Address real user concerns and objections
- Improve clarity, trust, and conversion
- Are suitable for accordion-based UI components
- Follow SEO best practices for English and Arabic content

Rules you must follow:
- Write in Modern Standard Arabic or English
- Use a professional, confident, and culturally appropriate tone for Arab markets
- Generate realistic, user-centered questions
- Provide concise answers (2–4 lines maximum)
- Tailor all answers to digital marketing, SEO, content marketing, analytics, and conversion optimization services
- Avoid exaggeration, false guarantees, or vague claims
- Prioritize clarity, usability, and scannability

When requested:
- Output content ready for direct website use
- Generate valid FAQPage JSON-LD schema
- Ensure schema questions and answers exactly match the FAQ content
- Output schema inside a single <script type="application/ld+json"> block
- Do not explain the schema or include filler text

If information is missing or unclear, make reasonable professional assumptions aligned with best UX and SEO practices.
`;
// // Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model: modelName });

const messageForm = document.querySelector("form#message");
messageForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const messageInput = document.querySelector("input[name=message]");

  const messageArea = document.querySelector("#messageArea");

  const isEmpty = messageInput.value == "";
  if (isEmpty) {
    return;
  }
  const messageText = messageInput.value;
  
  $(messageArea).append(
    $(`
    <bdi>
      <div class='rounded col-6 p-3 bg-primary-subtle text-start flex-justify-end gemi'>
       ${messageText}
      </div>
    </bdi>`),)
  const cachedMesssage = messageInput.value; 
  messageInput.value = ""

  const template = `
    <bdi >
    <div class='rounded col-6 p-3 text-right d-flex flex-justify-start bg-secondary-subtle gemi'>
    %s</div>
    </bdi>`; 

  try {
  const result = await model.generateContent({
    contents: [
      { role: "model", parts: [{ text: systemPrompt }] },
      { role: "user", parts: [{ text:cachedMesssage }] },
    ],
  });  
    
    $(messageArea)
    .append($(template
      .replace("%s", DOMPurify
        .sanitize(markdown.default(result.response
          .candidates[0]
          .content
          .parts[0]
          .text
          )
        ))));
  } catch (error) {
    if (error.code == "fetch-error") {
      $(template.replace("%s", `${error.code} Contact Us`)).appendTo(
        messageArea,
      );
    }
  }
});
