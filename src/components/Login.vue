<template>
  <div class="header"></div>
  <div class="loginArea">
      <div class="inner">
          <h2>로그인</h2>
          <div class="input">
              <input type="text" placeholder="아이디"/>
              <input type="password" placeholder="비밀번호"/>
          </div>
           <div class="button">
              <button class="loginBtn">로그인</button>
              <button class="joinBtn">회원가입</button>
              <span class="btnSpan">아이디 / 비밀번호 찾기</span>
              <button class="kakaoBtn">카카오계정으로 로그인</button>
          </div>

      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style >
.header{
    position: sticky;
    width: 100%;
    background-color: rgb(155 153 153);
    height: 60px;
    top:0;
    z-index : 1;
    
}
.loginArea{
    height: 700px;
    background-color: #F6F6F6;


}
.inner{
    width: 1100px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    padding: 60px;
    font-size: 24px;
    font-weight: 700;
}
.inner h2{
    margin-top : 40px;
    margin-bottom: 40px;
}
.input, .button{
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    margin: 0 auto;
}

 input {
    height: 40px;
    width : 400px;
    margin: 10px 0;

}
.loginBtn{
    height: 50px;
    width : 400px;
    margin: 10px 0;
    background-color:#e9e19e;
    border : 0;
    color : #fff;
    font-size: 13px;
    font-weight: 700;
}
.joinBtn{
    height: 50px;
    width : 400px;
    margin: 5px 0;
    background-color:#F6F6F6;
    border : 1px solid #e9e19e;
    color : #333;
    font-size: 13px;
    font-weight: 700;
}
Button {
    cursor: pointer;
}
.btnSpan{
    font-size: 12px;
    float: inline-end;
    font-size: 12px;
    font-weight: 400;
    width : 400px;
    text-align: end;
    margin: 10px 3px;
    cursor: pointer;
}
.kakaoBtn{
    height: 50px;
    width : 400px;
    margin: 5px 0;
    background-color:#fae100;
    border :0;
    color : #333;
    font-size: 13px;
    font-weight: 700;
    z-index: 1;
}

</style>