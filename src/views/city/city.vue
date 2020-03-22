<template>
  <div class="city">
    <!-- 頭部組件 -->
    <headers class="city-head"></headers>
  
    <citylist :citylist="citylist" :lettersortdata="lettersortdata" :hotcitydata="hotcitydata"></citylist>
    <!-- </bscroll> -->
  </div>
</template>

<script>
import headers from "./childcomponents/header";
// import hotcity from "./childcomponents/hotcity";
// import sort from "./childcomponents/sort";
import citylist from "./childcomponents/citylist"

import citydata from "@/util/citydata.json";
import {getaccurateLocation} from '@/util/location.js'
//import bscroll from "@/components/common/srcoll/srcoll.vue"

export default {
  name: "city",
  data() {
    return {
        hotcitydata:[],
        lettersortdata:[],
        citylist:[],
        success:{},
        filed:{}
        
    };
  },
  methods:{
      sortchage(){
      
      }
  },
  components: {
    headers,
   // hotcity,
    //sort,
    citylist,
   // bscroll
  },
  mounted(){
       getaccurateLocation().then(res=>{
      this.success=res
    }).catch(error=>{
      this.filed=error
    })
  },
  created() {
   // console.log(citydata);
    this.citylist=citydata.city;
    this.lettersortdata=citydata.lettersort;
    this.hotcitydata=citydata.hotcity;
    // getcityfromip().then(res=>{
    //   this.success=res
    // }).catch(error=>{
    //   this.filed=error
    // })
    

    
  }
};
</script>
<style lang="scss" scoped>
.city {
  background-color: #f5f5f5;
  position: relative;
  z-index: 10;
}
.city-head {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
}
.mywrappers {
  position: absolute;
  top: px(49);
  left: 0;
  right: 0;
  bottom: px(49);
  //overflow: hidden;
}
</style>