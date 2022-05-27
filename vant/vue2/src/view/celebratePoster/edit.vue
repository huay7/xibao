<template>
   <div>
       <van-nav-bar
            title="喜报编辑"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
            <CZYHModel 
                v-if="this.type=='CZYHModel'"
                :PaddingTop="this.top"
                :PaddingBottom="this.bottom"
                :imgSrc="this.img"
            />
            <CZYHSaleTopModel
                v-if="this.type=='CZYHSaleTopModel'"
                :PaddingTop="this.top"
                :PaddingBottom="this.bottom"
                :imgSrc="this.img"
            />
   </div>
</template>

<script>
/* eslint-disable no-console */
// import { Row, Col, Icon, Button, ImagePreview, NavBar, Field } from 'vant';
import CZYHModel from './components/CZYHModel.vue'
import CZYHSaleTopModel from './components/CZYHSaleTopModel.vue'

export default {
    components: {
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
        this.img = this.$route.query.img;
        this.top = this.$route.query.top;
        this.bottom = this.$route.query.bottom;
    },
   methods: {
       onClickLeft() {
        this.$router.go(-1);
       }
   }
}
</script>
<style>

</style>