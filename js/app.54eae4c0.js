(function(e){function t(t){for(var s,n,o=t[0],i=t[1],l=t[2],d=0,b=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&b.push(c[n][0]),c[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,n=1;n<a.length;n++){var i=a[n];0!==c[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},c={app:0},r=[];function n(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5060":"e41021b4"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=c[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=c[e]=[t,s]}));t.push(a[2]=s);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=n(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(d);var a=c[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}c[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/engineeringplan23/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3963:function(e,t,a){"use strict";a("e3c0")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),c=a("830a"),r=a.n(c),n=a("cf05"),o=a.n(n),i=function(e){return Object(s["B"])("data-v-69b1d810"),e=e(),Object(s["z"])(),e},l={class:"min-h-screen bangla"},d=Object(s["i"])('<div class="py-5" data-v-69b1d810><div class="flex flex-col items-center justify-center" data-v-69b1d810><img src="'+r.a+'" class="h-8" data-v-69b1d810><img src="'+o.a+'" class="h-10" data-v-69b1d810></div><p class="text-lg font-bold text-center" data-v-69b1d810>HSC 2023</p></div>',1),u=i((function(){return Object(s["h"])("p",{class:"text-center opacity-10"}," v1.3 ",-1)}));function b(e,t,a,c,r,n){var o=Object(s["H"])("router-view");return Object(s["y"])(),Object(s["g"])("div",l,[d,Object(s["k"])(o,null,{default:Object(s["Q"])((function(e){var t=e.Component;return[Object(s["k"])(s["b"],{name:"route",mode:"out-in"},{default:Object(s["Q"])((function(){return[(Object(s["y"])(),Object(s["e"])(Object(s["I"])(t)))]})),_:2},1024)]})),_:1}),u])}var f=a("5530"),h=(a("ac1f"),a("5319"),function(e){return Object(s["B"])("data-v-0e318bcc"),e=e(),Object(s["z"])(),e}),j={class:"py-4 lato"},m={class:"container flex items-center justify-center h-20 md:mx-auto"},p={class:"mx-2"},g=h((function(){return Object(s["h"])("img",{src:o.a,alt:"",class:"h-14"},null,-1)})),O=h((function(){return Object(s["h"])("p",{class:"text-sm font-semibold text-center"}," Study Plan ",-1)}));function y(e,t,a,c,r,n){var o=Object(s["H"])("router-link");return Object(s["y"])(),Object(s["g"])("nav",j,[Object(s["h"])("div",m,[Object(s["h"])("div",p,[Object(s["k"])(o,{to:"/",class:"relative"},{default:Object(s["Q"])((function(){return[g,O]})),_:1})])])])}var v=a("5502"),x={data:function(){return{mobileMenu:!1,menuItems:[{text:"Routine",icon:"https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-study-high-school-flatart-icons-flat-flatarticons-1.png",link:"/"},{text:"Profile",icon:"https://img.icons8.com/color/96/000000/user.png",link:"/profile"}]}},methods:{toggleTheme:function(){this.$store.commit("SET_THEME","light"==this.theme?"dark":"light")}},computed:Object(f["a"])(Object(f["a"])({},Object(v["c"])({theme:"getTheme"})),Object(v["e"])({isLoggedIn:"userLoggedIn",user:"user"}))},k=(a("f2ae"),a("6b0d")),w=a.n(k);const _=w()(x,[["render",y],["__scopeId","data-v-0e318bcc"]]);var C=_,S={components:{Navbar:C},beforeMount:function(){this.$store.dispatch("initTheme")},computed:Object(f["a"])({},Object(v["c"])({theme:"getTheme"})),watch:{theme:function(e){"light"===e?document.querySelector("html").classList.remove("dark"):document.querySelector("html").classList.add("dark")}},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath();var e=localStorage.getItem("s25_25ssrb"),t=localStorage.getItem("routines23_24");void 0!=e&&(e=JSON.parse(e),this.$store.commit("SET_USER",e),t?this.$store.commit("SET_ROUTINE",JSON.parse(t)):this.$store.dispatch("authenticate",{userid:e.ttrx,router:this.$router,route:this.$route}),this.$store.commit("toggleAuth"))}};a("d6c5");const P=w()(S,[["render",b],["__scopeId","data-v-69b1d810"]]);var M=P,T=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),E={class:"pb-10"},D={key:0,class:"mb-5"},z={key:1,class:"container hidden mx-auto md:block"},I={key:2,class:"container mx-auto md:hidden"};function A(e,t,a,c,r,n){var o=Object(s["H"])("selected-chapter"),i=Object(s["H"])("current-challenge"),l=Object(s["H"])("pc-routine"),d=Object(s["H"])("mobile-routine");return Object(s["y"])(),Object(s["g"])("div",E,[r.upcoming?(Object(s["y"])(),Object(s["g"])("div",D,[Object(s["k"])(i,{upcoming:r.upcoming},{default:Object(s["Q"])((function(){return[Object(s["k"])(o,{selected:r.upcoming},null,8,["selected"])]})),_:1},8,["upcoming"])])):Object(s["f"])("",!0),r.routines.length>0?(Object(s["y"])(),Object(s["g"])("div",z,[Object(s["k"])(l,{challenges:r.routines,onSelectedExam:n.selectedExam},null,8,["challenges","onSelectedExam"])])):Object(s["f"])("",!0),r.routines.length>0?(Object(s["y"])(),Object(s["g"])("div",I,[Object(s["k"])(d,{exams:r.routines,onSelectedExam:n.selectedExam},null,8,["exams","onSelectedExam"])])):Object(s["f"])("",!0)])}var R=a("1da1"),H=(a("96cf"),a("d81d"),a("4de4"),a("caad"),a("2532"),{status:200,routines:[{id:1,subject:"",chapter:"Orientation Class & Calculator Hacks",class:"",start:"24 September 2023 12:00:00 AM",end:"24 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-6498534d50ab74ffbf446b40"},{id:2,subject:"Higher Math 1st Paper",chapter:"Chapter 1:  ম্যাট্রিকস ও নির্ণায়ক (Matrix & Determinant)",class:"Class 1",start:"25 September 2023 12:00:00 AM",end:"25 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Math/Paper-1/Chapter-1/Class-64a6d80526afa57017550945"},{id:3,subject:"Higher Math 1st Paper",chapter:"Chapter 1:  ম্যাট্রিকস ও নির্ণায়ক (Matrix & Determinant)",class:"Class 2",start:"26 September 2023 12:00:00 AM",end:"26 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Math/Paper-1/Chapter-1/Class-64aad8ce9e141e8be02c4e3b"},{id:4,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 1",start:"27 September 2023 12:00:00 AM",end:"27 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64a2de7315997f69aee119d0"},{id:5,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 2",start:"28 September 2023 12:00:00 AM",end:"28 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64a58a0b711263d043cb04a1"},{id:6,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 3",start:"29 September 2023 12:00:00 AM",end:"29 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64aec98850e612db4e27be19"},{id:7,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 4",start:"30 September 2023 12:00:00 AM",end:"30 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64b2c156acf28065f6f386f3"},{id:8,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Class 5",start:"1 October 2023 12:00:00 AM",end:"1 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64c12e45ca31446bb3148a26"},{id:9,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"Class 1",start:"2 October 2023 12:00:00 AM",end:"2 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64a442d18f89ed50edebb7aa"},{id:10,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"Class 2",start:"3 October 2023 12:00:00 AM",end:"3 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64a83867642d1c089f7ecb17"},{id:11,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"Class 3",start:"4 October 2023 12:00:00 AM",end:"4 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64ad7f68bc3fefcdf5527aa9"}]}),K=(a("9911"),{class:"table mx-auto space-y-6 border-separate table-auto dark:text-white"}),q=Object(s["h"])("thead",{class:"my-2 bg-gray-300 rounded dark:bg-gray-900"},[Object(s["h"])("tr",null,[Object(s["h"])("th",{class:"p-3"},"Subject & Chapter"),Object(s["h"])("th",{class:"p-3"}," Time "),Object(s["h"])("th",{class:"p-3"}," Details ")])],-1),L={class:"p-3"},F={class:"font-bold"},$={class:"text-sm"},N=Object(s["j"])(),V={class:"p-3"},U={class:"p-3"},Q={class:"flex gap-2 text-xs"},B=["href"],Y=["href"],J=["href"];function W(e,t,a,c,r,n){return Object(s["y"])(),Object(s["g"])("table",K,[q,Object(s["h"])("tbody",null,[(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["F"])(a.challenges,(function(e,t){return Object(s["y"])(),Object(s["g"])("tr",{key:t,class:"bg-gray-200 rounded-md dark:bg-gray-800"},[Object(s["h"])("td",L,[Object(s["h"])("p",F,Object(s["K"])(e.chapter),1),Object(s["h"])("p",$,Object(s["K"])(e.class),1),N,Object(s["h"])("p",null,Object(s["K"])(e.subject),1)]),Object(s["h"])("td",V,Object(s["K"])(c.formattedDate(e.start)),1),Object(s["h"])("td",U,[Object(s["h"])("div",Q,[e.link?(Object(s["y"])(),Object(s["g"])("a",{key:0,class:"block w-24 p-1 text-center text-white bg-red-500 rounded-md shadow-lg",href:e.link,target:"_blank"}," View Class ",8,B)):Object(s["f"])("",!0),e.free_class?(Object(s["y"])(),Object(s["g"])("a",{key:1,class:"block w-24 p-1 text-center text-white bg-green-500 rounded-md shadow-lg",href:e.free_class,target:"_blank"}," Free Class ",8,Y)):Object(s["f"])("",!0),e.hand_note?(Object(s["y"])(),Object(s["g"])("a",{key:2,class:"block w-24 p-1 text-center text-white bg-yellow-500 rounded-md shadow-lg",href:e.hand_note,target:"_blank"}," Hand Note ",8,J)):Object(s["f"])("",!0)])])])})),128))])])}a("b680");var G=a("c1df"),X=a.n(G),Z=function(e){return X()(e).format("D MMMM YYYY")},ee=function(){var e=function(e){return Z(e)},t=function(e){var t=(e/1e3).toFixed(1),a=(e/6e4).toFixed(1),s=(e/36e5).toFixed(1),c=(e/864e5).toFixed(1);return t<60?t+" Sec":a<60?a+" Min":s<24?s+" Hrs":c+" Days"},a=function(e){return Z(e)};return{formattedDate:e,formattedDateC:a,getDuration:t}},te={emits:["selectedExam"],props:{challenges:{type:Array,required:!0}},setup:function(){var e=ee(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}}};const ae=w()(te,[["render",W]]);var se=ae,ce=function(e){return Object(s["B"])("data-v-096201da"),e=e(),Object(s["z"])(),e},re={key:0,class:"max-w-2xl mx-2 mt-3 text-center border rounded-lg shadow bg-secondary dark:bg-gray-800 dark:text-white md:mx-auto animate__animated animate__zoomIn"},ne=ce((function(){return Object(s["h"])("h3",{class:"pt-5 my-5 text-2xl font-semibold text-primary ongoing"}," Ongoing Challenge... ",-1)})),oe={class:"mx-2 text-center md:mx-auto md:w-1/2"};function ie(e,t,a,c,r,n){var o=Object(s["H"])("Timer");return Object(s["y"])(),Object(s["g"])("div",null,[a.upcoming?(Object(s["y"])(),Object(s["g"])("div",re,[ne,Object(s["h"])("div",oe,[Object(s["k"])(o,{end:new Date(a.upcoming.end).getTime()},null,8,["end"])]),Object(s["G"])(e.$slots,"default",{},void 0,!0)])):Object(s["f"])("",!0)])}var le=function(e){return Object(s["B"])("data-v-bce0313a"),e=e(),Object(s["z"])(),e},de={class:"grid grid-cols-4 gap-3"},ue={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},be={class:"text-2xl font-bold"},fe=le((function(){return Object(s["h"])("p",null,"days",-1)})),he={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},je={class:"text-2xl font-bold"},me=le((function(){return Object(s["h"])("p",null,"hours",-1)})),pe={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},ge={class:"text-2xl font-bold"},Oe=le((function(){return Object(s["h"])("p",null,"minute",-1)})),ye={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},ve={class:"text-2xl font-bold"},xe=le((function(){return Object(s["h"])("p",null,"second",-1)}));function ke(e,t,a,c,r,n){return Object(s["y"])(),Object(s["g"])("div",de,[Object(s["h"])("div",ue,[Object(s["h"])("h2",be,Object(s["K"])(r.days),1),fe]),Object(s["h"])("div",he,[Object(s["h"])("h2",je,Object(s["K"])(r.hours),1),me]),Object(s["h"])("div",pe,[Object(s["h"])("h2",ge,Object(s["K"])(r.minute),1),Oe]),Object(s["h"])("div",ye,[Object(s["h"])("h2",ve,Object(s["K"])(r.second),1),xe])])}var we={name:"timer",props:{end:{required:!0}},data:function(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining:function(){var e=this,t=setInterval((function(){var a=e.end-Date.now();if(a<0)clearInterval(t);else{var s=Math.floor(a/e._days),c=Math.floor(a%e._days/e._hours),r=Math.floor(a%e._hours/e._minutes),n=Math.floor(a%e._minutes/e._seconds);e.second=n<10?"0"+n:n,e.minute=r<10?"0"+r:r,e.hours=c<10?"0"+c:c,e.days=s<10?"0"+s:s}}))}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()}};a("8934");const _e=w()(we,[["render",ke],["__scopeId","data-v-bce0313a"]]);var Ce=_e,Se={components:{Timer:Ce},props:{upcoming:{type:Object,required:!0}}};a("3963");const Pe=w()(Se,[["render",ie],["__scopeId","data-v-096201da"]]);var Me=Pe,Te={key:0,class:"dark:text-white"},Ee={class:"my-3 text-2xl font-semibold"},De={key:0,class:"py-3 -mt-4 text-lg font-medium"},ze=Object(s["j"])(),Ie={key:1,class:"py-3 -mt-4 text-lg font-medium"},Ae={class:"text-lg"},Re={class:"mt-2"},He={class:"flex justify-center gap-2 my-3 text-sm md:text-sm"},Ke=["href"],qe=["href"],Le=["href"];function Fe(e,t,a,c,r,n){return a.selected?(Object(s["y"])(),Object(s["g"])("div",Te,[Object(s["h"])("h2",Ee,Object(s["K"])(a.selected.chapter),1),a.selected.class?(Object(s["y"])(),Object(s["g"])("h2",De,Object(s["K"])(a.selected.class),1)):Object(s["f"])("",!0),ze,a.selected.subject?(Object(s["y"])(),Object(s["g"])("h2",Ie,Object(s["K"])(a.selected.subject),1)):Object(s["f"])("",!0),Object(s["h"])("div",Ae,[Object(s["h"])("h3",Re,Object(s["K"])(c.formattedDate(a.selected.start)),1),Object(s["h"])("div",He,[a.selected.link?(Object(s["y"])(),Object(s["g"])("a",{key:0,class:"flex items-center justify-center px-3 py-2 text-white bg-red-500 rounded-md shadow-lg",href:a.selected.link,target:"_blank"}," View Class ",8,Ke)):Object(s["f"])("",!0),a.selected.free_class?(Object(s["y"])(),Object(s["g"])("a",{key:1,class:"flex items-center justify-center px-3 py-2 text-white bg-green-500 rounded-md shadow-lg",href:a.selected.free_class,target:"_blank"}," Free Class ",8,qe)):Object(s["f"])("",!0),a.selected.hand_note?(Object(s["y"])(),Object(s["g"])("a",{key:2,class:"flex items-center justify-center px-3 py-2 text-white bg-yellow-500 rounded-md shadow-lg",href:a.selected.hand_note,target:"_blank"}," Hand Note ",8,Le)):Object(s["f"])("",!0)])])])):Object(s["f"])("",!0)}a("25f0");var $e={name:"SelectedChapterInfo",props:{selected:{type:Object,required:!0}},setup:function(){var e=ee(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}},methods:{setAlert:function(){this.$swal({icon:"warning",title:"Please wait...",text:"Will be available soon"})},upcomingalert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$swal({icon:"warning",title:"Upcomming",text:"Wait till ".concat(e?this.formattedDate(e).toString():"")})},endalert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$swal({icon:"warning",title:"Wait",text:"Will be available after ".concat(e?this.formattedDate(e).toString():"")})}}};const Ne=w()($e,[["render",Fe]]);var Ve=Ne,Ue={class:"space-y-2 text-center"},Qe={class:"text-xl font-bold"},Be={class:"flex justify-center gap-2 text-sm"},Ye=["href"],Je=["href"],We=["href"];function Ge(e,t,a,c,r,n){return Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["F"])(a.exams,(function(e,t){return Object(s["y"])(),Object(s["g"])("div",{key:t,class:"p-5 mx-2 my-4 space-y-2 border border-gray-400 rounded bg-blue-50"},[Object(s["h"])("div",Ue,[Object(s["h"])("p",null,Object(s["K"])(e.chapter),1),Object(s["h"])("p",null,Object(s["K"])(e.class),1),Object(s["h"])("p",Qe,Object(s["K"])(e.subject),1),Object(s["h"])("p",null,Object(s["K"])(c.formattedDate(e.start)),1)]),Object(s["h"])("div",Be,[e.link?(Object(s["y"])(),Object(s["g"])("a",{key:0,class:"flex items-center justify-center px-3 py-2 text-white bg-red-500 rounded-md shadow-lg",href:e.link,target:"_blank"}," View Class ",8,Ye)):Object(s["f"])("",!0),e.free_class?(Object(s["y"])(),Object(s["g"])("a",{key:1,class:"flex items-center justify-center px-3 py-2 text-white bg-green-500 rounded-md shadow-lg",href:e.free_class,target:"_blank"}," Free Class ",8,Je)):Object(s["f"])("",!0),e.hand_note?(Object(s["y"])(),Object(s["g"])("a",{key:2,class:"flex items-center justify-center px-3 py-2 text-white bg-yellow-500 rounded-md shadow-lg",href:e.hand_note,target:"_blank"}," Hand Note ",8,We)):Object(s["f"])("",!0)])])})),128)}var Xe={emits:["selectedExam"],props:{exams:{type:Array},subject:{default:""}},setup:function(){var e=ee(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}}};const Ze=w()(Xe,[["render",Ge]]);var et=Ze,tt={components:{PcRoutine:se,CurrentChallenge:Me,SelectedChapter:Ve,MobileRoutine:et},data:function(){return{loading:!1,all:[],routines:[],selectedChapters:[],selected:null,se:"",upcoming:[]}},methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(v["d"])(["toggleModal"])),Object(v["b"])(["authenticate"])),{},{prepareRoutine:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.routines=H.routines.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{start:new Date(e.start).getTime(),end:new Date(e.end).getTime()})})),e.all=e.routines,a=e.routines.filter((function(e){return e.end>Date.now()})),e.upcoming=a[0];case 4:case"end":return t.stop()}}),t)})))()},selectedExam:function(e){this.selected=this.routines[e],this.toggleModal()},selectSubject:function(e){this.se=e,this.routines=this.all.filter((function(t){if(t.subject&&t.subject.toLowerCase().includes(e.toLowerCase()))return t}))}}),created:function(){this.prepareRoutine()},computed:Object(f["a"])({},Object(v["e"])({userroutine:function(e){return e.routine},user:function(e){return e.user}}))};a("c259");const at=w()(tt,[["render",A],["__scopeId","data-v-635ab104"]]);var st=at,ct=[{path:"/",name:"home",component:st,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:function(){return a.e("chunk-2d0e5060").then(a.bind(null,"935e"))}}],rt=Object(T["a"])({history:Object(T["b"])("/engineeringplan23/"),routes:ct});rt.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?localStorage.getItem("e23_stplan")?a():a({name:"Register"}):a()}));var nt=rt,ot=(a("99af"),"https://script.google.com/macros/s/AKfycbw4UWo5uBVe6Fohu-Rw-q63sL_j7cLv32j-5jR-17nc35CwJydxbqkrFf3AQ4SmzSaLxA/exec"),it=Object(v["a"])({state:{routine:null,options:{},start:0,user:null,theme:"light",userLoggedIn:!1,showModal:!1},mutations:{toggleAuth:function(e){e.userLoggedIn=!e.userLoggedIn},toggleModal:function(e){e.showModal=!e.showModal},SET_OPTIONS:function(e,t){e.options=t},SET_ROUTINE:function(e,t){e.routine=t},SET_START:function(e,t){e.start=t},SET_USER:function(e,t){e.user=t},SET_THEME:function(e,t){e.theme=t,localStorage.theme=t}},actions:{setOptions:function(e,t){var a=e.commit;a("SET_OPTIONS",t.options)},authenticate:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ot,"?ttrx=").concat(t.userid));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))()},register:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,a.prev=1,a.next=4,fetch(ot,{method:"POST",body:t.body});case 4:s("SET_USER",t.body),localStorage.setItem("e23_stplan",t.body),t.router.replace({name:"home"}),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},initTheme:function(e){var t=e.commit,a=!!localStorage.theme&&localStorage.theme,s=window.matchMedia("(prefers-color-scheme: dark)").matches;t("SET_THEME",a||(s?"dark":"light"))}},getters:{getTheme:function(e){return e.theme}},modules:{}}),lt=(a("b0c0"),a("7bb1")),dt=a("3aa8"),ut={install:function(e){e.component("VeeForm",lt["c"]),e.component("VeeField",lt["b"]),e.component("ErrorMessage",lt["a"]),Object(lt["e"])("required",dt["i"]),Object(lt["e"])("tos",dt["i"]),Object(lt["e"])("min",dt["f"]),Object(lt["e"])("max",dt["d"]),Object(lt["e"])("alpha_spaces",dt["a"]),Object(lt["e"])("email",dt["c"]),Object(lt["e"])("min_value",dt["g"]),Object(lt["e"])("max_value",dt["e"]),Object(lt["e"])("password_mismatch",dt["b"]),Object(lt["e"])("excluded",dt["h"]),Object(lt["e"])("country_excluded",dt["h"]),Object(lt["d"])({generateMessage:function(e){var t={required:"The field ".concat(e.field," is required."),min:"The field ".concat(e.field," is too short."),max:"The field ".concat(e.field," is too long."),alpha_spaces:"The field ".concat(e.field," may only contain alphabetic characters and spaces."),email:"The field ".concat(e.field," must contain a valid email address."),min_value:"The field ".concat(e.field," is too low."),max_value:"The field ".concat(e.field," is too high."),excluded:"You are not allowed to use this value for this field ".concat(e.field),password_mismatch:"The password don't match.",country_excluded:"Due to restrictions, we do not accept from this country",tos:"You must accept the Terms of Service"},a=t[e.rule.name]?t[e.rule.name]:"The field ".concat(e.field," is invalid");return a},validateOnBlur:!0,vlidateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}},bt=a("323e"),ft=a.n(bt),ht=function(e){e.beforeEach((function(e,t,a){ft.a.start(),a()})),e.afterEach(ft.a.done)},jt=a("f9d5"),mt=a.n(jt),pt=(a("4413"),a("3b2f")),gt=a.n(pt),Ot={class:"flex items-center justify-center mt-10 space-x-1 text-sm text-gray-700 dark:text-white"},yt=Object(s["h"])("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[Object(s["h"])("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})],-1),vt=Object(s["h"])("div",{class:"text-lg"},"Please wait ...",-1),xt=[yt,vt];function kt(e,t){return Object(s["y"])(),Object(s["g"])("div",Ot,xt)}const wt={},_t=w()(wt,[["render",kt]]);var Ct=_t;a("ba8c"),a("77ed"),a("a5d8"),a("be0f");ht(nt),window.katex=gt.a;var St=Object(s["d"])(M);St.component("loader",Ct),St.use(ut),St.use(it),St.use(nt),St.use(mt.a),St.mount("#app")},"830a":function(e,t,a){e.exports=a.p+"img/acs.1008c701.png"},8761:function(e,t,a){},8934:function(e,t,a){"use strict";a("f537")},"8e21":function(e,t,a){},ba8c:function(e,t,a){},c259:function(e,t,a){"use strict";a("e9c2")},cf05:function(e,t,a){e.exports=a.p+"img/logo.8facd1f1.png"},d6c5:function(e,t,a){"use strict";a("8761")},e3c0:function(e,t,a){},e9c2:function(e,t,a){},f2ae:function(e,t,a){"use strict";a("8e21")},f537:function(e,t,a){}});