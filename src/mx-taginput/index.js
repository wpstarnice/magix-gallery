define("mx-taginput/index",["magix","$","./suggest"],function(e,t,i){e("./suggest");var s=e("magix");s.applyStyle("_I","._f_{height:auto;min-height:32px;padding:1px 7px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:1}._f_:hover{border-color:#ccc}._fa{cursor:not-allowed;background-color:#fbfbfb}._fa:hover{border-color:#e6e6e6}._fb{height:auto;cursor:text}._fc{position:absolute;left:9px;top:8px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._fd{position:relative;display:inline-block;margin:1px;cursor:pointer;background-color:#eee;border-radius:4px}._fe{width:1px;visibility:hidden}._ff{float:left;border-right:1px solid #fff;max-width:200px;overflow:hidden}._fg,._ff{height:24px;line-height:24px;padding:0 4px}._fg{width:20px;font-weight:bolder;text-align:center;color:#999;display:inline-block}._fh{border:none;outline:none;height:24px;line-height:24px;padding:0;width:20px;position:relative;z-index:1;background:transparent}._fa ._fb,._fa ._fg,._fa ._ff,._fa ._fh{cursor:not-allowed}");var _=e("$");i.exports=s.View.extend({tmpl:{html:'<div mx-guid="g0" class="_fb _ai" mx-click="__fB()" id="ipt_<%=$$.viewId%>">1</div>',subs:[{keys:["viewId","items","placeholder","textKey"],path:'div[mx-guid="g0"]',tmpl:'<%if(!$$.items.length&&$$.placeholder){%><div class="_fc"><%=$$.placeholder%></div><%}if($$.items.length){for(var a=0;a<$$.items.length;a++){var b=$$.items[a];%><div class="_fd" mx-contextmenu="prevent()"><div class="_ff _ak"><%=$$.textKey?b[$$.textKey]:b%></div><div class="_fg" mx-click="__fz({idx:<%!a%>})">x</div></div><%}}else{%><div class="_fd _fe" mx-click="stop()"><div class="_fg" mx-click="__fz({idx:<%!a%>})">x</div></div><%}%><input mx-guid="g2" mx-keydown="__fA()" mx-keyup="__fA()" mx-input="__fA()" mx-paste="__fA()" mx-pick="__k()" mx-change="__bR()" mx-focusin="__bR()" mx-focusout="__bR()" mx-showlist="__fC()" mx-hidelist="__fC()" <%if(!$$.disabled){%> mx-view="mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>" <%}else{%> disabled="disabled" <%}%> class="_fh" autocomplete="off">',s:"1",attr:'id="ipt_<%=$$.viewId%>"',attrs:[{n:"id",p:1}],mask:"3111"},{keys:["disabled","list","valueKey","viewId","width","scrollTop"],path:'input[mx-guid="g2"]',pKeys:["items","placeholder","textKey"],attr:'<%if(!$$.disabled){%> mx-view="mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>" <%}else{%> disabled="disabled" <%}%>',attrs:[{n:"mx-view",v:1},{n:"disabled",b:1,p:1}]}]},init:function(e){var t=this;t.__eg=e.list||[],t.__h=_("#"+t.id),t.updater.set({disabled:e.disabled,placeholder:e.placeholder||"",textKey:e.textKey,valueKey:e.valueKey}),t.__ft(e.selected)},__fu:function(){for(var e=this,t=e.updater,i=t.get("sMap"),s=t.get("valueKey"),_=e.__eg,a=[],d=0,o=void 0;d<_.length;d++)o=_[d],i[s?o[s]:o]||a.push(o);return a},render:function(){var e=this,t=_("#"+e.id),i=t.outerWidth();0===i&&(i=340),e.updater.digest({width:i,list:e.__fu(),viewId:e.id}),t.addClass("_f_"),e.__dD=t,e.__fv(),e.updater.get().disabled&&t.addClass("_fa")},__fv:function(){var e=this,t=e.__dD;e.__fw=t.find("input"),e.__fw.width(20);var i=_("#ipt_"+e.id).width()-e.__fw.position().left;e.__fw.width(i>=20?i:20)},__ft:function(e){var t=this;e=((e=e||"")+"").split(",");for(var i=[],_={},a=t.updater.get("valueKey"),d=t.__eg,o=s.toMap(e),l=0,f=void 0,r=void 0;l<d.length;l++)f=d[l],r=a?f[a]:f,s.has(o,r)&&(_[r]=1,i.push(f));t.updater.set({sMap:_,items:i}),t.__h.val(e.join(","))},val:function(e){var t=this;return e&&(t.__ft(e),t.updater.digest({list:t.__fu()}),t.__fv(),t.__dD.removeClass("_aq"),t.__u()),t.updater.get("items")},__u:function(){for(var e=this,t=e.updater,i=[],s=t.get("items"),a=t.get("valueKey"),d=0,o=void 0;d<s.length;d++)o=s[d],i.push(a?o[a]:o);_("#"+e.id).val(i.join(",")).trigger({type:"change",ids:i,items:s})},__fy:function(){var e=this;clearTimeout(e.__fx),e.__dU=!0,e.__fw.focus(),e.__fx=setTimeout(e.wrapAsync(function(){delete e.__dU}),20)},"__fA<keydown,input,paste,keyup>":function(e){e.stopPropagation();var t=this,i=e.eventTarget.value;if(t.__bX!==i){t.__bX=i;var s=t.__dD.find("._fc");i?s.hide():s.show()}if(!i&&"keydown"==e.type&&8==e.keyCode){var _=t.updater.get("items").length-1;_>-1&&(t["__fz<click>"]({params:{idx:_}}),t.__fy())}},"__k<pick>":function(e){e.stopPropagation();var t=this,i=t.updater,s=i.get("items"),_=i.get("sMap"),a=e.item,d=i.get("valueKey"),o=d?a[d]:a;_[o]||(_[o]=1,s.push(a),i.digest({items:s,scrollTop:e.scrollTop,list:t.__fu()}),t.__fv(),t.__fy(),t.__u())},"__fB<click>":function(){var e=this;e.__h.hasClass("_fa")||e.__fw.focus()},"__fz<click>":function(e){var t=this;if(!t.__h.hasClass("_fa")){var i=t.updater,s=i.get("items"),_=i.get("sMap"),a=i.get("valueKey"),d=s[e.params.idx];delete _[a?d[a]:d],s.splice(e.params.idx,1),i.digest({items:s,list:t.__fu()}),t.__fv(),t.__u(),t.__fy()}},"__D<contextmenu>":function(e){e.preventDefault()},"__bR<change,focusin,focusout>":function(e){e.stopPropagation();var t=this.__dD;"focusin"==e.type&&t.addClass("_aq")},"__fC<showlist,hidelist>":function(e){this.__dU||(_("#"+this.id).trigger({type:"showlist"==e.type?"focusin":"focusout"}),"hidelist"==e.type&&this.__dD.removeClass("_aq"))}})});