/*
new Env('阿里云社区-场景任务');
@Author: Leiyiyan
@Date: 2024-06-30 12:50

@Description:
阿里云服务 场景任务单独脚本

获取 Cookie 方式: 阿里云 APP - 首页 - 积分商城

变量名: aliyunWeb_data

------------------------------------------------------------------------------
BoxJs订阅地址: 
https://raw.githubusercontent.com/leiyiyan/resource/main/subscribe/leiyiyan.boxjs.json

[Script]
http-response ^https?:\/\/developer\.aliyun\.com\/developer\/api\/my\/user\/getUser script-path=https://raw.githubusercontent.com/leiyiyan/resource/main/script/aliyun_web/aliyun_web_scene.js, requires-body=true, timeout=60, tag=阿里云Web Cookie
cron "0 7,13 * * *" script-path=https://raw.githubusercontent.com/leiyiyan/resource/main/script/aliyun_web/aliyun_web_scene.js, tag=阿里云社区场景任务

[MITM]
hostname = developer.aliyun.com

====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
 */

const _0x2d4bff=_0x3299;(function(_0x1e50ca,_0x491fab){const _0x34f5ed=_0x3299,_0x572a03=_0x1e50ca();while(!![]){try{const _0xbc5b09=-parseInt(_0x34f5ed(0x20b))/0x1+-parseInt(_0x34f5ed(0x212))/0x2+-parseInt(_0x34f5ed(0x18a))/0x3+-parseInt(_0x34f5ed(0x18f))/0x4*(parseInt(_0x34f5ed(0x1d6))/0x5)+-parseInt(_0x34f5ed(0x16f))/0x6*(parseInt(_0x34f5ed(0x1cd))/0x7)+-parseInt(_0x34f5ed(0x14a))/0x8+parseInt(_0x34f5ed(0x1e7))/0x9;if(_0xbc5b09===_0x491fab)break;else _0x572a03['push'](_0x572a03['shift']());}catch(_0x186ffc){_0x572a03['push'](_0x572a03['shift']());}}}(_0x56b6,0xa5a5e));const $=new Env(_0x2d4bff(0x164)),ckName=_0x2d4bff(0x201),Notify=0x1,notify=$[_0x2d4bff(0x228)]()?require(_0x2d4bff(0x1aa)):'';let envSplitor=['@'];var userCookie=($['isNode']()?process[_0x2d4bff(0x1ea)][ckName]:$['getdata'](ckName))||'';let userList=[],userIdx=0x0,userCount=0x0;$[_0x2d4bff(0x230)]=($[_0x2d4bff(0x228)]()?process[_0x2d4bff(0x1ea)][_0x2d4bff(0x1c6)]:$[_0x2d4bff(0x154)](_0x2d4bff(0x230)))||_0x2d4bff(0x174),$[_0x2d4bff(0x176)]=[],$[_0x2d4bff(0x215)]=[];let pendingScore=0x0,sceneId='',resourceFrom='',sectionId='',ip='';async function main(){const _0x2fd385=_0x2d4bff,_0x43db2b={'irBIE':'\x0a==================\x20任务\x20==================\x0a','NSTSh':function(_0x1bf842,_0x52cd5e){return _0x1bf842||_0x52cd5e;},'NCFZC':function(_0x9382af,_0x556914){return _0x9382af(_0x556914);}};try{$[_0x2fd385(0x21d)](_0x43db2b[_0x2fd385(0x158)]);for(let _0x22e75a of userList){console[_0x2fd385(0x21d)]('🔷账号'+_0x22e75a[_0x2fd385(0x1fa)]+_0x2fd385(0x19d)),console['log']('随机延迟'+_0x22e75a[_0x2fd385(0x16a)]()+'秒'),await _0x22e75a['interactData']()??{};if(_0x22e75a[_0x2fd385(0x1f5)]){await _0x22e75a['doScene'](),await $[_0x2fd385(0x1d2)](_0x22e75a[_0x2fd385(0x16a)]()),pendingScore=await _0x22e75a['getUserTotalPendingScore'](),await $['wait'](_0x22e75a[_0x2fd385(0x16a)]()),await _0x22e75a[_0x2fd385(0x1ed)](),await $[_0x2fd385(0x1d2)](_0x22e75a[_0x2fd385(0x16a)]());let _0x145663=await _0x22e75a[_0x2fd385(0x195)]()??{};$[_0x2fd385(0x1e5)]=_0x2fd385(0x1fe)+_0x43db2b[_0x2fd385(0x1b2)](pendingScore,0x0)+'积分',_0x43db2b[_0x2fd385(0x1af)](DoubleLog,_0x2fd385(0x19c)+pendingScore+_0x2fd385(0x22e)+_0x145663);}else $['notifyMsg']['push']('⛔️\x20账号'+(_0x22e75a[_0x2fd385(0x1dc)]||_0x22e75a[_0x2fd385(0x1fa)])+_0x2fd385(0x1c4));$[_0x2fd385(0x176)][_0x2fd385(0x175)]({'id':_0x22e75a['index'],'avatar':_0x22e75a[_0x2fd385(0x216)],'message':$[_0x2fd385(0x215)]}),$[_0x2fd385(0x215)]=[];}}catch(_0x47bba8){$[_0x2fd385(0x21d)](_0x2fd385(0x17c)+_0x47bba8);throw new Error(_0x2fd385(0x17c)+_0x47bba8);}}class UserInfo{constructor(_0x36b0c6){const _0x421280=_0x2d4bff,_0x5b6c4b={'xCkAi':function(_0x4fa3e1,_0x182508){return _0x4fa3e1===_0x182508;},'HxGmL':function(_0x3ecbbf,_0x2e5d93){return _0x3ecbbf+_0x2e5d93;},'zBjRk':function(_0x32bb63,_0x4a260a){return _0x32bb63(_0x4a260a);},'wTVcn':function(_0x50692b,_0x4a0aec,_0x144278){return _0x50692b(_0x4a0aec,_0x144278);},'fOBIf':function(_0x40f1b1,_0x18967e){return _0x40f1b1==_0x18967e;},'SKBdP':_0x421280(0x196),'aoLkE':_0x421280(0x1ba),'uFYtC':_0x421280(0x1a5)};this['index']=++userIdx,this[_0x421280(0x1f7)]=_0x36b0c6[_0x421280(0x1f7)]||_0x36b0c6,this[_0x421280(0x1f4)]=_0x36b0c6[_0x421280(0x1f4)],this[_0x421280(0x1dc)]=_0x36b0c6[_0x421280(0x1dc)],this[_0x421280(0x216)]=_0x36b0c6['avatar'],this[_0x421280(0x1f5)]=!![],this['baseUrl']='',this[_0x421280(0x217)]=_0x5b6c4b[_0x421280(0x1bc)],this[_0x421280(0x20a)]={'Cookie':this[_0x421280(0x1f7)],'User-Agent':_0x5b6c4b['aoLkE'],'Referer':_0x5b6c4b[_0x421280(0x1b3)]},this[_0x421280(0x16a)]=()=>randomInt(0x1,0x2),this['fetch']=async _0x364b47=>{const _0x39e137=_0x421280;try{if(_0x5b6c4b[_0x39e137(0x204)](typeof _0x364b47,_0x39e137(0x21f)))_0x364b47={'url':_0x364b47};if(_0x364b47?.[_0x39e137(0x1fd)]?.[_0x39e137(0x1b5)]('/'))_0x364b47[_0x39e137(0x1fd)]=_0x5b6c4b[_0x39e137(0x159)](this[_0x39e137(0x217)],_0x364b47[_0x39e137(0x1fd)]);const _0x4e81a0=await _0x5b6c4b[_0x39e137(0x226)](Request,{..._0x364b47,'headers':_0x364b47[_0x39e137(0x20a)]||this[_0x39e137(0x20a)],'url':_0x364b47[_0x39e137(0x1fd)]||this[_0x39e137(0x22b)]});_0x5b6c4b[_0x39e137(0x194)](debug,_0x4e81a0,_0x364b47?.[_0x39e137(0x1fd)]?.[_0x39e137(0x1c3)](/\/+$/,'')['substring'](_0x5b6c4b[_0x39e137(0x159)](_0x364b47?.[_0x39e137(0x1fd)]?.[_0x39e137(0x22d)]('/'),0x1)));if(_0x5b6c4b[_0x39e137(0x191)](_0x4e81a0?.[_0x39e137(0x180)],0x9c41))throw new Error(_0x4e81a0?.['message']||_0x39e137(0x1b7));return _0x4e81a0;}catch(_0x4165bb){this[_0x39e137(0x1f5)]=![],$[_0x39e137(0x21d)](_0x39e137(0x1a0)+_0x4165bb);}};}async[_0x2d4bff(0x1b6)](){const _0x50292e=_0x2d4bff,_0x5eef59={'EkFGO':'get'};try{const _0x47b788={'url':_0x50292e(0x1ce),'type':_0x5eef59[_0x50292e(0x1f0)]};await this[_0x50292e(0x18c)](_0x47b788);}catch(_0xb6d1af){this[_0x50292e(0x1f5)]=![],$[_0x50292e(0x21d)](_0x50292e(0x178)+_0xb6d1af);}}async[_0x2d4bff(0x19a)](){const _0xcbeb7c=_0x2d4bff,_0x27a839={'NbwWz':_0xcbeb7c(0x170),'ShTOW':function(_0x2574ed,_0x3880a2){return _0x2574ed===_0x3880a2;}},_0x140d49=this['token'][_0xcbeb7c(0x17e)](new RegExp(_0xcbeb7c(0x14d)))[0x1];await this[_0xcbeb7c(0x209)](),await $[_0xcbeb7c(0x1d2)](this[_0xcbeb7c(0x16a)]());const _0x301904=await this[_0xcbeb7c(0x1d0)]();await $['wait'](this[_0xcbeb7c(0x16a)]());if(_0x301904){const _0xcb0c44=_0x27a839[_0xcbeb7c(0x206)][_0xcbeb7c(0x15d)]('|');let _0x580fdd=0x0;while(!![]){switch(_0xcb0c44[_0x580fdd++]){case'0':await $[_0xcbeb7c(0x1d2)](this['getRandomTime']());continue;case'1':await $[_0xcbeb7c(0x1d2)](this[_0xcbeb7c(0x16a)]());continue;case'2':await this[_0xcbeb7c(0x198)](_0x140d49);continue;case'3':await this[_0xcbeb7c(0x1e3)](_0x140d49);continue;case'4':await $[_0xcbeb7c(0x1d2)](this['getRandomTime']());continue;case'5':await this[_0xcbeb7c(0x227)]();continue;case'6':_0x27a839[_0xcbeb7c(0x190)](resourceFrom,'1')&&sectionId&&(await this[_0xcbeb7c(0x1e1)](_0x140d49),await $[_0xcbeb7c(0x1d2)](this[_0xcbeb7c(0x16a)]()),await this[_0xcbeb7c(0x17d)](),await $[_0xcbeb7c(0x1d2)](this[_0xcbeb7c(0x16a)]()));continue;}break;}}else await this[_0xcbeb7c(0x19a)]();}async[_0x2d4bff(0x209)](){const _0x30d37b=_0x2d4bff,_0xdb3ca6={'odqNJ':function(_0x2d4e47,_0x590b64){return _0x2d4e47+_0x590b64;},'uvaeo':function(_0x9513c6,_0x4be527){return _0x9513c6*_0x4be527;},'SPVQn':_0x30d37b(0x1da),'ioUqN':'get','tamWt':_0x30d37b(0x148),'IxPgx':_0x30d37b(0x1fc),'DpfSi':_0x30d37b(0x1e2),'IATOa':function(_0x327730,_0x3a30e1){return _0x327730*_0x3a30e1;}};try{const _0x248196=_0xdb3ca6[_0x30d37b(0x1bf)](Math['floor'](_0xdb3ca6[_0x30d37b(0x219)](Math['random'](),0x1b)),0x1),_0x410d88=0x15,_0x2d66f5={'url':_0xdb3ca6[_0x30d37b(0x185)],'type':_0xdb3ca6['ioUqN'],'params':{'tags':encodeURIComponent(','),'difficulty':'','orderBy':_0xdb3ca6['tamWt'],'pageNum':_0x248196,'pageSize':_0x410d88},'headers':{'Cookie':this['headers'][_0xdb3ca6[_0x30d37b(0x1df)]],'Referer':_0x30d37b(0x1ff),'User-Agent':this['headers'][_0xdb3ca6[_0x30d37b(0x1f9)]]}},_0x27360d=await this[_0x30d37b(0x18c)](_0x2d66f5),_0xf4f509=_0x27360d?.[_0x30d37b(0x167)]?.[_0x30d37b(0x1ee)];if(_0xf4f509[_0x30d37b(0x184)]){const _0x4b3686=_0xf4f509[Math['floor'](_0xdb3ca6[_0x30d37b(0x1c8)](Math[_0x30d37b(0x1c9)](),_0xf4f509[_0x30d37b(0x184)]))];sceneId=_0x4b3686?.['id'],$['log'](_0x30d37b(0x197)+_0x4b3686[_0x30d37b(0x18d)]+'['+sceneId+']');}else $[_0x30d37b(0x21d)](_0x30d37b(0x20f)+e);}catch(_0x8ae465){this[_0x30d37b(0x1f5)]=![],$['log']('⛔️\x20获取场景失败!\x20'+_0x8ae465);}}async['getSceneDetailPageInfoById'](){const _0x5ae247=_0x2d4bff,_0xc6a2cc={'RaMGH':_0x5ae247(0x1ac),'iwrsd':_0x5ae247(0x186),'FcoiA':_0x5ae247(0x1e2),'bLbAV':function(_0x1ecedb,_0x1743f2){return _0x1ecedb===_0x1743f2;}};try{const _0x57d1de={'url':_0xc6a2cc[_0x5ae247(0x17f)],'type':_0xc6a2cc['iwrsd'],'params':{'id':sceneId},'headers':{'cookie':this[_0x5ae247(0x20a)][_0x5ae247(0x1fc)],'referer':_0x5ae247(0x1c2)+sceneId,'user-agent':this[_0x5ae247(0x20a)][_0xc6a2cc[_0x5ae247(0x1a3)]]}},_0x383005=await this[_0x5ae247(0x18c)](_0x57d1de),{buttonCode:_0x44513e}=_0x383005?.[_0x5ae247(0x167)]?.['developerAdcExperienceStatusVO'];return _0xc6a2cc[_0x5ae247(0x210)](_0x44513e,'1')?($['log'](_0x5ae247(0x207)+_0x383005?.[_0x5ae247(0x167)]?.['id']),_0x383005?.[_0x5ae247(0x167)]?.['id']):($[_0x5ae247(0x21d)](_0x5ae247(0x1c1)+_0x383005?.['data']?.['id']+_0x5ae247(0x225)),null);}catch(_0x895f37){this['ckStatus']=![],$[_0x5ae247(0x21d)](_0x5ae247(0x150)+_0x895f37);}}async[_0x2d4bff(0x227)](){const _0x20a703=_0x2d4bff,_0x251bef={'kiDsf':_0x20a703(0x165),'CrrBU':_0x20a703(0x186),'tmySy':_0x20a703(0x1e2),'Klrre':function(_0x4c88a6,_0x2eec5d){return _0x4c88a6>_0x2eec5d;}};try{const _0x337c7f={'url':_0x251bef[_0x20a703(0x16e)],'type':_0x251bef[_0x20a703(0x1b9)],'params':{'id':sceneId},'headers':{'cookie':this[_0x20a703(0x20a)][_0x20a703(0x1fc)],'referer':'https://developer.aliyun.com/adc/scenario/exp/'+sceneId,'user-agent':this[_0x20a703(0x20a)][_0x251bef[_0x20a703(0x160)]]}},_0x925643=await this[_0x20a703(0x18c)](_0x337c7f);ip=_0x925643?.[_0x20a703(0x167)]?.['ip'],_0x251bef[_0x20a703(0x14c)](_0x925643?.[_0x20a703(0x167)]?.['resourceFrom'][_0x20a703(0x222)]('1'),-0x1)?resourceFrom='1':resourceFrom='2',_0x925643?.[_0x20a703(0x167)]?.[_0x20a703(0x179)][_0x20a703(0x184)]&&(sectionId=_0x925643?.[_0x20a703(0x167)]?.['resourceCardInfoDTOList'][0x0]?.['id']),$[_0x20a703(0x21d)](_0x20a703(0x1a6)+sceneId);}catch(_0x35c598){this[_0x20a703(0x1f5)]=![],$['log'](_0x20a703(0x21e)+_0x35c598);}}async[_0x2d4bff(0x198)](_0x17b25b){const _0x280c47=_0x2d4bff,_0x4254e7={'odDhN':_0x280c47(0x1de),'yggdb':_0x280c47(0x15a),'YXRLP':function(_0x2f3a95,_0x4e119e){return _0x2f3a95===_0x4e119e;},'wtHWi':_0x280c47(0x1eb)};try{const _0x110213={'url':_0x280c47(0x19f),'type':_0x4254e7[_0x280c47(0x1d4)],'dataType':_0x4254e7[_0x280c47(0x171)],'headers':{'Host':_0x280c47(0x1ae),'H_csrf':_0x17b25b,'X-XSRF-TOKEN':_0x17b25b,'User-Agent':_0x280c47(0x1d3),'Cookie':this['token'],'Referer':_0x280c47(0x1c0)+sceneId},'params':{'p_csrf':_0x17b25b},'body':{'id':sceneId,'resourceFrom':resourceFrom}},_0x5d3e92=await this[_0x280c47(0x18c)](_0x110213),{code:_0xa1aeb6,message:_0x56333b}=_0x5d3e92;console['log']((_0x4254e7[_0x280c47(0x20d)](_0xa1aeb6,_0x4254e7[_0x280c47(0x214)])?'✅':'⛔️')+_0x280c47(0x16b)+sceneId+',\x20'+_0x56333b);}catch(_0x4be286){this[_0x280c47(0x1f5)]=![],$['log']('⛔️\x20开始场景失败!\x20'+_0x4be286);}}async[_0x2d4bff(0x1e3)](_0x3aa4b2){const _0x711ccd=_0x2d4bff,_0xa0516d={'Cwvik':_0x711ccd(0x205),'WBfFi':_0x711ccd(0x1de),'cgtTL':_0x711ccd(0x15a),'fhZIJ':'true','ULMlf':_0x711ccd(0x1ae),'Hzayg':_0x711ccd(0x1d3),'LqydO':function(_0x3f4dfd,_0x458fa9){return _0x3f4dfd===_0x458fa9;},'pVqes':'200'};try{const _0x1abdb2={'url':_0xa0516d['Cwvik'],'type':_0xa0516d['WBfFi'],'dataType':_0xa0516d[_0x711ccd(0x161)],'body':{'sceneId':sceneId,'forceClose':_0xa0516d[_0x711ccd(0x166)]},'params':{'p_csrf':_0x3aa4b2},'headers':{'Host':_0xa0516d[_0x711ccd(0x1ec)],'H_csrf':_0x3aa4b2,'X-XSRF-TOKEN':_0x3aa4b2,'User-Agent':_0xa0516d[_0x711ccd(0x169)],'Cookie':this[_0x711ccd(0x1f7)],'Referer':_0x711ccd(0x1c0)+sceneId}},_0x1d2cf6=await this['fetch'](_0x1abdb2),{code:_0x4b1bc4,message:_0x1729a6}=_0x1d2cf6;console[_0x711ccd(0x21d)]((_0xa0516d[_0x711ccd(0x15f)](_0x4b1bc4,_0xa0516d['pVqes'])?'✅':'⛔️')+_0x711ccd(0x18e)+sceneId+',\x20'+_0x1729a6);}catch(_0x48997c){this[_0x711ccd(0x1f5)]=![],$['log'](_0x711ccd(0x199)+_0x48997c);}}async[_0x2d4bff(0x1e1)](_0x1a8157){const _0x5b9b12=_0x2d4bff,_0x370cef={'sbKxI':_0x5b9b12(0x1de),'yFlQu':_0x5b9b12(0x15a),'FYJek':_0x5b9b12(0x1ae),'HSnLU':'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.0.0\x20Safari/537.36'};try{const _0x1d8183={'url':_0x5b9b12(0x188),'type':_0x370cef[_0x5b9b12(0x221)],'dataType':_0x370cef[_0x5b9b12(0x1ab)],'body':{'id':sceneId,'sectionId':sectionId,'ip':ip},'params':{'p_csrf':_0x1a8157},'headers':{'Host':_0x370cef[_0x5b9b12(0x157)],'H_csrf':_0x1a8157,'X-XSRF-TOKEN':_0x1a8157,'User-Agent':_0x370cef[_0x5b9b12(0x1bd)],'Cookie':this['token'],'Referer':'https://developer.aliyun.com/adc/scenario/exp/'+sceneId}},_0x5482d8=await this[_0x5b9b12(0x18c)](_0x1d8183);_0x5482d8?.['data']&&console['log'](_0x5b9b12(0x223)+sceneId);}catch(_0x4f65fb){this[_0x5b9b12(0x1f5)]=![],$[_0x5b9b12(0x21d)]('⛔️\x20创建场景资源失败!\x20'+_0x4f65fb);}}async['getResourceCardInfoById'](){const _0x1b0326=_0x2d4bff,_0x5df97f={'goEZl':_0x1b0326(0x192),'nNikA':'get','pqZjT':_0x1b0326(0x1d3),'sPfEB':function(_0x5a7a4c,_0x3ee245){return _0x5a7a4c===_0x3ee245;},'yefJD':_0x1b0326(0x1eb),'tfQDk':function(_0x12e2cd,_0x56a66f){return _0x12e2cd!==_0x56a66f;},'vaKCb':_0x1b0326(0x1a4)};try{const _0x32d89f={'url':_0x5df97f[_0x1b0326(0x1d7)],'type':_0x5df97f[_0x1b0326(0x1d8)],'params':{'sceneId':sceneId,'sectionId':sectionId},'headers':{'User-Agent':_0x5df97f[_0x1b0326(0x1bb)],'Cookie':this[_0x1b0326(0x1f7)],'Referer':_0x1b0326(0x1c0)+sceneId}},_0x1ad750=await this[_0x1b0326(0x18c)](_0x32d89f),{code:_0x1f07a2,data:_0x2313e8}=_0x1ad750;if(_0x5df97f[_0x1b0326(0x211)](_0x1f07a2,_0x5df97f[_0x1b0326(0x15b)])&&_0x2313e8){if(_0x5df97f[_0x1b0326(0x181)](_0x2313e8?.[_0x1b0326(0x220)],_0x5df97f['vaKCb']))await $[_0x1b0326(0x1d2)](this[_0x1b0326(0x16a)]()),await this[_0x1b0326(0x17d)]();else return console['log'](_0x1b0326(0x19b)+sceneId),!![];}}catch(_0x5b11a8){this[_0x1b0326(0x1f5)]=![],$[_0x1b0326(0x21d)](_0x1b0326(0x14e)+_0x5b11a8);}}async[_0x2d4bff(0x195)](){const _0x4805bf=_0x2d4bff,_0x4f8845={'VtgYj':_0x4805bf(0x229),'CSctA':'get'};try{const _0x2e87ac={'url':_0x4f8845[_0x4805bf(0x155)],'type':_0x4f8845[_0x4805bf(0x1fb)]};let _0x17c11f=await this['fetch'](_0x2e87ac);return _0x17c11f?.['data'];}catch(_0x59b274){$[_0x4805bf(0x21d)](_0x4805bf(0x16d)+_0x59b274);}}async[_0x2d4bff(0x15e)](){const _0x612072=_0x2d4bff,_0x541846={'luDnw':_0x612072(0x1ad),'GVZSV':_0x612072(0x186)};try{const _0x3262bf={'url':_0x541846[_0x612072(0x152)],'type':_0x541846[_0x612072(0x182)]};let _0x1edabc=await this[_0x612072(0x18c)](_0x3262bf);return $[_0x612072(0x21d)]('✅\x20待领取积分:\x20'+_0x1edabc?.[_0x612072(0x167)]),_0x1edabc?.[_0x612072(0x167)];}catch(_0x4714d6){$[_0x612072(0x21d)]('⛔️\x20查询待领取积分失败!\x20'+_0x4714d6);}}async['collect'](){const _0x5b6e5e=_0x2d4bff,_0x6b6a2e={'Zyenu':_0x5b6e5e(0x1c7),'YeYLx':'get'};try{const _0x494889={'url':_0x6b6a2e[_0x5b6e5e(0x168)],'type':_0x6b6a2e[_0x5b6e5e(0x187)]};let _0x1b64d7=await this['fetch'](_0x494889);return $[_0x5b6e5e(0x21d)](_0x5b6e5e(0x15c)+_0x1b64d7?.[_0x5b6e5e(0x167)]),_0x1b64d7?.['data'];}catch(_0x4a880a){$[_0x5b6e5e(0x21d)](_0x5b6e5e(0x224)+_0x4a880a);}}}async function getCookie(){const _0x39966d=_0x2d4bff,_0x488f1a={'joSxB':function(_0x22cd34,_0xcfe1ed){return _0x22cd34===_0xcfe1ed;},'mSbmX':_0x39966d(0x1d5)};if($request&&_0x488f1a[_0x39966d(0x19e)]($request[_0x39966d(0x172)],_0x488f1a['mSbmX']))return;const _0x10aa1e=ObjectKeys2LowerCase($request[_0x39966d(0x20a)]),_0x122eb9=_0x10aa1e[_0x39966d(0x17b)],_0xa6a327=$[_0x39966d(0x177)]($response[_0x39966d(0x1f2)]);if(!_0xa6a327?.[_0x39966d(0x167)]){$['msg']($[_0x39966d(0x18d)],_0x39966d(0x20e),'');return;}const {nickname:_0x318d38,avatar:_0x25e32f}=_0xa6a327?.[_0x39966d(0x167)],_0x38a293={'userId':_0x318d38,'avatar':_0x25e32f,'token':_0x122eb9,'userName':_0x318d38};userCookie=userCookie?JSON[_0x39966d(0x203)](userCookie):[];const _0x3193e2=userCookie[_0x39966d(0x1e9)](_0x224fab=>_0x224fab['userId']==_0x38a293['userId']);userCookie[_0x3193e2]?userCookie[_0x3193e2]=_0x38a293:userCookie[_0x39966d(0x175)](_0x38a293),$['setjson'](userCookie,ckName),$[_0x39966d(0x1d1)]($[_0x39966d(0x18d)],'🎉'+_0x38a293[_0x39966d(0x1dc)]+_0x39966d(0x173),'');}async function checkEnv(){const _0x34acfb=_0x2d4bff;try{const _0x5d3661=envSplitor[_0x34acfb(0x1cc)](_0x5271ab=>userCookie[_0x34acfb(0x1e6)](_0x5271ab))||envSplitor[0x0];return userCookie=$[_0x34acfb(0x177)](userCookie)||userCookie[_0x34acfb(0x15d)](_0x5d3661),userList['push'](...userCookie[_0x34acfb(0x14b)](_0x4d28e1=>new UserInfo(_0x4d28e1))['filter'](Boolean)),userCount=userList[_0x34acfb(0x184)],console[_0x34acfb(0x21d)](_0x34acfb(0x200)+userCount+_0x34acfb(0x1a8)),!![];}catch(_0x386fca){throw new Error(_0x34acfb(0x1cf)+_0x386fca);}}function _0x3299(_0xf727e9,_0x38b1b7){const _0x56b6b8=_0x56b6();return _0x3299=function(_0x3299d5,_0x54c820){_0x3299d5=_0x3299d5-0x148;let _0x3801ef=_0x56b6b8[_0x3299d5];return _0x3801ef;},_0x3299(_0xf727e9,_0x38b1b7);}async function Request(_0x502b28){const _0x99188f=_0x2d4bff,_0x1b378b={'phEAP':_0x99188f(0x21f),'VpVNQ':_0x99188f(0x21a),'QjwKp':'form','JExDO':_0x99188f(0x167),'GuzJJ':_0x99188f(0x1f2),'lBbdf':_0x99188f(0x1de),'zQoVB':_0x99188f(0x186),'QerSf':function(_0x24cb8d,_0x6faec6){return _0x24cb8d===_0x6faec6;},'Zysaz':function(_0x20a613,_0xd02957){return _0x20a613+_0xd02957;},'DhYXw':function(_0x568c4c,_0x10cc05){return _0x568c4c===_0x10cc05;},'jGeBp':'json','VePrv':_0x99188f(0x151),'Yiuau':function(_0x55d51c,_0x2caeb6){return _0x55d51c==_0x2caeb6;}};if(typeof _0x502b28===_0x1b378b['phEAP'])_0x502b28={'url':_0x502b28};try{if(!_0x502b28?.[_0x99188f(0x1fd)])throw new Error(_0x1b378b[_0x99188f(0x21c)]);let {url:_0x92727a,type:_0x38babe,headers:headers={},body:_0x162f0d,params:_0x5328f6,dataType:dataType=_0x1b378b[_0x99188f(0x21b)],resultType:resultType=_0x1b378b[_0x99188f(0x153)]}=_0x502b28;const _0x1cc246=_0x38babe?_0x38babe?.[_0x99188f(0x218)]():_0x1b378b['GuzJJ']in _0x502b28?_0x1b378b[_0x99188f(0x1db)]:_0x1b378b['zQoVB'],_0x48ce42=_0x92727a[_0x99188f(0x1ca)](_0x1b378b[_0x99188f(0x1a7)](_0x1cc246,_0x1b378b[_0x99188f(0x1db)])?_0x1b378b['Zysaz']('?',$[_0x99188f(0x1dd)](_0x5328f6)):''),_0x4878d7=_0x502b28[_0x99188f(0x1be)]?$[_0x99188f(0x1ef)]()?_0x502b28[_0x99188f(0x1be)]/0x3e8:_0x502b28[_0x99188f(0x1be)]:0x2710;if(_0x1b378b[_0x99188f(0x1a9)](dataType,_0x1b378b['jGeBp']))headers[_0x1b378b['VePrv']]=_0x99188f(0x22a);const _0x105d5e=_0x162f0d&&_0x1b378b[_0x99188f(0x149)](dataType,_0x1b378b[_0x99188f(0x21b)])?$[_0x99188f(0x1dd)](_0x162f0d):$[_0x99188f(0x22c)](_0x162f0d),_0x5b0ceb={..._0x502b28,..._0x502b28?.['opts']?_0x502b28['opts']:{},'url':_0x48ce42,'headers':headers,..._0x1b378b[_0x99188f(0x1a9)](_0x1cc246,_0x1b378b['lBbdf'])&&{'body':_0x105d5e},..._0x1b378b[_0x99188f(0x1a7)](_0x1cc246,_0x1b378b[_0x99188f(0x1d9)])&&_0x5328f6&&{'params':_0x5328f6},'timeout':_0x4878d7},_0x543a4e=$[_0x99188f(0x16c)][_0x1cc246[_0x99188f(0x218)]()](_0x5b0ceb)[_0x99188f(0x156)](_0x91a5e2=>resultType==_0x99188f(0x167)?$['toObj'](_0x91a5e2[_0x99188f(0x1f2)])||_0x91a5e2[_0x99188f(0x1f2)]:$[_0x99188f(0x177)](_0x91a5e2)||_0x91a5e2)[_0x99188f(0x208)](_0x4879bb=>$[_0x99188f(0x21d)](_0x99188f(0x1c5)+_0x4879bb));return Promise[_0x99188f(0x202)]([new Promise((_0x36ebd4,_0x55b9c7)=>setTimeout(()=>_0x55b9c7(_0x99188f(0x1e4)),_0x4878d7)),_0x543a4e]);}catch(_0x94d45){console[_0x99188f(0x21d)](_0x99188f(0x1c5)+_0x94d45);}};function randomInt(_0x2edac2,_0x4d4c06){const _0x2db0d2=_0x2d4bff,_0x25dc95={'zZYPS':function(_0x15b0f7,_0x442e76){return _0x15b0f7+_0x442e76;},'XvmNd':function(_0x18730a,_0x4a9d5c){return _0x18730a*_0x4a9d5c;},'iQCWf':function(_0x48edf4,_0x16fc24){return _0x48edf4-_0x16fc24;}};return Math[_0x2db0d2(0x183)](_0x25dc95[_0x2db0d2(0x1f6)](_0x25dc95[_0x2db0d2(0x1cb)](Math[_0x2db0d2(0x1c9)](),_0x25dc95[_0x2db0d2(0x1e0)](_0x4d4c06,_0x2edac2)),_0x2edac2));};function _0x56b6(){const _0x2ca3a1=['tfQDk','GVZSV','round','length','SPVQn','get','YeYLx','https://developer.aliyun.com/adc/api/createResourceById','join','1095384AhemhL','debug\x20error\x20=>\x20t=','fetch','name','\x20结束场景:\x20','4YRpftG','ShTOW','fOBIf','https://developer.aliyun.com/adc/api/getResourceCardInfoById','done','wTVcn','interactData','https://developer.aliyun.com/developer/api','✅\x20获取场景:\x20','startSceneById','⛔️\x20结束场景失败!\x20','doScene','✅\x20创建场景资源完毕:\x20','🎉\x20领取积分:\x20','\x20>>\x20Start\x20work','joSxB','https://developer.aliyun.com/adc/api/startSceneById','⛔️\x20请求发起失败！','wsQYh','WYPkg','FcoiA','RUNNING','https://developer.aliyun.com/','✅\x20获取场景初始化信息:\x20','QerSf','个账号','DhYXw','./sendNotify','yFlQu','https://developer.aliyun.com/adc/api/getSceneDetailPageInfoById','/score/pending/getUserTotalPendingScore?appCode=developer','developer.aliyun.com','NCFZC','debug','------------\x0a','NSTSh','uFYtC','undefined','startsWith','getUser','用户需要去登录','true','CrrBU','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/122.0.0.0\x20Safari/537.36','pqZjT','SKBdP','HSnLU','timeout','odqNJ','https://developer.aliyun.com/adc/scenario/exp/','⛔️\x20确认场景状态:\x20','https://developer.aliyun.com/adc/scenario/','replace','\x20>>\x20Check\x20ck\x20error!','⛔️\x20请求发起失败！原因为:\x20','IS_DEDUG','/score/pending/receiveAllPendingScore?appCode=developer','IATOa','random','concat','XvmNd','find','162323SEmRQP','/my/user/getUser','⛔️\x20checkEnv\x20run\x20error\x20=>\x20','getSceneDetailPageInfoById','msg','wait','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.0.0\x20Safari/537.36','odDhN','OPTIONS','6016685qiVwjn','goEZl','nNikA','zQoVB','https://developer.aliyun.com/adc/api/getSceneList','lBbdf','userName','queryStr','post','IxPgx','iQCWf','createResourceById','User-Agent','closeSceneById','当前请求已超时','title','includes','34605945kfgXDG','finally','findIndex','env','200','ULMlf','collect','list','isSurge','EkFGO','\x0a-----------','body','JncnC','userId','ckStatus','zZYPS','token','message','DpfSi','index','CSctA','Cookie','url','本次运行共获得','https://developer.aliyun.com/adc/labs/','共找到','aliyunWeb_data','race','parse','xCkAi','https://developer.aliyun.com/adc/api/closeSceneById','NbwWz','✅\x20确认场景状态:\x20','catch','getSceneList','headers','35437nfTZwV','SUPzo','YXRLP','⛔️\x20获取Cookie失败!','⛔️\x20获取场景失败!\x20','bLbAV','sPfEB','1359920ndCRtw','RSEzv','wtHWi','notifyMsg','avatar','host','toLowerCase','uvaeo','[发送请求]\x20缺少\x20url\x20参数','QjwKp','VpVNQ','log','⛔️\x20获取场景初始化信息失败!\x20','string','status','sbKxI','indexOf','✅\x20开始创建场景资源:\x20','⛔️\x20收取积分失败!\x20','\x20已完成，将重新获取场景','zBjRk','getSceneStartPageInfoById','isNode','/my/score/getUserScore?appCode=developer','application/json;charset=UTF-8','baseUrl','toStr','lastIndexOf',',\x20当前积分:\x20','set','is_debug','useCountTotal','Yiuau','6319944POukmM','map','Klrre','c_csrf=([^;]*)','⛔️\x20创建场景资源失败!\x20','⛔️\x20未检测到ck，请添加环境变量','⛔️\x20确认场景状态失败!\x20','Content-Type','luDnw','JExDO','getdata','VtgYj','then','FYJek','irBIE','HxGmL','form','yefJD','✅\x20收取积分:\x20','split','getUserTotalPendingScore','LqydO','tmySy','cgtTL','owsnF','allSettled','阿里云社区-场景任务','https://developer.aliyun.com/adc/api/getSceneStartPageInfoById','fhZIJ','data','Zyenu','Hzayg','getRandomTime','\x20开始场景:\x20','http','⛔️\x20查询待收获积分列表失败!\x20','kiDsf','24gnhnOQ','5|4|2|1|6|3|0','yggdb','method','更新token成功!','false','push','notifyList','toObj','⛔️\x20获取签到任务列表失败!\x20','resourceCardInfoDTOList','fromEntries','cookie','⛔️\x20main\x20run\x20error\x20=>\x20','getResourceCardInfoById','match','RaMGH','code'];_0x56b6=function(){return _0x2ca3a1;};return _0x56b6();}function DoubleLog(_0x1c6202){const _0x5a64f9=_0x2d4bff;if(_0x1c6202&&$['isNode']())console[_0x5a64f9(0x21d)](''+_0x1c6202),$[_0x5a64f9(0x215)][_0x5a64f9(0x175)](''+_0x1c6202);else _0x1c6202&&(console[_0x5a64f9(0x21d)](''+_0x1c6202),$[_0x5a64f9(0x215)][_0x5a64f9(0x175)](''+_0x1c6202));};function debug(_0x1fe99d,_0x74e769=_0x2d4bff(0x1b0)){const _0x3f77b2=_0x2d4bff,_0x4046b6={'JncnC':function(_0x3d4644,_0x3bccca){return _0x3d4644===_0x3bccca;},'SUPzo':_0x3f77b2(0x21f)};_0x4046b6[_0x3f77b2(0x1f3)]($[_0x3f77b2(0x230)],_0x3f77b2(0x1b8))&&($['log'](_0x3f77b2(0x1f1)+_0x74e769+_0x3f77b2(0x1b1)),$[_0x3f77b2(0x21d)](typeof _0x1fe99d==_0x4046b6[_0x3f77b2(0x20c)]?_0x1fe99d:$['toStr'](_0x1fe99d)||_0x3f77b2(0x18b)+_0x1fe99d),$[_0x3f77b2(0x21d)](_0x3f77b2(0x1f1)+_0x74e769+_0x3f77b2(0x1b1)));};async function SendMsgList(_0x20beab){const _0x284557=_0x2d4bff;await Promise[_0x284557(0x163)](_0x20beab?.[_0x284557(0x14b)](_0x1a506b=>SendMsg(_0x1a506b[_0x284557(0x1f8)][_0x284557(0x189)]('\x0a'),_0x1a506b[_0x284557(0x216)])));};async function SendMsg(_0x46db8d,_0x178c12){const _0x27605f=_0x2d4bff,_0x3450db={'owsnF':function(_0x4dda0e,_0x491add){return _0x4dda0e<_0x491add;}};_0x46db8d&&(_0x3450db[_0x27605f(0x162)](0x0,Notify)?$['isNode']()?await notify['sendNotify']($['name'],_0x46db8d):$[_0x27605f(0x1d1)]($['name'],$[_0x27605f(0x1e5)]||'',_0x46db8d,{'media-url':_0x178c12}):console[_0x27605f(0x21d)](_0x46db8d));};function ObjectKeys2LowerCase(_0x5027bf){const _0x4f0939=_0x2d4bff;return _0x5027bf=Object[_0x4f0939(0x17a)](Object['entries'](_0x5027bf)['map'](([_0x309936,_0x3183ff])=>[_0x309936[_0x4f0939(0x218)](),_0x3183ff])),new Proxy(_0x5027bf,{'get':function(_0x5a2a59,_0x24ca42,_0x1d755b){const _0x2764ce=_0x4f0939;return Reflect[_0x2764ce(0x186)](_0x5a2a59,_0x24ca42[_0x2764ce(0x218)](),_0x1d755b);},'set':function(_0x481e93,_0x4a34e8,_0x2febb4,_0xeb9cb4){const _0x19c9e5=_0x4f0939;return Reflect[_0x19c9e5(0x22f)](_0x481e93,_0x4a34e8[_0x19c9e5(0x218)](),_0x2febb4,_0xeb9cb4);}});};!(async()=>{const _0x3b73cb=_0x2d4bff,_0xe7e4e4={'RSEzv':function(_0x44b565,_0x59c033){return _0x44b565!=_0x59c033;},'QAfGV':_0x3b73cb(0x1b4),'WYPkg':function(_0x1f59c5){return _0x1f59c5();},'wsQYh':function(_0x3b2c9e,_0xc65a51){return _0x3b2c9e>_0xc65a51;}};if(_0xe7e4e4[_0x3b73cb(0x213)](typeof $request,_0xe7e4e4['QAfGV']))await getCookie();else{if(!await _0xe7e4e4[_0x3b73cb(0x1a2)](checkEnv))throw new Error(_0x3b73cb(0x14f));if(_0xe7e4e4[_0x3b73cb(0x1a1)](userList['length'],0x0))await _0xe7e4e4[_0x3b73cb(0x1a2)](main);}})()[_0x2d4bff(0x208)](_0x463fe9=>$[_0x2d4bff(0x215)][_0x2d4bff(0x175)](_0x463fe9[_0x2d4bff(0x1f8)]||_0x463fe9))[_0x2d4bff(0x1e8)](async()=>{const _0x1149e0=_0x2d4bff;await SendMsgList($[_0x1149e0(0x176)]),$[_0x1149e0(0x193)]({'ok':0x1});});

