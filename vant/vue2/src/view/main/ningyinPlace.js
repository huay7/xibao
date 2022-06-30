//海报列表配置
const blockB = {
  bannerList:[                                                                                          
    {
      type: 'pdf',
      title: '【永赢基金】5月行业观点',
      pdf: {
        ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E3%80%90%E6%B0%B8%E8%B5%A2%E5%9F%BA%E9%87%91%E3%80%915%E6%9C%88%E8%A1%8C%E4%B8%9A%E8%A7%82%E7%82%B9.pdf?version=CAEQMRiBgMCK5c70ihgiIGI1ZDNkYjBmOTEzYjRkYzNhMjI1ZTA2NjdhNmJmNjI2',
        android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E3%80%90%E6%B0%B8%E8%B5%A2%E5%9F%BA%E9%87%91%E3%80%915%E6%9C%88%E8%A1%8C%E4%B8%9A%E8%A7%82%E7%82%B9.pdf?version=CAEQMRiBgICL5s70ihgiIDFkODMyN2Q3ZTVhZjQ2YTliM2E5MzJhMjkyOTY1NTM4',
        online:''
      },
      src: require('../ningyinPlace/image/baner1.png'),
    },
  ],
  fourList: [
    {
      title1: '永赢迅利<br>中高等级短债A',
      url1:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
      title2: '永赢宏泰短债A',
      url2:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
    },
    {
      title1: '永赢华嘉信用债A',
      url1:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
      title2: '',
      url2:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
    },
    {
      title1: '永赢成长远航<br>一年持有混合A',
      url1:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
      title2: '',
      url2:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
    },    
    {
      title1: '永赢稳健增长<br>一年持有混合A',
      url1:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
      title2: '',
      url2:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
    }
  ],
  list:[                                                                                          
    {
      title: '稳进系列',
      icon: "../ningyinPlace/image/icon2.png",
      url:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
    },
    {
      title: '稳进系列',
      icon: "../ningyinPlace/image/icon2.png",
      url:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
    },        
  ],
  cardList: [
    {
      url:{
        type: 'href',
        href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
      },
      src: require('../ningyinPlace/image/banner2.png'),
    },
    {
      url:{
        type: 'innerhref',
        href:'main',
        query:{id:'100'}
      },
      src: require('../ningyinPlace/image/banner3.png'),
    },
  ],
  lastUrl:{
    type: 'href',
    href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
  }
}
  


const pageG = {
    id:"019",
    title:'宁银专区',
    model:'ningyinPlace',
    share:{
        title:'宁银专区！',
        desc:'',
        imgUrl:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/%E5%88%86%E4%BA%AB%E5%9B%BE.jpg?version=CAEQMRiBgICM5c70ihgiIDcxMGM1Njc5ZWM1ZDQyNTk5NzViNmY1ODljNGFjMmM0'
    },
    param:[
        blockB
    ]
}
  
  export {pageG}