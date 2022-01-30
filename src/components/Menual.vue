<template>
  <div class="manual section block" id="menual" >
    <div class="main_title">
      <h2 data-scroll="toggle(.fromTopIn, .fromTopOut)">세탁요원 이용방법</h2>
      <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
        빨래는 세탁요원에게 맡기고 여유로운 삶을 느껴보세요.
      </p>
    </div>
    <div class="tab_menu">
      <ul class="menu">
        <li>
          <a class="tab active" @click=" step = 0; tabClick = 0; tab1()">1. 서비스 신청</a>
        </li>
        <li>
          <a class="tab" @click=" step = 1; tabClick = 1; tab2()">2. 수거요청</a>
        </li>
        <li>
          <a
            class="tab" @click="step = 2; tabClick = 2; tab3() ">3. 세탁진행</a>
        </li>
        <li>
          <a class="tab" @click="step = 3; tabClick = 3; tab4() ">4. 배달완료</a>
        </li>
        <span class="border"></span>
      </ul>
    </div>
    <!-- 11111111111111111111111111111111111111111111111111111111111-->
    <!--CONTENT1 -->
    <div id="tab1" class="tab-conent items active" v-if="step == 0">
      <div class="step1">
        <p class="step1__title">STEP1</p>
        <p class="step1_title__sub1">나에게 맞는 서비스 종류를 신청하세요.</p>
        <p class="step1_title__sub2">
          프리미엄 세탁, 수선, 오염케어, 천연세제 등 부가 서비스 추가 가능
        </p>
      </div>
      <!--SERVICE -->
      <div class="step1_service">
        <!-- SERVICE1 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_1">개별 클리닉 서비스</p>
            <p class="service__title_sub service_title_sub_1">
              배달완료드라이클리닝뿐만 아니라 웨트클리닝까지. 개별 품목의 권장된
              케어라벨에 따라 세탁하고, 오염 제거를 위한 다양한 케어가
              포함됩니다.
            </p>
          </div>

          <div class="service_img service1_img">
            <img src="../assets/service1.png" alt="서비스1" />
          </div>
        </div>

        <!-- SERVICE2 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_2">생활 빨래 서비스</p>
            <p class="service__title_sub service_title_sub_2">
              봉투에 수건, 양말, 잠옷 같은 빨랫감을 담아주시면 단독 물세탁하고
              보송하게 개어 드립니다
            </p>
          </div>

          <div class="service_img service2_img">
            <img src="../assets/service2.png" alt="서비스2" />
          </div>
        </div>
      </div>
    </div>

    <!--222222222222222222222222222222222222222222222222222222222222222-->
    <!--CONTENT2 -->
    <div id="tab2" class="tab-conent items" data-tab-content v-if="step == 1">
      <div class="step1">
        <p class="step1__title">STEP2</p>
        <p class="step1_title__sub1">나에게 맞는 서비스 종류를 신청하세요.</p>
        <p class="step1_title__sub2">
          프리미엄 세탁, 수선, 오염케어, 천연세제 등 부가 서비스 추가 가능
        </p>
      </div>
      <!--SERVICE-->
      <div class="step1_service">
        <!-- SERVICE1 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_1">개별 클리닉 서비스</p>
            <p class="service__title_sub service_title_sub_1">
              배달완료드라이클리닝뿐만 아니라 웨트클리닝까지. 개별 품목의 권장된
              케어라벨에 따라 세탁하고, 오염 제거를 위한 다양한 케어가
              포함됩니다.
            </p>
          </div>

          <div class="service_img service1_img">
            <img src="../assets/service1.png" alt="서비스1" />
          </div>
        </div>

        <!-- SERVICE2 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_2">생활 빨래 서비스</p>
            <p class="service__title_sub service_title_sub_2">
              봉투에 수건, 양말, 잠옷 같은 빨랫감을 담아주시면 단독 물세탁하고
              보송하게 개어 드립니다
            </p>
          </div>

          <div class="service_img service2_img">
            <img src="../assets/service2.png" alt="서비스2" />
          </div>
        </div>
      </div>
    </div>

    <!--33333333333333333333333333333333333333333333333333333-->
    <!--CONTENT3-->
    <div id="tab3" class="tab-conent items" v-if="step == 2">
      <div class="step1">
        <p class="step1__title">STEP3</p>
        <p class="step1_title__sub1">나에게 맞는 서비스 종류를 신청하세요.</p>
        <p class="step1_title__sub2">
          프리미엄 세탁, 수선, 오염케어, 천연세제 등 부가 서비스 추가 가능
        </p>
      </div>
      <!--SERVICE-->
      <div class="step1_service">
        <!-- SERVICE1 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_1">개별 클리닉 서비스</p>
            <p class="service__title_sub service_title_sub_1">
              배달완료드라이클리닝뿐만 아니라 웨트클리닝까지. 개별 품목의 권장된
              케어라벨에 따라 세탁하고, 오염 제거를 위한 다양한 케어가
              포함됩니다.
            </p>
          </div>

          <div class="service_img service1_img">
            <img src="../assets/service1.png" alt="서비스1" />
          </div>
        </div>

        <!-- SERVICE2 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_2">생활 빨래 서비스</p>
            <p class="service__title_sub service_title_sub_2">
              봉투에 수건, 양말, 잠옷 같은 빨랫감을 담아주시면 단독 물세탁하고
              보송하게 개어 드립니다
            </p>
          </div>

          <div class="service_img service2_img">
            <img src="../assets/service2.png" alt="서비스2" />
          </div>
        </div>
      </div>
    </div>
    <!--444444444444444444444444444444444444444-->
    <!--CONTENT4-->
    <div id="tab4" class="tab-conent items" v-if="step == 3">
      <div class="step1">
        <p class="step1__title">STEP4</p>
        <p class="step1_title__sub1">나에게 맞는 서비스 종류를 신청하세요.</p>
        <p class="step1_title__sub2">
          프리미엄 세탁, 수선, 오염케어, 천연세제 등 부가 서비스 추가 가능
        </p>
      </div>
      <!--SERVICE-->
      <div class="step1_service">
        <!-- SERVICE1 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_1">개별 클리닉 서비스</p>
            <p class="service__title_sub service_title_sub_1">
              배달완료드라이클리닝뿐만 아니라 웨트클리닝까지. 개별 품목의 권장된
              케어라벨에 따라 세탁하고, 오염 제거를 위한 다양한 케어가
              포함됩니다.
            </p>
          </div>

          <div class="service_img service1_img">
            <img src="../assets/service1.png" alt="서비스1" />
          </div>
        </div>

        <!-- SERVICE2 -->
        <div class="service">
          <div class="service__content">
            <p class="service__title service_title_2">생활 빨래 서비스</p>
            <p class="service__title_sub service_title_sub_2">
              봉투에 수건, 양말, 잠옷 같은 빨랫감을 담아주시면 단독 물세탁하고
              보송하게 개어 드립니다
            </p>
          </div>

          <div class="service_img service2_img">
            <img src="../assets/service2.png" alt="서비스2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'lodash'
