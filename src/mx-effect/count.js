define("mx-effect/count",["magix","$","../mx-runner/fx"],function(_,n,i){var c=_("magix"),t=_("$"),e=_("../mx-runner/fx");i.exports=c.View.extend({mixins:[e],init:function(_){var n=this;n.__h=t("#"+n.id),n.__c_=n.__ca(),n.assign(_)},assign:function(_){var n=this;return n.__cb=+_.to,n.__cc=+_.duration||500,n.__cd=+_.fixed||0,n.__c_.__bR(),!0},render:function(){var _=this,n=_.__h,i=n.prop("tagName"),c=_.__c_,t=_.__cb,e="INPUT"==i||"TEXTAREA"==i?"val":"html",r=+n[e]();c.__ce(_.__cc,function(i){n[e](i(r,t).toFixed(_.__cd))})}})});