/**
 * Mobile Navigation Menu Toggler Module
 * 
 * Description: Handles responsive mobile navigation menu functionality.
 * Provides a toggle mechanism for opening/closing the navigation menu on mobile devices
 * and automatically closing it when clicking outside the menu area.
 * 
 * Features:
 * - Click to toggle navigation menu visibility
 * - Auto-close menu when clicking outside
 * - Auto-close menu when navigating to a page section
 * - Smooth transitions for accessibility
 * - Mobile-first design pattern
 * 
 * Dependencies:
 * - jQuery 3.x or higher
 * - Bootstrap 5.x (for modal-like menu behavior)
 * 
 * DOM Structure Expected:
 * - .navbar-toggler: Button that triggers menu toggle
 * - .tm-header: Header container with the full menu
 * - #tm-header: Header element ID
 * - #tm-nav .nav-link: Navigation links within menu
 * 
 * Classes Used:
 * - show: Visibility class for menu display state
 * 
 * This module follows the module pattern to avoid polluting global namespace.
 */

const $ = require("jquery");

/**
 * Navbar Toggler Click Handler
 * 
 * Functionality: Opens/closes the navigation menu when the hamburger/menu button is clicked.
 * 
 * Behavior:
 * - Toggles 'show' class on .tm-header element
 * - The 'show' class controls visibility (typically via CSS display or animation)
 * - e.stopPropagation() prevents event from bubbling to document click handler
 * - Allows controlled menu toggling without immediate closure
 * 
 * User Flow:
 * 1. User clicks .navbar-toggler button
 * 2. Click handler toggles 'show' class
 * 3. CSS transitions animate menu visibility
 * 4. Propagation is stopped to prevent accidental closure
 * 
 * Mobile Breakpoint Context:
 * - This handler is typically active only on mobile/tablet viewports
 * - Desktop menu uses hover states (CSS-based, no JavaScript needed)
 */
$(".navbar-toggler").on("click", function (e) {
  $(".tm-header").toggleClass("show");
  e.stopPropagation();
});

/**
 * Document Click Handler for Menu Closure
 * 
 * Functionality: Automatically closes the navigation menu when user clicks
 * outside of the header area. This is a common UX pattern for mobile menus.
 * 
 * Algorithm:
 * 1. Gets the #tm-header element reference
 * 2. On any document click, checks if click target is inside the header
 * 3. Uses jQuery .has() method to check if clicked element is a descendant
 * 4. If click is outside (#tm-header doesn't contain the target):
 *    - Removes 'show' class to hide the menu
 * 5. If click is inside header: does nothing (allows menu interaction)
 * 
 * Benefits:
 * - User can click navigation items without the menu auto-closing
 * - Menu closes on any click outside (intuitive behavior)
 * - Prevents menu from staying open indefinitely
 * - Follows web standard UX patterns (like dropdown menus, modals)
 * 
 * Technical Note:
 * - Uses e.target to get the actual clicked element (not bubbled)
 * - .has() checks if header contains the target element in its tree
 * - Event delegation allows single handler for all clicks
 * 
 * Mobile UX:
 * - Critical for small screen navigation
 * - Prevents accidental menu open state blocking content
 * - Improves overall app usability on touch devices
 */
$("html").on("click", function (e) {
  const header = $("#tm-header");

  if (!header.has(e.target)) {
    $(".tm-header").removeClass("show");
  }
});

/**
 * Navigation Link Click Handler
 * 
 * Functionality: Closes the menu whenever a user clicks on a navigation link.
 * This allows users to navigate and have the menu automatically close,
 * clearing the screen for content viewing.
 * 
 * Selector Details:
 * - #tm-nav: Navigation container ID
 * - .nav-link: Bootstrap class for navigation links
 * - Targets any <a> with class nav-link inside #tm-nav
 * 
 * Behavior:
 * 1. User clicks on a navigation link
 * 2. Click handler is triggered
 * 3. 'show' class is removed from .tm-header
 * 4. Menu slides/fades out (animation controlled by CSS)
 * 5. Page content becomes fully visible
 * 6. Original link navigation proceeds normally
 * 
 * User Experience:
 * - Seamless navigation workflow
 * - Menu automatically clears when content is selected
 * - Prevents multiple clicks needed to navigate
 * - Typical mobile app behavior users expect
 * 
 * Technical Note:
 * - This handler doesn't prevent default link behavior
 * - Allows normal hyperlink navigation to proceed
 * - Just manages menu visibility as side effect
 * 
 * Integration with Router:
 * - Works with any routing system (static, SPA, server-side)
 * - Fires before route change (menu closes immediately)
 * - Compatible with smooth scroll navigation
 */
$("#tm-nav .nav-link").on("click", function () {
  $(".tm-header").removeClass("show");
});
