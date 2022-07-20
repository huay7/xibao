<template>
  <div>
    <div>
      <van-grid :border="false" :column-num="1" class="block">
        <van-grid-item>
          <van-tabs v-model="active[key-1]">
            <van-tab v-for="(childitem,childindex) in param[key-1].productlist" :key="childindex" :title="childitem.title">
              <van-list>
                <van-cell center v-for="(grandchilditem,grandchildindex) in childitem.list" :key="grandchildindex" @click="listClik(grandchilditem)">
                  <template #icon>
                    <img class="imgsty" :src="grandchilditem.sharePic" alt=""/>
                  </template>
                  <template  #title>
                    <div>{{grandchilditem.name}}</div>
                  </template>
                  <template #label>
                    <div>{{grandchilditem.slogan}}</div>
                  </template>
                </van-cell>
              </van-list>
            </van-tab>
          </van-tabs>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  props:{
    param:[]
  },
  data() {
      return {
        active: [0,0,0,0,0,0,0,0],
        activeNames: ['1'],
        list: ['大跌后，如何加速回本解套？','赎回定投的基金份额，是不是代表定投终止？'],
        loading: false,
        key: 1
      }
  },
  created() {
    this.key = this.$route.query.key
    console.log('!~~~!param',this.$route.query)
    console.log(this.param)
  },
  methods:{
    listClik(item) {
      if(item.type=='img') {
        ImagePreview([item.img]);
      } else if (item.type=='pdf'||item.type=='block') {
        var link = document.createElement('a');
        const downloadUrl = this.getPDFDownLoadUrl(item.pdf)
        link.setAttribute("href", downloadUrl);
        link.setAttribute("download", '测试下载.pdf');
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evObj);
      } else {
        window.location.href = item.url
      } 
    },
    detailPosterClick(item) {
        this.$router.push({name: item.url ,query: item.query});
    },
  }
};
</script>

<style lang="less" scoped>
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
.pa-small {
  padding: 4px
}
.bloackA-item {
  padding-left: 20px;
  padding-right: 20px;
  padding-top:6px;
}
.bloackA {
  padding-top:12px;
  padding-bottom:12px;
}
.card-box{
  box-shadow: 0 0 .14rem rgba(136,136,136,.4);
  border-radius: 0.6rem;
  background-color: #FFFFFF;
  padding: 1rem;
  .card-title{
    font-size: 14px;
    text-align: center;
    color: #333;
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
  .card-text{
    font-size: 14px;
    color: #333;
  }
}
.van-col{
  display: flex;
  align-items: center;
}
.iconstyle{
  display: flex;
  align-items: flex-start;
}
.poster-row {
  margin-top: 16px;
}





.block {
  margin-left:16px;
  margin-right:16px;
  margin-top:16px;
}
.ml-small {
  margin-left:12px;
  max-width: 85%;
}
.poster {
  margin-top: 6px;
  font-size: 14px;
}
.imgsty{
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  margin-right: 20px;
}
</style>
