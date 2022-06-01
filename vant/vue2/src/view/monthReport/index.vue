<template>
  <div>
    sssssssssss
    <van-grid :border="false" :column-num="1" class="block">
        <div class="van-multi-ellipsis--l3">
          这是一段最多显示三行的文字，多余的内容会被省略
      </div>
    </van-grid >
  </div>
</template>

<script>
export default {
    props:{
        param:{}
    },
  data() {
      return {
        activeKey: 0,
        activeNames:[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],],
      }
  },
  created() {
    window.vueThis = this;
  },
  methods:{
      detailClick(item) {
          if(item.type=='pdf') {
            var link = document.createElement('a');
            link.setAttribute("href", item.url);
            link.setAttribute("download", '测试下载.pdf');
            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            link.dispatchEvent(evObj);
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
  margin-left:12px
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
/deep/.van-collapse-item__content {
    padding: 0px 0px!important; 
    color: #969799;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
}
</style>
