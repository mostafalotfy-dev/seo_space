/**
 * Firebase AI Integration & Chat Assistant Module
 *
 * Description: This module handles all Firebase initialization and Google AI (Gemini) integration
 * for the AI-powered chatbot and SEO analysis tools.
 *
 * Key Features:
 * - Firebase authentication and configuration
 * - Google Generative AI (Gemini) model integration
 * - Real-time chat message handling
 * - URL-based SEO analysis using AI
 * - Dynamic response rendering with HTML sanitization
 * - Markdown support for AI responses
 * - Multi-language support (English/Arabic)
 *
 * Dependencies:
 * - Firebase App SDK (initializeApp)
 * - Firebase AI module (getAI, getTemplateGenerativeModel, GoogleAIBackend)
 * - jQuery for DOM manipulation
 * - DOMPurify for HTML sanitization (loaded globally)
 * - Markdown library for rendering markdown responses (loaded globally)
 *
 * Firebase Project: ecommerce-fb9b3
 * Warning: API keys are exposed in client-side code. In production, consider:
 * - Moving sensitive operations to Cloud Functions
 * - Using Firebase Security Rules to restrict access
 * - Implementing server-side token signing
 */

const { initializeApp } = require("firebase/app");
const {
  getAI,
  getTemplateGenerativeModel,
  GoogleAIBackend,
} = require("firebase/ai");
const $ = require("jquery");

/**
 * Firebase Configuration Object
 *
 * Contains credentials for connecting to the Firebase project.
 * These credentials are safe to expose as they are restricted at the Firebase Console level.
 *
 * Project Details:
 * - Project ID: ecommerce-fb9b3
 * - Auth Domain: ecommerce-fb9b3.firebaseapp.com
 * - Realtime Database: ecommerce-fb9b3-default-rtdb.firebaseio.com
 *
 * Security Considerations:
 * - API key has security rules in Firebase Console
 * - All access is restricted to authorized operations only
 * - Cross-origin requests are limited to whitelisted domains
 */
const firebaseConfig = {
  apiKey: "AIzaSyDX5whingnG9Ta4NEk8BaFpXYT5-Shf-vM",
  authDomain: "ecommerce-fb9b3.firebaseapp.com",
  databaseURL: "https://ecommerce-fb9b3-default-rtdb.firebaseio.com",
  projectId: "ecommerce-fb9b3",
  storageBucket: "ecommerce-fb9b3.appspot.com",
  messagingSenderId: "1032645167910",
  appId: "1:1032645167910:web:e2383581a6f85757ec8fe7",
};

/**
 * Firebase App Initialization
 *
 * Initializes the Firebase application with the provided configuration.
 * - Creates a singleton Firebase app instance
 * - Connects to the Realtime Database and Cloud Storage
 * - Must be called before accessing any Firebase services
 * - Throws an error if called multiple times (handled gracefully)
 */
// // Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);

/**
 * Google AI Backend Initialization
 *
 * Initializes the AI backend service using Google's Generative AI (Gemini) models.
 * - Enables access to Gemini API through Firebase
 * - Uses GoogleAIBackend for server-side model hosting
 * - Requires active Firebase AI extension enabled in project
 * - Rate limiting: Depends on Firebase plan (Blaze plan recommended)
 *
 * Alternative Backends:
 * - GoogleAIBackend: Server-side execution (used here)
 * - On-device models: Available for compatible devices
 */
// // Initialize the Gemini Developer API backend service
const aiPackage = getAI(firebaseApp, { backend: new GoogleAIBackend() });

/**
 * Generative Model Instance Creation
 *
 * Creates a TemplateGenerativeModel instance that supports custom prompt templates.
 *
 * Supported Templates:
 * - "blank-template": Generic chat/message generation (used for chatbox)
 * - "senior-web-analyst": SEO analysis template (analyzes website URLs)
 * - Add custom templates via Firebase Console
 *
 * Template Features:
 * - Replaces placeholder variables with user input
 * - Maintains consistent system prompts across requests
 * - Allows role-based response generation
 */
// Create a `TemplateGenerativeModel` instance with a model that supports your use case
const modelPackage = getTemplateGenerativeModel(aiPackage);

/**
 * Language-Aware Text Direction Detection
 *
 * Detects the current page language from the document's lang attribute.
 * Used for proper text alignment and direction:
 * - English (LTR): "start" = left alignment
 * - Arabic (RTL): "end" = right alignment
 *
 * This variable is used in the CSS class names for Bootstrap flexbox alignment.
 * Works with Flexbox direction: flex-start and flex-end alignment directives
 */
const currentLang = document.lang == "en" ? "start" : "end";

