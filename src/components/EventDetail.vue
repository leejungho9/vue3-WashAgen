<template>
  <div class="header"></div>
   
    <div class="container">
        
        <h5>fsdfs</h5>
        <h5>{{eventDatas[1].title}}</h5>

    </div>

</template>

<script>
export default {
    name: 'EventDetail',
    props : {
        eventDatas : Object
    }
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
  min-height: 750px;
  background-color: red;
  padding: 60px;
}

</style>