(function Animate_Eimk(win,doc){
    let container=document.querySelector('.container');
    let body=document.querySelector('body')
    let btn=document.querySelector('#btn')
    let squares=document.querySelector('.squares')
    let textBox=[...document.querySelectorAll('.textBox')]

    const random=(max,min)=> Math.random() *  (max-min) + min
  

    function button(){
        for(let i=0;i<textBox.length;i++){
            if(textBox[0].value==="" || textBox[1].value===""){
                container.classList.add('nono')
                console.log(container.classList.contains('nono'))
                container.addEventListener('animationend',(event)=>{
                    if(event.animationName==='nono'){ 
                        container.classList.remove('nono')
                    }
                },false)
                
            }
            else{
                container.classList.add('button')
            }
        }
      
    }

    btn.addEventListener('click',button,false)

    container.addEventListener('animationstart',(event)=>{ 
        if(event.animationName==="down"){
            body.style.overflow="hidden"
        }
    },false)

    container.addEventListener('animationend',(event)=>{
        if(event.animationName==='down'){ 
            body.style.overflow="none"; 
            container.classList.remove('button')  
        }
    },false)

    



     

    for(let i=0;i<11;i++){
        let li=document.createElement('li')
        
        let largura=Math.floor(random(120,10))
        let position=Math.floor(random(99,1))
        let delay=Math.floor(random(5,0.1))
        let duration=Math.floor(random(24,12))


     
        li.style.width=`${largura}px`
        li.style.height=`${largura}px`
        li.style.bottom=`${-largura}px`
        li.style.left=`${position}%`
        li.style.animationDuration=`${duration}s`
        li.style.animationDelay=`${delay}s`
        li.style.animationTimingFunction=`cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

        li.addEventListener('animationstart',(event)=>{
            if(event.animationName==='rotate_')
            body.style.overflow='hidden'
        },false)
        li.addEventListener('animationend',(event)=>{
            if(event.animationName==='rotate_')
            body.style.overflow='hidden'
        },false)

        squares.appendChild(li)
    }

    

    
    
})(window,document)