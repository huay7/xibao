<template>
  <div>
    <div v-for="(item,index) in param" :key="index">
      <van-grid v-if="item.type=='material'" :border="false" :column-num="1" class="block">
        <van-grid-item>
          <van-tabs v-model="active[index]">
            <van-tab v-for="(childitem,childindex) in item.list" :key="childindex" :title="childitem.title">
              <div class="bloackA">
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
            </van-tab>
          </van-tabs>
        </van-grid-item>
      </van-grid>
      <van-grid v-if="item.type=='list'" :border="false" :column-num="1" class="block">
        <van-grid-item>
          <van-tabs v-model="active[index]">
            <van-tab v-for="(childitem,childindex) in item.list" :key="childindex" :title="childitem.title">
              <van-list>
                <van-cell v-for="(grandchilditem,grandchildindex) in childitem.list" :key="grandchildindex" @click="listClik(grandchilditem)">
                    <van-row>
                    <van-col>
                      <!-- <van-icon v-if="grandchilditem.type=='img'" name="photo-o" />
                      <van-icon v-else name="guide-o" /> -->
                      <van-icon v-if="grandchildindex%10==0"  size="24"  name="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/miniicon2-1.png?versionId=CAEQLhiBgIDK69L.hxgiIGQzNzBiODg3ZGVhNDQzODU4OTU1NzNlODY1M2Q1NWJh" />
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

  data() {
      return {
        active: [0,0,0,0,0,0,0,0],
        activeNames: ['1'],
        list: ['大跌后，如何加速回本解套？','赎回定投的基金份额，是不是代表定投终止？'],
        loading: false,
        param:[]
      }
  },
  created() {
    const blockB = {
      type: 'list',
      list: [
        {
          title: '固收',
          list:[
            {
              type: 'pdf',
              title: '定投推荐-永赢精品基金（标准版）',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E7%B2%BE%E5%93%81%E5%9F%BA%E9%87%91%EF%BC%88%E6%A0%87%E5%87%86%E7%89%88%EF%BC%89.pdf'
            },
            {
              type: 'img',
              title: '定投推荐-永赢华嘉信用债A',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BAA%EF%BC%88%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.jpg'
            },
            {
              type: 'pdf',
              title: '定投推荐-永赢惠添利（周定投一年版，0630）',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E5%88%A9%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%80%E5%B9%B4%E7%89%88%EF%BC%8C0630%EF%BC%89.pdf'
            },

           
          ]
        },
        {
          title: '权益',
          list:[
            {
              type: 'pdf',
              title: '永赢创业板A（007664）/永赢沪深3000A（007538）指数基金定投版',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E5%88%9B%E4%B8%9A%E6%9D%BF%E3%80%81%E6%B0%B8%E8%B5%A2%E6%B2%AA%E6%B7%B1300.pdf?versionId=CAEQLhiBgICX_9D_hxgiIDI1ZjJhMzhjN2U0ZTQwOGZiODcwYTBhOGVmMWE1MDMz'
            },
             {
              type: 'pdf',
              title: '定投推荐-永赢消费主题A（3000点月定投+日定投版0331）',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98A%EF%BC%883000%E7%82%B9%E6%9C%88%E5%AE%9A%E6%8A%95%2B%E6%97%A5%E5%AE%9A%E6%8A%95%E7%89%880331%EF%BC%89.pdf'
            },
            {
              type: 'pdf',
              title: '定投推荐-永赢消费主题A（周定投两年版，0331）',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98A%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%A4%E5%B9%B4%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf'
            },
            {
              type: 'pdf',
              title: '定投推荐-永赢智能领先A（3000点月定投+日定投版，0331）',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88A%EF%BC%883000%E7%82%B9%E6%9C%88%E5%AE%9A%E6%8A%95%2B%E6%97%A5%E5%AE%9A%E6%8A%95%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf'
            },
            {
              type: 'pdf',
              title: '定投推荐-永赢智能领先A（周定投两年版，0331）',
              pdf:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88A%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%A4%E5%B9%B4%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf'
            },
            {
              type: 'img',
              title: '定投推荐-永赢成长领航A（周定投+月定投版）',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%88%90%E9%95%BF%E9%A2%86%E8%88%AAA%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%2B%E6%9C%88%E5%AE%9A%E6%8A%95%E7%89%88%EF%BC%890806.png'
            },
          ]
        },
      ]
    }
    this.param = [
      blockB
    ]
  },
  methods:{
    listClik(item) {
      if(item.type=='img') {
        ImagePreview([item.img]);
      } else if (item.type=='pdf') {
        var link = document.createElement('a');
        link.setAttribute("href", item.pdf);
        link.setAttribute("download", '测试下载.pdf');
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evObj);
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
            this.$router.push({name: item.url});
          }
      }
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
