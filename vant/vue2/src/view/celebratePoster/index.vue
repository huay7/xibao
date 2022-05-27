<template>
  <div>
    <van-row type="flex">
        <van-col>
            <van-sidebar v-model="activeKey" >
                <van-sidebar-item v-for="(item,index) in param" :key="index" :title="item.title" />
            </van-sidebar>
        </van-col>
        <van-col v-for="(item,index) in param"  :key="index" v-show="activeKey===index" span="16" >
            <van-button class="ml-sm mt-sm" type="info" @click="goEdit(item.type,item.img,item.top,item.bottom)">前往生成</van-button>
             <img class="img-container" :src="item.img">
        </van-col>
    </van-row>
  </div>
</template>

<script>
import { pageE } from '../main/celebratePoster.js'
export default {
  props:{
    param: {
      default:pageE.param
    }
  },
  data() {
      return {
        activeKey: 0,
        imgWaitingSave: '',
      }
  },
  created() {
    window.vueThis = this;
  },
  methods:{
    goEdit(type, img, top, bottom) {
        this.$router.push({name: 'edit' ,query: {type,img,top,bottom}});
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style/common.css";

.img-container {
    height: 480px;
    padding: 12px;
}

.my-swipe .van-swipe-item {
    color: black;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
