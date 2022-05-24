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
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052004/IMG_5400.PNG?versionId=CAEQLRiBgID4t6eEhxgiIDM0YTY2ZGM4NTdkMDRhOTM5MDA4ZjViY2FjZTE2NDI4',
      top: 208,
      bottom: 334,
    },{
      title: '迅利A(通用)',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/xunliANew4.jpg?versionId=CAEQLRiBgMD_o7zYhhgiIGJlMmNjYmFmN2MyZjRmOWU5MGIxNTViNGE3M2ZkNzgy',
      top: 208,
      bottom: 334,
    },{
      title: '迅利E(通用)',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/xunliENew1.jpg?versionId=CAEQLRiBgMDlo7zYhhgiIDhmODY3Yjk2YmFmMDRhMzg5NGUxNDcyMGQ4OWY1M2Yz',
      top: 208,
      bottom: 334,
    },{
      title: '开泰C',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/kaitai.jpg?versionId=CAEQLRiBgMDho7zYhhgiIGI4YmI1ZWI4ODJhYjQwOWU4ZjNlZjZiZjZhMWJkYTdl',
      top: 208,
      bottom: 334,
    },{
      title: '开泰A',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022051801/kaitaiA.jpg?versionId=CAEQLRiBgIDSo7zYhhgiIDYxMjRjMDI2N2I3NzQ4NzM5YTVmNWMyNGRjMTVkNTQ2',
      top: 208,
      bottom: 334,
    },{
      title: '宁旭稳进2期',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052004/IMG_5399.PNG?versionId=CAEQLRiBgMD3t6eEhxgiIDBmYzVjYzkzZjdlNzQ2ZjhhYjQxYzk4ZmQ2OWMwOWI1',
      top: 208,
      bottom: 334,
    },{
      title: '安盈A',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052004/IMG_5402.JPG?versionId=CAEQLRiCgMD3t6eEhxgiIDhmNTdmYmQ4OWJlODQ4NDk5YzgwMGE3MDc4YmU1ZWY3',
      top: 208,
      bottom: 334,
    },{
      title: '安盈AC',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052004/IMG_5401.JPG?versionId=CAEQLRiBgMD8t6eEhxgiIGY1MTE2ZjQ5YmRjZjQ2YzNiNTExZDE3ZmY3ZWNhYzRj',
      top: 208,
      bottom: 334,
    },{
      title: '华嘉',
      type: 'CZYHModel',
      img: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052004/IMG_5398.PNG?versionId=CAEQLRiBgMD2t6eEhxgiIDA2ZDdlMGI0YTU1ZjQ4Y2RhMDM3YmY2NDNlMzAxYTEw',
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
