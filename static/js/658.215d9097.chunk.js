"use strict";(self.webpackChunkgoit_react_hw_05_movies_lazy=self.webpackChunkgoit_react_hw_05_movies_lazy||[]).push([[658],{5658:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(5861),a=r(9439),s=r(7757),u=r.n(s),c=r(2791),i=r(7689),o="CastListItem_castListItem__XFFb8",f=r(184),p=function(t){var e=t.profilePath,r=t.originalName,n=t.name;return(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("img",{width:"200px",height:"300px",src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://fakeimg.pl/200x300?text=No+Image",alt:r}),(0,f.jsx)("p",{children:n})]})},h=r(3714),l="CastList_castList__YQOUt",v=function(){var t=(0,i.UO)().movieId,e=(0,c.useState)([]),r=(0,a.Z)(e,2),s=r[0],o=r[1];return(0,c.useEffect)((function(){(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.uV)(t);case 3:r=e.sent,o(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),(0,f.jsxs)(f.Fragment,{children:[0!==s.length&&(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Cast List"}),(0,f.jsx)("ul",{className:l,children:s.map((function(t){var e=t.id,r=t.profile_path,n=t.original_name,a=t.name;return(0,f.jsx)(p,{id:e,profilePath:r,originalName:n,name:a},e)}))})]}),0===s.length&&(0,f.jsx)("div",{children:"We don't have any cast for this movie."})]})}},3714:function(t,e,r){r.d(e,{Hx:function(){return p},Vu:function(){return i},Y5:function(){return o},uV:function(){return f},wr:function(){return c}});var n=r(5861),a=r(7757),s=r.n(a),u=r(759);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"a54b4a4bf1ba27497510cfbdb34a50db"};var c=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=658.215d9097.chunk.js.map