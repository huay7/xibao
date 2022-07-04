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
              @click="productClick(grandchilditem)"
          />
        </van-swipe-item>
      </van-swipe>
    </van-grid> 

    <van-grid :border="false" :column-num="1" class="block">
      <div class="titlesty">居民财富四象限持营体系</div>   
    </van-grid>  

    <!-- 四项 -->
    <van-grid :border="false" :column-num="1" class="block imgbox">
      <!-- <img src="./image/bg2.png" alt="" style="width: 100%;border-radius: 0.5rem;"> -->
      <div class="imgcontent">
        <van-row v-for="(grandchilditem,grandchildindex) in param[0].fourList" :key="grandchildindex">
            <van-col v-if="grandchilditem.title1" class="imgsty img1sty"  v-html="grandchilditem.title1" @click="productClick(grandchilditem.url1)"></van-col>
            <van-col v-if="grandchilditem.title2" class="imgsty img11sty"  v-html="grandchilditem.title2" @click="productClick(grandchilditem.url2)"></van-col>
        </van-row>
      </div>
    </van-grid>  

    <!-- 列表 -->
    <van-grid :border="false" :column-num="1" class="block">
      <div class="titlesty">专户专区</div>   
    </van-grid>  

    <van-grid :border="false" :column-num="1" class="block">
      <van-cell v-for="(grandchilditem,grandchildindex) in param[0].list" :key="grandchildindex">
        <van-row @click="productClick(grandchilditem.url)">
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
        <img :src="grandchilditem.src" alt="" style="width: 100%;border-radius: 0.5rem;" @click="productClick(grandchilditem.url)">
      </van-row>    
    </van-grid>  

    <van-grid :border="false" :column-num="1" class="block">
      <div class="buttonsty"  @click="productClick(param[0].lastUrl)">点击了解更多产品</div>   
    </van-grid>  

    <van-grid :border="false" :column-num="1" class="block ">
      <h5>本资料仅供销售经理了解本公司产品，不作为宣传推介材料，不得对外发放，请勿提供给投资者。</h5>
      <h6>风险提示：本资料仅供销售经理了解本公司产品，不作为宣传推介材料，不得对外发放，请勿提供给投资者。本材料不作为任何法律文件。本公司承诺以诚实信用、勤勉尽责的原则管理和运用基金资产，但不保证基金一定盈利，也不保证最低收益。基金的过往业绩及其净值高低并不预示其未来业绩表现。基金管理人所管理的其它基金的业绩并不构成对本基金业绩表现的保证。
重要声明：本报告由永赢基金管理有限公司编制。本报告所包含的分析基于各种假设，不同假设可能导致分析结果出现重大不同。在任何情况下，本报告中的信息或所表述的意见并不构成对任何人的投资建议。除法律或规则规定必须承担的责任外，本公司及其雇员不对使用本报告及其内容所引发的任何直接或间接损失负任何责任。
相关策略是基金管理人根据报告时点有关市场情况而形成，管理人有权在市场情况发生变化时变更相关策略并依据计划合同有关约定继续履行管理人权利进行管理工作。
本报告版权归本公司所有。本公司保留所有权利。未经本公司事先书面许可，任何机构和个人均不得以任何形式翻版、复制、引用或转载，否则，本公司将保留随时追究其法律责任的权利。若本公司以外的其他机构（以下简称“该机构”）发送本报告，则由该机构独自为此发送行为负责。</h6>
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
    productClick(item) {
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
      } else if(item.type=='innerhref') {
        this.$router.push({name: item.url ,query: item.query});
        }else {
        window.location.href = item.href
      } 
    }
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
  color: #777;
  margin-top: 10px;
  user-select:text;
}
h6{
  padding: 0;
  margin: 0;
  color: #999;
  margin-bottom: 10px;
  user-select:text;
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
  margin-top: 50%;
  margin-left: 20px;
}
.img11sty{
  margin-top: 0.2rem;
  margin-left: 20px;
}
.imgbox{
  position: relative;
  background-image: url(./image/bg2.png);
  background-size: 100% 100%;
  height: 20.5rem;
  .imgcontent{
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
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
