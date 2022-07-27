<template>
  <div>
    <div v-for="(child,index) in param" :key="index">
      <div class="headbg" v-if="child.type === 'banner'">
        <img :src="child.bgImg" alt="">
        <!-- <img class="iconsty" src="../../static/newIndex/icon.png" alt="" /> -->
       </div>
      <van-grid v-if="child.type === 'tab'" class="buttonbox" :column-num="child.list.length" :border="false" icon-size="50">
        <van-grid-item v-for="(grandchilditem,grandchildindex) in child.list" 
        :key="grandchildindex" 
        :icon="grandchilditem.icon" 
        :text="grandchilditem.text"
        @click="detailClick(grandchilditem)"
      />
      </van-grid>    
      <commonlist v-if="child.type === 'list'" :param="param" />      
    </div>
  </div>
</template>

<script>
import commonlist from '../commonList';
import { pageH } from '../main/newIndex.js'
export default {
  components:{
    commonlist
  },
  props:{
        param: {
          default : pageH.param
        }
  },
  data() {
      return {
        active: [0,0,0,0,0,0,0,0],
        activeNames: ['1'],
        loading: false,
      }
  },
  created() {
    console.log('param')
    console.log(this.param)
  },
  methods:{
    detailClick(item) {
          console.log(item)
          if(item.type=='pdf') {
            var link = document.createElement('a');
            const downloadUrl = this.getPDFDownLoadUrl(item.pdf)
            link.setAttribute("href", downloadUrl);
            link.setAttribute("download", '测试下载.pdf');
            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            link.dispatchEvent(evObj);
          } else if(item.type=='href') {
             window.location.href = item.href            
          } else {
            this.$router.push({name: item.url ,query: item.query});
          }
    },
  }
};
</script>

<style lang="less" scoped>

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.block {
  margin-left:16px;
  margin-right:16px;
  margin-top:5px;
}
.van-tabs {
  width:100%
}
.ml-small {
  margin-left:12px;
  max-width: 85%;
}
.bloackA-item {
  padding-left: 20px;
  padding-right: 20px;
  padding-top:6px;
}
.bloackA {
  padding-top:12px;
  // padding-bottom:12px;
}
.poster {
  margin-top: 6px;
  font-size: 14px;
}
.poster-row {
  // margin-top: 16px;
}
.headbg{
  width: 100%;
  position: relative;
  background-size: 100%;
  img{
    width: 100%;
  }
}
.buttonbox{
  margin: -90px 15px 15px 15px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  // padding: 10px 0;
  justify-content: center;
}
/deep/ .van-grid-item__content {
  padding: 2px !important;
}
/deep/ .van-grid-item__text{
  font-size: 14px !important;
  margin-top: 2px !important;
}
.iconsty{
  width: 11rem !important;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
