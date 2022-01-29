<template>
  <header>
        <div class="inner">
            <div class="logo">
                <a herf="/">세탁요원</a>
            </div>

            <div class="sub-menu">
                <ul class="menu">
                    <li>
                        <a href="#main_content">이용방법</a>
                    </li>
                    <li>
                        <a href="#main_content2">서비스지역</a>
                    </li>
                    <li>
                        <a href="#">이벤트</a>
                    </li>
                    <li>
                        <a href="#">로그인</a>
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
    methods : {
        
    },

    mounted() {
        this.$nextTick(function () {
            // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
            
            window.addEventListener('scroll', _.throttle(function (){
            console.log(this.scrollY);
            if(scrollY < 740) {
                gsap.to ( document.querySelector('header') , .1, {
                display : 'block',
                background: 'inherit' })
                
            } else {
                gsap.to ( document.querySelector('header'), .1, {
                    backgroundColor : '#999'
            })
                
            }
        }))
        })
    },
   
}
</script>

<style>

/*HEADER*/
header {
    position: fixed;
    width:100%;
    z-index: 1;
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
    bottom: 0;
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