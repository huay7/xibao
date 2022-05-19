<template>
  <div>
    <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字">
            <van-image
                width="80px"
                height="280px"
                fit="cover"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                @click="preview"
            />
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem,Collapse,CollapseItem,List,Tab,Tabs,Row, Col, Icon, Cell, CellGroup,Sidebar, SidebarItem,Swipe, SwipeItem, Image, Button, ImagePreview } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Sidebar.name]:Sidebar,
    [SidebarItem.name]:SidebarItem,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Image.name]:Image,
    [Button.name]:Button,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [List.name]:List,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Collapse.name]:Collapse,
    [CollapseItem.name]:CollapseItem,
    [ImagePreview.Component.name]:ImagePreview.Component,
  },
  data() {
      return {
        active: 0,
        active1: 0,
        activeNames: ['1'],
        list: ['大跌后，如何加速回本解套？','赎回定投的基金份额，是不是代表定投终止？'],
        loading: false,
      }
  },
  created() { },
  methods:{
      preview() {
        ImagePreview(['https://img01.yzcdn.cn/vant/cat.jpeg']);
      },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
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
.aaa1111 {
  width: 90px!important ;
}
.ml-small {
  margin-left:12px
}
</style>
