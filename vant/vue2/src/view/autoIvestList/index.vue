<template>
  <div>
      <van-grid :border="false" :column-num="1" class="block">
        <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                      <van-image
                          radius="8px"
                          width="100%"
                          height="100%"
                          fit="cover"
                          src="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/banner2.jpg?versionId=CAEQLhiBgIDgqrX.hxgiIDJmNTVlMDRjZDcxODQ3NDRiM2RjNzMwZDg3ODUxYmUw"
                      />
                </van-swipe-item>
        </van-swipe>
      </van-grid> 
    <div v-for="(item,index) in param" :key="index">
      <van-grid v-if="item.type=='material'" :border="false" :column-num="1" class="block">
        <van-grid-item>
          <van-tabs v-model="active[index]">
            <van-tab v-for="(childitem,childindex) in item.list" :key="childindex" :title="childitem.title">
              <div class="bloackA" v-if="childitem.type=='pdf'">
                <van-row v-for="(grandchilditem,grandchildindex) in childitem.list" :key="grandchildindex" class="bloackA-item" type="flex" justify="space-between">
                    <van-image
                        v-for="(grandgrandchilditem,grandgrandchildindex) in grandchilditem"
                        :key="grandgrandchildindex"
                        radius="8px"
                        width="130px"
                        height="60px"
                        fit="cover"
                        :src="grandgrandchilditem.titlePicture"
                        @click="detailClick(grandgrandchilditem)"
                    />
                </van-row>
              </div>
              <div class="bloackA" v-if="childitem.type=='poster'">
                <van-grid :gutter="10">
                    <van-grid-item v-for="(grandchilditem,grandchildindex) in childitem.list" :key="grandchildindex">
                        <van-image
                            width="80px"
                            height="180px"
                            fit="cover"
                            :src="grandchilditem"
                            @click="preview(grandchilditem)"
                        />
                    </van-grid-item>
                </van-grid>
              </div>
            </van-tab>
          </van-tabs>
        </van-grid-item>
      </van-grid>
    </div>
    <commonlist :param="param" />
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
    console.log('param')
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
            link.setAttribute("href", item.url);
            link.setAttribute("download", '测试下载.pdf');
            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            link.dispatchEvent(evObj);
          } else if(item.type=='href') {
            this.$router.push({name: item.url ,query: item.query});
          }
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
</style>
