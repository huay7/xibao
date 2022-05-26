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
    const blockA = {
      type: 'material',
      list: [
        {
          title:'定投素材',
          type: 'pdf',
          list:[
            [
              {
                type: 'pdf',
                titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-1.jpg?versionId=CAEQLhiBgMDOqbX.hxgiIGQxMjhmZGMyYTE2YTRkNTI5NDJmZDNlMGQ4OWJlZDll',
                url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E3%80%90%E5%90%8C%E8%B5%A2%E6%9C%AA%E6%9D%A5%E3%80%91%E7%8E%A9%E8%BD%AC%E5%AE%9A%E6%8A%95-%E6%8C%87%E6%95%B0%E7%AF%87.pdf?versionId=CAEQLRiBgMC1oZmDhxgiIGVkYmFhY2NmY2RiNjQ5MDZiZGQ0NDdhYzViNDcxYWJm'
              },
              {
                type: 'pdf',
                titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-2.jpg?versionId=CAEQLhiBgICjqbX.hxgiIDEzN2YyNTA4MWJkZDQ2YjU5NDhlMTFmNjVkNGIxYjZj',
                url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E3%80%90%E5%90%8C%E8%B5%A2%E6%9C%AA%E6%9D%A5%E3%80%91%E7%8E%A9%E8%BD%AC%E5%AE%9A%E6%8A%95.pdf?versionId=CAEQLRiBgIDct5mDhxgiIDA5N2U3ZDA0Y2I4ZDQ0MjFhNDYxYzBlYzUzOGY0YWJl'
              },
            ],
            [
              {
                type: 'href',
                titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-3.jpg?versionId=CAEQLhiBgIDrqbX.hxgiIGIwOTgzZTllZGM1NjQ4MzA4M2IxZjA1ZmVlZDZkMTc3',
                url:'autoIvestPdfList'
              },
              {
                type: 'href',
                titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-4.jpg?versionId=CAEQLhiBgIDPqbX.hxgiIGQ5YmYxZDEyMjdiMTQ0YjJhZDBkODFjNTViYTUxOTNm',
                url:'autoIvestPosterList'
              },
            ]
          ]
        },
        {
          title:'定投Q&A',
          type: 'poster',
          list: ['https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%9C%A8%E4%BB%BB%E4%BD%95%E5%B8%82%E5%9C%BA%E7%8E%AF%E5%A2%83%E4%B8%8B%EF%BC%8C%E5%AE%9A%E6%8A%95%E9%83%BD%E6%98%AF%E5%B8%B8%E8%83%9C%E5%B0%86%E5%86%9B%E5%90%97%EF%BC%9F.jpg?versionId=CAEQLRiBgMD82PaDhxgiIDI0YjkyYWU4Mjg3ZjQ3ODA4MzQzMDNhYjBlM2QzNDQz','https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/IMG_6991.JPG?versionId=CAEQLhiBgID698L_hxgiIDRiNGIxMmU3YmYxYTQzYjA5NmVjNWNiZDM3YmU5MTc3']
        },
      ]
    }
    const blockB = {
      type: 'list',
      list: [
        {
          title: '定投基础知识',
          list:[
            {
              type: 'img',
              title: '什么是基金定投？',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E4%BB%80%E4%B9%88%E6%98%AF%E5%9F%BA%E9%87%91%E5%AE%9A%E6%8A%95.jpg?versionId=CAEQLRiBgMCw6JmChxgiIGJhNTBmYzM1YTNmYTQ5ZDQ4ODM3MDg4NzU5NTA0NmRm'
            },
            {
              type: 'img',
              title: '到了设定日期，定投怎么没扣款？',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%88%B0%E4%BA%86%E8%AE%BE%E5%AE%9A%E6%97%A5%E6%9C%9F%EF%BC%8C%E5%AE%9A%E6%8A%95%E6%80%8E%E4%B9%88%E6%B2%A1%E6%89%A3%E6%AC%BE%EF%BC%9F.jpg?versionId=CAEQLRiBgIDB65mChxgiIDdiMjZhYzBmZjE3MzQ4N2ZhMDdhNjkzYTBmODcwMWNm'
            },
            {
              type: 'img',
              title: '赎回定投的基金份额，是不是代表定投终止？',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E8%B5%8E%E5%9B%9E%E5%AE%9A%E6%8A%95%E7%9A%84%E5%9F%BA%E9%87%91%E4%BB%BD%E9%A2%9D%EF%BC%8C%E6%98%AF%E4%B8%8D%E6%98%AF%E4%BB%A3%E8%A1%A8%E5%AE%9A%E6%8A%95%E7%BB%88%E6%AD%A2%EF%BC%9F.png?versionId=CAEQLRiBgICN65mChxgiIGJkOTQxOTQ4NWYzYjRmZmY5YjNhY2NiMTA0ZGYxZTY3'
            },
            {
              type: 'href',
              title: '所有基金都适合定投吗？',
              href:'https://mp.weixin.qq.com/s/84BukDUvEJXRBk700rrzog'
            },
            {
              type: 'href',
              title: '手把手教你选定投基金！',
              href:'https://mp.weixin.qq.com/s/2OazOsdshZUXA1Ry7SIZfQ'
            },
            {
              type: 'href',
              title: '每期定投多少最好？',
              href:'https://mp.weixin.qq.com/s/hgyRnxL56HXf6ASTQgiY9g'
            },
            {
              type: 'href',
              title: '周定投VS月定投，到底哪种更好？',
              href:'https://mp.weixin.qq.com/s/zjGrtDZYgeiHZEfThuAWlw'
            },
            {
              type: 'href',
              title: '10个定投小问题，问到你的心坎里！',
              href:'https://mp.weixin.qq.com/s/UxO48JnPsZoHyGXoWeoVig'
            },
            {
              type: 'href',
              title: '清扫定投盲区，拥抱更好投资体验！',
              href:'https://mp.weixin.qq.com/s/BXYKpZfoE6Acfn30vL5SJg'
            },
            {
              type: 'href',
              title: '基金定投是“万金油”？这事儿没那么简单……',
              href:'https://mp.weixin.qq.com/s/M0RywweSP1bk62EALskieQ'
            },
            {
              type: 'href',
              title: '定投竟然也会亏！难道定投在骗我？',
              href:'https://mp.weixin.qq.com/s/TXB5ZQFt3QsGNxBh7RTLjA'
            },
            {
              type: 'href',
              title: '定投课堂|如何才能投资未来？',
              href:'https://mp.weixin.qq.com/s/PfkmdlpxtBDW6SQrMb1qkQ'
            },
            {
              type: 'href',
              title: '您有一份专属定投计划待领取！',
              href:'https://mp.weixin.qq.com/s/uQbojXI4IHNRDpCNXWY0EQ'
            },
            {
              type: 'href',
              title: '不再神秘的“微笑曲线”',
              href:'https://mp.weixin.qq.com/s/eGKqoQxygt9uMSMpgrzwOQ'
            },
            {
              type: 'img',
              title: '玩转定投，你不得不知道的一“点”',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E7%8E%A9%E8%BD%AC%E5%AE%9A%E6%8A%95%EF%BC%8C%E4%BD%A0%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%B8%80%E2%80%9C%E7%82%B9%E2%80%9D.jpg?versionId=CAEQLRiBgIC165mChxgiIGRiMWMwNjc1NGUxZjQ1NDU4ZjdkNjQ2YjEyODJiNmQ5'
            },
            {
              type: 'img',
              title: '关于定投收益率不能说的秘密',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%85%B3%E4%BA%8E%E5%AE%9A%E6%8A%95%E6%94%B6%E7%9B%8A%E7%8E%87%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86.jpg?versionId=CAEQLRiBgMCi6ZmChxgiIDI5Y2UwZDQwYTIxMjQ2YzhiZTkzMWE1YjM3ZjFlYzNk'
            },
          ]
        },
        {
          title: '定投进阶玩法',
          list:[
            {
              type: 'img',
              title: '大跌后，如何加速回本解套？',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%A4%A7%E8%B7%8C%E5%90%8E%EF%BC%8C%E5%A6%82%E4%BD%95%E5%8A%A0%E9%80%9F%E5%9B%9E%E6%9C%AC%E8%A7%A3%E5%A5%97%EF%BC%9F.JPG?versionId=CAEQLRiBgIDq6JmChxgiIDk2N2FmZjAxZWY3NjRiZDlhMjU3YjdlODE0ZTMwOWEw'
            },
            {
              type: 'img',
              title: '任意3000点开始定投，都赚钱了吗？',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E4%BB%BB%E6%84%8F3000%E7%82%B9%E5%BC%80%E5%A7%8B%E5%AE%9A%E6%8A%95%EF%BC%8C%E9%83%BD%E8%B5%9A%E9%92%B1%E4%BA%86%E5%90%97%EF%BC%9F.jpg?versionId=CAEQLRiBgIDT6JmChxgiIGY5NDQwMDAxMTViMjRkNDFhN2E0ZDUyZDQzZDhkZjhj'
            },
            {
              type: 'href',
              title: '3000点之下，这样定投收益更高？！',
              href:'https://mp.weixin.qq.com/s/tO7bouETR5h_JzIxomh3Qg'
            },
            {
              type: 'href',
              title: '定投亏钱了，还要继续投吗？',
              href:'https://mp.weixin.qq.com/s/2yxVpiaPWc8URmEtczD5Cg'
            },
            {
              type: 'href',
              title: '确“定”过眼神|定投的好时机就是现在？',
              href:'https://mp.weixin.qq.com/s/61capMqT6jUsY8hlvTlp7w'
            },
            {
              type: 'href',
              title: '高点被套怎么破！韭菜自救指南',
              href:'https://mp.weixin.qq.com/s/ymnaw1CgU-q4V9sJsvB1Ow'
            },
            {
              type: 'href',
              title: '要想定投效果好，这一步是关键！',
              href:'https://mp.weixin.qq.com/s/uWiUmAUHv3i6oZ9XeP6Slg'
            },
            {
              type: 'href',
              title: '惊呆，定投竟有这么多新玩法！',
              href:'https://mp.weixin.qq.com/s/zHh_UGm80wPQhDjx7xpkPg'
            },
            {
              type: 'href',
              title: '解密|定投时间越长越好吗？',
              href:'https://mp.weixin.qq.com/s/wzAjXJL4KjTYJdWEnHnvRA'
            },
            {
              type: 'img',
              title: '基金定投需要止损吗？',
              img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%9F%BA%E9%87%91%E5%AE%9A%E6%8A%95%E9%9C%80%E8%A6%81%E6%AD%A2%E6%8D%9F%E5%90%97%EF%BC%9F.jpg?versionId=CAEQLRiBgIDR6JmChxgiIDIxZTAzNTQ3NzRiZTQzYTk4ZDg5NzBjZWVjYzUxZTkx'
            },
            {
              type: 'href',
              title: '定投止盈，到底该如何操作？',
              href:'https://mp.weixin.qq.com/s/o7ys3u9P5mbmqawXAo38YA'
            },
            {
              type: 'href',
              title: '市场点位有点高，是不是等等再定投？',
              href:'https://mp.weixin.qq.com/s/Z1kPjN3A16i9Rc2N9JcEmw'
            },
            {
              type: 'href',
              title: '3400点附近，这样买基金胜率更高！',
              href:'https://mp.weixin.qq.com/s/jjizi4vKvqaCqcGVXyU7pA'
            },
            {
              type: 'href',
              title: '智能定投 | 均线偏离策略',
              href:'https://mp.weixin.qq.com/s/t8fDLHrLHKR2610unZ7JjA'
            },
            {
              type: 'href',
              title: '智能定投 | 金字塔加仓法',
              href:'https://mp.weixin.qq.com/s/Wr7wyImvf3RLz8ptZACYuw'
            },
            {
              type: 'href',
              title: '智能定投 | 移动平均成本法',
              href:'https://mp.weixin.qq.com/s/C9IISb2TACanyHCbnaO_3g'
            },
          ]
        }
      ]
    }
    this.param = [
      blockA,
      blockB
    ]
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
            this.$router.push({name: item.url});
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
