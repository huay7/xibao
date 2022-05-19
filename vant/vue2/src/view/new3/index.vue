<template>
  <div>
    <van-grid :border="false" :column-num="1" class="block">
      <van-grid-item>
        <van-tabs v-model="active">
          <van-tab title="定投素材">
            <van-grid :column-num="2">
              <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </van-tab>
          <van-tab title="定投QA">
            <van-grid :column-num="3">
              <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </van-tab>
        </van-tabs>
      </van-grid-item>
    </van-grid>
        <van-grid :border="false" :column-num="1" class="block">
      <van-grid-item>
        <van-tabs v-model="active1">
          <van-tab title="定投基础知识">
            <van-list>
              <van-cell v-for="item in list" :key="item">
                <van-icon name="chat-o" />
                <span class="ml-small">{{item}}</span>
              </van-cell>
            </van-list>
          </van-tab>
          <van-tab title="定投进阶玩法">
            <van-grid :column-num="1" :border="false">
              <van-grid-item  v-for="value in 4" :key="value" text="文字dsadadadasd" />
            </van-grid>
          </van-tab>
        </van-tabs>
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
