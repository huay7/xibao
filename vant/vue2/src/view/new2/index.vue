<template>
  <div>
    <van-tabs v-model="activeKey">
        <van-tab v-for="(item,index) in param" :key="index" :title="item.title">
            <van-collapse v-model="activeNames">
                <van-collapse-item v-for="(childitem,childindex) in item.list" :key="childindex" :title="childitem.title" :name="childindex">
                    <van-grid :border="false" direction="horizontal" :column-num="2">
                        <van-grid-item v-for="(grandchilditem,grandchildindex) in childitem.pdflist" :key="grandchildindex" icon="photo-o" :text="grandchilditem" />
                    </van-grid>
                </van-collapse-item>
            </van-collapse>
        </van-tab>
    </van-tabs>
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
        activeKey: 0,
        activeNames:["1"],
        param:[]
      }
  },
  created() {
    window.vueThis = this;
    this.param = [
        {
            title: '固收',
            list: [
                {
                    title:'永赢安盈90天',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢稳健增强',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢华嘉信用债',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢开泰A',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢开泰C',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                 {
                    title:'永赢讯利A',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢讯利E',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
            ]
        },
        {
            title: '权益',
            list: [
                {
                    title:'永赢成长领航',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢港股通品质生活慧选',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢港股通优质成长一年混合',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢宏泽',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢惠添益',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢惠添盈',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢消费主题',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢长远价值',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
                {
                    title:'永赢智能领先',
                    pdflist:[
                        'aaa','bbb','ccc'
                    ]
                },
            ]
        },
    ]
  },
  methods:{
  }
};
</script>

<style lang="less" scoped>
</style>
