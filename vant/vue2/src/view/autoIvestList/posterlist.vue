<template>
  <div>
    <van-grid :gutter="10">
        <van-grid-item v-for="(item,index) in param" :key="index">
            <van-image
                width="80px"
                height="180px"
                fit="cover"
                :src="item.url"
                @click="preview(item)"
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
        param:[]
      }
  },
  created() {
    this.param = [
      {
        url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A51.jpg'
      },
      {
        url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A52.jpg'
      },
      {
        url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BA%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A5.JPG'
      },
      {
        url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%951.jpg'
      },
      {
        url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%952.jpg'
      },
      {
        url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A5.JPG'
      }
    ]
   },
  methods:{
      preview(item) {
        ImagePreview([item.url]);
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
