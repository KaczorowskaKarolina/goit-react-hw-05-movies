"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[833],{833:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var s=t(791),i=t(689),c=t(294),l=t(184);const o=e=>{let{apiKey:a,baseImageUrl:t}=e;const{movieId:o}=(0,i.UO)(),[r,n]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{try{const e=await c.Z.get("https://api.themoviedb.org/3/movie/".concat(o,"?api_key=").concat(a));200===e.status&&n(e.data)}catch(e){console.error("Error fetching movie details:",e.message)}})()}),[a,o]),(0,l.jsx)("div",{className:"MovieDetails_div",children:r?(0,l.jsxs)("div",{className:"MovieDetails_content",children:[(0,l.jsx)("h2",{className:"MovieDetails_h2",children:r.title}),(0,l.jsx)("img",{className:"MovieDetails_img",src:"".concat(t).concat(r.poster_path),alt:r.title}),(0,l.jsx)("p",{className:"MovieDetails_p",children:r.overview})]}):(0,l.jsx)("div",{className:"MovieDetails_loading",children:"Loading..."})})}}}]);
//# sourceMappingURL=833.57d3e2b4.chunk.js.map