<template>
  <div>
    <!-- banner -->
    <van-grid :border="false" :column-num="1" class="block">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(grandchilditem,grandchildindex) in param[0].bannerList" :key="grandchildindex">
          <van-image
              radius="8px"
              width="100%"
              height="100%"
              fit="cover"
              :src="grandchilditem.src"
              @click="listClik(grandchilditem)"
          />
        </van-swipe-item>
      </van-swipe>
    </van-grid> 

    <van-grid :border="false" :column-num="1" class="block">
      <div class="titlesty">居民财富四象限持营体系</div>   
    </van-grid>  

    <!-- 四项 -->
    <van-grid :border="false" :column-num="1" class="block imgbox">
      <img src="./image/bg2.png" alt="" style="width: 100%;border-radius: 0.5rem;">
      <div class="imgcontent">
        <van-row v-for="(grandchilditem,grandchildindex) in param[0].fourList" :key="grandchildindex">
            <van-col v-if="grandchilditem.title1" class="imgsty" :class="grandchilditem.className1" v-html="grandchilditem.title1"></van-col>
            <van-col v-if="grandchilditem.title2" class="imgsty" :class="grandchilditem.className2" v-html="grandchilditem.title2"></van-col>
        </van-row>
      </div>
    </van-grid>  

    <!-- 列表 -->
    <van-grid :border="false" :column-num="1" class="block">
      <div class="titlesty">专户专区</div>   
    </van-grid>  

    <van-grid :border="false" :column-num="1" class="block">
      <van-cell v-for="(grandchilditem,grandchildindex) in param[0].list" :key="grandchildindex">
        <van-row @click="listClik(grandchilditem)">
          <van-col class="iconstyle">
            <van-icon v-if="grandchilditem.icon"  size="24"  :name="require('./image/icon1.png')" />
          </van-col>
          <van-col class="ml-small">{{grandchilditem.title}}</van-col>
        </van-row>
        <template #right-icon>
          <van-col class="iconstyle1">
            <van-icon :name="require('./image/icon2.png')" size="24"  />
          </van-col>
        </template>
      </van-cell>
    </van-grid>

    <!-- 卡片 -->
    <van-grid :border="false" :column-num="1" class="block" v-for="(grandchilditem,grandchildindex) in param[0].cardList" :key="grandchildindex">
      <van-row>
        <img :src="grandchilditem.src" alt="" style="width: 100%;border-radius: 0.5rem;" @click="listClik(grandchilditem)">
      </van-row>    
    </van-grid>  

    <van-grid :border="false" :column-num="1" class="block">
      <div class="buttonsty">点击了解更多产品</div>   
    </van-grid>  

    <van-grid :border="false" :column-num="1" class="block ">
      <h5>本资料仅供销售经理了解本基金产品，不作为宣传推介材料，不得对外发放，请勿提供给投资者。</h5>
      <h6>风险提示：投资有风险，投资需谨慎。基金管理人承诺以诚实信用、勤勉尽责的原则管理和运用基金资产，
但不保证本基金—定盈，也不保证最低收益。本基金的过往业绩及其净值高低并不预示其未来业绩表现，基金管理人管理的其他基金的业绩并不构成对本
基金业绩表现的保证。投资不同类型的基金将获得不同的收益预期，并承担不同程度的风险。
通常基金的收益预期越高，风险越大。本基金基金份额设置一年的最短持有期限，在最短持有期限内，
您将面临因不能赎回或卖出基金份额而出现的流动性约束。本产品投资于港股通标的股票
除了需要承担与境内证券投资基金类似的市场波动风险等一般投资风险之外，本基金还面临汇率风险等
境外证券市场投资所面临的特别投资风险。本产品厲于中风险（R3）产品
风险等级高手货币市场基金及债券型证券投资基金适合经客户风险承受能力等级测评后结果为平衡型 （C3）及以上的
投资者。敬请投资者在做出投资决策之前，仔细阅读产品法律文件
充分认识本基金的风险收益特征和产品特性，充分考虑自身的风险承受能力，理性判断并谨慎做出投资决策。</h6>
    </van-grid>      
  </div>
</template>

<script>
import { ImagePreview } from 'vant';

export default {
  components:{
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
    listClik(item) {
      var link = document.createElement('a');
      const downloadUrl = this.getPDFDownLoadUrl(item.pdf)
      link.setAttribute("href", downloadUrl);
      link.setAttribute("download", '测试下载.pdf');
      var evObj = document.createEvent('MouseEvents');
      evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(evObj);
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
h5{
  padding: 0;
  margin: 0;
  color: #777;;
  margin-top: 10px;
}
h6{
  padding: 0;
  margin: 0;
  color: #999;
  margin-bottom: 10px;
}
.buttonsty{
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(#fdb66d,#f87f49);
  color: #fff;
  padding: 10px;
  width: 50%;
  border-radius: 20px;
  margin: 0 auto;
}
.titlesty{
  display: flex;
  justify-content: center;
  width: 100%;
  color: #333;
  margin: 0 auto;
}
.imgsty{
  position: absolute;
  width: 134px;
  height: 34px;
  background-image: url(./image/bg1.png);
  color: #fff;
  background-size: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.img1sty{
  bottom: 3rem;
  left: 20px;
}
.img11sty{
  bottom: 0.6rem;
  left: 20px;
}
.img2sty{
  bottom: 3rem;
  right: 20px;
}
.img22sty{
  bottom: 0.6rem;
  right: 20px;
}
.img3sty{
  bottom: 3rem;
  left: 20px;
}
.img33sty{
  bottom: 0.6rem;
  left: 20px;
}
.img4sty{
  bottom: 3rem;
  right: 20px;
}
.img44sty{
  bottom: 0.6rem;
  right: 20px;
}
.imgbox{
  position: relative;
  .imgcontent{
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    /deep/ .van-row{
      width: 100%;
      height: 100%;
      position: relative;
    }
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
</style>
