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
    created() {
        this.id = this.$route.query.id;
        this.getCurrent(this.id)
        this.setTitle(this.currentTabComponent.title)
        if(this.currentTabComponent.share)
            this.wxShare(this.currentTabComponent.share.title,this.currentTabComponent.share.desc,this.currentTabComponent.share.imgUrl)
    },
   computed: {},

   methods: {
       getCurrent(id) {
           this.currentTabComponent = this.currentTabComponents.find(e=>e.id==id)
       }
   },
}
</script>
<style>

</style>