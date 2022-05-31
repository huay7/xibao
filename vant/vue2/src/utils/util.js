import { Base64 } from 'js-base64';


export function wxShare(title,desc,imgUrl) {
    window.$.ajax({
    url: "https://owa.maxwealthfund.com/gateway/aresoft-wechat/wechat/createJsapiSignature",
    method: "POST",
    data: JSON.stringify({ "appId": 'wxc2e036b205a17dfb', "url": window.location.href }),
    dataType: "json",
    success: function (result) {
        let data = result.data;
        window.wx.config({
            debug: false,
            appId: 'wxc2e036b205a17dfb',
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'hideMenuItems',
                'updateAppMessageShareData',
                // 'updateTimelineShareData',
                'previewImage'
            ]
        });
        window.wx.ready(function () {
            window.wx.updateAppMessageShareData({
                title: title,
                desc: desc,
                link: window.location.href,
                imgUrl: imgUrl
            });
            window.wx.hideMenuItems({
                menuList: ["menuItem:share:timeline","menuItem:share:QZone"] // 要隐藏的菜单项
                });
            console.log("初始化wx分享成功！");
        });
    },
    });
}


export function setTitle(title) {
    window.document.title = title
}

export function getPDFDownLoadUrl(url) {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    // const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let urlRes=''
    if(isAndroid&&url.android) {
        urlRes = url.android
    } else {
        urlRes = url.ios
    }
    return urlRes
}


export function base64Decode(text) {
    return Base64.decode(text);
}
export function base64Encode(text) {
    return Base64.encode(text);
}