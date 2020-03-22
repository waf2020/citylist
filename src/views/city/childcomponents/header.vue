<template>
    <div>

         <div class="header">

             <div class="nav">
                  <div class="left" @click="gobackpage">
                   <span  class="iconfont icon-zuojiantou letf-icon"></span>
                 </div>
                 <div class="center">城市选择</div>
             
         
             </div>


         </div>


    </div>
</template>
<script>
export default {
    name:'headers',
    methods:{
        gobackpage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>

.nav{
    position: relative;
    text-align: center;
    width: 100%;
    //text-align: center;
    
    height: px(49);
    line-height:px(49) ;
     color: white;
    background-color:   $bg_color;
}
.letf-icon {
   
    font-size: px(22);
}
.left{
    width: 10%;
    vertical-align: middle;
}
.center {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
  
}
.nav i {
    text-align: left;
}
</style>