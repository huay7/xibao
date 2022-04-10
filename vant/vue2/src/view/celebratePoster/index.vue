<template>
  <div>
      <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>保存设置后预览长按可下载到本地</van-swipe-item>
          <van-swipe-item>请合理配置话术</van-swipe-item>
          <van-swipe-item>欢迎及时反馈遇到的问题</van-swipe-item>
      </van-swipe> -->

    <van-row type="flex">
        <van-col>
            <van-sidebar v-model="activeKey" >
                <van-sidebar-item title="主代码喜报" />
                <!-- <van-sidebar-item title="主代码爆单" /> -->
                <van-sidebar-item title="AC份额喜报" />
                <!-- <van-sidebar-item title="AC份额爆单" /> -->
                <!-- <van-sidebar-item title="销量王者榜" /> -->
            </van-sidebar>
        </van-col>
        <van-col v-show="activeKey===0" span="16" >
            <van-button class="ml-sm mt-sm" type="info" @click="goEdit('newMain')">前往生成</van-button>
             <img class="img-container" src="../../static/newMain.jpg">
        </van-col>
        <!-- <van-col v-show="activeKey===1" span="16" >
            <van-button class="ml-sm mt-sm" type="info" @click="goEdit('MainPieceBomb')">前往生成</van-button>
             <img class="img-container" src="../../static/MainPieceBomb.jpg">
        </van-col> -->
        <van-col v-show="activeKey===1" span="16" >
            <van-button class="ml-sm mt-sm" type="info" @click="goEdit('newAC')">前往生成</van-button>
             <img class="img-container" src="../../static/newAC.jpg">
        </van-col>
        <!-- <van-col v-show="activeKey===3" span="16" >
            <van-button class="ml-sm mt-sm" type="info" @click="goEdit('ACPieceBomb')">前往生成</van-button>
             <img class="img-container" src="../../static/ACPieceBomb.jpg">
        </van-col> -->
        <!-- <van-col v-show="activeKey===4" span="16" >
            <van-button class="ml-sm mt-sm" type="info" @click="goEdit('saleTop')">前往生成</van-button>
             <img class="img-container" src="../../static/saleTop.jpg">
        </van-col> -->
    </van-row>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup,Sidebar, SidebarItem,Swipe, SwipeItem, Image, Button, ImagePreview } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Sidebar.name]:Sidebar,
    [SidebarItem.name]:SidebarItem,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Image.name]:Image,
    [Button.name]:Button,
    [ImagePreview.Component.name]:ImagePreview.Component,
  },
  data() {
      return {
        activeKey: 0,
        imgWaitingSave:''
      }
  },
  created() {
    window.vueThis = this;
  },
  methods:{
    goEdit(type) {
        this.$router.push({name: 'edit' ,query: {type}});
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
    // background-color: #39a9ed;
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
