(function(t){function e(e){for(var c,i,s=e[0],o=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},a={app:0},r=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09e6":function(t,e,n){},"118f":function(t,e,n){"use strict";n("1d84")},"1c9c":function(t,e,n){"use strict";n("533c")},"1d84":function(t,e,n){},"533c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,a,r,i){var s=Object(c["n"])("CalcPeriodPotentialDanger");return Object(c["j"])(),Object(c["c"])(s,{url:t.url},null,8,["url"])}var r={class:"calc"},i={class:"right"};function s(t,e,n,a,s,o){var u=Object(c["n"])("List"),l=Object(c["n"])("Setup"),p=Object(c["n"])("Result");return Object(c["j"])(),Object(c["e"])("div",r,[Object(c["h"])(u,{list:o.filteredList,onAddItem:o.addItem},null,8,["list","onAddItem"]),Object(c["f"])("div",i,[Object(c["h"])(l,{percentOk:o.percentOk,massOk:o.massOk,countOk:o.countOk,rnType:s.rnType,onCalculate:o.calculate,ref:"setup",onRnTypeChange:o.rnTypeChangeHandler},null,8,["percentOk","massOk","countOk","rnType","onCalculate","onRnTypeChange"]),Object(c["h"])(p,{active:s.active,percentOk:o.percentOk,result:s.result,rnType:s.rnType,onRemoveItem:o.removeItem,onPercentInput:o.percentInput,onMassInput:o.massInput,onMassUnitChange:o.massUnitChange},null,8,["active","percentOk","result","rnType","onRemoveItem","onPercentInput","onMassInput","onMassUnitChange"])])])}n("fb6a"),n("d81d"),n("4de4"),n("caad"),n("2532"),n("a9e3"),n("b680"),n("159b"),n("a434"),n("99af"),n("a15b"),n("d3b7");var o={class:"list calc-section"},u={class:"search-input-container"},l={class:"search-results"},p=["onClick"];function f(t,e,n,a,r,i){return Object(c["j"])(),Object(c["e"])("div",o,[Object(c["f"])("div",u,[Object(c["r"])(Object(c["f"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.searchText=t})},null,512),[[c["q"],r.searchText]])]),Object(c["f"])("div",l,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(i.searchResults,(function(t){return Object(c["j"])(),Object(c["e"])("div",{class:"list-item",key:"list_item_"+t.Name_RN+t.ID,onClick:function(e){return i.listItemClickHandler(t)}},[Object(c["f"])("span",null,Object(c["o"])(t.Name_RN),1),Object(c["f"])("span",null,Object(c["o"])(t.Name_RN_Lat),1)],8,p)})),128))])])}n("4d63"),n("ac1f"),n("25f0");var d={name:"List",props:{list:Array},data:function(){return{searchText:""}},computed:{searchResults:function(){var t=new RegExp(this.searchText,"i");return this.list.filter((function(e){return t.test(e.Name_RN)||t.test(e.Kod_RN)}))}},methods:{listItemClickHandler:function(t){this.$emit("add-item",t)}}},h=(n("6a0a"),n("6b0d")),b=n.n(h);const v=b()(d,[["render",f],["__scopeId","data-v-b3cbe58a"]]);var O=v,m=function(t){return Object(c["l"])("data-v-0b204896"),t=t(),Object(c["k"])(),t},j={class:"setup calc-section"},g={class:"setup-col-2"},_=m((function(){return Object(c["f"])("span",{class:"title"},"Состав",-1)})),k={class:"agr-state-buttons-container"},y=["value"],T={class:"center"},C=m((function(){return Object(c["f"])("span",{class:"title"},"Агрегатное состояние",-1)})),I={class:"agr-state-buttons-container"},P=["value"],R={class:"title"},S=m((function(){return Object(c["f"])("option",null,"Бк",-1)})),N=m((function(){return Object(c["f"])("option",null,"кБк",-1)})),A=m((function(){return Object(c["f"])("option",null,"МБк",-1)})),U=m((function(){return Object(c["f"])("option",null,"ГБк",-1)})),w=[S,N,A,U];function H(t,e,n,a,r,i){return Object(c["j"])(),Object(c["e"])("div",j,[Object(c["f"])("div",g,[Object(c["f"])("div",{class:Object(c["i"])(["center",{shake:r.shakeType}])},[_,Object(c["f"])("div",k,[(Object(c["j"])(),Object(c["e"])(c["a"],null,Object(c["m"])(["Мононуклидный","Полинуклидный"],(function(t){return Object(c["f"])("button",{value:t,class:Object(c["i"])(["agr-state-button",{pressed:n.rnType==t}]),key:"rnTypeStateButton_"+t,onClick:e[0]||(e[0]=function(){return i.rnTypeStateButtonClickHandler&&i.rnTypeStateButtonClickHandler.apply(i,arguments)})},Object(c["o"])(t),11,y)})),64))])],2),Object(c["f"])("div",T,[C,Object(c["f"])("div",I,[(Object(c["j"])(),Object(c["e"])(c["a"],null,Object(c["m"])(["Твердое","Жидкое"],(function(t){return Object(c["f"])("button",{value:t,class:Object(c["i"])(["agr-state-button",{pressed:r.agrState==t}]),key:"agrStateButton_"+t,onClick:e[1]||(e[1]=function(){return i.agrStateButtonClickHandler&&i.agrStateButtonClickHandler.apply(i,arguments)})},Object(c["o"])(t),11,P)})),64))])])]),Object(c["f"])("span",R,Object(c["o"])(("Полинуклидный"==n.rnType?"Суммарная а":"А")+"ктивность"),1),Object(c["r"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.activity=t})},null,512),[[c["q"],r.activity]]),Object(c["r"])(Object(c["f"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return r.aFormat=t})},w,512),[[c["p"],r.aFormat]]),Object(c["f"])("button",{class:Object(c["i"])(["calculate-btn",{disabled:!i.allOk||!n.countOk}]),onClick:e[4]||(e[4]=function(){return i.calculateClickHandler&&i.calculateClickHandler.apply(i,arguments)})}," Рассчитать ",2)])}var M={name:"Setup",props:{percentOk:Boolean,rnType:String,massOk:Boolean,countOk:Boolean},data:function(){return{agrState:"Твердое",activity:null,aFormat:"Бк",shakeType:!1}},computed:{allOk:function(){return this.percentOk&&this.setupOk&&this.massOk},aBk:function(){if(!this.activity)return 0;var t;switch(this.aFormat){case"Бк":return this.activity;case"кБк":t=1e3;break;case"МБк":t=1e6;break;case"ГБк":t=1e9;break}return this.activity*t},setupOk:function(){return this.activity>0}},methods:{agrStateButtonClickHandler:function(t){this.agrState!=t.target.value&&(this.agrState=t.target.value)},rnTypeStateButtonClickHandler:function(t){this.rnType!=t.target.value&&this.$emit("rnTypeChange",t.target.value)},calculateClickHandler:function(){this.allOk&&this.countOk?this.$emit("calculate",this.aBk):this.allOk&&!this.countOk&&this.shakeTypeSelector()},shakeTypeSelector:function(){var t=this;this.shakeType=!0,setTimeout((function(){t.shakeType=!1}),1e3)}}};n("1c9c");const B=b()(M,[["render",H],["__scopeId","data-v-0b204896"]]);var x=B,E=function(t){return Object(c["l"])("data-v-f24aa750"),t=t(),Object(c["k"])(),t},G={class:"result calc-section"},$={key:0,class:"result-container"},F=Object(c["g"])(" Период потенциальной опасности РАО: "),L={class:"calc-result"},z={class:"stats"},D={class:"active-stat"},V=Object(c["g"])("Наименование: "),q={class:"name"},J={class:"active-stat"},K={class:"active-stat"},X={key:0,class:"active-input-container"},Q=E((function(){return Object(c["f"])("span",null,"Доля активности, %",-1)})),W=["value","onInput"],Y={class:"active-input-container"},Z=E((function(){return Object(c["f"])("span",null,"Масса",-1)})),tt={class:"mass-input-container"},et=["value","onInput"],nt=["onUpdate:modelValue","onChange"],ct=E((function(){return Object(c["f"])("option",null,"г",-1)})),at=E((function(){return Object(c["f"])("option",null,"кг",-1)})),rt=E((function(){return Object(c["f"])("option",null,"т",-1)})),it=[ct,at,rt],st=["onClick"];function ot(t,e,n,a,r,i){return Object(c["j"])(),Object(c["e"])("div",G,[n.result?(Object(c["j"])(),Object(c["e"])("div",$,[F,Object(c["f"])("div",L,Object(c["o"])(n.result),1)])):Object(c["d"])("",!0),(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(n.active,(function(t,e){return Object(c["j"])(),Object(c["e"])("div",{class:"active-item",key:"active_item_"+t.ID},[Object(c["f"])("div",z,[Object(c["f"])("span",D,[V,Object(c["f"])("span",q,Object(c["o"])(t.item.Name_RN),1)]),Object(c["f"])("span",J,Object(c["o"])("Обозначение: "+t.item.Name_RN_Lat),1),Object(c["f"])("span",K,Object(c["o"])("Период полураспада: "+t.item.Period_p_r+" "+t.item.Edinica_izmer_p_r),1)]),"Полинуклидный"==n.rnType?(Object(c["j"])(),Object(c["e"])("div",X,[Q,Object(c["f"])("input",{class:Object(c["i"])(["active-input",{error:!n.percentOk}]),type:"number",value:Number(t.percent.toFixed(2)),onInput:function(t){return i.percentInputHandler(t,e)}},null,42,W)])):Object(c["d"])("",!0),Object(c["f"])("div",Y,[Z,Object(c["f"])("div",tt,[Object(c["f"])("input",{class:Object(c["i"])(["active-input",{error:t.rawMass<=0}]),type:"number",value:Number(t.rawMass),onInput:function(t){return i.massInputHandler(t,e)}},null,42,et),Object(c["r"])(Object(c["f"])("select",{class:"mass-unit-select","onUpdate:modelValue":function(e){return t["massUnit"]=e},onChange:function(t){return i.massUnitChangeHandler(t,e)}},it,40,nt),[[c["p"],t["massUnit"]]])])]),Object(c["f"])("button",{class:"remove-btn",onClick:function(t){return i.removeClickHandler(e)}},"X",8,st)])})),128))])}var ut={name:"Result",props:{active:Array,percentOk:Boolean,result:String,rnType:String},data:function(){return{}},methods:{removeClickHandler:function(t){this.$emit("remove-item",t)},percentInputHandler:function(t,e){var n=t.target.value;this.$emit("percent-input",e,n)},massInputHandler:function(t,e){var n=t.target.value;this.$emit("mass-input",e,n)},massUnitChangeHandler:function(t,e){var n=t.target.value;this.$emit("mass-unit-change",e,n)}}};n("e52e");const lt=b()(ut,[["render",ot],["__scopeId","data-v-f24aa750"]]);var pt=lt,ft=function(t,e){var n;switch(e.slice(0,3)){case"мин":n=1;break;case"час":n=60;break;case"сут":n=1440;break;case"лет":n=525948.768;break;default:return 0}return t*n/525948.768},dt={name:"CalcPeriodPotentialDanger",components:{List:O,Setup:x,Result:pt},props:{url:String},data:function(){return{rnType:"Мононуклидный",list:[],active:[],result:""}},computed:{filteredList:function(){var t=this.active.map((function(t){return t.item.ID}));return this.list.filter((function(e){return!t.includes(e.ID)}))},totalPercent:function(){var t=this.active.reduce((function(t,e){return t+e.percent}),0);return t=Number(t.toFixed(12)),t},percentOk:function(){return 0!=this.active.length&&100==this.totalPercent},massOk:function(){return this.active.every((function(t){return t.rawMass>0}))},countOk:function(){return!("Полинуклидный"==this.rnType&&1==this.active.length)}},methods:{addItem:function(t){var e,n=this;"Мононуклидный"==this.rnType&&this.active.length>0?this.$refs.setup.shakeTypeSelector():(100==this.totalPercent?this.active.filter((function(t){return t.percent==100/n.active.length})).length==this.active.length?(e=100/(this.active.length+1),this.active.forEach((function(t){return t.percent=e}))):e=0:e=100-this.totalPercent,this.active.push({item:t,percent:e,rawMass:0,massUnit:"г",get massG(){var t={"г":1,"кг":1e3,"т":1e6};return this.rawMass*t[this.massUnit]}}),this.resetCalculations())},removeItem:function(t){var e=this.active.splice(t,1)[0].percent;this.active.length&&(1==this.active.length?this.active[0].percent=100:this.active[0].percent+=e),this.resetCalculations()},percentInput:function(t,e){e=parseFloat(e)||0,e||(this.active[t].percent=1),this.active[t].percent=e,this.resetCalculations()},massInput:function(t,e){e=parseFloat(e)||0,e||(this.active[t].rawMass=1),this.active[t].rawMass=e,this.resetCalculations()},massUnitChange:function(t,e){this.active[t].massUnit=e,this.resetCalculations()},rnTypeChangeHandler:function(t){this.rnType=t,"Мононуклидный"==t&&this.active.length>1&&(this.active=[this.active[0]],this.active[0].percent=100)},calculate:function(t){var e=this.$refs.setup.agrState,n=this.rnType;if("Мононуклидный"==n){var c=this.active[0],a=c.massG,r=t/a,i="Твердое"==e?c.item.UdA_TRO:.1*c.item.UdA_GRO,s=ft(c.item.Period_p_r,c.item.Edinica_izmer_p_r),o=1.144*s*Math.log(r/i);this.result=o+" лет",console.log("------"),console.log("формула: t = 1,144 * T * ln (a0 / a)"),console.log("a0 = aBk / massG = ".concat(t," / ").concat(a," = ").concat(r)),console.log("a = ".concat(i)),console.log("T = ".concat(c.item.Period_p_r," ").concat(c.item.Edinica_izmer_p_r," = ").concat(s," лет")),console.log("t = 1,144 * ".concat(s," * ln (").concat(r," / ").concat(i,")")),console.log("результат = ".concat(this.result))}else{var u=function(e,n){var c=t/100*n.percent;return c*Math.pow(2,-e)/ft(n.item.Period_p_r,n.item.Edinica_izmer_p_r)/n.massG};this.active.forEach((function(t){t.udA100=u(100,t)})),this.active.forEach((function(t){t.udA500=u(500,t)}));var l="Твердое"==e?"UdA_TRO":"UdA_GRO",p=this.active.map((function(t){return t.udA100/t.item[l]})).reduce((function(t,e){return t+e})),f=this.active.map((function(t){return t.udA500/t.item[l]})).reduce((function(t,e){return t+e})),d="Твердое"==e?1:.1;p>d?this.result="менее 100 лет":p<d&&f>d?this.result="от 100 до 500 лет":f<d&&(this.result="более 500 лет"),console.log("------"),console.log("удельные активности через 100 лет:"),console.log("формула: (a0 * 2 ^ -100) / Period_p_r / mass"),console.log(this.active.map((function(e){return e.item.Name_RN+" = ("+t/100*e.percent+" * 2 ^ -100) / "+ft(e.item.Period_p_r,e.item.Edinica_izmer_p_r)+" / "+e.massG+" = "+e.udA100})).join("\n")),console.log("удельные активности через 500 лет:"),console.log("формула: (a0 * 2 ^ -500) / Period_p_r / mass"),console.log(this.active.map((function(e){return e.item.Name_RN+" = ("+t/100*e.percent+" * 2 ^ -500) / "+ft(e.item.Period_p_r,e.item.Edinica_izmer_p_r)+" / "+e.massG+" = "+e.udA500})).join("\n")),console.log("сумма отношений удельных активностей через 100 лет к значениям из справочника"),console.log("формула: E ( udA100 / udA_json )"),console.log(this.active.map((function(t){return" ( "+t.udA100+" / "+t.item[l]+" ) "})).join("+")+" = "+p),console.log("сумма отношений удельных активностей через 500 лет к значениям из справочника"),console.log("формула: E ( udA500 / udA_json )"),console.log(this.active.map((function(t){return" ( "+t.udA500+" / "+t.item[l]+" ) "})).join("+")+" = "+f),p>d?(console.log("(сумма через 100 лет) ".concat(p," > ").concat(d)),console.log("=> результат: менее 100 лет")):p<d&&f>d?(console.log("(сумма через 100 лет) ".concat(p," < ").concat(d)),console.log("(сумма через 500 лет) ".concat(f," > ").concat(d)),console.log("=> результат: от 100 до 500 лет")):f<d&&(console.log("(сумма через 500 лет) ".concat(f," < ").concat(d)),console.log("=> результат: более 500 лет"))}},resetCalculations:function(){this.result=""}},created:function(){var t=this;fetch(this.url).then((function(t){return t.json()})).then((function(e){t.list=e.filter((function(t){return t.Name_RN&&t.Kod_RN&&t.Period_p_r&&t.Name_RN_Lat&&t.Edinica_izmer_p_r&&t.UdA_TRO&&t.UdA_GRO}))}))}};n("118f");const ht=b()(dt,[["render",s],["__scopeId","data-v-0be37b2e"]]);var bt=ht,vt={name:"App",components:{CalcPeriodPotentialDanger:bt},created:function(){this.url="./rn.json"}};n("6bc1");const Ot=b()(vt,[["render",a]]);var mt=Ot;Object(c["b"])(mt).mount("#app")},"6a0a":function(t,e,n){"use strict";n("e1ee")},"6bc1":function(t,e,n){"use strict";n("09e6")},"9f92":function(t,e,n){},e1ee:function(t,e,n){},e52e:function(t,e,n){"use strict";n("9f92")}});
//# sourceMappingURL=app.38bb71a4.js.map