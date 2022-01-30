<template>
  <Menual />
  <Service/>
  <Event />

</template>

<script>
import Menual from './Menual.vue'
import Service from './Service.vue'
import Event from './Event.vue'



export default {
name: 'Home',
  components: {
    Menual,Service,Event
  }, 
  data() {
      return {
          BannerStatus : true
      }
  },
  mounted() {

            window.onload = function(){
                const elm = document.querySelectorAll('.section');
                const elmCount = elm.length;
                elm.forEach(function(item, index){
                        item.addEventListener('mousewheel', function(event){
                        event.preventDefault();
                        let delta = 0;

                        if (!event) event = window.event;
                            if (event.wheelDelta) {
                                delta = event.wheelDelta / 120;
                                if (window.opera) delta = -delta;
                            } 
                        else if (event.detail)
                            delta = -event.detail / 3;

                        let moveTop = window.scrollY;
                        let elmSelector = elm[index];

                        // wheel down : move to next section
                        if (delta < 0){
                            if (elmSelector !== elmCount-1){
                                try{
                                moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                                }catch(e){
                                    console.log("erorr");
                                }
                            }
                        }
                    
                    // wheel up : move to previous section
                        else {
                            if (elmSelector !== 0){
                                try{
                                moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                                }catch(e){
                                    console.log("erorr");
                                }
                            }
                        }
                        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
                    });
                });
            }
        },
}
</script>

<style>

body{
    font-family: 'Noto Sans KR', sans-serif;
}
/*COMMON*/
ul {
   list-style:none;
}
img {
    display: inline-block;
}

a{
    text-decoration: none;
}

.main_title{
    width: 500px;
    margin: auto;
    min-height: 20px;
    padding: 40px;
    box-sizing: border-box;
}
 .main_title h2 {
    font-size: 25px;
    font-weight: bold;    
    text-align: center;    
    padding: 5px;
    box-sizing: border-box;
}
 .main_title p {
    font-size: 15px;
    text-align: center;    
    padding: 10px;
    box-sizing: border-box;
    
}

</style>