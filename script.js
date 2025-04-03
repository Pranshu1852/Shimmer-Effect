class Shimmer {
    constructor(element, timer) {
        this.element = element;
        this.timer = timer;
    }
    shimmerEffect() {
        const effectElement = document.querySelector(this.element);
        if (!document.getElementById('style-shimmer')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'style-shimmer';
            styleElement.innerHTML = `@keyframes color {
          0%{
            background-color: #DBDBDB;
          }
          100%{
            background-color: #A0A0A0;
          }
        }
          .shimmer-effect{
              animation: color 1s ease-in-out infinite alternate;
           }`;
            document.head.appendChild(styleElement);
        }
        effectElement.classList.add('shimmer-effect');
        if (this.timer) {
            setTimeout(() => {
                this.removeShimmer();
            }, this.timer);
        }
    }
    removeShimmer() {
        const effectElement = document.querySelector(this.element);
        effectElement.classList.remove('shimmer-effect');
    }
}
export default Shimmer;
