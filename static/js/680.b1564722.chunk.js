"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{1856:function(t,r,e){e.d(r,{Z:function(){return f}});var n="MovieList_movieList__uFrOZ",a=e(7689),u=e(1087),c="MovieListItem_movieListItem__diVgK",s="MovieListItem_link__1-1ln",i=e(184),o=function(t){var r=t.id,e=t.title,n=(0,a.TH)();return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(u.rU,{className:s,to:"/movies/".concat(r),state:{from:n},children:e})})},f=function(t){var r=t.movies;return(0,i.jsx)("ul",{className:n,children:r.map((function(t){var r=t.id,e=t.title;return(0,i.jsx)(o,{id:r,title:e},r)}))})}},680:function(t,r,e){e.r(r);var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),s=e(2791),i=e(9993),o=e(3714),f=e(1856),v=e(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],u=r[1];return(0,s.useEffect)((function(){(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.wr)();case 3:r=t.sent,u(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Trending Movies"}),0===e.length?(0,v.jsx)(i.a,{}):(0,v.jsx)(f.Z,{movies:e})]})}},3714:function(t,r,e){e.d(r,{Hx:function(){return v},Vu:function(){return i},Y5:function(){return o},uV:function(){return f},wr:function(){return s}});var n=e(5861),a=e(7757),u=e.n(a),c=e(759);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"a54b4a4bf1ba27497510cfbdb34a50db"};var s=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits?"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews?"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.b1564722.chunk.js.map