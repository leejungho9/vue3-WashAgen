<template>
  <!--FOOTER-->
    <footer>
        <div class="footer footer1">
            <p>평일 오전9시 ~ 오후 10시</p>
            <p>주말/공휴일 오전 11시 ~ 오후 10시</p>
            <p>전화문의 :  <a href="tel:+11341234"> 1134-1234 </a></p>
            <p>제휴문의 : <a href="business@washahent.com">business@washahent.com</a></p>
        </div>
        <div class="footer footer2">
            <p>(주)WashAgent</p>
            <p>대표 : 이정호 |  주소 서울시 강서구 양천로 51길 40 (12322)</p>
            <p>사업자등록번호 : 654-12-23456</p>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
/*FOOTER*/
footer {
    width: 100%;
    height: 150px;
    background-color: rgba(33, 33, 33, 0.46) ;
    display: flex;
    justify-content: center;
    padding: 30px;
    box-sizing: border-box;
}

.footer   {
    width: 350px;
    line-height: 23px;
    color: white;
    font-size: 13px;
    
}

footer .footer a {
    color : white;
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