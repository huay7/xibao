const blockC = {
  type: 'banner',
  bgImg: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-6-13/banner.jpg?version=CAEQMRiBgICC5c70ihgiIGE3MjQyMzAxZTlhZjRlZWY5MDU2NGE2MWVjZWFmNTM5'
}
const blockA = {
  type: 'tab',
  list:[
    {
      text: '产品',  
      icon: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-20/WechatIMG248.png?versionId=CAEQNhiBgICn78brkBgiIGRlZWIwOGUwMTY2MjQ0ZTNhNTk4ZWY1OGVhYjFiNjIy',
      type: 'href',
      // href: 'main',
      url:'main',
      query:{id:'029',key:1}
      // href:'https://owa.maxwealthfund.com/innersite/poster/#/main?id=029&key=1',
    },
    {
      text: '市场',   
      icon: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-20/WechatIMG249.png?versionId=CAEQNhiBgICV78brkBgiIGU0MDM3NDEzNjliMTQzMTU4Nzg2NDMzNzBkNjdiOTE1',
      type: 'href',
      href:'https://owa.maxwealthfund.com/innersite/poster/#/main?id=017',
    },
    {
      text: '定投',   
      icon:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-20/WechatIMG247.png?versionId=CAEQNhiBgIDD8cbrkBgiIDM2ZDhhNzM3NGZkYjQxMjVhNmFhZjkxMmE4ZGUxZTMz',
      type: 'href',
      href:'https://owa.maxwealthfund.com/innersite/poster/#/main?id=002',
    },
    {
      text: '公司',   
      icon: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-20/WechatIMG249.png?versionId=CAEQNhiBgICV78brkBgiIGU0MDM3NDEzNjliMTQzMTU4Nzg2NDMzNzBkNjdiOTE1',
      type: 'href',
      href: 'https://owa.maxwealthfund.com/innersite/?product=30',
    },
    {
      text: '陪伴',
      icon: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-20/WechatIMG248.png?versionId=CAEQNhiBgICn78brkBgiIGRlZWIwOGUwMTY2MjQ0ZTNhNTk4ZWY1OGVhYjFiNjIy',
      type: 'href',
      url:'main',
      query:{id:'029',key:2}
      // href:'https://owa.maxwealthfund.com/innersite/poster/#/main?id=029&key=2',
    },
  ]
}

const blockB = {
  type: 'list',
  list: [
    {
      title:'近期热搜',
      type: 'poster',
      isWithPoster:true,
      posterList:[
        {
          title:'自己运营',
          titlePicture: 'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-18/lQDPJxaByMqj1ArMuM0CrrAr5bl7RBmWrALVtHjiANIA_686_184.jpg?versionId=CAEQNhiBgIC6t.PCkBgiIDAwYmI4NzdhOTc4ZTQyZWFiNzZlNzQ4OTIxMjBhOGI3',
          url:{
            type: 'href',
            href:'https://mp.weixin.qq.com/s/RSR_FKYCbWUoMApFrZE81A',
          },
        },
      ]
    },
    {
      title: '最新材料',
      list:[
        {
          type: 'pdf',
          title: '定投推荐-永赢精品基金',
          pdf:{
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E7%B2%BE%E5%93%81%E5%9F%BA%E9%87%91%EF%BC%88%E6%A0%87%E5%87%86%E7%89%88%EF%BC%89.pdf',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E7%B2%BE%E5%93%81%E5%9F%BA%E9%87%91%EF%BC%88%E6%A0%87%E5%87%86%E7%89%88%EF%BC%89.pdf?versionId=CAEQLhiBgMDgoaeXiBgiIGU1ZjYwMGQ3NDI3MDQ0NzJhYTBmZDBiNGM0MzBmZTA4',
            online:''
          },
        },
        {
          type: 'pdf',
          title: '永赢惠添利(005711)定投一年版',
          pdf: {
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E5%88%A9%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%80%E5%B9%B4%E7%89%88%EF%BC%8C0630%EF%BC%89.pdf',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%83%A0%E6%B7%BB%E5%88%A9%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%80%E5%B9%B4%E7%89%88%EF%BC%8C0630%EF%BC%89%20(1).pdf?versionId=CAEQLhiBgICOjqeXiBgiIDRjOGUxNjlhMmYwZjQzYmU4Mzk0MjQzZTE2NDU3MTRm',
            online:''
          }
        },
        {
          type: 'img',
          title: '永赢成长领航A（010562）定投半年版',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%88%90%E9%95%BF%E9%A2%86%E8%88%AAA%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%2B%E6%9C%88%E5%AE%9A%E6%8A%95%E7%89%88%EF%BC%890806.png'
        },
        {
          type: 'img',
          title: '永赢华嘉信用债A（010092）日/周/月定投测算版',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BAA%EF%BC%88%E5%B7%B2%E5%AE%A1%E6%A0%B8%EF%BC%89.jpg'
        },
      ]
    }
  ]
}

const pageH = {
  id:"028",
  title:'新版首页',
  model:'newIndex',
  share:{
    title:'',
    desc:'',
    imgUrl:''
  },
  param:[blockC,blockA,blockB]
}

export { pageH };