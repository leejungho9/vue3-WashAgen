<template>
  <Header />
  <!--BANNER--> <div class="banner section"/>
  <Menual/>
  <Service/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Menual from './components/Menual.vue'
import Service from './components/Service.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,Menual,Service,Footer
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

/*BANNER*/
.banner {
    background-image: url("./assets/banner3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    width:100%;
    height: 800px;
    position :relative
}
.banner h2 {
    color : rgb(58, 58, 58);
    font-size: 50px;
    font-weight: 700;
    position: absolute;
    left : 20%;
    top: 30%;
    text-shadow:1px 1px 3px #333;
}
.banner span {
    color : black;
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    left : 20%;
    top: 40%;
    line-height: 1.5;
    text-shadow:1px 1px 1px #333;
}


</style>
