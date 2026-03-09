/**
 * Main Application Entry Point - SEO Space
 * 
 * Description: This is the primary JavaScript file for the SEO Space website. It handles:
 * - Navigation and scroll-based interactions
 * - Header background changes on scroll
 * - Smooth scrolling animations
 * - Mobile menu toggling
 * - Theme switching (dark/light mode)
 * - AI Assistant modal integration
 * - Newsletter popup management
 * - Active navigation tracking based on scroll position
 * 
 * Dependencies:
 * - jQuery (for DOM manipulation and animations)
 * - Firebase/AI integration (fbase.js)
 * - Menu toggle functionality (menu-toggler.js)
 * - Bootstrap (for modal functionality)
 * 
 * Author: Mostafa Lotfy
 * Version: 2.3.0
 */

require("./fbase.js");
require("./menu-toggler.js")
const $ = require("jquery");

/**
 * Main jQuery IIFE Wrapper
 * Using Immediately Invoked Function Expression to avoid global namespace pollution
 */
(function ($) {
  "use strict";

  /**
   * Header Background Toggle on Scroll
   * 
   * Functionality: Adds a background color to the header when the user scrolls past
   * the header-text element height plus the header height itself.
   * 
   * - Monitors window scroll position continuously
   * - Calculates the trigger point based on header-text and header heights
   * - Adds 'background-header' class to apply styling when scrolled
   * - Removes the class when scrolled back up
   */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  /**
   * Mobile Menu Dropdown Toggle
   * 
   * Functionality: Toggles the navigation menu visibility on mobile/tablet devices
   * when the menu trigger button (.menu-trigger) is clicked.
   * 
   * - Checks if menu trigger element exists in the DOM
   * - Toggles 'active' class on the trigger button
   * - Animates the navigation slide toggle with 200ms duration
   * - Provides visual feedback to user about menu state
   */
  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  /**
   * Smooth Scroll Animation for Section Links
   * 
   * Functionality: Implements smooth scrolling navigation to internal page sections.
   * Animates the page scroll to the target element position over 700ms.
   * 
   * Behavior:
   * - Targets links with hash attributes pointing to internal sections
   * - Only works if the link is on the same page and same domain
   * - Closes mobile navigation menu if viewport width < 991px before scrolling
   * - Provides smooth 700ms animation to target section
   * - Returns false to prevent default link behavior
   */
  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top + 1,
          },
          700,
        );
        return false;
      }
    }
  });

  /**
   * Continuous Scroll Event Listener
   * 
   * Functionality: Attaches the onScroll callback function to run whenever the user
   * scrolls the page. This enables real-time active navigation link updates.
   */
  $(document).on("scroll", onScroll);

  /**
   * Smooth Scroll Handler with Active Link Highlighting
   * 
   * Functionality: Implements smooth scrolling animation and manages active navigation
   * state as the user scrolls through the page.
   * 
   * Features:
   * - Smooth 500ms animation to scroll to target section
   * - Temporarily disables scroll event listener during animation to prevent conflicts
   * - Updates active navigation link styling as user scrolls to each section
   * - Uses "swing" easing for natural motion feel
   * 
   * Browser: Most modern browsers support smooth scrolling behavior
   */
  //smoothscroll
  $('.scroll-to-section a[href^="#"]').not(".dropdown a").on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $(".scroll-to-section a").removeClass("active");

    $(this).addClass("active");

    let target = this.hash;

    target = $(this.hash);
    if(target.length)
    {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top + 1,
        },
        500,
        "swing",
        onScroll
      );
      }
  });


  /**
   * Active Navigation Link Update Function
   * 
   * Functionality: Called during scroll to determine which section is currently in view
   * and updates the active navigation link accordingly.
   * 
   * Algorithm:
   * 1. Gets current scroll position
   * 2. Iterates through all navigation links (excluding dropdown items)
   * 3. Gets the href attribute and finds the corresponding DOM element
   * 4. Calculates element's top and bottom position on viewport
   * 5. Checks if scroll position falls within the element's boundaries
   * 6. Adds 'active' class to the currently visible section's link
   * 7. Removes 'active' class from all other links
   * 
   * Edge Cases Handled:
   * - Skips links with empty, placeholder (#), or undefined href attributes
   * - Only targets main navigation links, not dropdown items
   * - Uses outerHeight() to account for padding/margins
   */
  function onScroll() {
    var scrollPos = $(document).scrollTop();
    $(".nav .scroll-to-section a").not(".dropdown").each(function () {
    var currLink = $(this);
    const href = currLink.attr("href");
    // Skip empty or placeholder hrefs 
    if (href === "#" || href === "" || href === undefined) return
    const refElement = $(href);
    //console.log(href)
    var refTop = refElement.position().top;
    var refBottom = refTop + refElement.outerHeight();

    if (refTop <= scrollPos && refBottom > scrollPos) {
      $(".nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });

  }

  /**
   * Page Loading Animation Handler
   * 
   * Functionality: Triggered when the entire page (including all images, styles, etc.)
   * has finished loading. Fades out or removes the preloader overlay.
   * 
   * Animation Details:
   * - Waits for all page resources to load completely (not just DOM parsing)
   * - Adds 'loaded' class to the #js-preloader element
   * - CSS should define how the 'loaded' class hides the preloader (opacity, display, etc.)
   * - Improves user experience by showing content only when ready
   */
  // Page loading animation
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  /**
   * Mobile Navigation Submenu Handler
   * 
   * Functionality: Manages submenu toggle behavior specifically for mobile devices.
   * Allows users to open/close dropdown submenus by clicking on submenu items.
   * 
   * Behavior:
   * - Checks viewport width (mobile breakpoint is 767px)
   * - On mobile: Clicking a submenu toggles its child <ul> visibility
   * - Closes other open submenus when opening a new one
   * - On desktop: Submenus are typically handled by CSS hover states
   * 
   * Responsive Design:
   * - Only affects screens smaller than 768px width
   * - Adapts to mobile-first design approach
   */
  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }

  mobileNav();

  /**
   * Theme Toggle Functionality (Dark/Light Mode)
   * 
   * Functionality: Allows users to switch between dark and light color themes.
   * 
   * Implementation Details:
   * - Toggles 'data-theme' attribute between 'light' and 'dark' states
   * - Also toggles 'data-bs-theme' for Bootstrap compatibility
   * - Updates both attributes simultaneously to maintain consistency
   * - CSS variables should respect the data-theme attribute for color changes
   * 
   * User Experience:
   * - User preference can be saved to localStorage (currently not implemented)
   * - Instant visual feedback when toggling theme
   * - Works with all color palette options (cranberries, navy, green, etc.)
   */
  $("#theme-toggle").on("click", function () {
    $("body").attr(
      "data-theme",
      $("body").attr("data-theme") === "light" ? "dark" : "light",
    );
    $("body").attr(
      "data-bs-theme",
      $("body").attr("data-bs-theme") === "light" ? "dark" : "light",
    );
  });
  
  /**
   * AI Assistant Modal Open Handler
   * 
   * Functionality: Opens the message container and plays an audio notification
   * when the user clicks the AI assistant button.
   * 
   * Features:
   * - Plays 'open.wav' sound effect for audio feedback
   * - Sets message container height to 'unset' (auto) to reveal the chatbox
   * - Provides visual and audio confirmation of action
   * 
   * Dependencies:
   * - HTML Audio API (Web Audio)
   * - Firebase AI integration (fbase.js) for chat functionality
   * - Message container styling (CSS)
   */
  $("#assistant").on("click", function () {
    const audio = new Audio("./assets/sounds/open.wav");
    if($("#messageContainer").attr("style") != "height:0") return ;
    audio.play();
    $("#messageContainer").attr("style", "height:unset");
    
  });
  setTimeout(()=>{
    const audio = new Audio("./assets/sounds/open.wav");
    const container = $("#messageContainer");

    console.log(container.attr("style"))
    if(container.attr("style") != "height:0") return ;
    container.attr("style","height:unset")
    audio.play()
    const lang = document.documentElement.lang
    
    if (lang == "ar")
    {
      $("#messageArea").append(`<div class="col-12"><p class="rounded bg-secondary-subtle p-1 text-center  text-break col-12 my-3"><b>مرحبا بك. انا بوت ذكي😍 . كيف يمكنني مساعدتك؟ </b></p></div`)
    }else if (lang == "en")
    {
      $("#messageArea").append($(`<div class="col-12"><p class="rounded bg-secondary-subtle p-1 text-center  text-break col-12 my-3"><b>Hello 😍 .Iam Ai Assistant. Tell Me What do You need? </b></p> `))
    }
    
  },3 * 1000)
  /**
   * AI Assistant Modal Close Handler
   * 
   * Functionality: Closes the message container and plays a close sound
   * when the user clicks the close button.
   * 
   * Features:
   * - Plays 'close.mp3' sound effect for audio feedback
   * - Sets message container height to 0 (hides the chatbox)
   * - Provides consistent audio feedback with open action
   * 
   * Note: The 'close.mp3' file should be optimized for web delivery
   */
  $("#closeMessageContainer").on("click", function () {
    const audio = new Audio("./assets/sounds/close.mp3");
    audio.play();
    $("#messageContainer").attr("style", "height:0");
  });

  /**
   * Newsletter Subscription Modal Auto-Popup
   * 
   * Functionality: Automatically displays a newsletter subscription modal after
   * the user has been on the page for a certain duration.
   * 
   * Timing Details:
   * - Triggers after 5 * 30 * 1000 milliseconds = 150 seconds (2.5 minutes)
   * - Gives users time to explore content before showing promotional modal
   * - Uses Bootstrap Modal API for display management
   * - Modal ID: '#newsletter'
   * 
   * User Experience:
   * - Non-intrusive: Waits for user engagement before showing popup
   * - Bootstrap native: Uses standard Bootstrap modal functionality
   * - Closeable: Users can dismiss the modal using standard Bootstrap controls
   * 
   * Customization:
   * - Adjust timeout value (5*30*1000) to change when modal appears
   * - Modify modal HTML in Pug templates to change content
   */
  setTimeout(()=>{
  // eslint-disable-next-line no-undef
  const newsletterModal = new bootstrap.Modal("#newsletter")
  newsletterModal.show()

  },5*30*1000)

  /**
   * End of main.js IIFE
   * Closes the jQuery namespace wrapper to prevent global pollution
   */
})($);