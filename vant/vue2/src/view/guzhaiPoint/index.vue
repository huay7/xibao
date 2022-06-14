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
    <div class="video-container">
        <div class="video_div" @click="urlClick({url:'main',query:{id:'016'}})">
            <div class="block_title">
                <div class="title">精彩视频</div>
                <div class="more">
                    <span>更多</span>
                    <img src="./image/right_icon.png" />
                </div>
            </div>
            <div class="video_div_main">
                <div class="video-detail video">
                    <img src="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E8%A7%86%E9%A2%91.jpg?version=CAEQMRiBgMCE5c70ihgiIDlmMDA3ZGQ0OTQ2NjQzMmY5NTdhZDVjMTkzNGU0YTkw"/>
                </div>
            </div>
        </div>
        <div class="video_div" @click="urlClick({url:'main',query:{id:'018'}})">
            <div class="block_title">
                <div class="title">精彩直播</div>
                <div class="more">
                    <span>更多</span>
                    <img src="./image/right_icon.png" />
                </div>
            </div>
            <div class="video_div_main">
                <div class="video-detail zhibo">
                    <img class="img-box" src="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E7%B2%BE%E5%BD%A9%E7%9B%B4%E6%92%AD.jpg?version=CAEQMRiBgMCG5c70ihgiIDc1YWU5NDM1YWU3MTQ0YzE5ODZlMTJiNGI0ZGE0YjFl"/>
                </div>
            </div>
        </div>
    </div>    
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
        link.setAttribute("href", item.url);
        link.setAttribute("download", '测试下载.pdf');
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evObj);
      } else if(item.type=='href') {
        this.$router.push({name: item.url ,query: item.query});
      }
    },
    urlClick(item) {
        this.$router.push({name: item.url ,query: item.query});
    },
    /** show more video */
    showMoreVideo() {
      //  this.$router.push({name: 'edit' ,query: {type,img,top,bottom}});
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
  padding-bottom:12px;
}
.icon-pannel{
  display: flex;
  align-items: center;
}
.cell-sty{
  display: flex !important;
  flex-flow: row;
  align-content: center;
}
.text-sty{
  flex: 1;
  padding: 0.5rem;
}
.text-title{
  font-size: 14px;
}
.text-desc{
  font-size: 12px;
  padding-top: 0.2rem;
  color: #999;
}
.video-container{
  margin: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  .video_div{
    justify-content: center;
    align-items: center;
    width: 10.6rem;
    background-color: #fff;
    padding: 0.5rem;
    box-shadow: 0 0 .14rem rgba(136,136,136,.4);
    border-radius: 0.6rem;
    .block_title{
      display: flex;
      padding: 0.6rem 0;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.01rem solid #e5e5e5;
      .title{

      }
      .more{
        font-size: 14px;
        color: #bcbcba;
        display: flex;
        align-items: center;
        img{
          margin-left: 0.2rem;
          width: 0.6rem;
          height: 0.6rem;
        }
      }
    }
    .video_div_main{
      box-shadow: 0 0 .14rem rgba(136,136,136,.4);
      border-radius: 0.6rem;
      background-color: #FFFFFF;
      overflow: hidden;
      margin-top: 0.5rem;
      img{
        display: flex;
        width: 100%;
      }
    }
  }
}
.iconfontsize{
  font-size: 24px;
}
.imhbox{
  width: 20px;
  height: 20px;
}
.card-box{
  box-shadow: 0 0 .14rem rgba(136,136,136,.4);
  border-radius: 0.6rem;
  background-color: #FFFFFF;
  padding: 1rem;
  margin-top: 0.8rem;
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
</style>
