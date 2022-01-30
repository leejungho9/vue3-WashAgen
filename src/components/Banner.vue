<template>
    <!--BANNER--> <div class="banner section"/>
</template>

<script>
export default {

}
</script>

<style>

/*BANNER*/
.banner {
    background-image: url("../assets/banner3.jpg");
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