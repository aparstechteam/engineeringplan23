(function(e){function t(t){for(var r,s,o=t[0],i=t[1],l=t[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==c[i]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},c={app:0},n=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5060":"5ef21779"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=c[e]=[t,r]}));t.push(a[2]=r);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=s(e);var l=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(d);var a=c[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}c[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/engineeringplan23/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1d59":function(e,t,a){"use strict";a("c469")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=n,e.exports=c,c.id="4678"},"56c8":function(e,t,a){"use strict";a("8053")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),c=(a("b0c0"),a("cf05")),n=a.n(c),s=function(e){return Object(r["A"])("data-v-6fdc5b38"),e=e(),Object(r["y"])(),e},o={class:"min-h-screen bangla"},i={key:1,class:"py-5"},l=s((function(){return Object(r["h"])("img",{src:n.a,class:"h-10 mx-auto"},null,-1)})),d={key:0,class:"font-semibold text-center text-white"};function u(e,t,a,c,n,s){var u,b=Object(r["G"])("navbar"),f=Object(r["G"])("router-view");return Object(r["x"])(),Object(r["g"])("div",o,["Login"!==e.$route.name&&"routine"!==e.$route.name&&"Register"!==e.$route.name&&"restricted"!==e.$route.name?(Object(r["x"])(),Object(r["e"])(b,{key:0})):"Login"!==e.$route.name?(Object(r["x"])(),Object(r["g"])("div",i,[l,null!==(u=e.user)&&void 0!==u&&u.batch?(Object(r["x"])(),Object(r["g"])("p",d,"Batch "+Object(r["J"])(e.user.batch),1)):Object(r["f"])("",!0)])):Object(r["f"])("",!0),Object(r["j"])(f,null,{default:Object(r["P"])((function(e){var t=e.Component;return[Object(r["j"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["P"])((function(){return[(Object(r["x"])(),Object(r["e"])(Object(r["H"])(t)))]})),_:2},1024)]})),_:1})])}var b=a("5530"),f=(a("ac1f"),a("5319"),function(e){return Object(r["A"])("data-v-0e318bcc"),e=e(),Object(r["y"])(),e}),h={class:"py-4 lato"},j={class:"container flex items-center justify-center h-20 md:mx-auto"},m={class:"mx-2"},p=f((function(){return Object(r["h"])("img",{src:n.a,alt:"",class:"h-14"},null,-1)})),g=f((function(){return Object(r["h"])("p",{class:"text-sm font-semibold text-center"}," Study Plan ",-1)}));function O(e,t,a,c,n,s){var o=Object(r["G"])("router-link");return Object(r["x"])(),Object(r["g"])("nav",h,[Object(r["h"])("div",j,[Object(r["h"])("div",m,[Object(r["j"])(o,{to:"/",class:"relative"},{default:Object(r["P"])((function(){return[p,g]})),_:1})])])])}var x=a("5502"),y={data:function(){return{mobileMenu:!1,menuItems:[{text:"Routine",icon:"https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-study-high-school-flatart-icons-flat-flatarticons-1.png",link:"/"},{text:"Profile",icon:"https://img.icons8.com/color/96/000000/user.png",link:"/profile"}]}},methods:{toggleTheme:function(){this.$store.commit("SET_THEME","light"==this.theme?"dark":"light")}},computed:Object(b["a"])(Object(b["a"])({},Object(x["c"])({theme:"getTheme"})),Object(x["e"])({isLoggedIn:"userLoggedIn",user:"user"}))},v=(a("f2ae"),a("6b0d")),w=a.n(v);const k=w()(y,[["render",O],["__scopeId","data-v-0e318bcc"]]);var _=k,C={components:{Navbar:_},beforeMount:function(){this.$store.dispatch("initTheme")},computed:Object(b["a"])({},Object(x["c"])({theme:"getTheme"})),watch:{theme:function(e){"light"===e?document.querySelector("html").classList.remove("dark"):document.querySelector("html").classList.add("dark")}},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath();var e=localStorage.getItem("s25_25ssrb"),t=localStorage.getItem("routines23_24");void 0!=e&&(e=JSON.parse(e),this.$store.commit("SET_USER",e),t?this.$store.commit("SET_ROUTINE",JSON.parse(t)):this.$store.dispatch("authenticate",{userid:e.ttrx,router:this.$router,route:this.$route}),this.$store.commit("toggleAuth"))}};a("56c8");const P=w()(C,[["render",u],["__scopeId","data-v-6fdc5b38"]]);var S=P,M=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),T={class:"pb-10"},E={key:0,class:"mb-5"},D={key:1,class:"container hidden mx-auto md:block"},A={key:2,class:"container mx-auto md:hidden"};function z(e,t,a,c,n,s){var o=Object(r["G"])("selected-chapter"),i=Object(r["G"])("current-challenge"),l=Object(r["G"])("pc-routine"),d=Object(r["G"])("mobile-routine");return Object(r["x"])(),Object(r["g"])("div",T,[n.upcoming?(Object(r["x"])(),Object(r["g"])("div",E,[Object(r["j"])(i,{upcoming:n.upcoming},{default:Object(r["P"])((function(){return[Object(r["j"])(o,{selected:n.upcoming},null,8,["selected"])]})),_:1},8,["upcoming"])])):Object(r["f"])("",!0),n.routines.length>0?(Object(r["x"])(),Object(r["g"])("div",D,[Object(r["j"])(l,{challenges:n.routines,onSelectedExam:s.selectedExam},null,8,["challenges","onSelectedExam"])])):Object(r["f"])("",!0),n.routines.length>0?(Object(r["x"])(),Object(r["g"])("div",A,[Object(r["j"])(d,{exams:n.routines,onSelectedExam:s.selectedExam},null,8,["exams","onSelectedExam"])])):Object(r["f"])("",!0)])}var I=a("1da1"),R=(a("96cf"),a("d81d"),a("4de4"),a("caad"),a("2532"),{status:200,routines:[{id:1,subject:"Mix",chapter:"Orientation Class & Calculator Hacks",class:"Orientation Class & Calculator Hacks",start:"17 September 2023 12:0:00 AM",end:"24 September 2023 12:0:00 AM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-6498534d50ab74ffbf446b40"},{id:2,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Vector 1",start:"25 September 2023 12:0:00 AM",end:"25 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64a2de7315997f69aee119d0"},{id:3,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Vector 2",start:"26 September 2023 12:0:00 AM",end:"26 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64a58a0b711263d043cb04a1"},{id:4,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Vector 3",start:"27 September 2023 12:0:00 AM",end:"27 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64aec98850e612db4e27be19"},{id:5,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Vector 4",start:"28 September 2023 12:0:00 AM",end:"28 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64b2c156acf28065f6f386f3"},{id:6,subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)",class:"Vector 5",start:"29 September 2023 12:0:00 AM",end:"29 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Physics/Paper-1/Chapter-2/Class-64c12e45ca31446bb3148a26"},{id:7,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"ম্যাট্রিক্স ও নির্ণায়ক ১",start:"30 September 2023 12:0:00 AM",end:"30 September 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Math/Paper-1/Chapter-1/Class-64a6d80526afa57017550945"},{id:8,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"ম্যাট্রিক্স ও নির্ণায়ক ২",start:"1 October 2023 12:0:00 AM",end:"1 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Math/Paper-1/Chapter-1/Class-64aad8ce9e141e8be02c4e3b"},{id:9,subject:"Chemistry 1st Paper",chapter:"Chapter 2: গুণগত রসায়ন(Qualitative Chemistry)",class:"গুনগত রসায়ন-১",start:"2 October 2023 12:0:00 AM",end:"2 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64a442d18f89ed50edebb7aa"},{id:10,subject:"Higher Math 1st Paper",chapter:"Chapter 1:  ম্যাট্রিকস ও নির্ণায়ক (Matrix & Determinant)",class:"গুনগত রসায়ন-২",start:"3 October 2023 12:0:00 AM",end:"3 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64a83867642d1c089f7ecb17"},{id:11,subject:"Higher Math 1st Paper",chapter:"Chapter 1:  ম্যাট্রিকস ও নির্ণায়ক (Matrix & Determinant)",class:"গুনগত রসায়ন-3",start:"4 October 2023 12:0:00 AM",end:"4 October 2023 11:59:00 PM",link:"https://engineering23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2/Class-64ad7f68bc3fefcdf5527aa9"}]}),J=(a("9911"),{class:"table mx-auto space-y-6 border-separate table-auto dark:text-white"}),$=Object(r["h"])("thead",{class:"my-2 bg-gray-300 rounded dark:bg-gray-900"},[Object(r["h"])("tr",null,[Object(r["h"])("th",{class:"p-3"},"Subject & Chapter"),Object(r["h"])("th",{class:"p-3"}," Time "),Object(r["h"])("th",{class:"p-3"}," Details ")])],-1),L={class:"p-3"},q={class:"font-semibold"},V={class:"p-3"},F={class:"p-3"},H={class:"flex gap-2 text-xs"},N=["href"],U=["href"],G=["href"];function Y(e,t,a,c,n,s){return Object(r["x"])(),Object(r["g"])("table",J,[$,Object(r["h"])("tbody",null,[(Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["E"])(a.challenges,(function(e,t){return Object(r["x"])(),Object(r["g"])("tr",{key:t,class:"bg-gray-200 rounded-md dark:bg-gray-800"},[Object(r["h"])("td",L,[Object(r["h"])("p",q,Object(r["J"])(e.chapter),1),Object(r["i"])(" "+Object(r["J"])(e.subject),1)]),Object(r["h"])("td",V,Object(r["J"])(c.formattedDate(e.start)),1),Object(r["h"])("td",F,[Object(r["h"])("div",H,[e.link?(Object(r["x"])(),Object(r["g"])("a",{key:0,class:"block w-24 p-1 text-center text-white bg-red-500 rounded-md shadow-lg",href:e.link,target:"_blank"}," View Class ",8,N)):Object(r["f"])("",!0),e.free_class?(Object(r["x"])(),Object(r["g"])("a",{key:1,class:"block w-24 p-1 text-center text-white bg-green-500 rounded-md shadow-lg",href:e.free_class,target:"_blank"}," Free Class ",8,U)):Object(r["f"])("",!0),e.hand_note?(Object(r["x"])(),Object(r["g"])("a",{key:2,class:"block w-24 p-1 text-center text-white bg-yellow-500 rounded-md shadow-lg",href:e.hand_note,target:"_blank"}," Hand Note ",8,G)):Object(r["f"])("",!0)])])])})),128))])])}a("b680");var W=a("c1df"),B=a.n(W),Q=function(e){return B()(e).format("D MMMM YYYY")},K=function(){var e=function(e){return Q(e)},t=function(e){var t=(e/1e3).toFixed(1),a=(e/6e4).toFixed(1),r=(e/36e5).toFixed(1),c=(e/864e5).toFixed(1);return t<60?t+" Sec":a<60?a+" Min":r<24?r+" Hrs":c+" Days"},a=function(e){return Q(e)};return{formattedDate:e,formattedDateC:a,getDuration:t}},X={emits:["selectedExam"],props:{challenges:{type:Array,required:!0}},setup:function(){var e=K(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}}};const Z=w()(X,[["render",Y]]);var ee=Z,te=function(e){return Object(r["A"])("data-v-0be05c5f"),e=e(),Object(r["y"])(),e},ae={key:0,class:"max-w-2xl mx-2 mt-3 text-center border border-white rounded-lg shadow bg-secondary dark:bg-gray-800 dark:text-white md:mx-auto animate__animated animate__zoomIn"},re=te((function(){return Object(r["h"])("h3",{class:"pt-5 my-5 text-2xl font-semibold text-primary ongoing"}," Ongoing Challenge... ",-1)})),ce={class:"mx-2 text-center md:mx-auto md:w-1/2"};function ne(e,t,a,c,n,s){var o=Object(r["G"])("Timer");return Object(r["x"])(),Object(r["g"])("div",null,[a.upcoming?(Object(r["x"])(),Object(r["g"])("div",ae,[re,Object(r["h"])("div",ce,[Object(r["j"])(o,{end:new Date(a.upcoming.end).getTime()},null,8,["end"])]),Object(r["F"])(e.$slots,"default",{},void 0,!0)])):Object(r["f"])("",!0)])}var se=function(e){return Object(r["A"])("data-v-bce0313a"),e=e(),Object(r["y"])(),e},oe={class:"grid grid-cols-4 gap-3"},ie={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},le={class:"text-2xl font-bold"},de=se((function(){return Object(r["h"])("p",null,"days",-1)})),ue={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},be={class:"text-2xl font-bold"},fe=se((function(){return Object(r["h"])("p",null,"hours",-1)})),he={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},je={class:"text-2xl font-bold"},me=se((function(){return Object(r["h"])("p",null,"minute",-1)})),pe={class:"flex flex-col items-center px-5 py-3 text-white border border-gray-200 rounded-lg shadow bg-primary"},ge={class:"text-2xl font-bold"},Oe=se((function(){return Object(r["h"])("p",null,"second",-1)}));function xe(e,t,a,c,n,s){return Object(r["x"])(),Object(r["g"])("div",oe,[Object(r["h"])("div",ie,[Object(r["h"])("h2",le,Object(r["J"])(n.days),1),de]),Object(r["h"])("div",ue,[Object(r["h"])("h2",be,Object(r["J"])(n.hours),1),fe]),Object(r["h"])("div",he,[Object(r["h"])("h2",je,Object(r["J"])(n.minute),1),me]),Object(r["h"])("div",pe,[Object(r["h"])("h2",ge,Object(r["J"])(n.second),1),Oe])])}var ye={name:"timer",props:{end:{required:!0}},data:function(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining:function(){var e=this,t=setInterval((function(){var a=e.end-Date.now();if(a<0)clearInterval(t);else{var r=Math.floor(a/e._days),c=Math.floor(a%e._days/e._hours),n=Math.floor(a%e._hours/e._minutes),s=Math.floor(a%e._minutes/e._seconds);e.second=s<10?"0"+s:s,e.minute=n<10?"0"+n:n,e.hours=c<10?"0"+c:c,e.days=r<10?"0"+r:r}}))}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()}};a("8934");const ve=w()(ye,[["render",xe],["__scopeId","data-v-bce0313a"]]);var we=ve,ke={components:{Timer:we},props:{upcoming:{type:Object,required:!0}}};a("1d59");const _e=w()(ke,[["render",ne],["__scopeId","data-v-0be05c5f"]]);var Ce=_e,Pe={key:0,class:"dark:text-white"},Se={class:"my-3 text-2xl font-semibold"},Me={class:"py-3 -mt-4 text-lg font-medium"},Te={class:"text-lg"},Ee={class:"mt-2"},De={class:"flex justify-center gap-2 my-3 text-sm md:text-sm"},Ae=["href"],ze=["href"],Ie=["href"];function Re(e,t,a,c,n,s){return a.selected?(Object(r["x"])(),Object(r["g"])("div",Pe,[Object(r["h"])("h2",Se,Object(r["J"])(a.selected.chapter),1),Object(r["h"])("h2",Me,Object(r["J"])(a.selected.subject),1),Object(r["h"])("div",Te,[Object(r["h"])("h3",Ee,Object(r["J"])(c.formattedDate(a.selected.start)),1),Object(r["h"])("div",De,[a.selected.link?(Object(r["x"])(),Object(r["g"])("a",{key:0,class:"flex items-center justify-center px-3 py-2 text-white bg-red-500 rounded-md shadow-lg",href:a.selected.link,target:"_blank"}," View Class ",8,Ae)):Object(r["f"])("",!0),a.selected.free_class?(Object(r["x"])(),Object(r["g"])("a",{key:1,class:"flex items-center justify-center px-3 py-2 text-white bg-green-500 rounded-md shadow-lg",href:a.selected.free_class,target:"_blank"}," Free Class ",8,ze)):Object(r["f"])("",!0),a.selected.hand_note?(Object(r["x"])(),Object(r["g"])("a",{key:2,class:"flex items-center justify-center px-3 py-2 text-white bg-yellow-500 rounded-md shadow-lg",href:a.selected.hand_note,target:"_blank"}," Hand Note ",8,Ie)):Object(r["f"])("",!0)])])])):Object(r["f"])("",!0)}a("25f0");var Je={name:"SelectedChapterInfo",props:{selected:{type:Object,required:!0}},setup:function(){var e=K(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}},methods:{setAlert:function(){this.$swal({icon:"warning",title:"Please wait...",text:"Will be available soon"})},upcomingalert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$swal({icon:"warning",title:"Upcomming",text:"Wait till ".concat(e?this.formattedDate(e).toString():"")})},endalert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$swal({icon:"warning",title:"Wait",text:"Will be available after ".concat(e?this.formattedDate(e).toString():"")})}}};const $e=w()(Je,[["render",Re]]);var Le=$e,qe={class:"space-y-2 text-center"},Ve={class:"text-xl font-bold"},Fe={class:"flex justify-center gap-2 text-sm"},He=["href"],Ne=["href"],Ue=["href"];function Ge(e,t,a,c,n,s){return Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["E"])(a.exams,(function(e,t){return Object(r["x"])(),Object(r["g"])("div",{key:t,class:"p-5 mx-2 my-4 space-y-2 border border-gray-400 rounded bg-blue-50"},[Object(r["h"])("div",qe,[Object(r["h"])("p",Ve,Object(r["J"])(e.subject),1),Object(r["h"])("p",null,Object(r["J"])(e.chapter),1),Object(r["h"])("p",null,Object(r["J"])(c.formattedDate(e.start)),1)]),Object(r["h"])("div",Fe,[e.link?(Object(r["x"])(),Object(r["g"])("a",{key:0,class:"flex items-center justify-center px-3 py-2 text-white bg-red-500 rounded-md shadow-lg",href:e.link,target:"_blank"}," View Class ",8,He)):Object(r["f"])("",!0),e.free_class?(Object(r["x"])(),Object(r["g"])("a",{key:1,class:"flex items-center justify-center px-3 py-2 text-white bg-green-500 rounded-md shadow-lg",href:e.free_class,target:"_blank"}," Free Class ",8,Ne)):Object(r["f"])("",!0),e.hand_note?(Object(r["x"])(),Object(r["g"])("a",{key:2,class:"flex items-center justify-center px-3 py-2 text-white bg-yellow-500 rounded-md shadow-lg",href:e.hand_note,target:"_blank"}," Hand Note ",8,Ue)):Object(r["f"])("",!0)])])})),128)}var Ye={emits:["selectedExam"],props:{exams:{type:Array},subject:{default:""}},setup:function(){var e=K(),t=e.formattedDate,a=e.formattedDateC;return{formattedDate:t,formattedDateC:a}}};const We=w()(Ye,[["render",Ge]]);var Be=We,Qe={components:{PcRoutine:ee,CurrentChallenge:Ce,SelectedChapter:Le,MobileRoutine:Be},data:function(){return{loading:!1,all:[],routines:[],selectedChapters:[],selected:null,se:"",upcoming:[]}},methods:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(x["d"])(["toggleModal"])),Object(x["b"])(["authenticate"])),{},{prepareRoutine:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.routines=R.routines.map((function(e){return Object(b["a"])(Object(b["a"])({},e),{},{start:new Date(e.start).getTime(),end:new Date(e.end).getTime()})})),e.all=e.routines,a=e.routines.filter((function(e){return e.end>Date.now()})),e.upcoming=a[0];case 4:case"end":return t.stop()}}),t)})))()},selectedExam:function(e){this.selected=this.routines[e],this.toggleModal()},selectSubject:function(e){this.se=e,this.routines=this.all.filter((function(t){if(t.subject&&t.subject.toLowerCase().includes(e.toLowerCase()))return t}))}}),created:function(){this.prepareRoutine()},computed:Object(b["a"])({},Object(x["e"])({userroutine:function(e){return e.routine},user:function(e){return e.user}}))};a("c259");const Ke=w()(Qe,[["render",z],["__scopeId","data-v-635ab104"]]);var Xe=Ke,Ze=[{path:"/",name:"home",component:Xe,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:function(){return a.e("chunk-2d0e5060").then(a.bind(null,"935e"))}}],et=Object(M["a"])({history:Object(M["b"])("/engineeringplan23/"),routes:Ze});et.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?localStorage.getItem("e23_stplan")?a():a({name:"Register"}):a()}));var tt=et,at=(a("99af"),"https://script.google.com/macros/s/AKfycbw4UWo5uBVe6Fohu-Rw-q63sL_j7cLv32j-5jR-17nc35CwJydxbqkrFf3AQ4SmzSaLxA/exec"),rt=Object(x["a"])({state:{routine:null,options:{},start:0,user:null,theme:"light",userLoggedIn:!1,showModal:!1},mutations:{toggleAuth:function(e){e.userLoggedIn=!e.userLoggedIn},toggleModal:function(e){e.showModal=!e.showModal},SET_OPTIONS:function(e,t){e.options=t},SET_ROUTINE:function(e,t){e.routine=t},SET_START:function(e,t){e.start=t},SET_USER:function(e,t){e.user=t},SET_THEME:function(e,t){e.theme=t,localStorage.theme=t}},actions:{setOptions:function(e,t){var a=e.commit;a("SET_OPTIONS",t.options)},authenticate:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(at,"?ttrx=").concat(t.userid));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},register:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.prev=1,a.next=4,fetch(at,{method:"POST",body:t.body});case 4:r("SET_USER",t.body),localStorage.setItem("e23_stplan",t.body),t.router.replace({name:"home"}),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},initTheme:function(e){var t=e.commit,a=!!localStorage.theme&&localStorage.theme,r=window.matchMedia("(prefers-color-scheme: dark)").matches;t("SET_THEME",a||(r?"dark":"light"))}},getters:{getTheme:function(e){return e.theme}},modules:{}}),ct=a("7bb1"),nt=a("3aa8"),st={install:function(e){e.component("VeeForm",ct["c"]),e.component("VeeField",ct["b"]),e.component("ErrorMessage",ct["a"]),Object(ct["e"])("required",nt["i"]),Object(ct["e"])("tos",nt["i"]),Object(ct["e"])("min",nt["f"]),Object(ct["e"])("max",nt["d"]),Object(ct["e"])("alpha_spaces",nt["a"]),Object(ct["e"])("email",nt["c"]),Object(ct["e"])("min_value",nt["g"]),Object(ct["e"])("max_value",nt["e"]),Object(ct["e"])("password_mismatch",nt["b"]),Object(ct["e"])("excluded",nt["h"]),Object(ct["e"])("country_excluded",nt["h"]),Object(ct["d"])({generateMessage:function(e){var t={required:"The field ".concat(e.field," is required."),min:"The field ".concat(e.field," is too short."),max:"The field ".concat(e.field," is too long."),alpha_spaces:"The field ".concat(e.field," may only contain alphabetic characters and spaces."),email:"The field ".concat(e.field," must contain a valid email address."),min_value:"The field ".concat(e.field," is too low."),max_value:"The field ".concat(e.field," is too high."),excluded:"You are not allowed to use this value for this field ".concat(e.field),password_mismatch:"The password don't match.",country_excluded:"Due to restrictions, we do not accept from this country",tos:"You must accept the Terms of Service"},a=t[e.rule.name]?t[e.rule.name]:"The field ".concat(e.field," is invalid");return a},validateOnBlur:!0,vlidateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}},ot=a("323e"),it=a.n(ot),lt=function(e){e.beforeEach((function(e,t,a){it.a.start(),a()})),e.afterEach(it.a.done)},dt=a("f9d5"),ut=a.n(dt),bt=(a("4413"),a("3b2f")),ft=a.n(bt),ht={class:"flex items-center justify-center mt-10 space-x-1 text-sm text-gray-700 dark:text-white"},jt=Object(r["h"])("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[Object(r["h"])("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})],-1),mt=Object(r["h"])("div",{class:"text-lg"},"Please wait ...",-1),pt=[jt,mt];function gt(e,t){return Object(r["x"])(),Object(r["g"])("div",ht,pt)}const Ot={},xt=w()(Ot,[["render",gt]]);var yt=xt;a("ba8c"),a("77ed"),a("a5d8"),a("be0f");lt(tt),window.katex=ft.a;var vt=Object(r["d"])(S);vt.component("loader",yt),vt.use(st),vt.use(rt),vt.use(tt),vt.use(ut.a),vt.mount("#app")},8053:function(e,t,a){},8934:function(e,t,a){"use strict";a("f537")},"8e21":function(e,t,a){},ba8c:function(e,t,a){},c259:function(e,t,a){"use strict";a("e9c2")},c469:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.8facd1f1.png"},e9c2:function(e,t,a){},f2ae:function(e,t,a){"use strict";a("8e21")},f537:function(e,t,a){}});