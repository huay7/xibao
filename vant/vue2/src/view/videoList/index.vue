<template>
  <div>
    <van-grid :column-num="3">
        <van-grid-item v-for="(item,index) in param" :key="index">
            <video v-if="item.poster" :key="index" :src="item.url" :poster="item.poster" preload controls="controls" width="100%" height="200px"></video>
            <video v-else :key="index" :src="item.url" :poster="item.url+'&x-oss-process=video/snapshot,t_1000,f_jpg,w_109,h_200,m_fast'" preload controls="controls" width="100%" height="200px"></video>
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
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
