!function(t){function e(s){if(o[s])return o[s].exports;var n=o[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,s){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/static/",e(e.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){"use strict";var s=document.querySelectorAll(".drop-list__list"),n=document.querySelectorAll(".drop-list__list-second"),i=document.querySelectorAll(".drop-list__input"),l=document.querySelectorAll(".radio__block"),r={};r.selects=[],r.inputs=[],r.radioBlocks=[],r.lists=[],Array.from(s,function(t,e){r.selects.push({}),r.selects[""+e].id=t.id,r.selects[""+e].selectId=t.selectId,r.selects[""+e].selectType=!1,r.selects[""+e].selectName=t.selectName,r.selects[""+e].formID=t.form.id,r.selects[""+e].name=t.name,r.selects[""+e].options=[],Array.from(t.options,function(t,o){r.selects[""+e].options.push({}),r.selects[""+e].options[""+o].value=t.value,r.selects[""+e].options[""+o].text=t.text,r.selects[""+e].options[""+o].selected=t.selected})}),Array.from(i,function(t,e){r.inputs.push({}),r.inputs[""+e].id=t.id,r.inputs[""+e].name=t.name,r.inputs[""+e].placeholder=t.placeholder,r.inputs[""+e].type=t.type}),Array.from(n,function(t,e){r.lists.push({}),r.lists[""+e].id=t.id,r.lists[""+e].name=t.name,r.lists[""+e].selectType=!0,r.lists[""+e].options=[],Array.from(t.options,function(t,o){r.lists[""+e].options.push({}),r.lists[""+e].options[""+o].value=t.value,r.lists[""+e].options[""+o].text=t.text})}),Array.from(l,function(t,e){r.radioBlocks.push({}),r.radioBlocks[""+e].id=t.id,r.radioBlocks[""+e].buttons=[];var o=t.querySelectorAll(".drop-list__radio");Array.from(o,function(t,o){console.log(t),r.radioBlocks[""+e].buttons.push({}),r.radioBlocks[""+e].buttons[""+o].id=t.id,r.radioBlocks[""+e].buttons[""+o].type=t.type})}),console.log(r);var c=function(t){return!0===t?"checkbox":"radio"};console.log(c());var u=function(){return Array.from(r.selects).map(function(t,e){return a(e)})},a=function(t){return'<div class="block">\n\t\t\t'+p(t)+"\n\t\t\t"+f(t)+"\n\t\t\t"+d(t)+"\n\t\t</div>"},p=function(t){var e=r.inputs[t];return'<input class="drop-list__input" id="'+e.id+'" type="'+e.type+'" name="'+e.name+'" placeholder="'+e.placeholder+'">'},d=function(t){var e=r.radioBlocks[""+t].buttons[""+t];return'<input class="radio__input" id="'+e.id+'" type="'+e.type+'">\n\t\t<input class="radio__input" id="'+e.id+'" type="'+e.type+'">\n\t\t<input class="radio__input" id="'+e.id+'" type="'+e.type+'">'},f=function(t){return'<ul class="drop-list__list no-js">\n\t\t\t'+_(r.selects[t].options).join("")+"\n\t\t</ul>"};console.log(c());var _=function(t){return t.map(function(t){return'<li class="drop-list__item">\n\t\t\t\t<input class="drop-list__radio" id="radio_id_'+t.value+'_1" type="'+c()+'" name="drop_list_'+t.value+'" />\n\t\t\t\t<label class="drop-list__label drop-list__label--list" for="radio_id__1">'+t.text+"</label>\n\t\t\t</li>"})};console.log(u()),document.querySelector(".block").innerHTML=u().join("")}]);