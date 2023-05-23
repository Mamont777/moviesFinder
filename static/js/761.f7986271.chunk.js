"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[761],{1252:function(r,e,t){t.r(e),t.d(e,{default:function(){return k}});var n,a,c,s=t(5861),o=t(9439),u=t(4687),i=t.n(u),p=t(2791),f=t(7689),h=t(5985),v=(t(5462),t(367)),d=t(168),l=t(7691),m=l.ZP.ul(n||(n=(0,d.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n"]))),w=l.ZP.li(a||(a=(0,d.Z)(["\n  margin-top: 15px;\n"]))),x=l.ZP.p(c||(c=(0,d.Z)(["\n  margin-top: 15px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 265px;\n"]))),g=t(1454),Z=t.p+"static/media/no-image-icon-23505.d25e8d14857edd0cff6b.png",b=t(184),k=function(){var r=(0,f.UO)().movieId,e=(0,p.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],c=(0,p.useState)(!1),u=(0,o.Z)(c,2),d=u[0],l=u[1],k=(0,f.bx)(),y=(0,o.Z)(k,1)[0];return(0,p.useEffect)((function(){function e(){return(e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,v.yo)(r);case 4:if(t=e.sent,a(t.cast),0!==t.cast.length){e.next=8;break}return e.abrupt("return",h.Am.warning("We don't have any information about cast for this movies."));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),(0,b.jsxs)(b.Fragment,{children:[d&&(0,b.jsx)(g.Z,{}),y&&(0,b.jsx)(m,{children:n.length>0&&n.map((function(r){var e=r.id,t=r.name,n=r.character,a=r.profile_path;return(0,b.jsxs)(w,{children:[(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):Z,alt:"Poster ".concat(t),width:"280",height:"420"})}),(0,b.jsx)(x,{children:t}),(0,b.jsxs)(x,{children:["Character: ",n]})]},e)}))}),(0,b.jsx)(h.Ix,{transition:h.Mi})]})}},367:function(r,e,t){t.d(e,{Df:function(){return o},MS:function(){return h},Pg:function(){return i},Pt:function(){return u},tx:function(){return f},yo:function(){return p}});var n=t(5861),a=t(4687),c=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"a06c90b50d50fe78eda7fc28090f9f2b"};var o=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("trending/movie/day",{params:{page:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),u=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("search/movie",{params:{query:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e),{params:{id:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e,"/credits"),{params:{id:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e,"/reviews"),{params:{id:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("movie/".concat(e,"/videos"),{params:{id:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Oops, there is no movies");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=761.f7986271.chunk.js.map