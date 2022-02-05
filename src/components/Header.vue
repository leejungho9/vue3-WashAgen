<template>
  <header>
        <div class="inner">
            <div class="logo" >
                <a href="/"  @click="HomeParams()" >세탁요원</a>
            </div>

            <div class="sub-menu">
                <ul class="menu">
                    <li>
                        <a href="/Menual" @click="MenualParams()">이용방법</a>
                    </li>
                    <li>
                        <a href="/Service" @click="ServiceParams()">서비스지역</a>
                    </li>
                    <li>
                        <a href="/Event" @click="EventParams()">이벤트</a>
                    </li>
                    <li>
                        <a href="/login">로그인</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

</template>

<script>
import { gsap } from "gsap";
import _ from 'lodash';


export default {
    components: {

    },
    data() {
        return {
            headerColor : '',

        }
    },
    props: {
      
    },
    methods: {
        stepUp() {
            this.$emit('stepUp')
        },
        MenualParams() {
         this.$router.push({name : "Menual", params : {mainIs : false }})
        },
        ServiceParams() {
         this.$router.push({name : "Service", params : {mainIs : false }})
        },
        EventParams() {
         this.$router.push({name : "Event", params : {mainIs : false }})
        },
        HomeParams() {
         this.$router.push({name : "Home" , params : {mainIs : true }})
        }
    },
    mounted() {
        this.$nextTick(function () {
            // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
            const header = document.querySelector('header');
            header.style.backgroundColor = "transparent"

            window.addEventListener('scroll', _.throttle(function (){

            console.log(this.scrollY);
     
                if(scrollY < 740) {
                    gsap.to ( header , .1, {
                    display : 'block',
                    backgroundColor:'transparent'})
                    
                } else {
                    gsap.to ( header , .1, {
                        backgroundColor : '#999'
                })
                    
                }
            }))
        })
    },

}
</script>

<style scope>

/*HEADER*/
header {
    position: fixed;
    width:100%;
    z-index: 2;

}

header .inner {
    position: relative;
    width: 1100px;
    height: 60px;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
}
.logo{
    display: flex;
    position: absolute;
    top: 0;
    margin: 0;
    bottom: 0;
    align-items: center;
}
header .inner .logo a  {
    font-size : 25px;
    font-weight: bold;
    color: white;
    cursor: pointer;  
} 

header .inner .sub-menu ul{
    display: flex;
    position: absolute;
    align-items: center;
    right: 0;
    top: 0;
    bottom: 10px;
    margin: auto 0;
}

header .inner .sub-menu .menu li{
    padding: 20px;
    box-sizing: border-box;
}

header .inner .sub-menu .menu li a{
    color : white;
    font-size : 13px;
    font-weight: bold;
}
</style>