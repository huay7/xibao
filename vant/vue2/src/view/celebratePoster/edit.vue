<template>
   <div>
       <van-nav-bar
            title="喜报编辑"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <CZYHModel 
            v-if="this.type=='ACPieceBomb'"
            :PaddingTop="264"
            :PaddingBottom="284"
            :imgSrc="require('../../static/ACPieceBomb.jpg')"
        />
        <CZYHModel 
            v-if="this.type=='MainPieceBomb'"
            :PaddingTop="264"
            :PaddingBottom="284"
            :imgSrc="require('../../static/MainPieceBomb.jpg')"
        />
        <CZYHModel :imgSrc="require('../../static/ACPieceCelebration.jpg')" v-if="this.type=='ACPieceCelebration'"/>
        <CZYHModel :imgSrc="require('../../static/MainPieceCelebration.jpg')" v-if="this.type=='MainPieceCelebration'"/>
        <CZYHModel :imgSrc="require('../../static/newAC.jpg')" v-if="this.type=='newAC'"/>
        <CZYHModel :imgSrc="require('../../static/newMain.jpg')" v-if="this.type=='newMain'"/>
        <CZYHSaleTopModel
            :imgSrc="require('../../static/saleTop.jpg')"
            v-if="this.type=='saleTop'"
            :PaddingTop="264"
            :PaddingBottom="184"
        />
        <CZYHModel
            :imgSrc="require('../../static/xunliNew3.jpg')"
            v-if="this.type=='xunliNew3'"
            :PaddingTop="208"
            :PaddingBottom="334"
        />
        <CZYHModel
            :imgSrc="require('../../static/ningxuwenjin3.jpg')"
            v-if="this.type=='ningxuwenjin3'"
        />
        <CZYHModel
            :imgSrc="require('../../static/kaitai.jpg')"
            v-if="this.type=='kaitai'"
        />
        <CZYHModel
            :imgSrc="require('../../static/kaitaiA.jpg')"
            v-if="this.type=='kaitaiA'"
        />
   </div>
</template>

<script>
/* eslint-disable no-console */
import { Row, Col, Icon, Button, ImagePreview, NavBar, Field } from 'vant';
import CZYHModel from './components/CZYHModel.vue'
import CZYHSaleTopModel from './components/CZYHSaleTopModel.vue'

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Image.name]:Image,
        [Button.name]:Button,
        [NavBar.name]:NavBar,
        [ImagePreview.Component.name]:ImagePreview.Component,
        [Field.name]:Field,
        CZYHModel,
        CZYHSaleTopModel
   },
   data () {
      return {
          type:''
      };
   },
   computed: {},
    mounted() {
        this.type = this.$route.query.type;
    },
   methods: {
       onClickLeft() {
        this.$router.push({name: 'celebratePoster' });
       }
   }
}
</script>
<style>

</style>