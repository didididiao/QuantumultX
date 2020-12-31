/*
脚本修改自photonmang的互助码脚本 https://github.com/photonmang/quantumultX/blob/master/cache/shareCode.js;
感谢@photonmang;
自用脚本.
*/

const jsname='互助码提交'
const $ = Env(jsname)
const dd_shareCode1 = 'T016anDNlJOnIdlp-JpHCjVWnYaS5kRrbA';//东东工厂
const jx_shareCode1 = 'VkLv7zltUKl6MWvbRGmTjA==';//京喜工厂
const zd_shareCode1 = '2wh4ycug2ksoytg6yz3ehr34au5ac3f4ijdgqji';//种豆得豆
const nc_shareCode1 = '44bd306098ba43c4bfb903bd3a41e632';//东东农场
const mc_shareCode1 = 'MTAxODc2NTEzMjAwMDAwMDAxMDMyMjEwMw==';//东东萌宠
const zz_shareCode1 = 'A37joSyAuGbi20OBL'; //京东赚赚
const joy_shareCode1 = 'mawFxOomdWBoBmYh0_LujeQ==';//疯狂的JOY

const dd_shareCode2 = 'T0225KkcRUpMplKFJEj1nKUDJQCjVWnYaS5kRrbA';
const jx_shareCode2 = $.getdata('jx_shareCode2') ;
const zd_shareCode2 = 'mlrdw3aw26j3xhrhvekblbdd5np3puc4m2cepeq';
const nc_shareCode2 = 'af462afe47104577b5dcf3a4bd260d10';
const mc_shareCode2 = $.getdata('mc_shareCode2') ;
const zz_shareCode2 = 'S5KkcRUpMplKFJEj1nKUDJQ'; 
const joy_shareCode2 = $.getdata('joy_shareCode2') ;

/*
const dd_shareCode3 = $.getdata('dd_shareCode3') ;
const jx_shareCode3 = $.getdata('jx_shareCode3') ;
const zd_shareCode3 = $.getdata('zd_shareCode3') ;
const nc_shareCode3 = $.getdata('nc_shareCode3') ;
const mc_shareCode3 = $.getdata('mc_shareCode3') ;
const joy_shareCode3 = $.getdata('joy_shareCode3') ;
const zz_shareCode3 = $.getdata('zz_shareCode3') ; 
*/

let dd_shareCodeVal = "";
let jx_shareCodeVal = "";
let zd_shareCodeVal = "";
let nc_shareCodeVal = "";
let mc_shareCodeVal = "";
let zz_shareCodeVal = "";
let joy_shareCodeVal = "";
const  dd_shareCodeArr = [];
const  jx_shareCodeArr = [];
const  zd_shareCodeArr = [];
const  nc_shareCodeArr = [];
const  mc_shareCodeArr = [];
const  zz_shareCodeArr = [];
const  joy_shareCodeArr = [];
let K = 0;
let tz='';
const dd=2//单次任务延迟,默认2秒

for (let index = 1; index <= 2; index++) {
    if ($.getdata('dd_shareCode'+index) === undefined || $.getdata('dd_shareCode'+index) === '') {
      break
    }
    dd_shareCodeArr.push($.getdata("dd_shareCode"+index));
    jx_shareCodeArr.push($.getdata("jx_shareCode"+index));
    zd_shareCodeArr.push($.getdata("zd_shareCode"+index));   
    nc_shareCodeArr.push($.getdata("nc_shareCode"+index));
    mc_shareCodeArr.push($.getdata("mc_shareCode"+index));
    zz_shareCodeArr.push($.getdata("zz_shareCode"+index));
    joy_shareCodeArr.push($.getdata("joy_shareCode"+index)); 
  }
    console.log(`============ 共${dd_shareCodeArr.length}个京东账号  =============\n`)

