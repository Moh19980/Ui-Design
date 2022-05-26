
      let btn=document.getElementsByClassName("btn")
      let slide = document.getElementById("slide")
           
            let color= document.getElementById("color");
            let mm=document.getElementsByClassName("mm")

            
      
      btn[0].onclick= function(){
        slide.style.transform="translateX(0px)"
        color.style.backgroundColor=""
        
        for( i=0; i <4;i++){
          btn[i].classList.remove("active")
          
        }
        this.classList.add("active")
      }
      btn[1].onclick= function(){
        slide.style.transform="translateX(-800px)"
      color.style.backgroundColor="gray"
        
        
        for( i=0; i <4;i++){
          btn[i].classList.remove("active")
          
        }
        this.classList.add("active")
      }
      btn[2].onclick= function(){
        slide.style.transform="translateX(-1600px)"
        color.style.backgroundColor=("black")
        
        for( i=0; i <4;i++){
          btn[i].classList.remove("active")
          
        }
        this.classList.add("active")
      }
      btn[3].onclick= function(){
        slide.style.transform="translateX(-2400px)"
        color.style.backgroundColor=("lightblue")
        
        for( i=0; i <4;i++){
          btn[i].classList.remove("active")
        }
        this.classList.add("active")
      }
 