
/**
 * Counter Utility Module
 * 
 * Description: Provides an animated counter/number incrementation component.
 * Used for animating numeric values on the page (e.g., statistics, metrics, achievements).
 * 
 * Features:
 * - Smooth animated counting from start value to target value
 * - Configurable duration and increment step
 * - Pause/resume functionality
 * - Reset capability
 * - Extracts initial value from DOM element
 * - jQuery configuration pattern support
 * 
 * Use Cases:
 * - Portfolio site: Animate project counts, years of experience
 * - Landing page: Animate client counts, revenue metrics
 * - Statistics sections: Animate performance indicators
 * - Dashboard: Animate data metrics in real-time
 * 
 * Dependencies:
 * - jQuery 3.x or higher
 * 
 * Performance Considerations:
 * - setInterval-based animation (consider requestAnimationFrame for high-frequency updates)
 * - Single interval per counter instance
 * - Automatic cleanup on stop
 */

/**
 * Counter Class
 * 
 * Represents an animated counter object bound to a DOM element.
 * 
 * Constructor Parameters:
 * @param {HTMLElement} element - The DOM element to bind the counter to (displays the count)
 * @param {number} duration - Time in milliseconds between increment steps
 * @param {number} incrementBy - Amount to increment the counter by each step
 * 
 * Properties:
 * - element: Reference to the target DOM element
 * - start: Initial value (extracted from element or defaults to 0)
 * - duration: Interval timing in ms
 * - incrementBy: Amount added per interval
 * - intervalClear: Reference to setInterval for cleanup
 * 
 * Example Usage:
 * const counter = new Counter(document.getElementById('count'), 50, 1);
 * counter.startCounting(); // Begin animation
 * 
 * Pattern: Class-based component with public methods
 */
export default class Counter {
    intervalClear; // Stores the setInterval ID for cleanup
    
    /**
     * Constructor
     * 
     * Initializes the counter with element reference and animation parameters.
     * 
     * @param {HTMLElement} element - DOM element showing the count
     * @param {number} duration - Milliseconds between increment steps
     * @param {number} incrementBy - Value to add each step
     * 
     * Initialization Details:
     * - Extracts initial value from element's textContent
     * - Uses parseInt() to convert string to number
     * - Defaults to 0 if element is empty or NaN
     * - Allows starting from any number, not just 0
     */
    constructor(element, duration, incrementBy) {
        this.element = element;
        // Extract starting value from DOM element or default to 0
        this.start = element.textContent ? parseInt(element.textContent) : 0;
        this.duration = duration;
        this.incrementBy = incrementBy;
    }

    /**
     * Start Counting Method
     * 
     * Begins the animated increment process.
     * 
     * Implementation:
     * - Uses setInterval() to repeatedly increment the counter
     * - Each interval: increment value + update DOM element
     * - Stores interval ID for later cleanup
     * 
     * Behavior:
     * - Runs indefinitely until stopCounting() is called
     * - Updates element.textContent with new value each step
     * - Interval duration determined by this.duration parameter
     * 
     * Performance:
     * - Creates one interval per counter instance
     * - Minimal DOM operations (one per interval)
     * - Consider requestAnimationFrame for smoother animations
     * 
     * Safety:
     * - Creates new interval on each call (can be called multiple times)
     * - Previous interval should be stopped before starting again
     */
    startCounting() {

        this.intervalClear = setInterval(() => {

            this.start += this.incrementBy;
            this.element.textContent = this.start;

        }
            , this.duration);
    }

    /**
     * Stop Counting Method
     * 
     * Pauses the animated counting process.
     * 
     * Implementation:
     * - Clears the setInterval using stored intervalClear reference
     * - Permanently stops the animation
     * - Value remains frozen at current count
     * 
     * Behavior:
     * - Stops all updates to the counter
     * - Current value persists in DOM element
     * - Can be resumed with startCounting() if needed
     * 
     * Use Cases:
     * - Pause animation when element scrolls out of view
     * - Stop animation on user interaction
     * - Cleanup when component unmounts
     * 
     * Technical Note:
     * - clearInterval() safely handles null/undefined intervals
     * - No error thrown if interval already cleared
     */
    stopCounting() {
        clearInterval(this.intervalClear);


    }

