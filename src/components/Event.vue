<template>
<!--event area -->
   <div class="events section" id="event" >
    <div class="main_title">
      <h2 data-scroll="toggle(.fromTopIn, .fromTopOut)">세탁요원 이벤트</h2>
      <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
        세탁요원이 진행하는 다양한 이벤트 
      </p>
    </div>
    <!-- 11111111111111111111111111111111111111111111111111111111111-->
    <!--CONTENT1 -->
    <div id="tab1" class="tab-conent items active">
      <!--SERVICE -->
      <div class="step1_event">
        <!-- SERVICE1 -->
        <div class="event">
            <div class="event__content">        
              <div class="event_img">
                <img src="../assets/event1.png" alt="이벤트1" />
              </div>
              <p class="event__title">[이벤트] 사전가입만 해도 세탁지원금 1만원!</p>
            </div>
        </div>

      <!-- SERVICE2 -->
        <div class="event">
            <div class="event__content">        
              <div class="event_img">
                <img src="../assets/event2.png" alt="이벤트2" />
              </div>
              <p class="event__title">[이벤트] 신규 가입 고객 누구나 5천원!sadsad</p>
            </div>
        </div>
        <!-- SERVICE2 -->
        <div class="event">
            <div class="event__content">        
              <div class="event_img">
                <img src="../assets/event3.png" alt="이벤트2" />
              </div>
              <p class="event__title">[이벤트] 친구초대 이벤트</p>
            </div>
        </div>

        <!-- SERVICE2 -->
        <div class="event">
            <div class="event__content">        
              <div class="event_img">
                <img src="../assets/event4.png" alt="이벤트2" />
              </div>
              <p class="event__title">[캠페인] 런드리고 환경 캠페인</p>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  components: {  },


}
</script>

<style>
/*event MENU*/
.events {
  min-height: 750px;
  background-color: #f6f5ef;
  padding: 60px;
}

/*CONTENT*/
.events .tab-conent {
  min-height: 400px;
  text-align: center;
}


/*SERVICE*/

.events .tab-conent .step1_event {
    display: flex;
    justify-content: center;
    min-height: 10px;
    margin: 10px auto;
    flex-wrap: wrap;
    width: 1000px;
}
.events .tab-conent .step1_event .event {
  width: 400px;
}

.events .tab-conent .step1_event .event__content {
  min-height: 150px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.events .tab-conent .step1_event .event__content .event__title {
  margin: 20px auto;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.events .tab-conent .step1_event .event_img{
  display: flex;
  width: 100%;
  justify-content: center;
}
.events .tab-conent .step1_event .event_img img:hover{
      transform: scale(1.05); 
}
.events .tab-conent .step1_event .event_img img {
  width: 90%;
  border-radius: 10px;
  cursor: pointer;
}
/*tab-content event */
.events .items {
  position: relative;
  transition: 0.5s;
}
.events .items.active {
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