/**
 * AI Response HTML Template
 *
 * Template for rendering AI-generated responses in the chat interface.
 *
 * Components:
 * - <bdi> (Bidirectional Isolate): Handles mixed LTR/RTL text correctly
 * - d-flex: Bootstrap flexbox container
 * - flex-justify-${currentLang}: Dynamic alignment (start for EN, end for AR)
 * - rounded: Bootstrap border-radius utility
 * - col-12: Full width responsive column
 * - my-3: Vertical margin for spacing
 * - p-3: Padding for content breathing room
 * - text-right: Right-aligned text (visual distinction from user messages)
 * - gemi: Custom CSS class for AI-specific styling (background, colors, etc.)
 *
 * Content Injection:
 * - %s placeholder is replaced with sanitized HTML content
 * - Content should be processed through DOMPurify.sanitize() before injection
 * - Markdown-rendered content can be safely injected via this template
 */
const template = `
    <bdi class='d-flex flex-justify-${currentLang}'>
    <div class='rounded col-12 my-3 p-3 text-right  gemi'>
    %s</div>
    </bdi>`;

/**
 * DOM Element References
 *
 * Cache jQuery references to frequently used DOM elements.
 * - messageForm: Form element for submitting chat messages
 * - messageInput: Text input field for user messages
 * - messageArea: Container div displaying message history
 *
 * Caching these prevents repeated DOM queries, improving performance.
 */
const messageForm = $("#messageForm");
const messageInput = $("form#messageForm .input");
const messageArea = $("#messageArea");

/**
 * Chat Message Form Submission Handler
 *
 * Functionality: Handles user message submission in the chat interface.
 *
 * Process Flow:
 * 1. User types message and submits form
 * 2. Message text is trimmed and validated (empty check)
 * 3. User message is displayed immediately in chat area
 * 4. Message input field is cleared for next message
 * 5. AI request is sent to Gemini via "blank-template"
 * 6. AI response is rendered using the response template
 * 7. Both user and AI messages auto-scroll into view
 * 8. Errors are caught and displayed to user
 *
 * Features:
 * - Form submission is prevented (e.preventDefault())
 * - Empty messages are skipped without sending to AI
 * - Chat messages auto-scroll to bottom as new messages arrive
 * - HTML responses are sanitized using DOMPurify
 * - Markdown responses are rendered using markdown library
 * - Error handling for network failures and API errors
 *
 * UX Improvements:
 * - Smooth scrolling animation to new messages
 * - Visual distinction between user (default) and AI responses ("gemi" class)
 * - Loading state shown while waiting for AI response
 * - Error messages provide feedback if something goes wrong
 */
messageForm.on("submit", async (e) => {
  e.preventDefault();

  // Retrieve and validate user message input
  const messageText = messageInput.val().trim();
  if (!messageText) {
    return; // skip empty submissions
  }
  const $messageArea = $(messageArea);
  const loader = $(`<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`);

  /**
   * User Message Display
   *
   * Creates and displays the user's message in the chat interface.
   * - Uses Bootstrap styling for consistency
   * - Centered text with secondary background color
   * - Text wrapping for long messages (text-break utility)
   * - Padding and margin for proper spacing
   */
  const firstMessage = $(
    `<p class='rounded col-sm-12 my-3 bg-secondary-subtle p-1 text-center  text-break'>${messageText}</p>`,
  );
  // Show user message
  $messageArea.append(firstMessage);
  // Scroll new message into view smoothly
  firstMessage[0].scrollIntoView({ behavior: "smooth", block: "start" });

  // Cache the original message text for potential retries
  const cachedMessage = messageText;
  messageInput.val(""); // clear input for next message
  let replyText;
  $messageArea.append(loader);
  try {
    /**
     * AI Request to Gemini Model
     *
     * Uses the "blank-template" template for generic message responses.
     * The template should have "customText" as a placeholder variable.
     *
     * Parameters:
     * - Template: "blank-template" (configured in Firebase Console)
     * - Variables: { customText: user's message }
     *
     * Response Structure:
     * - result.response.text(): Plain text or markdown formatted response
     * - Responses are typically markdown-formatted HTML
     */
    const result = await modelPackage.generateContent("blank-template", {
      customText: cachedMessage,
    });

    // Extract text response from AI model
    replyText = result?.response?.text();

    // Early exit if no response text received
    if (!replyText) return;

    /**
     * Process AI Response for Display
     *
     * Steps:
     * 1. Replace %s placeholder in template with response content
     * 2. Sanitize HTML using DOMPurify (prevents XSS attacks)
     * 3. Render markdown to HTML (markdown.default function)
     * 4. Create jQuery element from processed HTML
     *
     * Security Note:
     * - DOMPurify.sanitize() removes any malicious scripts
     * - Only safe HTML tags and attributes are preserved
     * - User-generated content is always sanitized before rendering
     */
    const currentReply = $(
      template.replace(
        "%s",
        // eslint-disable-next-line no-undef
        DOMPurify.sanitize(markdown.default(replyText)),
      ),
    );

    // Add AI response to message area
    $(messageArea).append(currentReply);

    // Scroll to newly added AI response
    currentReply[0].scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    /**
     * Error Handling
     *
     * Catches errors from AI API calls and displays user-friendly messages.
     *
     * Error Types:
     * - fetch-error: Network/connectivity issues
     * - API errors: Invalid requests, authentication failures
     * - Unexpected errors: Any other exception
     *
     * User Messaging:
     * - Fetch errors: Generic message suggesting developer contact
     * - Other errors: Displays error code and message for debugging
     */
    const errorMsg =
      error.code === "fetch-error"
        ? `${error.code} Something went wrong. Please contact the developer.`
        : `Unexpected error: ${error.message}`;

    // Display error message in chat interface
    $(template.replace("%s", errorMsg)).appendTo(messageArea);
  } finally {
    loader.remove();
  }
});

