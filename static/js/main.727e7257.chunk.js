(this.webpackJsonpteamsplit=this.webpackJsonpteamsplit||[]).push([[0],{55:function(e,t,a){e.exports=a(68)},60:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),i=a(43),h=a(8),o=(a(60),a(25)),m=a(26),u=a(32),s=a(30),d=a(110),g=a(107),k=a(108),f=a(70),b=a(42),w=a.n(b),p=a(111),E=a(109),v=a(98),y=a(99),x=a(112),C=function(e){var t=e.label,a=e.isSelected,n=e.onCheckboxChange;return c.a.createElement(v.a,null,c.a.createElement(y.a,{control:c.a.createElement(x.a,{checked:a,onChange:n,color:"primary",name:t}),label:t}))},A=a(100),S=a(4),j=a(104),B=a(106),O=a(102),z=a(103),M=a(105),P=a(101),N=a(71),R=Object(A.a)({table:{maxWidth:150,float:"left"}}),I=Object(S.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(P.a),W=Object(S.a)((function(e){return{head:{color:e.palette.common.white},body:{fontSize:14}}}))(O.a);function T(e){var t=R(),a=function(e){var t=(e=e.totalPlayers).length,a=e.reduce((function(e,t){return e+t.weight}),0),n=Math.ceil(t/2),c=Math.floor(a/2),l=function(e,t){var a=[];return function n(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];l!==t?c!==e.length&&(l+e[c]<=t&&n(c+1,l+e[c],r.concat(e[c])),n(c+1,l,r)):a.push(r)}(),a}(function(e){return e.map((function(e){return e.weight}))}(e),c).filter((function(e){return e.length===n})),r=l[Math.floor(Math.random()*l.length)],i=e.slice();r.forEach((function(e,t){var a=i.findIndex((function(t){return t.weight==e}));a>-1&&i.splice(a,1)}));var h,o=e.filter((h=i,function(e){return 0==h.filter((function(t){return t.name==e.name&&t.weight==e.weight})).length}));return{teamA:i,teamB:o}}(e),n=a.teamA,l=a.teamB;return c.a.createElement(z.a,{component:N.a,style:{maxWidth:300}},c.a.createElement(j.a,{className:t.table,size:"small","aria-label":"simple table"},c.a.createElement(M.a,null,c.a.createElement(P.a,null,c.a.createElement(W,{bgcolor:"red"},"Team Red "))),c.a.createElement(B.a,{className:t.tableBody},n.map((function(e){return c.a.createElement(I,{key:e.name},c.a.createElement(O.a,{component:"th",scope:"row"}," ",e.name," "))})))),c.a.createElement(j.a,{className:t.table,size:"small","aria-label":"simple table"},c.a.createElement(M.a,null,c.a.createElement(P.a,null,c.a.createElement(W,{bgcolor:"blue"},"Team Blue "))),c.a.createElement(B.a,{className:t.tableBody},l.map((function(e){return c.a.createElement(I,{key:e.name},c.a.createElement(O.a,{component:"th",scope:"row"}," ",e.name," "))})))))}var D=function(e){return e.checkboxes.filter((function(e){return 1==e.checked}))},F=[{name:"Aady",weight:4,checked:!1},{name:"Adarsh",weight:3,checked:!1},{name:"Adi",weight:3,checked:!1},{name:"Akshay",weight:5,checked:!1},{name:"Amit",weight:1,checked:!1},{name:"Amog",weight:1,checked:!1},{name:"Anas",weight:4,checked:!1},{name:"Arif",weight:3,checked:!1},{name:"Atif",weight:3,checked:!1},{name:"Avi",weight:3,checked:!1},{name:"Bharath",weight:4,checked:!1},{name:"Deep",weight:4,checked:!1},{name:"Gourav",weight:5,checked:!1},{name:"Hardik",weight:1,checked:!1},{name:"Maddy",weight:4,checked:!1},{name:"Mohit",weight:4,checked:!1},{name:"Nilesh",weight:4,checked:!1},{name:"Pavan",weight:1,checked:!1},{name:"Prabhanshu",weight:3,checked:!1},{name:"Piyush",weight:1,checked:!1},{name:"Rahul",weight:2,checked:!1},{name:"Rohan",weight:3,checked:!1},{name:"Rohith",weight:5,checked:!1},{name:"Sheily",weight:2,checked:!1},{name:"Shriram",weight:2,checked:!1},{name:"Shreyas",weight:3,checked:!1},{name:"Shub",weight:4,checked:!1},{name:"Sky",weight:3,checked:!1},{name:"Theo",weight:4,checked:!1},{name:"Vineet",weight:3,checked:!1},{name:"Vivi",weight:3,checked:!1},{name:"Zaid",weight:4,checked:!1}],H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={checkboxes:F},e.createCheckboxes=function(){return F.map((function(t){return e.createCheckbox(t)}))},e.selectAll=function(){return e.selectAllCheckboxes(!0)},e.deSelectAll=function(){return e.selectAllCheckboxes(!1)},e.selectAllCheckboxes=function(t){e.setState((function(e){return{checkboxes:e.checkboxes.map((function(e){return Object.assign(e,{checked:t})}))}}))},e.handleCheckboxChange=function(t){var a=t.target.name;e.setState((function(e){return{checkboxes:e.checkboxes.map((function(e){return e.name===a?Object.assign(e,{checked:!e.checked}):e}))}}))},e.createCheckbox=function(t){var a=e.state.checkboxes.findIndex((function(e){return e.name===t.name}));return c.a.createElement(C,{label:t.name,isSelected:e.state.checkboxes[a].checked,onCheckboxChange:e.handleCheckboxChange,key:t.name})},e}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g.a,{position:"static"},c.a.createElement(k.a,null,c.a.createElement(f.a,{variant:"h6"},"Burnaby FC ",c.a.createElement(w.a,null)))),c.a.createElement(p.a,{display:"flex",justifyContent:"center",alignItems:"center",mb:2,mt:2},(e=this.state,D(e).length>=8?c.a.createElement(T,{totalPlayers:D(this.state)}):null)),c.a.createElement(E.a,{light:!0}),c.a.createElement(f.a,{component:"div",align:"center"},c.a.createElement(p.a,{fontSize:"h3.fontSize",fontFamily:"Monospace",fontWeight:"fontWeightBold",m:1},"Players")),c.a.createElement(E.a,{light:!0}),c.a.createElement(p.a,{display:"flex",justifyContent:"center",borderRight:1,borderLeft:1,mt:4,mb:5,style:{maxHeight:280,overflow:"auto"}},c.a.createElement("div",null,this.createCheckboxes())),c.a.createElement("div",{align:"center"},c.a.createElement(d.a,{variant:"contained",size:"small",color:"primary",onClick:this.selectAll}," Select All "),"\xa0\xa0",c.a.createElement(d.a,{variant:"contained",size:"small",color:"secondary",onClick:this.deSelectAll}," Deselect All ")));var e}}]),a}(n.Component),J=(c.a.Component,c.a.createElement(i.a,null,c.a.createElement(h.a,{path:"/",component:H})));r.a.render(J,document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.727e7257.chunk.js.map