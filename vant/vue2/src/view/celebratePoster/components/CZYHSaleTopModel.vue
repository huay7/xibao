<template>
   <div>
        <van-field v-model="channelA" label="渠道A" />
        <van-field v-model="nameA" label="姓名A" />
        <van-field v-model="amountA"  label="金额A" />
        <van-field v-model="channelB" label="渠道B" />
        <van-field v-model="nameB" label="姓名B" />
        <van-field v-model="amountB"  label="金额B" />
        <van-field v-model="channelC" label="渠道C" />
        <van-field v-model="nameC" label="姓名C" />
        <van-field v-model="amountC"  label="金额C" />

        <van-button type="info ma-sm" @click="saveImg">保存并预览</van-button>
        <div class="flex justify-center ">
            <div id="toSave" class="save-container">
                <img id="imgBackground" class="img-container" :src="imgSrc">
                <div id="content" class="content">
                    <div id="box" class="box">
                        <div id="child1" class="child1 flex align-center bold">
                            <div class="width90 flex column align-end">
                                <div class="font14">{{channelA}}</div>
                                <div class="font14">{{nameA}}</div>
                            </div>
                            <span class="font35 bold ml10">{{amountA}}</span>
                        </div>
                        <div id="child2" class="child2 flex align-center bold">
                            <div class="width90 flex column align-end">
                                <div class="font14">{{channelB}}</div>
                                <div class="font14">{{nameB}}</div>
                            </div>
                            <span class="font35 bold ml10">{{amountB}}</span>
                        </div>
                        <div id="child3" class="child3 flex align-center bold">
                            <div class="width90 flex column align-end">
                                <div class="font14">{{channelC}}</div>
                                <div class="font14">{{nameC}}</div>
                            </div>
                            <span class="font35 align-center ml10">{{amountC}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
/* eslint-disable no-console */
import { Row, Col, Icon, Cell, CellGroup,Sidebar, SidebarItem,Swipe, SwipeItem, Image, Button, ImagePreview, Field, Toast, Switch,Stepper } from 'vant';
import html2canvas from 'html2canvas';
function getPxString(val) {
    return val + 'px'
}
export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Sidebar.name]: Sidebar,
        [SidebarItem.name]: SidebarItem,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Image.name]: Image,
        [Button.name]: Button,
        [ImagePreview.Component.name]: ImagePreview.Component,
        [Field.name]: Field,
        [Switch.name]: Switch,
        [Stepper.name]: Stepper
    },
    props:{
        imgSrc: {
            default:require('../../../static/MainPieceCelebration.jpg'),
            type: String
        },
        PaddingTop:{
            default:224,
            type: Number
        },
        PaddingBottom:{
            default:318,
            type: Number
        }
    },
    watch:{
       channelA() {
           this.resetTextStyle()
       },
       nameA() {
           this.resetTextStyle()
       },
       amountA() {
           this.resetTextStyle()
       },
       channelB() {
           this.resetTextStyle()
       },
       nameB() {
           this.resetTextStyle()
       },
       amountB() {
           this.resetTextStyle()
       },
       channelC() {
           this.resetTextStyle()
       },
       nameC() {
           this.resetTextStyle()
       },
       amountC() {
           this.resetTextStyle()
       }
   },
   data () {
      return {
          isToasted: false,
          //文本值
          channelA:'',
          channelB:'',
          channelC:'',
          nameA:'',
          nameB:'',
          nameC:'',
          amountA:'',
          amountB:'',
          amountC:'',
          //html2Canvs保存图片使用
          imgWidth:0,
          imgHeight:0,
          //是否启动自定义布局
          isAuto:false,
          //样式常量
          //修改块上边距
          contentPaddingTop:224,
          //修改块下边距
          contentPaddingBottom:318,
          //文本宽度
          channelWidth:240,
          nameWidth:240,
          amountWidth:240,
          //文本上边距
          channelTop:10,
          nameTop:14,
          amountTop:14,
          //文本大小
          channelTextSize:22,
          nameTextSize:20,
          amountTextSize:32,
          //字体颜色
          channelTextColor:18,
          nameTextColor:18,
          amountTextColor:24,
      };
   },
    created(){
        window.vueThis1 = this;
        this.contentPaddingTop = this.PaddingTop
        this.contentPaddingBottom = this.PaddingBottom
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
            //设置父componengt大小
            content.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
            toSave.setAttribute('style',`width:${imgBox.width};height:${imgBox.height}`)
            content.style['padding-top'] = getPxString(this.contentPaddingTop)
            content.style['padding-bottom'] = getPxString(this.contentPaddingBottom)
        },
        resetTextStyle() {
            setTimeout(()=>{
                {
                const child1 = document.getElementById('child1')
                const child2 = document.getElementById('child2')
                const child3 = document.getElementById('child3')
                //   //设置父componengt大小
                //设置channel
                const textBlock = document.getElementById('box');
                const box = window.getComputedStyle(textBlock);
                const height = (700-this.contentPaddingTop-this.contentPaddingBottom-Number(box.height.substring(0,box.height.length-2)))/2;
                textBlock.style['margin-top'] = getPxString(height)
                child1.style['margin-top'] = '0px'
                child1.style['width'] = getPxString(window.vueThis1.channelWidth)
                child1.style['font-size'] = getPxString(window.vueThis1.channelTextSize)
                // child1.style['color'] = getPxString(window.vueThis1.channelTextColor)
                //设置name
                child2.style['margin-top'] = getPxString(window.vueThis1.nameTop)
                child2.style['width'] = getPxString(window.vueThis1.nameWidth)
                child2.style['font-size'] = getPxString(window.vueThis1.nameTextSize)
                // child2.style['color'] = getPxString(window.vueThis1.namelTextColor)
                //设置amount
                child3.style['margin-top'] = getPxString(window.vueThis1.amountTop)
                child3.style['width'] = getPxString(window.vueThis1.amountWidth)
                child3.style['font-size'] = getPxString(window.vueThis1.amountTextSize)
                // child3.style['color'] = getPxString(window.vueThis1.amountTextColor)
            }
            },0)
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
                    window.vueThis1.saveToLocal()
                    if(!window.vueThis1.isToasted) {
                        setTimeout(()=>Toast({message:'长按保存至本地',position: 'top'}),800)
                        window.vueThis1.isToasted = true
                    }
                });
        },
        saveToLocal() {
            ImagePreview([
                this.imgWaitingSave,
            ]);
        }
    }
}
</script>
<style lang="less" scoped>
@import "../style/common.css";
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
.box {
    align-items:center;
    display: flex;
    flex-direction: column;
}
.child1 {
    color:#FDEEC5;
    text-align:center;
    word-break: break-all;
}
.child2 {
    color:#FDEEC5;
    text-align:center;
    word-break: break-all;
}
.child3 {
    font-weight: bold;
    color: #FDEEC5;
    text-align:center;
    word-break: break-all;
}
.font14 {
    font-size: 16px;
}
.font35 {
    font-size: 35px;
}
.width90 {
    width: 100px;
}
.ml10 {
    margin-left:10px ;
}
</style>