(function(e){function t(t){for(var r,n,o=t[0],i=t[1],l=t[2],d=0,b=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&b.push(c[n][0]),c[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==c[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},c={app:0},s=[];function n(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5060":"5fc2dd6c"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=c[e]=[t,r]}));t.push(a[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=n(e);var l=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(d);var a=c[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/engineeringplan23/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3963:function(e,t,a){"use strict";a("e3c0")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),c=(a("b0c0"),a("cf05")),s=a.n(c),n=function(e){return Object(r["z"])("data-v-4977fbba"),e=e(),Object(r["x"])(),e},o={class:"min-h-screen bangla"},i={key:1,class:"py-5"},l=n((function(){return Object(r["h"])("img",{src:s.a,class:"h-10 mx-auto"},null,-1)})),d={key:0,class:"font-semibold text-center text-white"},u=n((function(){return Object(r["h"])("p",{class:"text-center opacity-10"}," v1.2 ",-1)}));function b(e,t,a,c,s,n){var b,f=Object(r["F"])("navbar"),h=Object(r["F"])("router-view");return Object(r["w"])(),Object(r["g"])("div",o,["Login"!==e.$route.name&&"routine"!==e.$route.name&&"Register"!==e.$route.name&&"restricted"!==e.$route.name?(Object(r["w"])(),Object(r["e"])(f,{key:0})):"Login"!==e.$route.name?(Object(r["w"])(),Object(r["g"])("div",i,[l,null!==(b=e.user)&&void 0!==b&&b.batch?(Object(r["w"])(),Object(r["g"])("p",d,"Batch "+Object(r["I"])(e.user.batch),1)):Object(r["f"])("",!0)])):Object(r["f"])("",!0),Object(r["i"])(h,null,{default:Object(r["O"])((function(e){var t=e.Component;return[Object(r["i"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["O"])((function(){return[(Object(r["w"])(),Object(r["e"])(Object(r["G"])(t)))]})),_:2},1024)]})),_:1}),u])}var f=a("5530"),h=(a("ac1f"),a("5319"),function(e){return Object(r["z"])("data-v-0e318bcc"),e=e(),Object(r["x"])(),e}),j={class:"py-4 lato"},m={class:"container flex items-center justify-center h-20 md:mx-auto"},p={class:"mx-2"},g=h((function(){return Object(r["h"])("img",{src:s.a,alt:"",class:"h-14"},null,-1)})),O=h((function(){return Object(r["h"])("p",{class:"text-sm font-semibold text-center"}," Study Plan ",-1)}));function y(e,t,a,c,s,n){var o=Object(r["F"])("router-link");return Object(r["w"])(),Object(r["g"])("nav",j,[Object(r["h"])("div",m,[Object(r["h"])("div",p,[Object(r["i"])(o,{to:"/",class:"relative"},{default:Object(r["O"])((function(){return[g,O]})),_:1})])])])}var v=a("5502"),x={data:function(){return{mobileMenu:!1,menuItems:[{text:"Routine",icon:"https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-study-high-school-flatart-icons-flat-flatarticons-1.png",link:"/"},{text:"Profile",icon:"https://img.icons8.com/color/96/000000/user.png",link:"/profile"}]}},methods:{toggleTheme:function(){this.$store.commit("SET_THEME","light"==this.theme?"dark":"light")}},computed:Object(f["a"])(Object(f["a"])({},Object(v["c"])({theme:"getTheme"})),Object(v["e"])({isLoggedIn:"userLoggedIn",user:"user"}))},w=(a("f2ae"),a("6b0d")),k=a.n(w);const _=k()(x,[["render",y],["__scopeId","data-v-0e318bcc"]]);var C=_,S={components:{Navbar:C},beforeMount:function(){this.$store.dispatch("initTheme")},computed:Object(f["a"])({},Object(v["c"])({theme:"getTheme"})),watch:{theme:function(e){"light"===e?document.querySelector("html").classList.remove("dark"):document.querySelector("html").classList.add("dark")}},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath();var e=localStorage.getItem("s25_25ssrb"),t=localStorage.getItem("routines23_24");void 0!=e&&(e=JSON.parse(e),this.$store.commit("SET_USER",e),t?this.$store.commit("SET_ROUTINE",JSON.parse(t)):this.$store.dispatch("authenticate",{userid:e.ttrx,router:this.$router,route:this.$route}),this.$store.commit("toggleAuth"))}};a("d277");const P=k()(S,[["render",b],["__scopeId","data-v-4977fbba"]]);var M=P,T=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),I={class:"pb-10"},E={key:0,class:"mb-5"},D={key:1,class:"container hidden mx-auto md:block"},z={key:2,class:"container mx-auto md:hidden"};function A(e,t,a,c,s,n){var o=Object(r["F"])("selected-chapter"),i=Object(r["F"])("current-challenge"),l=Object(r["F"])("pc-routine"),d=Object(r["F"])("mobile-routine");return Object(r["w"])(),Object(r["g"])("div",I,[s.upcoming?(Object(r["w"])(),Object(r["g"])("div",E,[Object(r["i"])(i,{upcoming:s.upcoming},{default:Object(r["O"])((function(){return[Object(r["i"])(o,{selected:s.upcoming},null,8,["selected"])]})),_:1},8,["upcoming"])])):Object(r["f"])("",!0),s.routines.length>0?(Object(r["w"])(),Object(r["g"])("div",D,[Object(r["i"])(l,{challenges:s.routines,onSelectedExam:n.selectedExam},null,8,["challenges","onSelectedExam"])])):Object(r["f"])("",!0),s.routines.length>0?(Object(r["w"])(),Object(r["g"])("div",z,[Object(r["i"])(d,{exams:s.routines,onSelectedExam:n.selectedExam},null,8,["exams","onSelectedExam"])])):Object(r["f"])("",!0)])}var R=a("1da1"),F=(a("96cf"),a("d81d"),a("4de4"),a("caad"),a("2532"),{status:200,routines:[{id:1,subject:"",chapter:"Orientation Class & Calculator Hacks",class:"",start:"24 September 2023 12:0:00 AM",end:"24 September 2023 12:0:00 AM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-6498534d50ab74ffbf446b40"},{id:2,subject:"Higher Math 1st Paper",chapter:"Chapter 1:  ম্যাট্রিকস ও নির্ণায়ক (Matrix & Determinant)",class:"Class 1",start:"30 September 2023 12:0:00 AM",end:"30 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Math/Paper-1/Chapter-1/Class-64a6d80526afa57017550945"},{id:3,subject:"Higher Math 1st Paper",chapter:"Chapter 1:  ম্যাট্রিকস ও নির্ণায়ক (Matrix & Determinant)",class:"Class 2",start:"1 October 2023 12:0:00 AM",end:"1 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Math/Paper-1/Chapter-1/Class-64aad8ce9e141e8be02c4e3b"},{id:4,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 1",start:"25 September 2023 12:0:00 AM",end:"25 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64a2de7315997f69aee119d0"},{id:5,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 2",start:"26 September 2023 12:0:00 AM",end:"26 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64a58a0b711263d043cb04a1"},{id:6,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 3",start:"27 September 2023 12:0:00 AM",end:"27 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64aec98850e612db4e27be19"},{id:7,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 4",start:"28 September 2023 12:0:00 AM",end:"28 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64b2c156acf28065f6f386f3"},{id:8,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 5",start:"29 September 2023 12:0:00 AM",end:"29 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64c12e45ca31446bb3148a26"},{id:9,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"Class 1",start:"2 October 2023 12:0:00 AM",end:"2 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64a442d18f89ed50edebb7aa"},{id:10,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"Class 2",start:"3 October 2023 12:0:00 AM",end:"3 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64a83867642d1c089f7ecb17"},{id:11,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"Class 3",start:"4 October 2023 12:0:00 AM",end:"4 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64ad7f68bc3fefcdf5527aa9"}]}),$=(a("9911"),{class:"table mx-auto space-y-6 border-separate table-auto dark:text-white"}),L=Object(r["h"])("thead",{class:"my-2 bg-gray-300 rounded dark:bg-gray-900"},[Object(r["h"])("tr",null,[Object(r["h"])("th",{class:"p-3"},"Subject & Chapter"),Object(r["h"])("th",{class:"p-3"}," Time "),Object(r["h"])("th",{class:"p-3"}," Details ")])],-1),q={class:"p-3"},N={class:"font-bold"},V={class:"text-sm"},H={class:"p-3"},U={class:"p-3"},Y={class:"flex gap-2 text-xs"},J=["href"],W=["href"],B=["href"];function Q(e,t,a,c,s,n){return Object(r["w"])(),Object(r["g"])("table",$,[L,Object(r["h"])("tbody",null,[(Object(r["w"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(a.challenges,(function(e,t){return Object(r["w"])(),Object(r["g"])("tr",{key:t,class:"bg-gray-200 rounded-md dark:bg-gray-800"},[Object(r["h"])("td",q,[Object(r["h"])("p",N,Object(r["I"])(e.chapter),1),Object(r["h"])("p",null,Object(r["I"])(e.subject),1),Object(r["h"])("p",V,Object(r["I"])(e.class),1)]),Object(r["h"])("td",H,Object(r["I"])(c.formattedDate(e.start)),1),Object(r["h"])("td",U,[Object(r["h"])("div",Y,[e.link?(Object(r["w"])(),Object(r["g"])("a",{key:0,class:"block w-24 p-1 text-center text-white bg-red-500 rounded-md shadow-lg",href:e.link,target:"_blank"}," View Class ",8,J)):Object(r["f"])("",!0),e.free_class?(Object(r["w"])(),Object(r["g"])("a",{key:1,class:"block w-24 p-1 text-center text-white bg-green-500 rounded-md shadow-lg",href:e.free_class,target:"_blank"}," Free Class ",8,W)):Object(r["f"])("",!0),e.hand_note?(Object(r["w"])(),Object(r["g"])("a",{key:2,class:"block w-24 p-1 text-center text-white bg-yellow-500 rounded-md shadow-lg",href:e.hand_note,target:"_blank"}," Hand Note ",8,B)):Object(r["f"])("",!0)])])])})),128))])])}a("b680");var G=a("c1df"),K=a.n(G),X=function(e){return K()(e).format("D MMMM YYYY")},Z=function(){var e=function(e){return X(e)},t=function(e){var t=(e/1e3).toFixed(1),a=(e/6e4).toFixed(1),r=(e/36e5).toFixed(1),c=(e/864e5).toFixed(1);return t<60?t+" Sec":a<60?a+" Min":r<24?r+" Hrs":c+" Days"},a=function(e){return X(e)};return{formattedDate:e,formattedDateC:a,getDuration:t}},ee={emits:["selectedExam"],props:{challenges:{type:Array,required:!0}},setup:function(){var e=Z(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}}};const te=k()(ee,[["render",Q]]);var ae=te,re=function(e){return Object(r["z"])("data-v-096201da"),e=e(),Object(r["x"])(),e},ce={key:0,class:"max-w-2xl mx-2 mt-3 text-center border rounded-lg shadow bg-secondary dark:bg-gray-800 dark:text-white md:mx-auto animate__animated animate__zoomIn"},se=re((function(){return Object(r["h"])("h3",{class:"pt-5 my-5 text-2xl font-semibold text-primary ongoing"}," Ongoing Challenge... ",-1)})),ne={class:"mx-2 text-center md:mx-auto md:w-1/2"};function oe(e,t,a,c,s,n){var o=Object(r["F"])("Timer");return Object(r["w"])(),Object(r["g"])("div",null,[a.upcoming?(Object(r["w"])(),Object(r["g"])("div",ce,[se,Object(r["h"])("div",ne,[Object(r["i"])(o,{end:new Date(a.upcoming.end).getTime()},null,8,["end"])]),Object(r["E"])(e.$slots,"default",{},void 0,!0)])):Object(r["f"])("",!0)])}var ie=function(e){return Object(r["z"])("data-v-bce0313a"),e=e(),Object(r["x"])(),e},le={class:"grid grid-cols-4 gap-3"},de={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},ue={class:"text-2xl font-bold"},be=ie((function(){return Object(r["h"])("p",null,"days",-1)})),fe={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},he={class:"text-2xl font-bold"},je=ie((function(){return Object(r["h"])("p",null,"hours",-1)})),me={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},pe={class:"text-2xl font-bold"},ge=ie((function(){return Object(r["h"])("p",null,"minute",-1)})),Oe={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},ye={class:"text-2xl font-bold"},ve=ie((function(){return Object(r["h"])("p",null,"second",-1)}));function xe(e,t,a,c,s,n){return Object(r["w"])(),Object(r["g"])("div",le,[Object(r["h"])("div",de,[Object(r["h"])("h2",ue,Object(r["I"])(s.days),1),be]),Object(r["h"])("div",fe,[Object(r["h"])("h2",he,Object(r["I"])(s.hours),1),je]),Object(r["h"])("div",me,[Object(r["h"])("h2",pe,Object(r["I"])(s.minute),1),ge]),Object(r["h"])("div",Oe,[Object(r["h"])("h2",ye,Object(r["I"])(s.second),1),ve])])}var we={name:"timer",props:{end:{required:!0}},data:function(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining:function(){var e=this,t=setInterval((function(){var a=e.end-Date.now();if(a<0)clearInterval(t);else{var r=Math.floor(a/e._days),c=Math.floor(a%e._days/e._hours),s=Math.floor(a%e._hours/e._minutes),n=Math.floor(a%e._minutes/e._seconds);e.second=n<10?"0"+n:n,e.minute=s<10?"0"+s:s,e.hours=c<10?"0"+c:c,e.days=r<10?"0"+r:r}}))}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()}};a("8934");const ke=k()(we,[["render",xe],["__scopeId","data-v-bce0313a"]]);var _e=ke,Ce={components:{Timer:_e},props:{upcoming:{type:Object,required:!0}}};a("3963");const Se=k()(Ce,[["render",oe],["__scopeId","data-v-096201da"]]);var Pe=Se,Me={key:0,class:"dark:text-white"},Te={class:"my-3 text-2xl font-semibold"},Ie={key:0,class:"py-3 -mt-4 text-lg font-medium"},Ee={key:1,class:"py-3 -mt-4 text-lg font-medium"},De={class:"text-lg"},ze={class:"mt-2"},Ae={class:"flex justify-center gap-2 my-3 text-sm md:text-sm"},Re=["href"],Fe=["href"],$e=["href"];function Le(e,t,a,c,s,n){return a.selected?(Object(r["w"])(),Object(r["g"])("div",Me,[Object(r["h"])("h2",Te,Object(r["I"])(a.selected.chapter),1),a.selected.subject?(Object(r["w"])(),Object(r["g"])("h2",Ie,Object(r["I"])(a.selected.subject),1)):Object(r["f"])("",!0),a.selected.class?(Object(r["w"])(),Object(r["g"])("h2",Ee,Object(r["I"])(a.selected.class),1)):Object(r["f"])("",!0),Object(r["h"])("div",De,[Object(r["h"])("h3",ze,Object(r["I"])(c.formattedDate(a.selected.start)),1),Object(r["h"])("div",Ae,[a.selected.link?(Object(r["w"])(),Object(r["g"])("a",{key:0,class:"flex items-center justify-center px-3 py-2 text-white bg-red-500 rounded-md shadow-lg",href:a.selected.link,target:"_blank"}," View Class ",8,Re)):Object(r["f"])("",!0),a.selected.free_class?(Object(r["w"])(),Object(r["g"])("a",{key:1,class:"flex items-center justify-center px-3 py-2 text-white bg-green-500 rounded-md shadow-lg",href:a.selected.free_class,target:"_blank"}," Free Class ",8,Fe)):Object(r["f"])("",!0),a.selected.hand_note?(Object(r["w"])(),Object(r["g"])("a",{key:2,class:"flex items-center justify-center px-3 py-2 text-white bg-yellow-500 rounded-md shadow-lg",href:a.selected.hand_note,target:"_blank"}," Hand Note ",8,$e)):Object(r["f"])("",!0)])])])):Object(r["f"])("",!0)}a("25f0");var qe={name:"SelectedChapterInfo",props:{selected:{type:Object,required:!0}},setup:function(){var e=Z(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}},methods:{setAlert:function(){this.$swal({icon:"warning",title:"Please wait...",text:"Will be available soon"})},upcomingalert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$swal({icon:"warning",title:"Upcomming",text:"Wait till ".concat(e?this.formattedDate(e).toString():"")})},endalert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$swal({icon:"warning",title:"Wait",text:"Will be available after ".concat(e?this.formattedDate(e).toString():"")})}}};const Ne=k()(qe,[["render",Le]]);var Ve=Ne,He={class:"space-y-2 text-center"},Ue={class:"text-xl font-bold"},Ye={class:"flex justify-center gap-2 text-sm"},Je=["href"],We=["href"],Be=["href"];function Qe(e,t,a,c,s,n){return Object(r["w"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(a.exams,(function(e,t){return Object(r["w"])(),Object(r["g"])("div",{key:t,class:"p-5 mx-2 my-4 space-y-2 border border-gray-400 rounded bg-blue-50"},[Object(r["h"])("div",He,[Object(r["h"])("p",Ue,Object(r["I"])(e.subject),1),Object(r["h"])("p",null,Object(r["I"])(e.chapter),1),Object(r["h"])("p",null,Object(r["I"])(e.class),1),Object(r["h"])("p",null,Object(r["I"])(c.formattedDate(e.start)),1)]),Object(r["h"])("div",Ye,[e.link?(Object(r["w"])(),Object(r["g"])("a",{key:0,class:"flex items-center justify-center px-3 py-2 text-white bg-red-500 rounded-md shadow-lg",href:e.link,target:"_blank"}," View Class ",8,Je)):Object(r["f"])("",!0),e.free_class?(Object(r["w"])(),Object(r["g"])("a",{key:1,class:"flex items-center justify-center px-3 py-2 text-white bg-green-500 rounded-md shadow-lg",href:e.free_class,target:"_blank"}," Free Class ",8,We)):Object(r["f"])("",!0),e.hand_note?(Object(r["w"])(),Object(r["g"])("a",{key:2,class:"flex items-center justify-center px-3 py-2 text-white bg-yellow-500 rounded-md shadow-lg",href:e.hand_note,target:"_blank"}," Hand Note ",8,Be)):Object(r["f"])("",!0)])])})),128)}var Ge={emits:["selectedExam"],props:{exams:{type:Array},subject:{default:""}},setup:function(){var e=Z(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}}};const Ke=k()(Ge,[["render",Qe]]);var Xe=Ke,Ze={components:{PcRoutine:ae,CurrentChallenge:Pe,SelectedChapter:Ve,MobileRoutine:Xe},data:function(){return{loading:!1,all:[],routines:[],selectedChapters:[],selected:null,se:"",upcoming:[]}},methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(v["d"])(["toggleModal"])),Object(v["b"])(["authenticate"])),{},{prepareRoutine:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.routines=F.routines.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{start:new Date(e.start).getTime(),end:new Date(e.end).getTime()})})),e.all=e.routines,a=e.routines.filter((function(e){return e.end>Date.now()})),e.upcoming=a[0];case 4:case"end":return t.stop()}}),t)})))()},selectedExam:function(e){this.selected=this.routines[e],this.toggleModal()},selectSubject:function(e){this.se=e,this.routines=this.all.filter((function(t){if(t.subject&&t.subject.toLowerCase().includes(e.toLowerCase()))return t}))}}),created:function(){this.prepareRoutine()},computed:Object(f["a"])({},Object(v["e"])({userroutine:function(e){return e.routine},user:function(e){return e.user}}))};a("c259");const et=k()(Ze,[["render",A],["__scopeId","data-v-635ab104"]]);var tt=et,at=[{path:"/",name:"home",component:tt,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:function(){return a.e("chunk-2d0e5060").then(a.bind(null,"935e"))}}],rt=Object(T["a"])({history:Object(T["b"])("/engineeringplan23/"),routes:at});rt.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?localStorage.getItem("e23_stplan")?a():a({name:"Register"}):a()}));var ct=rt,st=(a("99af"),"https://script.google.com/macros/s/AKfycbw4UWo5uBVe6Fohu-Rw-q63sL_j7cLv32j-5jR-17nc35CwJydxbqkrFf3AQ4SmzSaLxA/exec"),nt=Object(v["a"])({state:{routine:null,options:{},start:0,user:null,theme:"light",userLoggedIn:!1,showModal:!1},mutations:{toggleAuth:function(e){e.userLoggedIn=!e.userLoggedIn},toggleModal:function(e){e.showModal=!e.showModal},SET_OPTIONS:function(e,t){e.options=t},SET_ROUTINE:function(e,t){e.routine=t},SET_START:function(e,t){e.start=t},SET_USER:function(e,t){e.user=t},SET_THEME:function(e,t){e.theme=t,localStorage.theme=t}},actions:{setOptions:function(e,t){var a=e.commit;a("SET_OPTIONS",t.options)},authenticate:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(st,"?ttrx=").concat(t.userid));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},register:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.prev=1,a.next=4,fetch(st,{method:"POST",body:t.body});case 4:r("SET_USER",t.body),localStorage.setItem("e23_stplan",t.body),t.router.replace({name:"home"}),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},initTheme:function(e){var t=e.commit,a=!!localStorage.theme&&localStorage.theme,r=window.matchMedia("(prefers-color-scheme: dark)").matches;t("SET_THEME",a||(r?"dark":"light"))}},getters:{getTheme:function(e){return e.theme}},modules:{}}),ot=a("7bb1"),it=a("3aa8"),lt={install:function(e){e.component("VeeForm",ot["c"]),e.component("VeeField",ot["b"]),e.component("ErrorMessage",ot["a"]),Object(ot["e"])("required",it["i"]),Object(ot["e"])("tos",it["i"]),Object(ot["e"])("min",it["f"]),Object(ot["e"])("max",it["d"]),Object(ot["e"])("alpha_spaces",it["a"]),Object(ot["e"])("email",it["c"]),Object(ot["e"])("min_value",it["g"]),Object(ot["e"])("max_value",it["e"]),Object(ot["e"])("password_mismatch",it["b"]),Object(ot["e"])("excluded",it["h"]),Object(ot["e"])("country_excluded",it["h"]),Object(ot["d"])({generateMessage:function(e){var t={required:"The field ".concat(e.field," is required."),min:"The field ".concat(e.field," is too short."),max:"The field ".concat(e.field," is too long."),alpha_spaces:"The field ".concat(e.field," may only contain alphabetic characters and spaces."),email:"The field ".concat(e.field," must contain a valid email address."),min_value:"The field ".concat(e.field," is too low."),max_value:"The field ".concat(e.field," is too high."),excluded:"You are not allowed to use this value for this field ".concat(e.field),password_mismatch:"The password don't match.",country_excluded:"Due to restrictions, we do not accept from this country",tos:"You must accept the Terms of Service"},a=t[e.rule.name]?t[e.rule.name]:"The field ".concat(e.field," is invalid");return a},validateOnBlur:!0,vlidateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}},dt=a("323e"),ut=a.n(dt),bt=function(e){e.beforeEach((function(e,t,a){ut.a.start(),a()})),e.afterEach(ut.a.done)},ft=a("f9d5"),ht=a.n(ft),jt=(a("4413"),a("3b2f")),mt=a.n(jt),pt={class:"flex items-center justify-center mt-10 space-x-1 text-sm text-gray-700 dark:text-white"},gt=Object(r["h"])("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[Object(r["h"])("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})],-1),Ot=Object(r["h"])("div",{class:"text-lg"},"Please wait ...",-1),yt=[gt,Ot];function vt(e,t){return Object(r["w"])(),Object(r["g"])("div",pt,yt)}const xt={},wt=k()(xt,[["render",vt]]);var kt=wt;a("ba8c"),a("77ed"),a("a5d8"),a("be0f");bt(ct),window.katex=mt.a;var _t=Object(r["d"])(M);_t.component("loader",kt),_t.use(lt),_t.use(nt),_t.use(ct),_t.use(ht.a),_t.mount("#app")},"7e14":function(e,t,a){},8934:function(e,t,a){"use strict";a("f537")},"8e21":function(e,t,a){},ba8c:function(e,t,a){},c259:function(e,t,a){"use strict";a("e9c2")},cf05:function(e,t,a){e.exports=a.p+"img/logo.8facd1f1.png"},d277:function(e,t,a){"use strict";a("7e14")},e3c0:function(e,t,a){},e9c2:function(e,t,a){},f2ae:function(e,t,a){"use strict";a("8e21")},f537:function(e,t,a){}});