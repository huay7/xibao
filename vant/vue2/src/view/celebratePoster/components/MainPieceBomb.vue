<template>
   <div>
        <!-- 输入任意文本 -->
        <van-field v-model="channel" label="渠道" />
        <!-- 输入任意文本 -->
        <van-field v-model="name" label="姓名" />
        <!-- 输入任意文本 -->
        <van-field v-model="amount" label="金额" />
        <van-field v-model="channelTop" label="渠道上边距">
            <van-stepper slot="button" :value="channelTop" @change="channelTopChange" />
        </van-field>
        <van-field v-model="nameTop" label="姓名上边距">
            <van-stepper slot="button" :value="nameTop" @change="nameTopChange" />
        </van-field>
        <van-field v-model="amountTop" label="金额上边距">
            <van-stepper slot="button" :value="amountTop" @change="amountTopChange" />
        </van-field>


        <van-button type="info" @click="saveImg">保存设置</van-button>
        <van-button type="info" @click="saveToLocal">预览并下载</van-button>
        <div >
            <div id="toSave" class="save-container">
                <img id="imgBackground" class="img-container" src="../../../static/MainPieceBomb.jpg">
                <div id="content" class="content">
                    <div id="coreText" class="core-text">
                        <div id="textBlock" style="display:flex;align-items:center;flex-direction: column;">
                            <div class="child1">{{channel}}</div>
                            <div class="child2">{{name}}</div>
                            <div class="child3" v-if="amount.length!==0">
                                <svg width="100px" height="38px">
                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:#f6c77c; stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:#fedabc; stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text x="50" y="23" fill="url(#grad)" dominant-baseline="middle" text-anchor="middle" style="font-size:28px;font-weight: 1000;">{{amount}}</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
/* eslint-disable no-console */
import { Row, Col, Icon, Cell, CellGroup,Sidebar, SidebarItem,Swipe, SwipeItem, Image, Button, ImagePreview, Field,Stepper, Toast } from 'vant';
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
        [Stepper.name]:Stepper
    },
   data () {
      return {
          channel:'',
          name:'',
          amount:'',
          imgWidth:0,
          imgHeight:0,
          channelTop:1,
          nameTop:1,
          amountTop:1
      };
   },
   watch:{
       channel() {
         this.resetTopBottom()
       },
       name() {
         this.resetTopBottom()
       },
       amount() {
         this.resetTopBottom()
       }
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
        channelTopChange(newVal) {
            this.channelTop = newVal
        },
        nameTopChange(newVal) {
            this.nameTop = newVal
        },
        amountTopChange(newVal) {
            this.amountTop = newVal
        },
        resetStyle() {
            const img = document.getElementById('imgBackground');
            const imgBox = window.getComputedStyle(img);
            this.imgWidth = Number(imgBox.width.substring(0,imgBox.width.length-2));
            this.imgHeight = Number(imgBox.height.substring(0,imgBox.height.length-2));
            const content = document.getElementById('content')
            const toSave = document.getElementById('toSave')
            const coreText = document.getElementById('coreText')
            content.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
            toSave.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
            coreText.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
        },
        resetTopBottom() {
            setTimeout(()=>{
                const textBlock = document.getElementById('textBlock');
                const imgBox = window.getComputedStyle(textBlock);
                // this.imgWidth = Number(imgBox.width.substring(0,imgBox.width.length-2));
                const height = (162-Number(imgBox.height.substring(0,imgBox.height.length-2)))/2;
                console.log('height')
                console.log(height)
                textBlock.style['margin-top'] = height+'px'
            },0)
            // textBlock.setAttribute('style',`width:${this.imgWidth}px;height:${this.imgHeight}px;margin-top:${height}px`)
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
    align-items:center;
    display: flex;
    flex-direction: column;
}
.core-text {
    height: 600px;
    align-items:center;
    display: flex;
    flex-direction: column;
    padding-top: 254px;
    padding-bottom: 178px;
}
.child1 {
    padding-top: 8px;
    font-weight: 700;
    width: 200px;
    text-align:center;
    color:#f6c77c;
    font-size: 18px;
}
.child2 {
    padding-top:16px;
    width: 140px;
    text-align:center;
    font-weight: 700;
    color:#f6c77c;
    font-size: 18px;
}
.child3 {
    padding-top:8px;
}
</style>