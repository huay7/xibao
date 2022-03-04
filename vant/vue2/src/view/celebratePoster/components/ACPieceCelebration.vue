<template>
   <div>
        <!-- 输入任意文本 -->
        <van-field v-model="channel" label="渠道" />
        <!-- 输入任意文本 -->
        <van-field v-model="name" label="姓名" />
        <!-- 输入任意文本 -->
        <van-field v-model="amount" label="金额" />
        <van-button type="info" @click="saveImg">保存设置</van-button>
        <van-button type="info" @click="saveToLocal">预览并下载</van-button>
        <div >
            <div id="toSave" class="save-container">
                <img id="imgBackground" class="img-container" src="../../../static/ACPieceCelebration.jpg">
                <div id="content" class="content">
                    <div class="child1">{{channel}}</div>
                    <div class="child2">{{name}}</div>
                    <div class="child3">{{amount}}</div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
/* eslint-disable no-console */
import { Row, Col, Icon, Cell, CellGroup,Sidebar, SidebarItem,Swipe, SwipeItem, Image, Button, ImagePreview, Field, Toast } from 'vant';
import html2canvas from 'html2canvas';
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
        [ImagePreview.Component.name]:ImagePreview.Component,
        [Field.name]:Field,
    },
   data () {
      return {
          channel:'',
          name:'',
          amount:'',
          imgWidth:0,
          imgHeight:0,
      };
   },
    created(){
        window.vueThis1 = this;

    },
    mounted() {
        setTimeout(()=>{
            window.vueThis1.resetStyle()
        },0)
    },
   computed: {},
    methods:{
        resetStyle() {
            const img = document.getElementById('imgBackground');
            const imgBox = window.getComputedStyle(img);
            this.imgWidth = Number(imgBox.width.substring(0,imgBox.width.length-2));
            this.imgHeight = Number(imgBox.height.substring(0,imgBox.height.length-2));
            const content = document.getElementById('content')
            const toSave = document.getElementById('toSave')
            content.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
            toSave.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
        },
        saveImg() {
            document.documentElement.scrollTop?document.documentElement.scrollTop = 0:null;
            document.body.scrollTop?document.body.scrollTop = 0:null;
            html2canvas(document.getElementById('toSave'),
                {
                    width: this.imgWidth, //canvas宽度
                    height: this.imgHeight,//canvas高度
                }).then(function(canvas) {
                        let imgUrl = canvas.toDataURL('image/png');
                        window.vueThis1.imgWaitingSave = imgUrl
                });
            Toast('保存成功')
        },
        saveToLocal() {
            ImagePreview([
                this.imgWaitingSave,
            ]);
        }
    }
}
</script>
<style scoped>
.save-container {
    height: 600px;
    width: fit-content;
    position: relative;
}
.img-container {
    height: 600px;
}
.content {
    position:absolute;
    top: 0px;
    height: 600px;
    /* width: 300px; */
    /* justify-content: center;
    justify-items: center; */
    align-items:center;
    display: flex;
    flex-direction: column;
}
.child1 {
    margin-top:250px;
    color:#f6c77c;
}
.child2 {
    margin-top:10px;
    color:#f6c77c;
}
.child3 {
    margin-top:10px;
    font-size: 24px;
    background-image: linear-gradient(to right, #f6c77c, #fedabc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>