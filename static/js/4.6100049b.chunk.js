(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,s,a){"use strict";a.d(s,"a",(function(){return b}));var t=a(3),i=a(31),n=a(32),c=a(34),o=a(33),d=a(0),r=a.n(d),j=a(8),u=a(12),l=a(1),g=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var s=function(s){Object(c.a)(d,s);var a=Object(o.a)(d);function d(){return Object(i.a)(this,d),a.apply(this,arguments)}return Object(n.a)(d,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(t.a)({},this.props)):Object(l.jsx)(j.a,{to:"/login"})}}]),d}(r.a.Component);return Object(u.b)(g)(s)}},297:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1N20F",dialog:"Dialogs_dialog__2hsDK",dialogsItems:"Dialogs_dialogsItems__3dAjt",active:"Dialogs_active__3ak8K",messages:"Dialogs_messages__1Mdqc",message:"Dialogs_message__3GTI-"}},301:function(e,s,a){"use strict";a.r(s);a(0);var t=a(297),i=a.n(t),n=a(18),c=a(8),o=a(45),d=a(87),r=a(124),j=a(30),u=a(1),l=Object(o.a)(50),g=Object(r.a)({form:"dialog-add-message-form"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{component:j.c,validate:[o.b,l],placeholder:"Enter your message",name:"newMessageBody"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Send"})})]})})),b=function(e){var s="/dialogs/"+e.id;return Object(u.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(u.jsx)(n.b,{to:s,children:e.name})})},m=function(e){var s="/messages/"+e.id;return Object(u.jsx)("div",{className:i.a.dialog,children:Object(u.jsx)(n.b,{to:s,children:e.message})})},O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(u.jsx)(b,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(u.jsx)(m,{message:e.message,id:e.id},e.id)}));s.newMessageBody;return e.isAuth?Object(u.jsxs)("div",{className:i.a.dialogs,children:[Object(u.jsx)("div",{className:i.a.dialogsItems,children:a}),Object(u.jsx)("div",{className:i.a.messages,children:Object(u.jsxs)("div",{children:[" ",t," "]})}),Object(u.jsx)(g,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(u.jsx)(c.a,{to:"/Login"})},h=a(123),f=a(12),p=a(295),v=a(9);s.default=Object(v.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(h.b)(s))}}})),p.a)(O)}}]);
//# sourceMappingURL=4.6100049b.chunk.js.map