all();
function all() {
  dd_shareCodeVal = dd_shareCodeArr[K];
  jx_shareCodeVal = jx_shareCodeArr[K];
  zd_shareCodeVal = zd_shareCodeArr[K];
  nc_shareCodeVal = nc_shareCodeArr[K];
  mc_shareCodeVal = mc_shareCodeArr[K];
  zz_shareCodeVal = zz_shareCodeArr[K];
  joy_shareCodeVal = joy_shareCodeArr[K];
  for (let i = 0; i < 10; i++) {
    (function (i) {
      setTimeout(
        function () {
          if (i == 0) {
          console.log(`\n========== 【第${K+1}个账号】 ==========\n`); 
          info();}        
          if (i == 1) 
          execdd_shareCode(); // 东东工厂
          if (i == 2)
          execjx_shareCode(); // 京喜工厂       
          if (i == 3 )
          execzd_shareCode(); //种豆得豆           
          if (i == 4 )
          execnc_shareCode();//东东农场
          if (i == 5 )
          execmc_shareCode();//东东萌宠
          if (i == 6 )
          execzz_shareCode();//京东赚赚    
          if (i == 7)  
          execjoy_shareCode();//疯狂的JOY    
        else  if (i == 8 ) {
          console.log('东东工厂:');
  	      console.log( $.dd_shareCodeBody);
  	      console.log('\r\n京喜工厂:');
  	      console.log( $.jx_shareCodeBody);
  	      console.log('\r\n种豆得豆:');
          console.log( $.zd_shareCodeBody);
          console.log('\r\n疯狂的JOY:');
          console.log( $.joy_shareCodeBody);
  	      console.log('\r\n东东农场:');
  	      console.log( $.nc_shareCodeBody);
         	console.log('\r\n东东萌宠:');
          console.log( $.mc_shareCodeBody);
          console.log('\r\n京东赚赚:');
          console.log( $.zz_shareCodeBody);
          console.log('\r\n疯狂的JOY:');
          console.log( $.joy_shareCodeBody);
     }else if (i == 9){  
       if ( K < dd_shareCodeArr.length - 1) {
              K += 1;
              all();
}    else if (K == dd_shareCodeArr.length - 1) {
              showmsg(); // 通知
              $.done();
  }
 }
},
        (i + 1) * dd * 2000
      );
    })(i);
  }
}

// 用户名
function info() {
      tz +=`\n========== 【第${K+1}个账号】 ==========\n`
}

