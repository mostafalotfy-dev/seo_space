

export default class Counter {
    intervalClear;
    constructor(element, duration,incrementBy) {
        this.element = element;
        this.start = element.textContent ? parseInt(element.textContent) : 0;
        this.duration = duration;
        this.incrementBy = incrementBy;
    }
    startCounting() {

        this.intervalClear = setInterval(() => {

            this.start += this.incrementBy;
            this.element.textContent = this.start;

        }
            , this.duration);
    }

    stopCounting() {
        clearInterval(this.intervalClear);


    }
    resetCounting() {
        this.start = 0;
        this.element.textContent = this.start;
    }
}

export const counter = function (options) {
    const settings = $.extend({
        duration: 100,
        incrementBy: 1
    }, options);
    const counter =  new Counter(settings.element, settings.duration, settings.incrementBy);
    counter.startCounting();
    if(counter.start === 0){
        counter.stopCounting();
    }
}