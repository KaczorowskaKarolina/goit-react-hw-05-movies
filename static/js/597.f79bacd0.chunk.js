"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var c=a(791),s=a(184);const r=e=>{let{apiKey:t,movieId:a}=e;const[r,o]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat(t));if(!e.ok)throw new Error("Failed to fetch cast details");const c=await e.json();o(c.cast)}catch(e){console.error("Error fetching cast details:",e.message)}})()}),[a,t]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Cast"}),r.map((e=>(0,s.jsx)("div",{children:e.name},e.id)))]})}}}]);
//# sourceMappingURL=597.f79bacd0.chunk.js.map