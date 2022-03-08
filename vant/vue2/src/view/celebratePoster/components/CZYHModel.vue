<template>
   <div>
        <!-- 输入任意文本 -->
        <van-field v-model="channel" label="渠道" />
        <!-- 输入任意文本 -->
        <van-field v-model="name" label="姓名" />
        <!-- 输入任意文本 -->
        <van-field v-model="amount"  label="金额" />
        <van-field readonly label="是否自定义样式">
            <template #button>
                <van-switch @change="resetNotAutoStyle" size="16px" v-model="isAuto" />
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="channelTextSize" label="渠道文本大小">
            <template #button>
                <van-stepper v-model="channelTextSize" />
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="nameTextSize" label="姓名文本大小">
            <template #button>
                <van-stepper v-model="nameTextSize" />
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="amountTextSize" label="金额文本大小">
            <template #button>
                <van-stepper v-model="amountTextSize" />
            </template>
        </van-field>

        <van-field v-if="isAuto" v-model="channelTop" label="渠道上间距">
            <template #button>
                <van-stepper v-model="channelTop" />
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="nameTop" label="姓名上间距">
            <template #button>
                <van-stepper v-model="nameTop"/>
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="amountTop" label="金额上间距">
            <template #button>
                <van-stepper v-model="amountTop" />
            </template>
        </van-field>


        <van-field v-if="isAuto" v-model="channelWidth" label="渠道换行宽度">
            <template #button>
                <van-stepper v-model="channelWidth" step="5"/>
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="nameWidth" label="姓名换行宽度">
            <template #button>
                <van-stepper v-model="nameWidth" step="5"/>
            </template>
        </van-field>
        <van-field v-if="isAuto" v-model="amountWidth" label="金额换行宽度">
            <template #button>
                <van-stepper v-model="amountWidth" />
            </template>
        </van-field>


        <van-button type="info ma-sm" @click="saveImg">保存并预览</van-button>
        <div class="flex justify-center ">
            <div id="toSave" class="save-container">
                <img id="imgBackground" class="img-container" :src="imgSrc">
                <div id="content" class="content">
                    <div id="box" class="box">
                        <div id="child1" class="child1">{{channel}}</div>
                        <div id="child2" class="child2">{{name}}</div>
                        <div id="child3" class="child3">{{amount}}</div>
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
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result
  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
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
       channel() {
           this.resetTextStyle()
       },
       name() {
           this.resetTextStyle()
       },
       amount() {
           this.resetTextStyle()
       },
       channelTop() {
           this.resetTextStyle()
       },
       nameTop() {
           this.resetTextStyle()
       },
       amountTop() {
           this.resetTextStyle()
       },
       channelWidth() {
           this.resetTextStyle()
       },
       nameWidth() {
           this.resetTextStyle()
       },
       amountWidth() {
           this.resetTextStyle()
       },
       channelTextSize() {
           this.resetTextStyle()
       },
       nameTextSize() {
           this.resetTextStyle()
       },
       amountTextSize() {
           this.resetTextStyle()
       },
       channelTextColor() {
           this.resetTextStyle()
       },
       nameTextColor() {
           this.resetTextStyle()
       },
       amountTextColor() {
           this.resetTextStyle()
       }
   },
   data () {
      return {
          isToasted: false,
          //文本值
          channel:'',
          name:'',
          amount:'',
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
          channelWidth:180,
          nameWidth:180,
          amountWidth:180,
          //文本上边距
          channelTop:10,
          nameTop:10,
          amountTop:10,
          //文本大小
          channelTextSize:18,
          nameTextSize:18,
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
        resetNotAutoStyle(val) {
          //文本宽度
          if(!val) {
            this.channelWidth=180,
            this.nameWidth=180,
            this.amountWidth=180,
            //文本上边距
            this.channelTop=10,
            this.nameTop=10,
            this.amountTop=10,
            //文本大小
            this.channelTextSize=18,
            this.nameTextSize=18,
            this.amountTextSize=32,
            //字体颜色
            this.channelTextColor=18,
            this.nameTextColor=18,
            this.amountTextColor=24
          }
        },
        resetTextStyle() {
            setTimeout(()=>{
                {
                const child1 = document.getElementById('child1')
                const child2 = document.getElementById('child2')
                const child3 = document.getElementById('child3')
                //   //设置父componengt大小
                //设置channel
                if(window.vueThis1.isAuto) {
                    const textBlock = document.getElementById('box');
                    textBlock.style['margin-top'] = '0px'
                    child1.style['margin-top'] = getPxString(window.vueThis1.channelTop)
                }else {
                    const textBlock = document.getElementById('box');
                    const box = window.getComputedStyle(textBlock);
                    const height = (700-this.contentPaddingTop-this.contentPaddingBottom-Number(box.height.substring(0,box.height.length-2)))/2;
                    textBlock.style['margin-top'] = getPxString(height)
                    child1.style['margin-top'] = '0px'
                }
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

            // Toast('保存成功')
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
    color:#f6c77c;
    text-align:center;
    word-break: break-all;
}
.child2 {
    color:#f6c77c;
    text-align:center;
    word-break: break-all;
}
.child3 {
    font-weight: bold;
    color: #fedabc;
    text-align:center;
    word-break: break-all;
}
</style>