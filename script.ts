class Shimmer{
    element: string;
    timer: number;
    constructor(element: string,timer: number){
        this.element=element;
        this.timer=timer;
    }

    shimmerEffect(){
        const effectElement=document.querySelector(this.element) as HTMLElement;
        
        if(!document.getElementById('style-shimmer')){
            const styleElement=document.createElement('style');
            styleElement.id='style-shimmer'
            styleElement.innerHTML=`@keyframes color {
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

        if(this.timer){
            setTimeout(()=>{
                this.removeShimmer();
            },this.timer);
        }
    }

    removeShimmer(){
        const effectElement=document.querySelector(this.element) as HTMLElement;
    
        effectElement.classList.remove('shimmer-effect')
    }
}

export default Shimmer;