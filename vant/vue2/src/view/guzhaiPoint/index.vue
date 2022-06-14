<template>
  <div>
    <!-- banner -->
    <van-grid :border="false" :column-num="1" class="block">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image
              radius="8px"
              width="100%"
              height="100%"
              fit="cover"
              src="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/banner.jpg?version=CAEQMRiBgICC5c70ihgiIGE3MjQyMzAxZTlhZjRlZWY5MDU2NGE2MWVjZWFmNTM5"
          />
        </van-swipe-item>
      </van-swipe>
    </van-grid> 
    <!-- 列表 -->

    <commonlist :param="param" />

    <!-- 视频及直播-->
    <van-grid :gutter="16" :column-num="2" class="video-box">
      <van-grid-item icon="photo-o" @click="urlClick({url:'main',query:{id:'016'}})">
        <van-cell value="更多" is-link class="cellsty">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">精彩视频</span>
          </template>
        </van-cell>
        <van-image src="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E8%A7%86%E9%A2%91.jpg?version=CAEQMRiBgMCE5c70ihgiIDlmMDA3ZGQ0OTQ2NjQzMmY5NTdhZDVjMTkzNGU0YTkw"/>
      </van-grid-item>      
      <van-grid-item icon="photo-o" @click="urlClick({url:'main',query:{id:'018'}})">
        <van-cell value="更多" is-link class="cellsty">
          <template #title>
            <span class="custom-title">精彩直播</span>
          </template>
        </van-cell>        
        <van-image src="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E7%B2%BE%E5%BD%A9%E7%9B%B4%E6%92%AD.jpg?version=CAEQMRiBgMCG5c70ihgiIDc1YWU5NDM1YWU3MTQ0YzE5ODZlMTJiNGI0ZGE0YjFl"/>
      </van-grid-item>
    </van-grid>   
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import commonlist from '../commonList';

export default {
  components:{
    commonlist
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

  },
  methods:{
    /** show more video */
    urlClick(item) {
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
.cellsty{
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
.video-box {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
