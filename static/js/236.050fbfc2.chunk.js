"use strict";(self.webpackChunkgoit_react_hw_05_movies_lazy=self.webpackChunkgoit_react_hw_05_movies_lazy||[]).push([[236],{6236:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),s=e(2791),i=e(3714),o=e(7689),f="ReviewListItem_author__kiGjJ",p=e(184),v=function(t){var r=t.author,e=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{className:f,children:[" Author: ",r," "]}),(0,p.jsx)("p",{children:e})]})},h="ReviewList_reviewList__YW-0o",d=function(){var t=(0,o.UO)().movieId,r=(0,s.useState)([]),e=(0,a.Z)(r,2),u=e[0],f=e[1];return(0,s.useEffect)((function(){(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Hx)(t);case 3:e=r.sent,f(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}),[t]),(0,p.jsx)(p.Fragment,{children:0===u.length?(0,p.jsx)("div",{children:"We don't have any reviews for this movie."}):(0,p.jsx)("ul",{className:h,children:u.map((function(t){var r=t.id,e=t.author,n=t.content;return(0,p.jsx)(v,{author:e,content:n},r)}))})})}},3714:function(t,r,e){e.d(r,{Hx:function(){return p},Vu:function(){return i},Y5:function(){return o},uV:function(){return f},wr:function(){return s}});var n=e(5861),a=e(7757),u=e.n(a),c=e(759);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"a54b4a4bf1ba27497510cfbdb34a50db"};var s=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits?"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews?"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=236.050fbfc2.chunk.js.map