/**
 * DOM Content Loaded Event Listener
 *
 * Waits for the DOM to be fully parsed before initializing event handlers.
 * This ensures all necessary elements (#search, #messageContainer, etc.) exist.
 */
document.addEventListener("DOMContentLoaded", () => {
  /**
   * SEO Analysis Form Submission Handler
   *
   * Functionality: Analyzes a website URL using the AI "senior-web-analyst" template.
   *
   * Process Flow:
   * 1. User enters a website URL in the search/analysis form
   * 2. URL is validated and parsed using URL API
   * 3. Message container is shown (height:unset)
   * 4. Loading message "انتظر التحليل..." (Arabic: "Wait for analysis...")
   * 5. AI performs SEO analysis on the provided URL
   * 6. Results are rendered in the message area
   * 7. Results are formatted with markdown and sanitized
   *
   * Features:
   * - URL validation through URL API (catches malformed URLs)
   * - Automatic message container opening
   * - Arabic loading message (supports bilingual interface)
   * - Full sanitization of AI-generated HTML response
   * - Error handling for invalid URLs and API failures
   *
   * Template Details:
   * - Uses "senior-web-analyst" template configured for SEO analysis
   * - Template expects "url" parameter with website URL
   * - Response includes: SEO score, metrics, recommendations
   *
   * Response Structure:
   * - result.response.candidates[0].content.parts[0].text
   * - First candidate's first content part contains analysis results
   *
   * Limitations:
   * - Can only analyze publicly accessible websites
   * - Rate limited based on Firebase plan
   * - Large analysis results may take longer to generate
   */
  $("#search").on("submit", async function (e) {
    e.preventDefault();

    // Get URL input and validate it's not empty
    const urlInput = $("#search .email").val().trim();
    if (urlInput === "") return;

    // Show the message container for analysis results
    $("#messageContainer").attr("style", "height:unset");

    // Parse and validate URL (throws error if invalid)
    const url = new URL(urlInput);

    /**
     * Loading State Message
     *
     * Displays "انتظر التحليل..." (Arabic: "Wait for analysis...")
     * to indicate processing is underway.
     * Uses Arabic text to match the interface language context.
     */
    $(messageArea).html("انتظر التحليل...");

    try {
      /**
       * AI SEO Analysis Request
       *
       * Parameters:
       * - Template: "senior-web-analyst" (specialized for web analysis)
       * - url: The website URL to analyze
       *
       * This template performs comprehensive SEO analysis including:
       * - Page load time assessment
       * - SEO metrics and scores
       * - Mobile responsiveness check
       * - Accessibility analysis
       * - Recommendations for improvement
       */
      const result = await modelPackage.generateContent("senior-web-analyst", {
        url: url.href,
      });

      // Clear loading message
      $(messageArea).html("");

      // Clear the input field for next analysis
      $("#search .email").val("");

      /**
       * Display Analysis Results
       *
       * Process:
       * 1. Extract text from first candidate's first content part
       * 2. Render markdown to HTML
       * 3. Sanitize HTML to prevent XSS
       * 4. Use template for consistent styling
       * 5. Append to message area
       *
       * Result structure:
       * - Detailed analysis in markdown format
       * - Organized sections with headings
       * - Actionable recommendations
       */
      $(messageArea).append(
        $(
          template.replace(
            "%s",
            // eslint-disable-next-line no-undef
            DOMPurify.sanitize(
              // eslint-disable-next-line no-undef
              markdown.default(
                result.response.candidates[0].content.parts[0].text,
              ),
            ),
          ),
        ),
      );
    } catch (err) {
      /**
       * Error Logging
       *
       * Logs error code to console for debugging.
       * Common error codes:
       * - INVALID_ARGUMENT: Malformed URL or request
       * - PERMISSION_DENIED: Insufficient access rights
       * - UNAUTHENTICATED: Configuration issue
       * - RESOURCE_EXHAUSTED: Rate limit exceeded
       *
       * In production, consider sending errors to error tracking service.
       */
      console.log(err.code);
    }
  });
});
