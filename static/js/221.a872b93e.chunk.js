"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var s=r(791),a=r(184);const c=()=>{const[e,t]=(0,s.useState)(""),[r,c]=(0,s.useState)([]);return(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Search Movies"}),(0,a.jsx)("input",{type:"text",placeholder:"Search movies...",value:e,onChange:e=>t(e.target.value)}),(0,a.jsx)("button",{onClick:async()=>{try{const t=await fetch("https://api.themoviedb.org/3/search/movie?api_key=264ec641025fff32d6f5c8134722997b&query=".concat(e));if(!t.ok)throw new Error("Failed to fetch search results");const r=await t.json();c(r.results)}catch(t){console.error("Error fetching search results:",t.message)}},children:"Search"}),r.map((e=>(0,a.jsx)("div",{children:e.title},e.id)))]})}}}]);
//# sourceMappingURL=221.a872b93e.chunk.js.map