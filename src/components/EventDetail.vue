<template>
  <div class="header"></div>
   
    <div class="container">
        <div class="inner">
            <h2>{{eventDatas[this.$route.params.id].title}}</h2>
            <img class="eventdetail" :src="eventDatas[this.$route.params.id].dimg" alt="이벤트"  />
        </div>
            
    </div>

</template>

<script>
export default {
    name: 'EventDetail',
    props : {
        eventDatas : Object
    },

}
</script>

<style>
.header{
    position: sticky;
    width: 100%;
    background-color: rgb(155 153 153);
    height: 60px;
    top:0;
    z-index : 1;
}
.container{
  height: 1500px;
  padding: 60px;
  
}

.eventdetail{
  width : 600px
}

</style>