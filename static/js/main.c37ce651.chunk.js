(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),l=a.n(s),c=a(7),o=a(1),i=a(15),m=a.n(i),u=a(29),v=a(10),p=a(11),d=a(13),E=a(12),f=a(30),g=a.n(f);a(55);var y=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,l=e.poster,o=e.rating,i=e.genres;return r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:l,genres:i,rating:o}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:l,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("h5",{className:"movie_rating"},o,"/10"),r.a.createElement("ul",{className:"movie_genres"},i&&i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},s.slice(0,180),"..."))))},h=(a(61),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var b=function(e){return console.log(e),r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"- George Orwell, 1984"))};a(63);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))},_=(a(64),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/"),console.log(t)}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title}),r.a.createElement("div",{className:"detail_content"},r.a.createElement("div",{className:"detail_title"},r.a.createElement("h3",null,e.state.title," ",r.a.createElement("span",{className:"detail_year"},"(",e.state.year,")"))),r.a.createElement("div",{className:"detail_summary"},r.a.createElement("p",null,r.a.createElement("strong",null,r.a.createElement("em",null,"Summary:"))," ",e.state.summary)))):null}}]),a}(r.a.Component));a(65);var j=function(){return r.a.createElement(c.a,null,r.a.createElement(N,null),r.a.createElement(o.a,{path:"/",exact:!0,component:h}),r.a.createElement(o.a,{path:"/about",component:b}),r.a.createElement(o.a,{path:"/movie/:id",component:_}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c37ce651.chunk.js.map