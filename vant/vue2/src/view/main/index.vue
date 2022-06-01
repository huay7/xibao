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
import monthreport from '../monthReport'
import { pageA,pageB,pageC } from './autoIvest.js'
import { pageD } from './pdfList.js'
import { pageE } from './celebratePoster.js'
import { pageK } from './test.js'
import { queryParams } from '@/utils/api'
export default {
    components: {
        posterlist,
        autoivestlist,
        commonlist,
        pdflist,
        celebrateposter,
        monthreport
   },
   data () {
      return {
        currentTabComponents:[pageA,pageB,pageC,pageD,pageE,pageK],
        currentTabComponent: {},
      };
   },
    async created() {
        this.id = this.$route.query.id;

        const res = await queryParams()
        console.log(res)

        console.log('1')
        const { data } = res;
        console.log('2')

        this.getCurrent(this.id,data)
        console.log('3')

        // this.getCurrentTemp(this.id)
        this.setTitle(this.currentTabComponent.title)
        console.log('4')

        if(this.currentTabComponent.share)
            console.log('5')
            this.wxShare(this.currentTabComponent.share.title,this.currentTabComponent.share.desc,this.currentTabComponent.share.imgUrl)
            console.log('6')
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
           console.log('2.5')
           console.log(res)

           const content = res.find(e=>e.id==id)
           this.currentTabComponent = content
           console.log(this.currentTabComponent)
       }
   },
}
</script>
<style>

</style>