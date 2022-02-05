<template>
  <div class="header" v-if=" mainIs == false"></div>
  <!--service area -->
    <div class="service-area section" id="service" >
        <div class="main_title" >
            <h2  data-scroll="toggle(.fromTopIn, .fromTopOut)">세탁요원 서비스지역</h2>
            <p data-scroll="toggle(.fromTopIn, .fromTopOut)">세요권</p>
        </div>
    <!----service -->
        <div class=" service_img service3_img">
            <img src="../assets/service3.png" alt="서비스3">
        </div>
        <div class="area">
            <div class="circle circle1">서울</div>
            <div class="circle circle2">일산</div>
            <div class="circle circle3">분당</div>
            <div class="circle circle4">판교</div>
            <div class="circle circle5">위례</div>
        </div>
        <h2 class="area_text">해당 지역에서 세탁요원을 이용하실 수 있습니다.</h2>
    </div>
</template>

<script>
export default {
     props : {
      mainIs : Boolean
    },
}
</script>

<style>
/*service-area*/
.service-area {
    min-height: 850px;
    background-color: #F6F6F6;
    padding: 60px;
}
.service-area .service3_img {
    display: flex;
    justify-content: center;
    width: 750px;
    margin: auto;
}
.service-area .service3_img img {
    width: 600px;
}
.service-area .area{
    display: flex;
    justify-content: center;
    line-height: 4;
    text-align: center;
    font-weight: bold;
    width: 750px;
    margin: 20px auto;
}
.service-area .area_text {
    width: 750px;
    margin: 20px auto;
}
.service-area .area .circle{
    width : 70px;
    height : 70px;
    border-radius: 50%;
    background-color: rgb(207, 226, 238);
    margin: 20px;
}
.service-area h2 {
    text-align: center;

}
.header{
    position: sticky;
    width: 100%;
    background-color: rgb(155 153 153);
    height: 60px;
    top:0;
    z-index : 1;
    
}
</style>
