(this.webpackJsonpreact_router=this.webpackJsonpreact_router||[]).push([[4],{42:function(e,t,a){"use strict";a(0);var r=a(6),c=a(1),n=a(2),s=function(e){var t=e.poster,a=e.title,r=e.vote;return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(t),width:"200",alt:""}),Object(n.jsx)("h5",{children:a}),Object(n.jsx)("p",{children:r})]})};t.a=Object(c.f)((function(e){var t=e.movies,a=(e.match,e.location);return Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:{pathname:"movies/".concat(e.id),state:{from:a}},children:Object(n.jsx)(s,{poster:e.poster_path,title:e.title,vote:e.vote_average})})},e.id)}))})}))},70:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a(34),c=a(35),n=a(38),s=a(37),i=a(0),o=a(36),u=a.n(o),h=a(42),l=a(2),b=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={query:"",movies:[]},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handlSubmit=function(t){t.preventDefault();u.a.get("https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&query=".concat(e.state.query,"&page=1&include_adult=false")).then((function(t){var a=t.data;return e.setState({movies:a.results})}));e.setState({query:""})},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("header",{className:"Searchmovie",children:[Object(l.jsxs)("form",{className:"SearchForm",onSubmit:this.handlSubmit,children:[Object(l.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]}),Object(l.jsx)("ul",{children:Object(l.jsx)(h.a,{movies:this.state.movies})})]})}}]),a}(i.Component)}}]);
//# sourceMappingURL=movies.3eeb6416.chunk.js.map