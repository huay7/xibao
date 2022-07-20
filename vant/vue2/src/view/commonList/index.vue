<template>
  <div>
    <div v-for="(item,index) in param" :key="index">
      <van-grid v-if="item.type=='list'" :border="false" :column-num="1" class="block">
        <van-grid-item>
          <van-tabs v-model="active[index]">
            <van-tab v-for="(childitem,childindex) in item.list" :key="childindex" :title="childitem.title">
              <van-list>
                <van-cell v-for="(grandchilditem,grandchildindex) in childitem.list" :key="grandchildindex" >
                    <van-row @click="listClik(grandchilditem)">
                      <van-col class="iconstyle">
                        <!-- <van-icon v-if="grandchilditem.type=='img'" name="photo-o" />
                        <van-icon v-else name="guide-o" /> -->
                        <van-icon v-if="grandchilditem.icon"  size="24"  :name="grandchilditem.icon" />
                        <van-icon v-else-if="grandchildindex%10==0"  size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-1.png?versionId=CAEQLhiBgIDK69L.hxgiIGQzNzBiODg3ZGVhNDQzODU4OTU1NzNlODY1M2Q1NWJh" />
                        <van-icon v-else-if="grandchildindex%10==1" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-2.png?versionId=CAEQLhiBgIDE69L.hxgiIDU1NGUyYzBhZWRjYzQ2ZjM4MzA3MmZiOTFjNmZhZWRm" />
                        <van-icon v-else-if="grandchildindex%10==2" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-3.png?versionId=CAEQLhiBgMDD69L.hxgiIDgxZWYzNGM3ZTc4ZjQ4ZDlhZGVmN2RiMzc0NjU4Mjg0" />
                        <van-icon v-else-if="grandchildindex%10==3" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-4.png?versionId=CAEQLhiBgMC169L.hxgiIDMwZTIxNWUzNTM4MDRhYmU5YTE2ZWY1ZDdjNWRhZTQz" />
                        <van-icon v-else-if="grandchildindex%10==4" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-5.png?versionId=CAEQLhiBgMDK69L.hxgiIDBkNjFiMWQ2ZjdkYzQ2NDU4MDJlZTY0N2UyNGRiMjNj" />
                        <van-icon v-else-if="grandchildindex%10==5" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-6.png?versionId=CAEQLhiBgICv69L.hxgiIDZhZTA2NmNkMTY4MzRkYWY5MjYwY2JmMDNlYWRlYjk2" />
                        <van-icon v-else-if="grandchildindex%10==6" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-7.png?versionId=CAEQLhiBgMDM69L.hxgiIDY0ZTE0NmE4NDhjNjQ1NDA5ZGFiZTRiYmUzYThmMWQ0" />
                        <van-icon v-else-if="grandchildindex%10==7" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-8.png?versionId=CAEQLhiBgIC169L.hxgiIGNjZjk4MTNhYmRkMzQ0NGZhNDk4Nzk4MzY0ZTAzMzQ4" />
                        <van-icon v-else-if="grandchildindex%10==8" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-9.png?versionId=CAEQLhiBgIC869L.hxgiIDFhOTY5NzQxZjQ3YjRlMmM4ZTc0NTMxYzU3NjE2ZGFi" />
                        <van-icon v-else-if="grandchildindex%10==9" size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-10.png?versionId=CAEQLhiBgMCy69L.hxgiIGRlYzcwYzA0ZDRhNDQ3YjVhNmJiNzQwZjlmOWZlMTY0" />
                      </van-col>
                      <van-col class="ml-small">{{grandchilditem.title}}</van-col>
                    </van-row>
                    <van-row v-if="grandchilditem.type=='block'" class="pa-small">
                      <div class="card-box">
                        <!-- <img class="imhbox" src="./image/videoMask.jpeg" alt=""> -->
                        <div class="card-title" v-if="grandchilditem.descTitle">{{grandchilditem.descTitle}}</div>
                        <div>
                          <span class="card-text">{{grandchilditem.text}}</span>
                        </div>
                      </div>  
                    </van-row>
                </van-cell>
              </van-list>
              <van-row v-if="childitem.type === 'poster'" class="poster-row">
                <van-grid  :border="false" :column-num="1" >
                  <van-row v-for="(grandchilditem,grandchildindex) in childitem.posterList" :key="grandchildindex">
                    <img :src="grandchilditem.titlePicture" alt="" class="imgsty" @click="listClik(grandchilditem.url)">
                  </van-row>    
                </van-grid>               
              </van-row>
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
      }
  },
  created() {
    console.log('param')
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
        window.location.href = item.href
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
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 10px;
}
</style>
