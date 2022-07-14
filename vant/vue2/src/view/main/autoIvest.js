

//海报列表配置
const pageB = {
    id:"001",
    title:'海报合集',
    model:'posterlist',
    share:{
      title:'',
      desc:'',
      imgUrl:''
    },
    param:[
    {
      url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A51.jpg',
    },
    {
      url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/520%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A52.jpg'
    },
    {
      url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%8D%8E%E5%98%89%E4%BF%A1%E7%94%A8%E5%80%BA%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A5.JPG'
    },
    {
      url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%951.jpg'
    },
    {
      url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%952.jpg'
    },
    {
      url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E6%99%BA%E8%83%BD%E9%A2%86%E5%85%88%E5%AE%9A%E6%8A%95%E6%B5%B7%E6%8A%A5.JPG'
    }
]
}


const blockA = {
  type: 'material',
  list: [
    {
      title:'定投素材',
      type: 'pdf',
      list:[
        [
          {
            type: 'pdf',
            titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052601/icon2-1.jpg?versionId=CAEQLhiBgMDOqbX.hxgiIGQxMjhmZGMyYTE2YTRkNTI5NDJmZDNlMGQ4OWJlZDll',
            pdf:{
              ios:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052003/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E7%B2%BE%E5%93%81%E5%9F%BA%E9%87%91%EF%BC%88%E6%A0%87%E5%87%86%E7%89%88%EF%BC%89.pdf',
              android:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%AE%9A%E6%8A%95%E6%8E%A8%E8%8D%90-%E6%B0%B8%E8%B5%A2%E7%B2%BE%E5%93%81%E5%9F%BA%E9%87%91%EF%BC%88%E6%A0%87%E5%87%86%E7%89%88%EF%BC%89.pdf?versionId=CAEQLhiBgMDgoaeXiBgiIGU1ZjYwMGQ3NDI3MDQ0NzJhYTBmZDBiNGM0MzBmZTA4',
              online:''
            },
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
        }
      ]
    }
  ]
}
const blockB = {
  type: 'list',
  list: [
    {
      title: '定投基础知识',
      list:[
        {
          type: 'img',
          title: '什么是基金定投？',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E4%BB%80%E4%B9%88%E6%98%AF%E5%9F%BA%E9%87%91%E5%AE%9A%E6%8A%95.jpg?versionId=CAEQLRiBgMCw6JmChxgiIGJhNTBmYzM1YTNmYTQ5ZDQ4ODM3MDg4NzU5NTA0NmRm'
        },
        {
          type: 'img',
          title: '到了设定日期，定投怎么没扣款？',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%88%B0%E4%BA%86%E8%AE%BE%E5%AE%9A%E6%97%A5%E6%9C%9F%EF%BC%8C%E5%AE%9A%E6%8A%95%E6%80%8E%E4%B9%88%E6%B2%A1%E6%89%A3%E6%AC%BE%EF%BC%9F.jpg?versionId=CAEQLRiBgIDB65mChxgiIDdiMjZhYzBmZjE3MzQ4N2ZhMDdhNjkzYTBmODcwMWNm'
        },
        {
          type: 'img',
          title: '赎回定投的基金份额，是不是代表定投终止？',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E8%B5%8E%E5%9B%9E%E5%AE%9A%E6%8A%95%E7%9A%84%E5%9F%BA%E9%87%91%E4%BB%BD%E9%A2%9D%EF%BC%8C%E6%98%AF%E4%B8%8D%E6%98%AF%E4%BB%A3%E8%A1%A8%E5%AE%9A%E6%8A%95%E7%BB%88%E6%AD%A2%EF%BC%9F.png?versionId=CAEQLRiBgICN65mChxgiIGJkOTQxOTQ4NWYzYjRmZmY5YjNhY2NiMTA0ZGYxZTY3'
        },
        {
          type: 'href',
          title: '所有基金都适合定投吗？',
          href:'https://mp.weixin.qq.com/s/84BukDUvEJXRBk700rrzog'
        },
        {
          type: 'href',
          title: '手把手教你选定投基金！',
          href:'https://mp.weixin.qq.com/s/2OazOsdshZUXA1Ry7SIZfQ'
        },
        {
          type: 'href',
          title: '每期定投多少最好？',
          href:'https://mp.weixin.qq.com/s/hgyRnxL56HXf6ASTQgiY9g'
        },
        {
          type: 'href',
          title: '周定投VS月定投，到底哪种更好？',
          href:'https://mp.weixin.qq.com/s/zjGrtDZYgeiHZEfThuAWlw'
        },
        {
          type: 'href',
          title: '10个定投小问题，问到你的心坎里！',
          href:'https://mp.weixin.qq.com/s/UxO48JnPsZoHyGXoWeoVig'
        },
        {
          type: 'href',
          title: '清扫定投盲区，拥抱更好投资体验！',
          href:'https://mp.weixin.qq.com/s/BXYKpZfoE6Acfn30vL5SJg'
        },
        {
          type: 'href',
          title: '基金定投是“万金油”？这事儿没那么简单……',
          href:'https://mp.weixin.qq.com/s/M0RywweSP1bk62EALskieQ'
        },
        {
          type: 'href',
          title: '定投竟然也会亏！难道定投在骗我？',
          href:'https://mp.weixin.qq.com/s/TXB5ZQFt3QsGNxBh7RTLjA'
        },
        {
          type: 'href',
          title: '定投课堂|如何才能投资未来？',
          href:'https://mp.weixin.qq.com/s/PfkmdlpxtBDW6SQrMb1qkQ'
        },
        {
          type: 'href',
          title: '您有一份专属定投计划待领取！',
          href:'https://mp.weixin.qq.com/s/uQbojXI4IHNRDpCNXWY0EQ'
        },
        {
          type: 'href',
          title: '不再神秘的“微笑曲线”',
          href:'https://mp.weixin.qq.com/s/eGKqoQxygt9uMSMpgrzwOQ'
        },
        {
          type: 'img',
          title: '玩转定投，你不得不知道的一“点”',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E7%8E%A9%E8%BD%AC%E5%AE%9A%E6%8A%95%EF%BC%8C%E4%BD%A0%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%B8%80%E2%80%9C%E7%82%B9%E2%80%9D.jpg?versionId=CAEQLRiBgIC165mChxgiIGRiMWMwNjc1NGUxZjQ1NDU4ZjdkNjQ2YjEyODJiNmQ5'
        },
        {
          type: 'img',
          title: '关于定投收益率不能说的秘密',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%85%B3%E4%BA%8E%E5%AE%9A%E6%8A%95%E6%94%B6%E7%9B%8A%E7%8E%87%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86.jpg?versionId=CAEQLRiBgMCi6ZmChxgiIDI5Y2UwZDQwYTIxMjQ2YzhiZTkzMWE1YjM3ZjFlYzNk'
        },
      ]
    },
    {
      title: '定投进阶玩法',
      list:[
        {
          type: 'img',
          title: '大跌后，如何加速回本解套？',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%A4%A7%E8%B7%8C%E5%90%8E%EF%BC%8C%E5%A6%82%E4%BD%95%E5%8A%A0%E9%80%9F%E5%9B%9E%E6%9C%AC%E8%A7%A3%E5%A5%97%EF%BC%9F.JPG?versionId=CAEQLRiBgIDq6JmChxgiIDk2N2FmZjAxZWY3NjRiZDlhMjU3YjdlODE0ZTMwOWEw'
        },
        {
          type: 'img',
          title: '任意3000点开始定投，都赚钱了吗？',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E4%BB%BB%E6%84%8F3000%E7%82%B9%E5%BC%80%E5%A7%8B%E5%AE%9A%E6%8A%95%EF%BC%8C%E9%83%BD%E8%B5%9A%E9%92%B1%E4%BA%86%E5%90%97%EF%BC%9F.jpg?versionId=CAEQLRiBgIDT6JmChxgiIGY5NDQwMDAxMTViMjRkNDFhN2E0ZDUyZDQzZDhkZjhj'
        },
        {
          type: 'href',
          title: '3000点之下，这样定投收益更高？！',
          href:'https://mp.weixin.qq.com/s/tO7bouETR5h_JzIxomh3Qg'
        },
        {
          type: 'href',
          title: '定投亏钱了，还要继续投吗？',
          href:'https://mp.weixin.qq.com/s/2yxVpiaPWc8URmEtczD5Cg'
        },
        {
          type: 'href',
          title: '确“定”过眼神|定投的好时机就是现在？',
          href:'https://mp.weixin.qq.com/s/61capMqT6jUsY8hlvTlp7w'
        },
        {
          type: 'href',
          title: '高点被套怎么破！韭菜自救指南',
          href:'https://mp.weixin.qq.com/s/ymnaw1CgU-q4V9sJsvB1Ow'
        },
        {
          type: 'href',
          title: '要想定投效果好，这一步是关键！',
          href:'https://mp.weixin.qq.com/s/uWiUmAUHv3i6oZ9XeP6Slg'
        },
        {
          type: 'href',
          title: '惊呆，定投竟有这么多新玩法！',
          href:'https://mp.weixin.qq.com/s/zHh_UGm80wPQhDjx7xpkPg'
        },
        {
          type: 'href',
          title: '解密|定投时间越长越好吗？',
          href:'https://mp.weixin.qq.com/s/wzAjXJL4KjTYJdWEnHnvRA'
        },
        {
          type: 'img',
          title: '基金定投需要止损吗？',
          img:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052002/%E5%9F%BA%E9%87%91%E5%AE%9A%E6%8A%95%E9%9C%80%E8%A6%81%E6%AD%A2%E6%8D%9F%E5%90%97%EF%BC%9F.jpg?versionId=CAEQLRiBgIDR6JmChxgiIDIxZTAzNTQ3NzRiZTQzYTk4ZDg5NzBjZWVjYzUxZTkx'
        },
        {
          type: 'href',
          title: '定投止盈，到底该如何操作？',
          href:'https://mp.weixin.qq.com/s/o7ys3u9P5mbmqawXAo38YA'
        },
        {
          type: 'href',
          title: '市场点位有点高，是不是等等再定投？',
          href:'https://mp.weixin.qq.com/s/Z1kPjN3A16i9Rc2N9JcEmw'
        },
        {
          type: 'href',
          title: '3400点附近，这样买基金胜率更高！',
          href:'https://mp.weixin.qq.com/s/jjizi4vKvqaCqcGVXyU7pA'
        },
        {
          type: 'href',
          title: '智能定投 | 均线偏离策略',
          href:'https://mp.weixin.qq.com/s/t8fDLHrLHKR2610unZ7JjA'
        },
        {
          type: 'href',
          title: '智能定投 | 金字塔加仓法',
          href:'https://mp.weixin.qq.com/s/Wr7wyImvf3RLz8ptZACYuw'
        },
        {
          type: 'href',
          title: '智能定投 | 移动平均成本法',
          href:'https://mp.weixin.qq.com/s/C9IISb2TACanyHCbnaO_3g'
        },
      ]
    }
  ]
}

const blockC = {
  type: 'pictureList',
  list: [
    {
      type: 'href',
      titlePicture:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-11/bottom2.jpg?versionId=CAEQMhiBgICpzOSvjxgiIDFhMTI3ZDM5NDZhMDQ0ZDU4Y2EzNTIwZTgyNTY5N2Ez',
      url:'main',
      query:{id:'014'}
    }
  ]
}

const pageA = {
  id:"002",
  title:'定投资料包',
  model:'autoivestlist',
  share:{
    title:'【同赢未来】玩转定投，你想知道的都在这里啦！',
    desc:'',
    imgUrl:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022052702/%E5%88%86%E4%BA%AB%E5%9B%BE.jpg?versionId=CAEQLhiBgICYy7SViBgiIGQ5ZjY3MDFlMTA3YTRjMzJhZTRlZDZhZGU1MmJmZDdl'
  },
  param:[
    blockA,blockC,blockB,blockC
  ]
}



const blockB2 = {
  type: 'list',
  list: [
    {
      title: '定投垫板',
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
  ]
}
const pageC = {
  id:"003",
  title:'资料合集',
  model:'commonlist',
  share:{
    title:'',
    desc:'',
    imgUrl:''
  },
  param:[blockB2]
}


const pageO = {
  id:"014",
  title:'定投视频',
  model:'videolist',
  share:{
    title:'',
    desc:'',
    imgUrl:''
  },
  param:[
  {
    title:"定投视频",
    url:'https://ewa-media.oss-cn-shanghai.aliyuncs.com/media/innernew/2022-7-11/normal%20video.mp4?versionId=CAEQMhiBgICJjqOzjxgiIDY1ZmQzZjFjNWRiMDQ2ZTZhYzgwZDNmMTgzZDA1YjYz',
    poster:''
  }
]
}

export {pageB,pageA,pageC,pageO}