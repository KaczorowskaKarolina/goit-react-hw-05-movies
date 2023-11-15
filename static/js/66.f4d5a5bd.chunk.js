"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[66,833,597,681],{597:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(791),i=s(184);const c=e=>{let{apiKey:t,movieId:s}=e;const[c,o]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/".concat(s,"/credits?api_key=").concat(t));if(!e.ok)throw new Error("Failed to fetch cast details");const a=await e.json();o(a.cast)}catch(e){console.error("Error fetching cast details:",e.message)}})()}),[s,t]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Cast"}),c.map((e=>(0,i.jsx)("div",{children:e.name},e.id)))]})}},833:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(791),i=s(689),c=s(87),o=s(294),r=s(597),l=s(681),n=s(184);const d=e=>{let{apiKey:t,baseImageUrl:s}=e;const{movieId:d}=(0,i.UO)(),[h,v]=(0,a.useState)(null),[p,m]=(0,a.useState)(!1),[u,_]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(async()=>{try{const e=await o.Z.get("https://api.themoviedb.org/3/movie/".concat(d,"?api_key=").concat(t));200===e.status&&v(e.data)}catch(e){console.error("Error fetching movie details:",e.message)}})()}),[t,d]);const j=()=>{m(!p)},g=()=>{_(!u)};return(0,n.jsx)("div",{className:"MovieDetails_div",children:h?(0,n.jsxs)("div",{className:"MovieDetails_content",children:[(0,n.jsx)("h2",{className:"MovieDetails_h2",children:h.title}),(0,n.jsx)("img",{className:"MovieDetails_img",src:"https://image.tmdb.org/t/p/w200".concat(h.poster_path),alt:h.title}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.overview}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.tagline}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.video}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.vote_average}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.vote_count}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.status}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.runtime}),(0,n.jsx)("p",{className:"MovieDetails_p",children:h.release_date}),(0,n.jsx)(c.rU,{to:"#",onClick:j,children:"Show Cast"}),p&&(0,n.jsx)(r.default,{apiKey:t,movieId:d,close:j}),(0,n.jsx)(c.rU,{to:"#",onClick:g,children:"Show Reviews"}),u&&(0,n.jsx)(l.default,{apiKey:t,movieId:d,close:g})]}):(0,n.jsx)("div",{className:"MovieDetails_loading",children:"Loading..."})})}},681:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(791),i=s(294),c=s(184);const o=e=>{let{apiKey:t,movieId:s}=e;const[o,r]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const e=await i.Z.get("https://api.themoviedb.org/3/movie/".concat(s,"/reviews?api_key=").concat(t));if(200!==e.status)throw new Error("Failed to fetch reviews");r(e.data.results)}catch(e){console.error("Error fetching reviews:",e.message)}})()}),[t,s]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Reviews"}),o&&o.length>0?(0,c.jsx)("ul",{children:o.map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)("p",{children:e.author}),(0,c.jsx)("p",{children:e.content})]},e.id)))}):(0,c.jsx)("p",{children:"No reviews available."})]})}},66:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(791),i=s(294),c=s(833),o=s(184);const r=()=>{const[e,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const e=await i.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=apiKey");200===e.status&&t(e.data.results)}catch(e){console.error("Error fetching trending movies:",e.message)}})()}),[]),(0,o.jsx)("div",{children:e.map((e=>(0,o.jsxs)("div",{children:[(0,o.jsx)(c.default,{apiKey:{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,movieId:e.id}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200",alt:e.title})]},e.id)))})}}}]);
//# sourceMappingURL=66.f4d5a5bd.chunk.js.map