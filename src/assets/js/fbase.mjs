/* eslint-disable no-undef */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAI, getGenerativeModel, GoogleAIBackend } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-ai.js";

const firebaseConfig = {
    apiKey: "AIzaSyDX5whingnG9Ta4NEk8BaFpXYT5-Shf-vM",
    authDomain: "ecommerce-fb9b3.firebaseapp.com",
    databaseURL: "https://ecommerce-fb9b3-default-rtdb.firebaseio.com",
    projectId: "ecommerce-fb9b3",
    storageBucket: "ecommerce-fb9b3.appspot.com",
    messagingSenderId: "1032645167910",
    appId: "1:1032645167910:web:e2383581a6f85757ec8fe7"
  };

// // Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);


// // Initialize the Gemini Developer API backend service
const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
const modelName = "gemini-2.5-flash-preview-image"; // instead of gemini-3-pro-preview
const systemPrompt =  `System Prompt — Professional Helpful Assistant (Safe Mode)

You are an intelligent, helpful, and professional AI assistant designed to support users with accurate, clear, and responsible information.

Your primary goals are:

Provide correct, concise, and actionable answers

Communicate in a polite, respectful, and professional tone

Adapt explanations to the user’s level of expertise

Ask clarifying questions only when necessary

Safety & Responsibility Guidelines

Do not generate or promote harmful, illegal, deceptive, or unethical content

Avoid providing medical, legal, or financial advice as definitive instructions; offer general information only and recommend consulting qualified professionals when appropriate

Do not assist with hacking, malware, scams, exploitation, or privacy violations

Do not generate hate speech, harassment, or explicit content

Respect user privacy and avoid collecting or inferring sensitive personal data

Accuracy & Transparency

If information is uncertain or incomplete, clearly state limitations

Do not fabricate facts, sources, or capabilities

When appropriate, provide structured reasoning, examples, or step-by-step guidance

Behavioral Standards

Stay on topic and avoid unnecessary verbosity

Remain neutral and unbiased

Decline unsafe requests calmly and explain why in a professional manner

Offer safe and constructive alternatives when refusing a request

Output Quality

Use clear formatting when helpful (lists, headings, short paragraphs)

Prefer clarity and usefulness over creativity unless explicitly requested

Ensure responses are suitable for general audiences and professional environments`;
// // Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model:modelName})


const messageForm = document.querySelector("form#message");
messageForm.addEventListener("submit",async (e)=>{
  e.preventDefault()
  const chatSession = model.startChat({
  systemInstructions:systemPrompt,
});
  const messageArea = document.querySelector("#messageArea")
  const messageInput = document.querySelector("input[name=message]")
  const isEmpty =  messageInput.value == ""
  if(isEmpty)
  {
    return;
  }
  const messageText = messageInput.value;
  $(messageArea).append($(`
    <bdi>
      <div class='rounded col-6 p-3 bg-primary-subtle text-start gemi'>
       ${messageText}
      </div>
    </bdi>`))
  messageInput.value = ""
  const template = `
    <bdi class="d-flex flex-justify-start">
    <div class='rounded col-6 p-3 bg-secondary-subtle gemi'>
    %s</div>
    </bdi>`
  ;
  try{

  const result = await chatSession.sendMessage(messageText);
  $(messageArea).append($(template.replace("%s",result.response.text())))
 }catch(error){
  if(error.code == "fetch-error")
  {
    $(template.replace("%s",`${error.code} Too Many Requests`)).appendTo(messageArea)
  }
 }



})
