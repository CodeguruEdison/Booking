(this["webpackJsonpreact-hooks-in-action"]=this["webpackJsonpreact-hooks-in-action"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(12),c=n.n(a),o=(n(18),n(19),n(10)),i=n(2),r=n(4),l=n(13),b=n(8),j=n(6),u=n(1),d=function(e){var t=e.nextBookable;return Object(u.jsx)("p",{children:Object(u.jsxs)("button",{className:"btn",onClick:t,autoFocus:!0,children:[Object(u.jsx)(r.a,{}),Object(u.jsx)("span",{children:"Next"})]})})},h=function(e){var t=Object(s.useState)(0),n=Object(b.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(!1),i=Object(b.a)(o,2),r=i[0],h=i[1],x=Object(s.useState)("Kit"),O=Object(b.a)(x,2),p=O[0],m=O[1],f=Object(l.a)(new Set(j.a.map((function(e){return e.group})))),g=j.a.filter((function(e){return e.group===p})),k=g[a];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("select",{value:p,onChange:function(e){m(e.target.value),c(0)},children:f&&f.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}),Object(u.jsx)("ul",{className:"bookables items-list-nav",children:g&&g.map((function(e,t){return Object(u.jsx)("li",{className:t===a?"selected":"",onClick:function(){return c(t),void console.log(a)},children:Object(u.jsx)("button",{className:"btn",children:e.title})},e.id)}))}),Object(u.jsx)(d,{nextBookable:function(){c((function(e){return(e+1)%g.length}))}})]}),k&&Object(u.jsx)("div",{className:"bookable-detail",children:Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"item-header",children:[Object(u.jsx)("h2",{children:k.title}),Object(u.jsx)("span",{className:"controls",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:r,onChange:function(){return h((function(e){return!e}))}}),"Show Details"]})})]}),r&&Object(u.jsxs)("div",{className:"item-details",children:[Object(u.jsx)("h3",{children:"Availability"}),Object(u.jsxs)("div",{className:"bookable-availability",children:[Object(u.jsx)("ul",{children:null===k||void 0===k?void 0:k.days.sort().map((function(e){return Object(u.jsx)("li",{children:j.b[e]},e)}))}),Object(u.jsx)("ul",{children:null===k||void 0===k?void 0:k.sessions.map((function(e){return Object(u.jsx)("li",{children:j.c[e]},e)}))})]})]})]})})]})},x=function(e){return Object(u.jsx)("main",{className:"bookables-page",children:Object(u.jsx)(h,{})})},O=function(){return Object(u.jsx)("main",{className:"bookings-page",children:Object(u.jsx)("p",{children:"Bookings!"})})},p=function(){return Object(u.jsx)("main",{className:"users-page",children:Object(u.jsx)("p",{children:"Users!"})})},m=function(e){var t=[{linkTo:"/bookings",className:"btn btn-header",iconType:"FaCalendarAlt",linkText:"Bookings"},{linkTo:"/bookables",className:"btn btn-header",iconType:"FaDoorOpen",linkText:"Bookables"},{linkTo:"/users",className:"btn btn-header",iconType:"FaUsers",linkText:"Users"}],n=function(e){switch(e){case"FaCalendarAlt":return Object(u.jsx)(r.b,{});case"FaDoorOpen":return Object(u.jsx)(r.c,{});case"FaUsers":return Object(u.jsx)(r.d,{})}};return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:t&&t.map((function(e){var t=e.linkTo,s=e.linkText,a=e.iconType,c=e.className;return Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,{to:t,className:c,children:[n(a),Object(u.jsx)("span",{children:s})]})})}))})})}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/bookings",element:Object(u.jsx)(O,{})}),Object(u.jsx)(i.a,{path:"/bookables",element:Object(u.jsx)(x,{})}),Object(u.jsx)(i.a,{path:"/users",element:Object(u.jsx)(p,{})})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};c.a.render(Object(u.jsx)(m,{}),document.getElementById("root")),f()},6:function(e){e.exports=JSON.parse('{"a":[{"id":1,"group":"Rooms","title":"Meeting Room","notes":"The one with the big table and interactive screen. Seats 12. See Colin if you need the tea and coffee trolley.","sessions":[1,2,3],"days":[1,2,3,4,5,0]},{"id":2,"group":"Rooms","title":"Lecture Hall","notes":"For more formal \'sage-on-the-stage\' presentations. Seats 100. See Sandra for help with AV setup.","sessions":[1,3,4],"days":[0,1,2,3,4]},{"id":3,"group":"Rooms","title":"Games Room","notes":"Table tennis, table football, pinball! There\'s also a selection of board games. Please tidy up!","sessions":[0,2,4],"days":[0,2,3,4,5,6]},{"id":4,"group":"Rooms","title":"Lounge","notes":"A relaxing place to hang out. Ideal for bean bag wranglers and sofa surfers. Help yourself to a beer after hours.","sessions":[0,1,2,3,4],"days":[0,1,2,3,4,5,6]},{"id":5,"group":"Kit","title":"Projector","notes":"Portable but powerful. Keep it with the case. Be careful, it gets quite hot after a while!","sessions":[1,2,3,4],"days":[0,2,3,4,5]},{"id":6,"group":"Kit","title":"Wireless mics","notes":"Really handy but don\'t forget to switch them off when you pop out of the room.","sessions":[1,3,4],"days":[0,2,3,4,5,6]}],"c":["Breakfast","Morning","Lunch","Afternoon","Evening"],"b":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.46dad581.chunk.js.map