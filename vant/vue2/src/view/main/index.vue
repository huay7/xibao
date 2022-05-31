<template>
   <div>
       <component :key="this.$route.query.id" :is="currentTabComponent.model" :param="currentTabComponent.param"></component>
   </div>
</template>

<script>
import posterlist from '../posterList'
import autoivestlist from '../autoIvestList'
import commonlist from '../commonList'
import pdflist from '../pdfList'
import celebrateposter from '../celebratePoster'
import { pageA,pageB,pageC } from './autoIvest.js'
import { pageD } from './pdfList.js'
import { pageE } from './celebratePoster.js'
// import { queryParams } from '@/utils/api'
export default {
    components: {
        posterlist,
        autoivestlist,
        commonlist,
        pdflist,
        celebrateposter
   },
   data () {
      return {
        currentTabComponents:[pageA,pageB,pageC,pageD,pageE],
        currentTabComponent: {},
      };
   },
    async created() {
        // const res = await queryParams()
        // const { data } = res;
        this.id = this.$route.query.id;
        this.getCurrentTemp(this.id)
        console.log(this.currentTabComponent)
        // this.getCurrent(this.id,data)
        this.setTitle(this.currentTabComponent.title)
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
               const stringContent = this.base64Decode(base64Res)
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
       }
   },
}
</script>
<style>

</style>