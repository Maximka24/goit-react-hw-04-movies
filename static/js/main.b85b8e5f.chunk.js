(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{10:function(e,t,n){e.exports={ContainerMoviesId:"MoviesItem_ContainerMoviesId__NVicu",InformMovies:"MoviesItem_InformMovies__2_8wI",BtnBack:"MoviesItem_BtnBack__1Hf_6",InformMoviesCard:"MoviesItem_InformMoviesCard__3rZbM",ElListGenres:"MoviesItem_ElListGenres__3AOOc",AdditionalInfo:"MoviesItem_AdditionalInfo__1gCn7"}},11:function(e,t,n){e.exports={Navigation:"Navigation_Navigation__6842e",NavLink:"Navigation_NavLink__1wYro",ActiveNavLink:"Navigation_ActiveNavLink__7Kgai"}},14:function(e,t,n){e.exports={GetContainer:"MoviesPage_GetContainer__2HIa0",ContainerForm:"MoviesPage_ContainerForm__r07ay",BtnForm:"MoviesPage_BtnForm__qGGdR"}},19:function(e,t,n){e.exports={ListTrendingMovies:"HomePage_ListTrendingMovies__2HacI",LinkMovies:"HomePage_LinkMovies__O8fGl",LinkElementMovies:"HomePage_LinkElementMovies__2rVJ_"}},20:function(e,t,n){e.exports={ListTrendingMovies:"SearchMoviesListOfName_ListTrendingMovies__1TByl",LinkMovies:"SearchMoviesListOfName_LinkMovies__30zQ-",LinkElementMovies:"SearchMoviesListOfName_LinkElementMovies__22DDz"}},21:function(e,t,n){e.exports={CastsContainer:"CastsMovies_CastsContainer__3p_SM",CastsItm:"CastsMovies_CastsItm__2v6ZA"}},22:function(e,t,n){e.exports={ReviewContainer:"ReviewMovies_ReviewContainer__3_yJL",ReviewElement:"ReviewMovies_ReviewElement__1x6P5"}},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(24),s=n.n(a),r=n(5),o=(n(32),n(2)),j=n(11),l=n.n(j),v=n(0);function d(){return Object(v.jsxs)("nav",{className:l.a.Navigation,children:[Object(v.jsx)(r.c,{exact:!0,activeClassName:l.a.ActiveNavLink,className:l.a.NavLink,to:"/",children:"Home"}),Object(v.jsx)(r.c,{activeClassName:l.a.ActiveNavLink,className:l.a.NavLink,to:"/movies",children:"Movies"})]})}var u=n(8),h=n(18),m=n.n(h),b=n(27),O="c46413d5ada5c46eaf911e4d51704b61",x="https://api.themoviedb.org/3";function _(){return f.apply(this,arguments)}function f(){return(f=Object(b.a)(m.a.mark((function e(){var t,n,i=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(19),g=n.n(p);function M(){var e=Object(i.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){_("".concat(x,"/trending/movie/week?api_key=").concat(O)).then((function(e){return c(e)}))}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"Popular movies for the week:"}),Object(v.jsx)("ul",{className:g.a.ListTrendingMovies,children:n&&n.results.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(r.b,{className:g.a.LinkElementMovies,to:"/movies/".concat(e.id),children:e.original_title})},e.id)}))})]})}var N=n(13),C=n(20),k=n.n(C);function L(e){var t=e.listMoviesSearch;return Object(v.jsx)("ul",{className:k.a.ListTrendingMovies,children:t&&t.results.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(r.b,{className:k.a.LinkElementMovies,to:"/movies/".concat(e.id),children:e.original_title})},e.id)}))})}var I=n(14),w=n.n(I);function S(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(null),s=Object(u.a)(a,2),r=s[0],o=s[1],j=function(e){(function(e){return _("".concat(x,"/search/movie?api_key=").concat(O,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))})(e).then((function(e){return o(e)}))};return Object(v.jsxs)("div",{className:w.a.GetContainer,children:[Object(v.jsx)("div",{className:w.a.ContainerForm,children:Object(v.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n.trim())return alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430!");j(n),c("")},children:[Object(v.jsx)("input",{type:"tel",placeholder:"Search name movies...",name:"number",value:n,onChange:function(e){c(e.currentTarget.value.toLowerCase())},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432!!!"}),Object(v.jsx)("button",{className:w.a.BtnForm,type:"submit",children:Object(v.jsx)(N.b,{style:{width:24,height:24}})})]})}),r&&Object(v.jsx)(L,{listMoviesSearch:r})]})}var y=n(21),E=n.n(y);function A(e){var t=e.moviesId,n=Object(i.useState)(null),c=Object(u.a)(n,2),a=c[0],s=c[1];return Object(i.useEffect)((function(){var e;(e=t,_("".concat(x,"/movie/").concat(e,"/credits?api_key=").concat(O,"&language=en-US"))).then((function(e){return s(e)}))}),[t]),Object(v.jsx)(v.Fragment,{children:a&&Object(v.jsx)("ul",{className:E.a.CastsContainer,children:a.cast.map((function(e){return Object(v.jsxs)("li",{className:E.a.CastsItm,children:[Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),height:"140px",alt:e.name}),Object(v.jsx)("h2",{children:e.name}),Object(v.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}var B=n(22),F=n.n(B);function G(e){var t=e.moviesId,n=Object(i.useState)(null),c=Object(u.a)(n,2),a=c[0],s=c[1];return Object(i.useEffect)((function(){var e;(e=t,_("".concat(x,"/movie/").concat(e,"/reviews?api_key=").concat(O,"&language=en-US&page=1"))).then((function(e){return s(e)}))}),[]),Object(v.jsx)(v.Fragment,{children:a&&(a.results===[]?Object(v.jsx)("p",{children:"We dont have any reviews for this movies"}):Object(v.jsx)("ul",{className:F.a.ReviewContainer,children:a.results.map((function(e){return Object(v.jsxs)("li",{className:F.a.ReviewElement,children:[Object(v.jsx)("h2",{children:e.author}),Object(v.jsx)("p",{children:e.content})]},e.id)}))}))})}var R=n(10),P=n.n(R);function T(){var e=Object(o.g)().url,t=Object(o.f)().moviesId,n=Object(i.useState)(null),c=Object(u.a)(n,2),a=c[0],s=c[1];return Object(i.useEffect)((function(){var e;(e=t,_("".concat(x,"/movie/").concat(e,"?api_key=").concat(O,"&language=en-US"))).then((function(e){return s(e)}))}),[t]),Object(v.jsx)(v.Fragment,{children:a&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:P.a.ContainerMoviesId,children:[Object(v.jsxs)("button",{className:P.a.BtnBack,children:[Object(v.jsx)(N.a,{}),"Go back!"]}),Object(v.jsxs)("div",{className:P.a.InformMovies,children:[Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a.poster_path),alt:a.title}),Object(v.jsxs)("div",{className:P.a.InformMoviesCard,children:[Object(v.jsx)("h2",{children:a.title}),Object(v.jsxs)("p",{children:["Popularity: ",a.popularity,"%"]}),Object(v.jsx)("h3",{children:"Overview"}),Object(v.jsx)("p",{children:a.overview}),Object(v.jsx)("h3",{children:"Genres"}),Object(v.jsx)("ul",{children:a.genres.map((function(e){return Object(v.jsx)("li",{className:P.a.ElListGenres,children:e.name},e.id)}))})]})]})]}),Object(v.jsxs)("div",{className:P.a.AdditionalInfo,children:[Object(v.jsx)("h3",{children:"Additional information"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"".concat(e,"/cast"),children:"Cast"})}),Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"".concat(e,"/reviews"),children:"Reviews"})})]})]}),Object(v.jsx)(o.a,{path:"".concat(e,"/cast"),children:Object(v.jsx)(A,{moviesId:t})}),Object(v.jsx)(o.a,{path:"".concat(e,"/reviews"),children:Object(v.jsx)(G,{moviesId:t})})]})})}function H(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"404! \u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"})})}var z=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(d,{}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(M,{})}),Object(v.jsx)(o.a,{exact:!0,path:"/movies",children:Object(v.jsx)(S,{})}),Object(v.jsx)(o.a,{path:"/movies/:moviesId",children:Object(v.jsx)(T,{})}),Object(v.jsx)(o.a,{children:Object(v.jsx)(H,{})})]})]})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(r.a,{children:Object(v.jsx)(z,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b85b8e5f.chunk.js.map