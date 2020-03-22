<template>
  <div class="listmain">
    <bscroll class="mywrappers" ref="mybscroll">
      <!-- 当前定位 -->
      <div class="now-city">
        <div class="now-head">当前定位</div>
        <div class="now-dingwei">
          <i class="iconfont icon-dingwei1 mynow-dingwei"></i>
          <span>{{city}}市</span>
        </div>
      </div>

      <!-- 热门城市 -->

      <div class="hot-city">
        <div class="head">热门城市</div>
        <div class="hot-city-list">
          <div
            :class="['hot-city-item',item===city ? 'isactive' :'']"
            v-for="(item,index) in hotcitydata"
            :key="index"
            @click="changecity(item)"
          >{{item}}</div>
        </div>
      </div>

      <!-- 字母索引 -->
      <div>
        <div class="head" ref="litter">字母索引</div>
        <div class="sort-list">
          <div
            @click="sortchage(item)"
            v-for="(item,index) in lettersortdata"
            :key="index"
            class="sort-list-item"
          >{{item}}</div>
        </div>
      </div>

      <!-- 城市列表 -->
      <div class="list-city" v-for="(item,index) in citylist" :key="index" :ref="item.title">
        <div class="head">{{item.title}}</div>

        <div class="list-city-main">
          <div class="list-city-item" v-for="(item2,index2) in item.lists" :key="index2">{{item2}}</div>
        </div>
      </div>
    </bscroll>

    <ul class="letter-right">
      <li>定位</li>
      <li
        v-for="(item,index) in lettersortdata"
        :key="index"
        class="sort-right-item"
        @click="sortchageright(item)"
      >{{item}}</li>
    </ul>

    <tost :message="message" :showtost="showtost"></tost>
  </div>
</template>

<script>
import bscroll from "@/components/common/srcoll/srcoll.vue";
import tost from "@/components/common/tost/tost";
import { mapState } from "vuex";
export default {
  name: "citylist",
  data() {
    return {
      message: "", //点击右边弹框提示信息
      showtost: false //是否显示弹框
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    sortchage(item) {
       console.log(item);
       console.log(this.$refs[item]);
      console.log(this.$refs[item][0]);
      this.$refs.mybscroll.bscroll.scrollToElement(this.$refs[item][0]);
    },
    sortchageright(item) {
       this.message = item;
      this.showtost=true;
      console.log(this.showtost)
      setTimeout(() => {
        this.showtost=false;
      }, 2000);
      this.$refs.mybscroll.bscroll.scrollToElement(this.$refs[item][0]);
      
    },
    changecity(cityname) {
      console.log(cityname);
      this.$store.commit("setcityname", cityname);
      this.$router.push("/");
      localStorage.setItem("cityname", cityname);
    }
  },
  components: {
    bscroll,
    tost
  },
  props: {
    citylist: {
      type: Array
    },
    lettersortdata: {
      type: Array
    },
    hotcitydata: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.listmain {
  padding-top: px(49);
  position: relative;
}

.letter-right {
  position: fixed;
  top: px(62);
  right: 0;
  list-style: none;
  color: rgba(32, 35, 37, 0.6);
  font-size: px(11);
}
.sort-right-item {
  padding: px(3);
  text-align: center;
}
.mywrappers {
  position: absolute;
  top: px(49);
  bottom: px(49);
  left: 0;
  right: 0;
  // overflow: hidden;
}
.mynow-dingwei {
  color: $bg_color;
}
.now-dingwei {
  height: px(40);
  line-height: px(30);
  padding-left: px(8);
}
.now-dingwei span {
  padding-left: px(4);
}
.now-dingwei i {
  font-size: px(18);
}
.list-city {
  width: 100%;
}
.now-city .now-head {
  background-color: #fff;
}
.head,
.now-head {
  padding: px(15);
  font-weight: bold;
  font-size: px(14);
  background-color: #f5f5f5;
}
.list-city-main,
.hot-city-list,
.sort-list {
  width: 100%;
  font-size: px(15);
  color: #212121;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid $border-color;
}
.list-city-item,
.hot-city-item,
.sort-list-item {
  width: 33%;
  height: px(40);
  line-height: px(40);
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
.isactive {
  background-color: $bg_color;
  color: white;
}
</style>