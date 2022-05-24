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
export default {
  data() {
      return {
        activeKey: 0,
        imgWaitingSave: '',
        param: []
      }
  },
  created() {
    window.vueThis = this;
    this.param = [{
      title: '迅利A(波行版)',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJw1WSaG8T6fNBiDNAyA_800_1568.png?versionId=CAEQLhiBgICnm.TghxgiIDlmOTIzMDkzYzMyZDRhMDk4MDVkZGM1OGMyMDk4YTRj',
      top: 208,
      bottom: 334,
    },{
      title: '迅利A(通用)',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJwY7TFgvT6TNBiDNAyA_800_1568.png?versionId=CAEQLhiBgMCYmuTghxgiIGIwZDY0ZDk1MmM4ZDQ4ZGZhMmQ1MzRlNDgwNTM2ZTUz',
      top: 208,
      bottom: 334,
    },{
      title: '迅利E(通用)',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJxf-xZAPz6HNBiDNAyA_800_1568.png?versionId=CAEQLhiBgICbmuTghxgiIGZhNjc1ZjU0MjlmMjQ5NjBiMjYzZmFiZTFmMzk5YjM2',
      top: 208,
      bottom: 334,
    },{
      title: '开泰C',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJwnIyvz1z53NBiDNAyA_800_1568.png?versionId=CAEQLhiBgMCamuTghxgiIDI5YjVhNTFmOGExNzRiMjhiMGE2ZjA4NWQ1Y2QyMjgx',
      top: 208,
      bottom: 334,
    },{
      title: '开泰A',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJwnIyvz1z57NBiDNAyA_800_1568.png?versionId=CAEQLhiBgMCcmuTghxgiIGY3NzIzMmYwMDMxMTQ5MzY4Mzk5NTg3MDhhZGY0ZTQx',
      top: 208,
      bottom: 334,
    },{
      title: '宁旭稳进2期',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJwKtzbNoz6_NBiDNAyA_800_1568.png?versionId=CAEQLhiBgICqm.TghxgiIGUyNDc0NjEzOTA2ZDRiMzA4MDU5MDFlMTRiYTcxM2Jj',
      top: 208,
      bottom: 334,
    },{
      title: '安盈A',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJw1WSaG8T5TNBiDNAyA_800_1568.png?versionId=CAEQLhiCgICqm.TghxgiIDkxNDgxYmI0M2E3MjRjYjhiZjZiYjUxNmM5ZDI1MTdl',
      top: 208,
      bottom: 334,
    },{
      title: '安盈AC',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJxDjyEaCz5XNBiDNAyA_800_1568.png?versionId=CAEQLhiBgMClm.TghxgiIGMwNzIxNGMyZTk4ZDRmOTY5YTc1ZTI3NmYwMjQwNDg2',
      top: 208,
      bottom: 334,
    },{
      title: '华嘉',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052501/lALPJxDjyEaCz5jNBiDNAyA_800_1568.png?versionId=CAEQLhiBgICcmuTghxgiIGUyYzc3MzRmYjgwZTQyNjM5ODU3M2NmNzQ5YjkwYzMx',
      top: 208,
      bottom: 334,
    },{
      title: '成长远航主代码',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/newMain.jpg?versionId=CAEQLRiBgMClo7zYhhgiIGIzZTlkNWIxM2EwNDQxNjliYzMwMDdmYjQyMGVmY2Vh',
      top: 224,
      bottom: 318,
    },{
      title: '成长远航AC代码',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/newAC.jpg?versionId=CAEQLRiBgMCXo7zYhhgiIGVmNDY1MjY0Y2M4MTRkYWE4MGU1MTQ0OTA1MWZhNWU1',
      top: 224,
      bottom: 318,
    },{
      title: '成长远航销量王者榜',
      type: 'CZYHSaleTopModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/saleTop.jpg?versionId=CAEQLRiBgMDso7zYhhgiIDQ2MGYzZTkzMDIwZTQyNjI5NjgwNGQxYTM4ZjFjNmMy',
      top: 264,
      bottom: 184,
    },]
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
