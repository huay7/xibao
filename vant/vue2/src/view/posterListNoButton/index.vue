<template>
  <div>
    <van-grid :column-num="3">
        <van-grid-item v-for="(item,index) in param" :key="index">
            <van-image
                width="100%"
                height="260"
                fit="cover"
                :src="item.url"
                @click="preview(item)"
            />
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
// import wx from '../../js/jweixin-1.6.0'
export default {
  props:{
        param:[]
  },
  data() {
      return {

      }
  },
  created() {
   },
  methods:{
      preview(item) {
        ImagePreview([item.url]);
      },
  }
};
</script>

<style lang="less" scoped>
.mt-8px {
    margin-top:8px;
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
  margin-left:12px
}
</style>