/** ---------------------------------固定不动区域----------------------------------------- */
// prettier-ignore
//From chavyleung's Env.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise(((e, r) => { s.call(this, t, ((t, s, a) => { t ? r(t) : e(s) })) })) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise((e => { this.get({ url: t }, ((t, s, r) => e(r))) })) } runScript(t, e) { return new Promise((s => { let r = this.getdata("@chavy_boxjs_userCfgs.httpapi"); r = r ? r.replace(/\n/g, "").trim() : r; let a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); a = a ? 1 * a : 20, a = e && e.timeout ? e.timeout : a; const [i, o] = r.split("@"), n = { url: `http://${o}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: a }, headers: { "X-Key": i, Accept: "*/*" }, timeout: a }; this.post(n, ((t, e, r) => s(r))) })).catch((t => this.logErr(t))) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; { const r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e), a = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, a) : r ? this.fs.writeFileSync(e, a) : this.fs.writeFileSync(t, a) } } lodash_get(t, e, s = void 0) { const r = e.replace(/\[(\d+)\]/g, ".$1").split("."); let a = t; for (const t of r) if (a = Object(a)[t], void 0 === a) return s; return a } lodash_set(t, e, s) { return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(((t, s, r) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[r + 1]) >> 0 == +e[r + 1] ? [] : {}), t)[e[e.length - 1]] = s), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, r] = /^@(.*?)\.(.*?)$/.exec(t), a = s ? this.getval(s) : ""; if (a) try { const t = JSON.parse(a); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, r, a] = /^@(.*?)\.(.*?)$/.exec(e), i = this.getval(r), o = r ? "null" === i ? null : i || "{}" : "{}"; try { const e = JSON.parse(o); this.lodash_set(e, a, t), s = this.setval(JSON.stringify(e), r) } catch (e) { const i = {}; this.lodash_set(i, a, t), s = this.setval(JSON.stringify(i), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, ((t, s, r) => { !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, r) })); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t => { const { statusCode: s, statusCode: r, headers: a, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: r, headers: a, body: i, bodyBytes: o }, i, o) }), (t => e(t && t.error || "UndefinedError"))); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", ((t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } })).then((t => { const { statusCode: r, statusCode: a, headers: i, rawBody: o } = t, n = s.decode(o, this.encoding); e(null, { status: r, statusCode: a, headers: i, rawBody: o, body: n }, n) }), (t => { const { message: r, response: a } = t; e(r, a, a && s.decode(a.rawBody, this.encoding)) })) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, ((t, s, r) => { !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, r) })); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t => { const { statusCode: s, statusCode: r, headers: a, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: r, headers: a, body: i, bodyBytes: o }, i, o) }), (t => e(t && t.error || "UndefinedError"))); break; case "Node.js": let r = require("iconv-lite"); this.initGotEnv(t); const { url: a, ...i } = t; this.got[s](a, i).then((t => { const { statusCode: s, statusCode: a, headers: i, rawBody: o } = t, n = r.decode(o, this.encoding); e(null, { status: s, statusCode: a, headers: i, rawBody: o, body: n }, n) }), (t => { const { message: s, response: a } = t; e(s, a, a && r.decode(a.rawBody, this.encoding)) })) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let r = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in r) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[e] : ("00" + r[e]).substr(("" + r[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let r = t[s]; null != r && "" !== r && ("object" == typeof r && (r = JSON.stringify(r)), e += `${s}=${r}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", r = "", a) { const i = t => { switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: return { url: t.url || t.openUrl || t["open-url"] }; case "Loon": return { openUrl: t.openUrl || t.url || t["open-url"], mediaUrl: t.mediaUrl || t["media-url"] }; case "Quantumult X": return { "open-url": t["open-url"] || t.url || t.openUrl, "media-url": t["media-url"] || t.mediaUrl, "update-pasteboard": t["update-pasteboard"] || t.updatePasteboard }; case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, r, i(a)); break; case "Quantumult X": $notify(e, s, r, i(a)); case "Node.js": }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), r && t.push(r), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, t.stack) } } wait(t) { return new Promise((e => setTimeout(e, t))) } done(t = {}) { const e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }