//海报列表配置
const blockA = {
  list:[
    {
      text: '固收',  
      icon:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A51.jpg',
    },
    {
      text: '权益',   
      icon:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A52.jpg'
    },
    {
      text: '月度陪伴',   
      icon:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BA%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A5.JPG'
    },
    {
      text: '专户',   
      icon:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%951.jpg'
    },
    {
      text: '专户5',
      icon:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%952.jpg'
    },
  ]
}

const blockB = {
  type: 'list',
  list: [
    {
      title: '最新活动',
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
          title: '永赢创业板A（007664）/永赢沪深3000A（007538）指数基金定投版',
          pdf: {
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E5%88%9B%E4%B8%9A%E6%9D%BF%E3%80%81%E6%B0%B8%E8%B5%A2%E6%B2%AA%E6%B7%B1300.pdf?versionId=CAEQLhiBgMDQ5LCXiBgiIGRiZjE0OTczZDU2MzQ3ZTFhZjJlMjNiOGQxNDk0ZDc3',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E5%88%9B%E4%B8%9A%E6%9D%BF%E3%80%81%E6%B0%B8%E8%B5%A2%E6%B2%AA%E6%B7%B1300.pdf?versionId=CAEQLhiBgMCM866XiBgiIDFkMmY5MjMyNGJkYTQ0NWU5ZDk4MzUzMDhhZGY4YTlk',
            online:''
          }
        },
        {
          type: 'pdf',
          title: '永赢消费主题A(006252)3000点定投版',
          pdf: {
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98A%EF%BC%883000%E7%82%B9%E6%9C%88%E5%AE%9A%E6%8A%95%2B%E6%97%A5%E5%AE%9A%E6%8A%95%E7%89%880331%EF%BC%89.pdf',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98A%EF%BC%883000%E7%82%B9%E6%9C%88%E5%AE%9A%E6%8A%95%2B%E6%97%A5%E5%AE%9A%E6%8A%95%E7%89%880331%EF%BC%89.pdf?versionId=CAEQLhiBgIDzuqeXiBgiIGRlMDQwODNhMTgxYzRlZjNhZTc3MWIyMTM3YjY0Njgy',
            online:''
          }
        },
        {
          type: 'pdf',
          title: '永赢消费主题A(006252)定投两年版',
          pdf: {
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98A%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%A4%E5%B9%B4%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%B6%88%E8%B4%B9%E4%B8%BB%E9%A2%98A%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%A4%E5%B9%B4%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf?versionId=CAEQLhiBgMCCt6iXiBgiIGI0MjBjYjIzZjBkZDRmN2NiNjBkYTAzOGVhOThhZDYz',
            online:''
          }
        },
        {
          type: 'pdf',
          title: '永赢智能领先A(006266)3000点定投版',
          pdf: {
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88A%EF%BC%883000%E7%82%B9%E6%9C%88%E5%AE%9A%E6%8A%95%2B%E6%97%A5%E5%AE%9A%E6%8A%95%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88A%EF%BC%883000%E7%82%B9%E6%9C%88%E5%AE%9A%E6%8A%95%2B%E6%97%A5%E5%AE%9A%E6%8A%95%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf?versionId=CAEQLhiBgIDZ06iXiBgiIDZlZWVjYzY2NjA4YzRhZjJhZThmNjI2NzU0YjJkMzA3',
            online:''
          }
        },
        {
          type: 'pdf',
          title: '永赢智能领先A(006266)定投两年版',
          pdf: {
            ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88A%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%A4%E5%B9%B4%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf',
            android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88A%EF%BC%88%E5%91%A8%E5%AE%9A%E6%8A%95%E4%B8%A4%E5%B9%B4%E7%89%88%EF%BC%8C0331%EF%BC%89.pdf?versionId=CAEQLhiBgICZ76iXiBgiIDEyODU4NmM2Yzk4MjQzNzBiMjU3ZDc3N2MxYzQwNjEx',
            online:''
          }
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
    },
    {
        title:'定投素材',
        type: 'pdf',
        isWithPoster:true,
        list:[
          [
            {
              type: 'pdf',
              titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-1.jpg?versionId=CAEQLhiBgMDOqbX.hxgiIGQxMjhmZGMyYTE2YTRkNTI5NDJmZDNlMGQ4OWJlZDll',
              url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/20220531/%E5%90%8C%E8%B5%A2%E6%9C%AA%E6%9D%A5%C2%B7%E7%8E%A9%E8%BD%AC%E5%AE%9A%E6%8A%95%20-%E6%8C%87%E6%95%B0%E7%AF%87%20(A).pdf?version=CAEQLhiCgMDr5cjyiBgiIDI5NWEwYWE5ZDRjMzRjZDg4NDU1MmYzNDEzNzIzODlm'
            },
            {
              type: 'pdf',
              titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-2.jpg?versionId=CAEQLhiBgICjqbX.hxgiIDEzN2YyNTA4MWJkZDQ2YjU5NDhlMTFmNjVkNGIxYjZj',
              url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E3%80%90%E5%90%8C%E8%B5%A2%E6%9C%AA%E6%9D%A5%E3%80%91%E7%8E%A9%E8%BD%AC%E5%AE%9A%E6%8A%95.pdf?versionId=CAEQLRiBgIDct5mDhxgiIDA5N2U3ZDA0Y2I4ZDQ0MjFhNDYxYzBlYzUzOGY0YWJl'
            },
          ],
          [
            {
              type: 'href',
              titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-3.jpg?versionId=CAEQLhiBgIDrqbX.hxgiIGIwOTgzZTllZGM1NjQ4MzA4M2IxZjA1ZmVlZDZkMTc3',
              url:'main',
              query:{id:'003'}
            },
            {
              type: 'href',
              titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-4.jpg?versionId=CAEQLhiBgIDPqbX.hxgiIGQ5YmYxZDEyMjdiMTQ0YjJhZDBkODFjNTViYTUxOTNm',
              url:'main',
              query:{id:'001'}
            },
          ]
        ],
        posterList:[
          {
            title:'自己运营',
            titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A51.jpg',
            url:'main',
            query:{id:'003'}
          },
          {
            title:'自己运营',
            titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A51.jpg',
            url:'main',
            query:{id:'003'}
          },
          {
            title:'自己运营',
            titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A51.jpg',
            url:'main',
            query:{id:'003'}
          }
        ]
      }

  ]
}
const pageH = {
  id:"045",
  title:'新版首页',
  model:'newIndex',
  share:{
    title:'',
    desc:'',
    imgUrl:''
  },
  param:[blockA,blockB]
}

export {pageH}