<template>
  <div>
    <productlist :param="param" />
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import productlist from '../productList'
export default {
  components:{
    productlist
  },
  props:{
        param:[]
  },
  data() {
      return {
        active: [0,0,0,0,0,0,0,0],
        activeNames: ['1'],
        loading: false,
      }
  },
  created() {
    console.log('!!!param')
    console.log(this.param)
  },
  methods:{
    listClik(item) {
      if(item.type=='img') {
        ImagePreview([item.img]);
      } else {
        window.location.href = item.href
      }
    },
    detailClick(item) {
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
    detailPosterClick(item) {
        this.$router.push({name: item.url ,query: item.query});
    },
    preview(url) {
      ImagePreview([url]);
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
  margin-top:16px;
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
  margin-top: 16px;
}
</style>
