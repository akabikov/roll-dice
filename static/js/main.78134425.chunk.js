(this["webpackJsonproll-dice"]=this["webpackJsonproll-dice"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(6),r=n.n(i),o=(n(12),n(13),n(1)),c=n(2),u=n(3),s=n(4),m=(n(14),n(15),["","one","two","three","four","five","six"]),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"getIconClass",value:function(){return"fas fa-dice-"+m[+this.props.num]}},{key:"render",value:function(){var e="die ".concat(this.getIconClass());return this.props.isRolling&&(e+=" animated wobble"),l.a.createElement("i",{className:e})}}]),n}(l.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={die1:1,die2:1,isRolling:!1},e.roll=function(){e.setState({die1:e.getNum(),die2:e.getNum(),isRolling:!0}),setTimeout((function(){return e.setState({isRolling:!1})}),1e3)},e}return Object(c.a)(n,[{key:"getNum",value:function(){return Math.floor(6*Math.random())+1}},{key:"render",value:function(){var e=this.state,t=e.die1,n=e.die2,a=e.isRolling;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"roll-dice"},l.a.createElement(d,{num:t,isRolling:a}),l.a.createElement(d,{num:n,isRolling:a})),l.a.createElement("button",{className:"roll-dice-button",onClick:this.roll,disabled:a},a?"Rolling...":"Roll Dice!"))}}]),n}(l.a.Component);var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.78134425.chunk.js.map