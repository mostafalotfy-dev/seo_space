const { initializeApp } = require('firebase/app');
const {
  getAI,
  getTemplateGenerativeModel,
  GoogleAIBackend,
} = require("firebase/ai");
const $ = require("jquery");

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
const aiPackage = getAI(firebaseApp, { backend: new GoogleAIBackend() });






// Create a `TemplateGenerativeModel` instance with a model that supports your use case
const modelPackage = getTemplateGenerativeModel(aiPackage);
const currentLang = document.lang == "en" ? "start" : "end"
const template = `
    <bdi class='d-flex flex-justify-${currentLang}'>
    <div class='rounded col-12 my-3 p-3 text-right bg-primary-subtle gemi'>
    %s</div>
    </bdi>`;

const messageForm = $("#messageForm");
const messageInput = $("form#messageForm .input");
const messageArea = $("#messageArea");

messageForm.on("submit", async (e) => {
  e.preventDefault();

  const messageText = messageInput.val().trim();
  if (!messageText) {
    return; // skip empty submissions
  }
  const firstMessage = $(
      `<p class='rounded col-sm-12 my-3 bg-secondary-subtle p-1 text-center  text-break'>${messageText}</p>`
    )
  // Show user message
  $(messageArea).append(
    firstMessage
  );
firstMessage[0].scrollIntoView({ behavior: "smooth", block: "start" });
  const cachedMessage = messageText;
  messageInput.val(""); // clear input
  let replyText;
  try {
    const result = await modelPackage.generateContent(
    
        "blank-template",
        {
          customText: cachedMessage
        },
    
    );

    replyText =
      result?.response?.text();
      if (!replyText) return;
    const currentReply = $(
        template.replace(
          "%s",
          // eslint-disable-next-line no-undef
          DOMPurify.sanitize(markdown.default(replyText))
        )
      );
    $(messageArea).append(
      currentReply
    );
    currentReply[0].scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    const errorMsg =
      error.code === "fetch-error"
        ? `${error.code} Something went wrong. Please contact the developer.`
        : `Unexpected error: ${error.message}`;

    $(template.replace("%s", errorMsg)).appendTo(messageArea);
  }

 
});

document.addEventListener("DOMContentLoaded", () => {
 $("#search")
    .on("submit", async function (e) {
      e.preventDefault();
      const urlInput = $("#search .email").val().trim();
      if (urlInput === "") return;
      $("#messageContainer").attr("style", "height:unset");
      const url = new URL(urlInput);
      
      $(messageArea).html("انتظر التحليل...");
try{
      const result = await modelPackage.generateContent(
        
          "senior-web-analyst",
          {
            url:url.href
          }
        
      );
      $(messageArea).html("");
      $("#search .email").val("");
      $(messageArea).append(
        $(
          template.replace(
            "%s",
            // eslint-disable-next-line no-undef
            DOMPurify.sanitize(markdown.default(
                result.response.candidates[0].content.parts[0].text,
              ),
            ),
          ),
        ),
      );
    } catch(err)
    {
      console.log(err.code)
    }
    });
});