import { gsap } from "gsap";
import  ScrollTrigger  from  '@terwanerik/scrolltrigger' 

gsap.registerPlugin(ScrollTrigger);


export default {
    data() {
        return {
            step  : 0,
            tabClick : 0,
        }
    },
    methods:{   
        tab1() {
            let border = document.querySelector(".border");
            border.style.transform = 'translateX(0)';
        },
        tab2() {
            let border = document.querySelector(".border");
            border.style.transform = 'translateX(125px)';
        },
        tab3() {
            let border = document.querySelector(".border");
            border.style.transform = 'translateX(245px)';
        },
        tab4() {
            let border = document.querySelector(".border");
            border.style.transform = 'translateX(360px)';
        },
    },
    watch : {
        tabClick(a,b) {
            let tab = document.querySelectorAll('.tab')
            console.log(a);
             tab[a].classList.add("active");
             tab[b].classList.remove("active");
        }
    },
    mounted() {
         const scrollTrigger = new ScrollTrigger()
          scrollTrigger.add('[data-scroll]', {
              toggle: {
                  class: {
                      in: 'fromTopIn',
                      out: 'fromTopOut'
                  }
              }
          })      
    },
}
</script>

<style>
/*manual MENU*/
.manual {
  min-height: 950px;
  background-color: #f6f5ef;
  padding: 60px;
}
.manual .tab_menu {
  width: 500px;
  min-height: 40px;
  position: relative;
  margin-top: 20px;
  margin: auto;
}
.manual .tab_menu .menu {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.manual .tab_menu .menu li {
  padding: 20px;
}
.manual .tab_menu .menu ul {
  position: relative;
  z-index: 1;
}
/*maual menu event*/
.manual .tab.active {
  color: #e9e19e;
}
.manual .tab_menu span.border {
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: #e9e19e;
  left: 45px;
  bottom: 0;
  transition: 0.4s;
}

.manual .tab_menu .menu li a {
  font-size: 15px;
  font-weight: bold;
  /* color : #333; */
}

/*CONTENT*/
.manual .tab-conent {
  min-height: 400px;
  margin-top: 60px;
  text-align: center;
}
.manual .tab-conent .step1 {
  width: 750px;
  text-align: left;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px;
}

.manual .tab-conent .step1 .step1__title {
  font-style: italic;
  font-size: 60px;
  font-weight: 400;
  color: #e9e19e;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-style: italic;
  font-family: "Song Myung", serif;
}

.manual .tab-conent .step1 .step1_title__sub1 {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
}

.manual .tab-conent .step1 .step1_title__sub2 {
  font-size: 13px;
}

/*SERVICE*/

.manual .tab-conent .step1_service {
  display: flex;
  justify-content: center;
  min-height: 10px;
  margin: 10px;
}
.manual .tab-conent .step1_service .service {
  width: 400px;
}

.manual .tab-conent .step1_service .service__content {
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.manual .tab-conent .step1_service .service__content .service__title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.manual .tab-conent .step1_service .service__content .service__title_sub {
  font-size: 15px;
  line-height: 23px;
}

.manual .tab-conent .step1_service .service_img {
  display: flex;
  width: 100%;
  justify-content: center;
}
.manual .tab-conent .step1_service .service_img img {
  width: 90%;
  border-radius: 10px;
}
/*tab-content event */
.manual .items {
  position: relative;
  transition: 0.5s;
}
.manual .items.active {
  display: block;
}
/*scroll text event*/
.fromTopIn
{
    transition: transform 1.0s ease, opacity 1.0s ease;
    transform: translate(0,0);
    opacity: 1.0;
}

.fromTopOut
{
    transition: transform 1.0s ease, opacity 1.0s ease;
    
    transform: translate(0,-70px);
    opacity: 0.0;
}
</style>