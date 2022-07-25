<template>
  <div>
    <div class="headbg"> </div>
    <van-grid class="buttonbox" :column-num="5" :border="false" icon-size="42">
      <van-grid-item v-for="(item,index) in param[0].list" 
      :key="index" 
      :icon="item.icon" 
      :text="item.text"
      @click="detailClick(item)"
     />
    </van-grid>    
    <commonlist :param="param" />
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
    console.log(this.param[1])
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
  background: url('../../static/newIndex/bannerbg.jpg');
  // background: url('https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/banner.jpg?version=CAEQMRiBgICC5c70ihgiIGE3MjQyMzAxZTlhZjRlZWY5MDU2NGE2MWVjZWFmNTM5');
  width: 100%;
  background-size: 100%;
  height: 14.2rem;
}
.buttonbox{
  margin: -94px 15px 0px 15px;
  overflow: hidden;
  // padding: 10px 0;
  justify-content: center;
}
/deep/ .van-grid-item__content {
  padding: 8px !important;
}
/deep/ .van-grid-item__text{
  font-size: 13px !important;
}
/deep/ .van-grid-item__content {
  background-color: transparent;
}
</style>
