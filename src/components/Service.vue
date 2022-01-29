<template>
  <!--service area -->
    <div class="service-area section" id="main_content2" >
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
        <h2>해당 지역에서 세탁요원을 이용하실 수 있습니다.</h2>
    </div>
</template>

<script>
export default {

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
    margin-bottom: 30px;
    margin-top: 60px;
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
    margin-bottom: 20px;
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
</style>