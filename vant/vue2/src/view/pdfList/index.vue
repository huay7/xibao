<template>
  <div>
    <van-tabs v-model="activeKey">
        <van-tab v-for="(item,index) in param" :key="index" :title="item.title">
            <van-collapse v-model="activeNames[index]">
                <van-collapse-item v-for="(childitem,childindex) in item.list" :key="childindex" :title="childitem.title" :name="childindex">
                    <van-grid :border="false" direction="horizontal" :column-num="2">
                        <van-grid-item @click="detailClick(grandchilditem)" v-for="(grandchilditem,grandchildindex) in childitem.pdflist" :key="grandchildindex" icon="https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E7%94%BB%E6%9D%BF%201.jpg?versionId=CAEQLRiBgIDvpJOEhxgiIGNhZDJhMzlkMWQ5NzRhODE5MTA1YWVjOTZjMWI0MDk1" :text="grandchilditem.name" />
                    </van-grid>
                </van-collapse-item>
            </van-collapse>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeKey: 0,
        activeNames:[["1"],["1"],["1"],["1"],["1"],["1"]],
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
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E5%AE%89%E7%9B%8890%E5%A4%A9%E8%90%A5%E9%94%80%E5%8D%95%E9%A1%B5%EF%BC%88%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢稳健增强',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E7%A8%B3%E5%81%A5%E5%A2%9E%E5%BC%BA%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E7%A8%B3%E5%81%A5%E5%A2%9E%E5%BC%BA%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢华嘉信用债',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BA%E8%90%A5%E9%94%80%E5%8D%95%E9%A1%B5%EF%BC%88%E6%B8%A0%E9%81%93%E5%86%85%29.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BA%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%88%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢开泰A',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%BC%80%E6%B3%B0A%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%BC%80%E6%B3%B0%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢开泰C',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%BC%80%E6%B3%B0C%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%BC%80%E6%B3%B0%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                 {
                    title:'永赢讯利A',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E8%BF%85%E5%88%A9A%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E8%BF%85%E5%88%A9%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢讯利E',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E8%BF%85%E5%88%A9E%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E8%BF%85%E5%88%A9%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
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
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%88%90%E9%95%BF%E9%A2%86%E8%88%AA%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%88%90%E9%95%BF%E9%A2%86%E8%88%AA%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢港股通品质生活慧选',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B8%AF%E8%82%A1%E9%80%9A%E5%93%81%E8%B4%A8%E7%94%9F%E6%B4%BB%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%B8%AF%E8%82%A1%E9%80%9A%E5%93%81%E8%B4%A8%E7%94%9F%E6%B4%BB%E6%85%A7%E9%80%89%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢港股通优质成长一年混合',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%B8%AF%E8%82%A1%E9%80%9A%E4%BC%98%E8%B4%A8%E6%88%90%E9%95%BF%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%B8%AF%E8%82%A1%E9%80%9A%E4%BC%98%E8%B4%A8%E6%88%90%E9%95%BF%E4%B8%80%E5%B9%B4%E6%B7%B7%E5%90%88%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢宏泽',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%AE%8F%E6%B3%BD%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E5%AE%8F%E6%B3%BD%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢惠添益',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E7%9B%8A%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E7%9B%8A%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢惠添盈',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E7%9B%88%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E7%9B%88%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢消费主题',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢长远价值',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E9%95%BF%E8%BF%9C%E4%BB%B7%E5%80%BC%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E9%95%BF%E8%BF%9C%E4%BB%B7%E5%80%BC%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
                {
                    title:'永赢智能领先',
                    pdflist:[
                        {
                            type: 'pdf',
                            name: '季度单页',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88%E5%AD%A3%E5%BA%A6%E5%8D%95%E9%A1%B5%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                        {
                            type: 'pdf',
                            name: '季度运作报告',
                            url: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052001/%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88%E5%AD%A3%E5%BA%A6%E8%BF%90%E4%BD%9C%E6%8A%A5%E5%91%8A%EF%BC%882022Q1%EF%BC%8C%E6%B8%A0%E9%81%93%E5%86%85%EF%BC%89.pdf',
                        },
                    ]
                },
            ]
        },
    ]
  },
  methods:{
      detailClick(item) {
          if(item.type=='pdf') {
            var link = document.createElement('a');
            link.setAttribute("href", item.url);
            link.setAttribute("download", '测试下载.pdf');
            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            link.dispatchEvent(evObj);
          }
      }
  }
};
</script>

<style lang="less" scoped>
</style>