function execdd_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'http://api.turinglabs.net/api/v1/jd/ddfactory/create/'+dd_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'}
	}
    $.get(url,(err, resp, data)=> {  
      try {
        $.dd_shareCodeBody = data
        tz += `东东工厂:`+resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function execjx_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'http://api.turinglabs.net/api/v1/jd/jxfactory/create/'+jx_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'},
	}
    $.get(url,(err, resp, data)=> {  
      try {
        $.jx_shareCodeBody = data
        tz += `京喜工厂:`+resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function execzd_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'http://api.turinglabs.net/api/v1/jd/bean/create/'+zd_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'},
	}
    $.get(url,(err, resp, data)=> {  
      try {
        $.zd_shareCodeBody = data
        tz += `种豆得豆:`+resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function execnc_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'http://api.turinglabs.net/api/v1/jd/farm/create/'+nc_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'},
	}
    $.get(url,(err, resp, data)=> {  
      try {
        $.nc_shareCodeBody = data
        tz += `东东农场:`+ resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function execmc_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'http://api.turinglabs.net/api/v1/jd/pet/create/'+mc_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'},
	}
    $.get(url,(err, resp, data)=> {  
      try {
        $.mc_shareCodeBody = data
        tz += `东东萌宠:`+ resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function execzz_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'https://code.chiang.fun/api/v1/jd/jdzz/create/'+zz_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'},
    }
    $.get(url,(err, resp, data)=> {  
      try {
        $.zz_shareCodeBody = data
        tz += `京东赚赚:`+ resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function execjoy_shareCode() {
  return new Promise((resolve) => {
    const url = { 
       url: 'https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/'+joy_shareCodeVal,
       headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'},
	}
    $.get(url,(err, resp, data)=> {  
      try {
        $.joy_shareCodeBody = data
        tz += `疯狂的JOY:`+ resp.statusCode+`\n`
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function showmsg() {
  return new Promise((resolve) => {
    $.msg(jsname, "", tz); 
    resolve()
  })
}

// prettier-ignore
/*********************************** API *************************************/
function ENV(){const e="undefined"!=typeof $task,t="undefined"!=typeof $loon,s="undefined"!=typeof $httpClient&&!t,o="function"==typeof require&&"undefined"!=typeof $jsbox;return{isQX:e,isLoon:t,isSurge:s,isNode:"function"==typeof require&&!o,isJSBox:o,isRequest:"undefined"!=typeof $request,isScriptable:"undefined"!=typeof importModule}}function HTTP(e,t={}){const{isQX:s,isLoon:o,isSurge:i,isScriptable:n,isNode:r}=ENV();const u={};return["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"].forEach(c=>u[c.toLowerCase()]=(u=>(function(u,c){(c="string"==typeof c?{url:c}:c).url=e?e+c.url:c.url;const h=(c={...t,...c}).timeout,l={onRequest:()=>{},onResponse:e=>e,onTimeout:()=>{},...c.events};let a,d;if(l.onRequest(u,c),s)a=$task.fetch({method:u,...c});else if(o||i||r)a=new Promise((e,t)=>{(r?require("request"):$httpClient)[u.toLowerCase()](c,(s,o,i)=>{s?t(s):e({statusCode:o.status||o.statusCode,headers:o.headers,body:i})})});else if(n){const e=new Request(c.url);e.method=u,e.headers=c.headers,e.body=c.body,a=new Promise((t,s)=>{e.loadString().then(s=>{t({statusCode:e.response.statusCode,headers:e.response.headers,body:s})}).catch(e=>s(e))})}const f=h?new Promise((e,t)=>{d=setTimeout(()=>(l.onTimeout(),t(`${u} URL: ${c.url} exceeds the timeout ${h} ms`)),h)}):null;return(f?Promise.race([f,a]).then(e=>(clearTimeout(d),e)):a).then(e=>l.onResponse(e))})(c,u))),u}function API(e="untitled",t=!1){const{isQX:s,isLoon:o,isSurge:i,isNode:n,isJSBox:r,isScriptable:u}=ENV();return new class{constructor(e,t){this.name=e,this.debug=t,this.http=HTTP(),this.env=ENV(),this.node=(()=>{if(n){return{fs:require("fs")}}return null})(),this.initCache();Promise.prototype.delay=function(e){return this.then(function(t){return((e,t)=>new Promise(function(s){setTimeout(s.bind(null,t),e)}))(e,t)})}}initCache(){if(s&&(this.cache=JSON.parse($prefs.valueForKey(this.name)||"{}")),(o||i)&&(this.cache=JSON.parse($persistentStore.read(this.name)||"{}")),n){let e="root.json";this.node.fs.existsSync(e)||this.node.fs.writeFileSync(e,JSON.stringify({}),{flag:"wx"},e=>console.log(e)),this.root={},e=`${this.name}.json`,this.node.fs.existsSync(e)?this.cache=JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)):(this.node.fs.writeFileSync(e,JSON.stringify({}),{flag:"wx"},e=>console.log(e)),this.cache={})}}persistCache(){const e=JSON.stringify(this.cache);s&&$prefs.setValueForKey(e,this.name),(o||i)&&$persistentStore.write(e,this.name),n&&(this.node.fs.writeFileSync(`${this.name}.json`,e,{flag:"w"},e=>console.log(e)),this.node.fs.writeFileSync("root.json",JSON.stringify(this.root),{flag:"w"},e=>console.log(e)))}write(e,t){this.log(`SET ${t}`),-1!==t.indexOf("#")?(t=t.substr(1),i&o&&$persistentStore.write(e,t),s&&$prefs.setValueForKey(e,t),n&&(this.root[t]=e)):this.cache[t]=e,this.persistCache()}read(e){return this.log(`READ ${e}`),-1===e.indexOf("#")?this.cache[e]:(e=e.substr(1),i&o?$persistentStore.read(e):s?$prefs.valueForKey(e):n?this.root[e]:void 0)}delete(e){this.log(`DELETE ${e}`),-1!==e.indexOf("#")?(e=e.substr(1),i&o&&$persistentStore.write(null,e),s&&$prefs.removeValueForKey(e),n&&delete this.root[e]):delete this.cache[e],this.persistCache()}notify(e,t="",c="",h={}){const l=h["open-url"],a=h["media-url"];if(s&&$notify(e,t,c,h),i&&$notification.post(e,t,c+`${a?"\n多媒体:"+a:""}`,{url:l}),o){let s={};l&&(s.openUrl=l),a&&(s.mediaUrl=a),"{}"==JSON.stringify(s)?$notification.post(e,t,c):$notification.post(e,t,c,s)}if(n||u){const s=c+(l?`\n点击跳转: ${l}`:"")+(a?`\n多媒体: ${a}`:"");if(r){require("push").schedule({title:e,body:(t?t+"\n":"")+s})}else console.log(`${e}\n${t}\n${s}\n\n`)}}log(e){this.debug&&console.log(e)}info(e){console.log(e)}error(e){console.log("ERROR: "+e)}wait(e){return new Promise(t=>setTimeout(t,e))}done(e={}){s||o||i?$done(e):n&&!r&&"undefined"!=typeof $context&&($context.headers=e.headers,$context.statusCode=e.statusCode,$context.body=e.body)}}(e,t)}
/*****************************************************************************/