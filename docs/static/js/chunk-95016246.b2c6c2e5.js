(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95016246"],{"037f":function(e,t,n){"use strict";var r=n("a404"),a=n.n(r);n.d(t,"default",(function(){return a.a}))},"18d5":function(e,t,n){e.exports=n.p+"static/img/user.1ad76388.jpg"},"293a":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=n("47e2"),s=["src"],c={name:"Message",props:{from:{type:String,default:"bot"},messages:{type:Array,required:!0}},setup:function(e){var t=Object(a["b"])(),c=t.t;return function(t,a){return Object(r["v"])(),Object(r["f"])("div",{class:Object(r["p"])(t.$style.container)},[Object(r["g"])("div",{class:Object(r["p"])(t.$style.left)},[Object(r["g"])("img",{class:Object(r["p"])(t.$style.img),src:n("710a")("./".concat(e.from,".jpg"))},null,10,s)],2),Object(r["g"])("div",{class:Object(r["p"])(t.$style.right)},[Object(r["g"])("div",null,Object(r["C"])(Object(r["D"])(c)("".concat(e.from,"_name"))),1),(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(e.messages,(function(e,n){return Object(r["v"])(),Object(r["f"])("div",{class:Object(r["p"])(t.$style.message),key:n},Object(r["C"])(e),3)})),128))],2)],2)}}},u=n("437f"),i=n("6b0d"),o=n.n(i);const l={};l["$style"]=u["default"];const p=o()(c,[["__cssModules",l]]);var b=p,f={name:"ChatBox",emits:["user-message"],setup:function(e,t){var n=t.expose,s=t.emit,c=Object(a["b"])(),u=c.t,i=Object(r["y"])(!1),o=function(){i.value=!0},l=Object(r["x"])([]),p=Object(r["y"])(null),f=function(e,t){l[0]&&l[0].from===e&&!i.value?l[0].message.push(t):(l.unshift({from:e,message:[t]}),i.value&&(i.value=!1)),p.value&&p.value.scrollTo(0,p.value.scrollHeight)},h=Object(r["y"])(!1),v=function(e){h.value=e},j=Object(r["y"])(null),O=function(){j.value&&(s("user-message",j.value.value),j.value.value="")};return n({newMessage:f,markWriting:v,markSection:o}),function(e,t){return Object(r["v"])(),Object(r["f"])("div",{class:Object(r["p"])(e.$style.container)},[Object(r["g"])("div",{ref_key:"messageEl",ref:p,class:Object(r["p"])(e.$style.message)},[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(l,(function(e,t){return Object(r["v"])(),Object(r["e"])(b,{key:t,from:e.from,messages:e.message},null,8,["from","messages"])})),128))],2),Object(r["g"])("div",{class:Object(r["p"])(e.$style.controls)},[Object(r["g"])("span",{class:Object(r["p"])(e.$style.writing),style:Object(r["q"])({visibility:h.value?"visible":"hidden"})},Object(r["C"])(Object(r["D"])(u)("bot_is_writing")),7),Object(r["g"])("input",{ref_key:"input",ref:j,class:Object(r["p"])(e.$style.input),onKeydown:t[0]||(t[0]=Object(r["H"])((function(e){return O()}),["enter"]))},null,34),Object(r["g"])("button",{class:Object(r["p"])(e.$style.btn),onClick:t[1]||(t[1]=function(e){return O()})},"送出",2)],2)],2)}}},h=n("037f");const v={};v["$style"]=h["default"];const j=o()(f,[["__cssModules",v]]);var O=j,g=n("c7eb"),d=n("1da1"),k=n("d4ec"),y=n("bee2"),m=n("ade3"),w=(n("99af"),n("d3b7"),n("9225"));n("159b"),n("a15b"),n("4de4"),n("d9e2"),n("ac1f"),n("5319");function x(e,t){for(var n=["-","-","-","-","-"],r=0,a=0,s=0;s<=e.length-1;s++){var c=e.indexOf(t[s]);-1!==c&&(n[c]="B",a++)}for(var u=0;u<=e.length-1;u++)e[u]===t[u]&&(n[u]="A",r++,a--);return{a:r,b:a,pattern:n.join("")}}var _=function(){function e(t){Object(k["a"])(this,e),this.n=t,this.pool=[],this.initPool(),this.history=[]}return Object(y["a"])(e,[{key:"initPool",value:function(){var e=this,t=function t(n,r,a){1===n?r.forEach((function(t){e.pool.push(a.concat(t).join(""))})):r.forEach((function(e){t(n-1,r.filter((function(t){return t!==e})),a.concat(e))}))};t(this.n,[0,1,2,3,4,5,6,7,8,9],[])}},{key:"guess",value:function(){if(0===this.pool.length)throw new Error("pool_empty");var e=this.pool[Math.floor(Math.random()*this.pool.length)];return this.history.push(e),e}},{key:"applyAB",value:function(e){for(var t=e.a,n=e.b,r=[],a=0;a<=this.pool.length-1;a++){var s=x(this.history[this.history.length-1],this.pool[a]);s.a===t&&s.b===n&&r.push(this.pool[a])}this.pool=r,console.log({poolLength:this.pool.length})}},{key:"generateShare",value:function(){var e=this,t="";return this.history.forEach((function(n){var r=x(n,e.history[e.history.length-1]),a=r.pattern,s="";s=a.replace(/-/g,"⬜"),s=s.replace(/B/g,"🟨"),s=s.replace(/A/g,"🟩"),t+="".concat(s,"\n")})),t}}]),e}(),S=(n("fb6a"),function(){function e(t){Object(k["a"])(this,e),this.n=t;for(var n=[],r=0;r<=9;r++)n.push("".concat(r));for(var a=9;a>=0;a-=1){var s=Math.floor(Math.random()*(a+1)),c=[n[s],n[a]];n[a]=c[0],n[s]=c[1]}this.ans=n.slice(0,t).join(""),this.history=[]}return Object(y["a"])(e,[{key:"onGuess",value:function(e){var t=x(e,this.ans),n=t.a,r=t.b,a=t.pattern;return this.history.push(a),{a:n,b:r}}},{key:"generateShare",value:function(){var e="";return this.history.forEach((function(t){var n="";n=t.replace(/-/g,"⬜"),n=n.replace(/B/g,"🟨"),n=n.replace(/A/g,"🟩"),e+="".concat(n,"\n")})),e}}]),e}()),A=function(){function e(){Object(k["a"])(this,e)}return Object(y["a"])(e,null,[{key:"int",value:function(){return function(e){return parseInt(e)}}},{key:"cut",value:function(e){return function(t){return t.substring(0,e)}}},{key:"ab",value:function(){return function(e){return{a:parseInt(e[0]),b:parseInt(e[2])}}}}]),e}(),B=(n("00b4"),function(){function e(){Object(k["a"])(this,e)}return Object(y["a"])(e,null,[{key:"range",value:function(e,t){return function(n){var r=parseInt(n);return!isNaN(r)&&r>=e&&r<=t}}},{key:"nAnBAnswer",value:function(e,t){return function(n){var r=n.substring(0,e);return t?/^\d+$/.test(r):/^\d+$/.test(r)&&!/(.).*\1/.test(r)}}},{key:"nAnBab",value:function(e){return function(t){var n={a:parseInt(t[0]),b:parseInt(t[2])};return!isNaN(n.a)&&!isNaN(n.b)&&n.a+n.b<=e}}}]),e}()),M=w["a"].global.t,I=function(){function e(t){var n=this;Object(k["a"])(this,e),Object(m["a"])(this,"echoStep",Object(d["a"])(Object(g["a"])().mark((function e(){var t;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.echoFirst){e.next=4;break}return e.next=3,n.speak(M("echo_hello"));case 3:n.echoFirst=!1;case 4:return e.next=6,n.read();case 6:return t=e.sent,e.next=9,n.speak(t);case 9:n.run(n.echoStep);case 10:case"end":return e.stop()}}),e)})))),Object(m["a"])(this,"menuStep",Object(d["a"])(Object(g["a"])().mark((function e(){var t;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.speakRange("menu_intro",4);case 2:return e.next=4,n.read(A.int(),B.range(1,3));case 4:t=e.sent,e.t0=t,e.next=1===e.t0?8:2===e.t0?10:3===e.t0?12:13;break;case 8:return n.run(n.nAnBGuesserStep),e.abrupt("break",13);case 10:return n.run(n.nAnBQuestionerStep),e.abrupt("break",13);case 12:n.run(n.tutorialStep);case 13:case"end":return e.stop()}}),e)})))),Object(m["a"])(this,"nAnBGuesserStep",Object(d["a"])(Object(g["a"])().mark((function e(){var t,r,a,s;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=5,e.next=3,n.speak(M("nanb_guesser_intro",{count:t}));case 3:r=new S(t),console.log({ans:r.ans});case 5:return e.next=7,n.read(A.cut(t),B.nAnBAnswer(t,!1));case 7:return s=e.sent,a=r.onGuess(s),e.next=11,n.speak("".concat(a.a,"A").concat(a.b,"B"));case 11:if(a.a!==t){e.next=5;break}case 12:return e.next=14,n.speak(M("you_win"));case 14:return e.prev=14,e.next=17,navigator.clipboard.writeText(r.generateShare());case 17:return e.next=19,n.speak(M("saved_to_clipboard"));case 19:e.next=26;break;case 21:return e.prev=21,e.t0=e["catch"](14),console.log(e.t0),e.next=26,n.speak(M("unsaved_to_clipboard"));case 26:n.run(n.menuStep);case 27:case"end":return e.stop()}}),e,null,[[14,21]])})))),Object(m["a"])(this,"nAnBQuestionerStep",Object(d["a"])(Object(g["a"])().mark((function e(){var t,r,a,s;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=5,r=new _(t),e.prev=2;case 3:return s=r.guess(),e.next=6,n.speak(M("nanb_questioner_guess",{guess:s}));case 6:return e.next=8,n.read(A.ab(),B.nAnBab(t));case 8:a=e.sent,r.applyAB(a);case 10:if(a.a!==t){e.next=3;break}case 11:return e.next=13,n.speak(M("i_win"));case 13:return e.prev=13,e.next=16,navigator.clipboard.writeText(r.generateShare());case 16:return e.next=18,n.speak(M("saved_to_clipboard"));case 18:e.next=25;break;case 20:return e.prev=20,e.t0=e["catch"](13),console.log(e.t0),e.next=25,n.speak(M("unsaved_to_clipboard"));case 25:e.next=35;break;case 27:if(e.prev=27,e.t1=e["catch"](2),"pool_empty"!==e.t1.message){e.next=34;break}return e.next=32,n.speak(M("nanb_questioner_pool_empty"));case 32:e.next=35;break;case 34:throw e.t1;case 35:n.run(n.menuStep);case 36:case"end":return e.stop()}}),e,null,[[2,27],[13,20]])})))),Object(m["a"])(this,"tutorialStep",Object(d["a"])(Object(g["a"])().mark((function e(){return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.speakRange("tutorial",7);case 2:n.run(n.menuStep);case 3:case"end":return e.stop()}}),e)})))),this.chatInstance=t,this.inputParser=function(e){return e},this.inputValidator=function(){return!0},this.readResolver=function(){},this.wrongCount=0,this.echoFirst=!0,this.run(this.menuStep)}return Object(y["a"])(e,[{key:"speak",value:function(){var t=Object(d["a"])(Object(g["a"])().mark((function t(n){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.wait(400);case 2:return this.chatInstance.markWriting(!0),t.next=5,e.wait(1500);case 5:this.chatInstance.newMessage("bot",n),this.chatInstance.markWriting(!1);case 7:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()},{key:"speakRange",value:function(){var e=Object(d["a"])(Object(g["a"])().mark((function e(t,n){var r;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<=n)){e.next=7;break}return e.next=4,this.speak(M("".concat(t,"_").concat(r)));case 4:r++,e.next=1;break;case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"read",value:function(e,t){var n=this;return new Promise((function(r){n.inputParser=null!==e&&void 0!==e?e:function(e){return e},n.inputValidator=null!==t&&void 0!==t?t:function(){return!0},n.readResolver=r}))}},{key:"input",value:function(e){if(this.chatInstance.newMessage("user",e),!(this.wrongCount>=5))if(this.inputValidator(e)){var t=this.inputParser(e);this.readResolver(t),this.readResolver=function(){}}else this.speak(M("input_validate_failed")),this.wrongCount++,this.wrongCount>=5&&(this.speak(M("leave")),this.readResolver=function(){})}},{key:"run",value:function(){var e=Object(d["a"])(Object(g["a"])().mark((function e(t){return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:this.chatInstance.markSection();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}],[{key:"wait",value:function(e){return new Promise((function(t){setTimeout(t,e)}))}}]),e}();function $(e){return new I(e)}var C={name:"Chat",setup:function(e){var t=Object(r["y"])(null),n=Object(r["y"])(null);return Object(r["t"])((function(){n.value=$(t.value)})),function(e,a){return Object(r["G"])((Object(r["v"])(),Object(r["e"])(O,{ref_key:"chat",ref:t,onUserMessage:a[0]||(a[0]=function(e){return Object(r["D"])(n).input(e)})},null,512)),[[r["E"],Object(r["D"])(n)]])}}};const E=C;t["default"]=E},"437f":function(e,t,n){"use strict";var r=n("7086"),a=n.n(r);n.d(t,"default",(function(){return a.a}))},7086:function(e,t,n){e.exports={container:"_3911bEkh",left:"_2-tWAnw-",right:"MrIxSjHD",message:"_3M5B-_qB",img:"n4820IVp"}},"710a":function(e,t,n){var r={"./bot.jpg":"9780","./user.jpg":"18d5"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="710a"},9780:function(e,t,n){e.exports=n.p+"static/img/bot.31c65887.jpg"},a404:function(e,t,n){e.exports={container:"_2oWvMXBm",message:"_17E9xSel",controls:"_3UGpGxY5",writing:"_8OtNO1pn",input:"_1MfgGU6r",btn:"_3nHIodv-"}}}]);