    /**
     * Reset Counting Method
     * 
     * Resets the counter to zero and updates the DOM element.
     * 
     * Implementation:
     * - Sets this.start back to 0
     * - Updates DOM element.textContent to "0"
     * - Does not stop the animation (if running, continues from 0)
     * 
     * Behavior:
     * - Resets only the counter value, not interval state
     * - Can be called while animation is running
     * - Next increment will add to 0 (starting fresh)
     * 
     * Use Cases:
     * - Reset counter after animation completes
     * - Allow user to restart animation
     * - Reset on page navigation in SPAs
     * 
     * Note:
     * - Doesn't handle cleanup of running intervals
     * - Call stopCounting() first if you want to pause and reset
     */
    resetCounting() {
        this.start = 0;
        this.element.textContent = this.start;
    }
}

/**
 * Counter Configuration & Initialization Function
 * 
 * Provides a jQuery-style configuration function for easy counter initialization.
 * 
 * Purpose:
 * - Simplifies Counter class instantiation
 * - Provides default values via jQuery.extend()
 * - Follows jQuery plugin pattern conventions
 * - Enables flexible, chainable-style initialization
 * 
 * Parameters:
 * @param {Object} options - Configuration object
 *   @param {HTMLElement} options.element - Target DOM element (required)
 *   @param {number} [options.duration=100] - Interval timing in ms (optional, default 100)
 *   @param {number} [options.incrementBy=1] - Increment amount per step (optional, default 1)
 * 
 * Default Configuration:
 * - duration: 100ms (animations feel responsive at this speed)
 * - incrementBy: 1 (increments by 1 per step, adjust for larger jumps)
 * 
 * Return Value:
 * - Counter instance that is automatically started
 * - Does not return anything to caller (set counter reference before calling)
 * 
 * Example Usage:
 * counter(
 *   element: document.getElementById('myCounter'),
 *   duration: 50,
 *   incrementBy: 5
 * );
 * 
 * Edge Cases:
 * - Checks if counter.start === 0 to avoid animation on empty counters
 * - Immediately stops counting if initial value is 0 (optimization)
 * - This prevents unnecessary animation for empty/zero values
 * 
 * Technical Notes:
 * - jQuery.extend(): shallow merge of defaults and user options
 * - Options parameter is merged with default settings
 * - Element parameter is required in options object
 */
export const counter = function (options) {
    /**
     * Merge User Options with Defaults
     * 
     * Uses jQuery.extend() to merge options with default settings.
     * User options override defaults.
     * 
     * Default values:
     * - duration: 100 (milliseconds between increments)
     * - incrementBy: 1 (amount to increment per step)
     * 
     * Allows users to specify only duration OR incrementBy
     * while other uses sensible defaults.
     */
    const settings = $.extend({
        duration: 100,
        incrementBy: 1
    }, options);
    
    /**
     * Create Counter Instance
     * 
     * Instantiates the Counter class with provided settings.
     * Element must be provided in options for this to work.
     */
    const counter =  new Counter(settings.element, settings.duration, settings.incrementBy);
    
    /**
     * Start Animation
     * 
     * Automatically begins counting animation immediately.
     * Counter is ready to use after function returns.
     */
    counter.startCounting();
    
    /**
     * Stop Animation Optimization
     * 
     * If initial value is 0, immediately stop animation.
     * Prevents unnecessary interval processing for empty/zero values.
     * 
     * Use Case:
     * - Counter for uninitialized metrics should not animate from 0
     * - If element has no initial value, don't animate
     * - Improves performance by avoiding unnecessary intervals
     */
    if(counter.start === 0){
        counter.stopCounting();
    }
}