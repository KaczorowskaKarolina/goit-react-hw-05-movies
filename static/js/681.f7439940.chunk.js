"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(791),c=r(184);const o=e=>{let{apiKey:t,movieId:r}=e;const[o,a]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(t));if(!e.ok)throw new Error("Failed to fetch reviews");const s=await e.json();a(s.results)}catch(e){console.error("Error fetching reviews:",e.message)}})()}),[t,r]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"Reviews"}),o.map((e=>(0,c.jsx)("div",{children:e.content},e.id)))]})}}}]);
//# sourceMappingURL=681.f7439940.chunk.js.map