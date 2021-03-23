/*
微信公众号Ad
QX:
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/lvyazi/quanx/main/Rewrite/WechatAd.js
Surge4：
http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/lvyazi/quanx/main/Rewrite/WechatAd.js
Surge & QX MITM = mp.weixin.qq.com,
*/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
