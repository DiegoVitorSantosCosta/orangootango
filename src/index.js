class Animationn{
    constructor(){
        this.todos = document.querySelector('.todos')
        this.containerFixed = document.querySelector("[data-js='anima']")
        this.main = document.querySelector('.top')
        this.closeEvents = document.querySelectorAll('.closeEvent')
        this.begin()
 }
 // FUNÇÃO ONDE TUDO SE INICIA

 // Melhorar o codico !!!
 begin(){
    this.addEfect(this.main,'slideLeft')
    this.clicks(this.todos,this.containerFixed,'visible','none')
    this.closeEvents.forEach(e=>{

        e.addEventListener('click',()=>{
            
            this.main.classList.add('slideLeft')
            this.main.classList.remove('slideRigth')
            this.containerFixed.classList.remove('visible')
            this.containerFixed.classList.add('none')
        })

        
    })

 }
 // FUNÇÃO PARA OS CLICKS
 clicks(click,elementForEvent,addEfect,rmEfect){

     click.addEventListener('click',()=>{
         
        this.addEfect(elementForEvent,addEfect,rmEfect)
        this.addEfect(this.main,'slideRigth','slideLeft')
        
     })
 }
 // FUNÇÃO PARA ADICIONAR E REMOVER UM EVENTO
 addEfect(element,efectAdd,efectRemove){
     element.classList.add(efectAdd)
     element.classList.remove(efectRemove)
 }

}


class Carousel{
    constructor(){
        this.next = document.querySelector("[data-js='carousel__button--next']")
        this.prev = document.querySelector("[data-js='carousel__button--prev']")
        this.slides = document.querySelectorAll("[data-js='carousel__item']")
        this.count = 0
        this.begin()
    }
    begin(){
  this.clicks(this.next)
  this.clicks(this.prev)
        
        
    }
    extractAddEfect(elements,efect){
        elements.forEach(element=>{
            element.classList.remove(efect)
        })
    
    }
    clicks(click){
        click.addEventListener('click',()=>{
            if(click.classList == 'next'){

                if(this.slides.length -1 === this.count ){
                    this.count = 0
                   
                }else{
                    this.count ++
                   
                }
    
                  }
                  else{
    
                    if(this.count === 0 ){
                        
                        this.count = this.slides.length -1
                       
                    }else{
                        this.count --
                       
                    }


                    
                }
                this.extractAddEfect(this.slides,'carousel__item--visible')
           
                this.slides[this.count].classList.add('carousel__item--visible')
                
        })
        
      
      
    }
}
window.carousel = new Carousel()
window.animations = new Animationn()