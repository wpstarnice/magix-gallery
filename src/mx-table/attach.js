define("mx-table/attach",["magix","$"],function(e,t,a){var _=e("magix"),i=e("$");_.applyStyle("_G","._eO{width:100%;overflow:auto;border:1px solid #e6e6e6;position:relative}._eP,._eQ thead,._eR{background-color:#fff}._eP,._eR{position:absolute;top:1px;width:auto;z-index:1}._eS{border:none}._eP{left:1px}._eR{right:1px}._eT,._eT thead{-webkit-box-shadow:6px 0 6px -4px rgba(0,0,0,.2);box-shadow:6px 0 6px -4px rgba(0,0,0,.2)}._eU,._eU thead{-webkit-box-shadow:-6px 0 6px -4px rgba(0,0,0,.2);box-shadow:-6px 0 6px -4px rgba(0,0,0,.2)}"),a.exports=_.View.extend({init:function(e){var t=this;t.__et=e.sticky+""=="true",t.__eu=e.rowHoverClass},__ey:function(){var e=this,t=e.__ev;if(t){var a=e.__ew,_=e.__ex;if(t.prop("clientWidth")<t.prop("scrollWidth")){if(a){t.prop("scrollLeft")>=10?a.hasClass("_eT")||a.addClass("_eT"):a.hasClass("_eT")&&a.removeClass("_eT")}if(_){t.prop("scrollLeft")<t.prop("scrollWidth")-t.prop("clientWidth")-10?_.hasClass("_eU")||_.addClass("_eU"):_.hasClass("_eU")&&_.removeClass("_eU")}}}},__ez:function(e){var t=e.attr("id");t||e.attr("id",t=_.guid("table_")),e.find("thead").css({width:e.width()}),this.owner.mountVframe(t,"mx-table/isticky")},__eB:function(){var e,t,a=this,_=a.__eA,i=a.__ew,r=a.__ex,o=_.find("tbody>tr");i&&(e=i.find("tbody>tr")),r&&(t=r.find("tbody>tr"));for(var d=0;d<o.length;d++){var s=o.eq(d).find("td").outerHeight();e&&e.eq(d).find("td:first").css({height:s}),t&&t.eq(d).find("td:first").css({height:s})}},render:function(){var e=this,t=i("#"+e.id);t.addClass("_af _eQ");var a=t.find('[table-role="main"]');a.addClass("_eO");var _=a.find("table");_.addClass("_eS"),e.__eA=_;var r=t.find('[table-role="left-sticky"]');r.length&&(r.addClass("_eP _eS"),e.__ew=r);var o=t.find('[table-role="right-sticky"]');o.length&&(o.addClass("_eR _eS"),e.__ex=o),e.__ev=a;var d=function(){e.__ey()};e.on("destroy",function(){a.off("scroll",d)}),a.on("scroll",d),e.__ey(),e.__eB(),e.__et&&(e.__ez(_),r.length&&e.__ez(r),o.length&&e.__ez(o))},"$doc<htmlchanged>":function(e){var t=this;e.vId==t.owner.pId&&t.__eB()},"$tbody>tr<mouseover,mouseout>":function(e){var t=this,a=t.__eu;if(a){var r=e.eventTarget;if(!_.inside(e.relatedTarget,r)){var o=i(r).parents("tbody").find("tr"),d=o.index(r);o=t.__eA.find("tbody>tr");var s="mouseover"==e.type?"addClass":"removeClass";o.eq(d)[s](a);var n=t.__ew;n&&(o=n.find("tbody>tr")).eq(d)[s](a),(n=t.__ex)&&(o=n.find("tbody>tr")).eq(d)[s](a)}}}})});