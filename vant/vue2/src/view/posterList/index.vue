<template>
  <div>
    <van-grid :column-num="3">
        <van-grid-item v-for="(item,index) in param" :key="index">
            <van-image
                width="100%"
                height="100%"
                fit="cover"
                :src="item.url"
                @click="preview(item)"
            />
            <van-button class="mt-8px" type="primary" :disabled="!item.text" @click="copyText(item.text)">复制文案</van-button>
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Dialog, ImagePreview } from 'vant';
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
      copyText(text) {
        let textNew;
        textNew = text.replaceAll('<br>', '\n')
        textNew = textNew.replaceAll('<br/>', '\n')
        // const temp = new this.clipboard(textNew)
        this.clipboard.copy(textNew)
        Dialog.alert({
            title: '复制成功',
            message: text,
        }).then(() => {
            // on close
        });
      }
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
