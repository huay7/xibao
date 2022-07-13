<template>
   <div>
       <component :key="this.$route.query.id" :is="currentTabComponent.model" :param="currentTabComponent.param"></component>
        <van-dialog v-model="isPwd" title="请输入密码" :beforeClose="this.beforeClose">
            <template #default>
                <van-field size="large" label-width="60px" clearable :border="true" :center="true" :colon="true" class="padding30" v-model="password" type="password" label="密码"/>
            </template>
        </van-dialog>
   </div>
</template>

<script>
import posterlist from '../posterList'
import posterlistnobutton from '../posterListNoButton'
import videolist from '../videoList'
import autoivestlist from '../autoIvestList'
import guzhaipoint from '../guzhaiPoint'
import commonlist from '../commonList'
import pdflist from '../pdfList'
import celebrateposter from '../celebratePoster'
import sidebarVersion from '../test/sidebarVersion.vue'
import ningyinPlace from "../ningyinPlace"
import pictureview from '../pictureView'
<<<<<<< HEAD
import { pageA,pageB,pageC,pageO } from './autoIvest.js'
=======
import newIndex from '../newIndex'
import everyList from '../everyList'
import productList from '../productList'
import { pageA,pageB,pageC } from './autoIvest.js'
>>>>>>> origin/feature-20220711-indexRequire
import { pageD } from './pdfList.js'
import { pageE } from './celebratePoster.js'
import { pageK,pageZ } from './test.js'
import { pageY,pageT, pageP } from './guzhaiPoint.js'
import { pageG } from './ningyinPlace.js'
import { pageM } from './pictureView.js'
import { pageH } from './newIndex.js'
import { pageI } from './everyList'
import { Notify } from 'vant';

import { queryParams } from '@/utils/api'
export default {
    components: {
        posterlist,
        posterlistnobutton,
        videolist,
        autoivestlist,
        guzhaipoint,
        commonlist,
        pdflist,
        celebrateposter,
        pictureview,
        sidebarVersion,
        ningyinPlace,
        newIndex,
        everyList,
        productList
   },
   data () {
      return {
        currentTabComponents:[pageA,pageB,pageC,pageD,pageE,pageK,pageZ,pageY,pageT,pageP,pageG,pageM,pageO,pageH,pageI],
        currentTabComponent: {},
        isPwd:false,
        password:'',
        passwordDefault:''
      };
   },
    async created() {
        this.id = this.$route.query.id;

        // this.getCurrentTemp(this.id)

        const res = await queryParams()
        const { data } = res;
        this.getCurrent(this.id,data)
        this.setTitle(this.currentTabComponent.title)
        if(this.currentTabComponent.isPwd) {
            console.log(window.localStorage.getItem(this.id))
           if( window.localStorage.getItem(this.id)!=='true') {
                this.isPwd = true
                this.passwordDefault = this.currentTabComponent.passwordDefault
            }
        }
        if(this.currentTabComponent.share)
            this.wxShare(this.currentTabComponent.share.title,this.currentTabComponent.share.desc,this.currentTabComponent.share.imgUrl)
    },
   computed: {},

   methods: {
        getCurrentTemp(id) {
            this.currentTabComponent = this.currentTabComponents.find(e=>e.id==id)
        },
        getCurrent(id,data) {
           const res = data.map(e=>{
               const base64Res = e.content
               const stringContent = this.base64Decode(base64Res.replace(/\?/g, '/').replace(/!/g, '+'))
               let val ={};
               try {
                val = JSON.parse(stringContent)
               } catch(e) {
                val = {
                    id:-1
                }
               }
               return val
            })
           const content = res.find(e=>e.id==id)
           this.currentTabComponent = content
        },
        beforeClose(action, done) {
            if (action === 'confirm') {
                if(this.password == this.passwordDefault) {
                    
                    Notify({type: 'success',message:'密码正确',duration: 300,});
                    window.localStorage.setItem(this.id,'true')
                    done()
                }else {
                    Notify({message:'密码错误',duration: 800,});
                    done(false)
                }
            } else {
                done(false);
            }
        }
   },
}
</script>
<style>
.padding30 {
    padding-left: 20%;
    padding-right: 20%;
}
</style>