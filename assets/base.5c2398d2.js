import{h as t,o as e,c as a,d as r,u as n,Y as l}from"./app.07217aa6.js";import{k as u,p as o,m as s}from"./index.b265de32.js";const i={setup(s){let i=t(2),d=t(new Array(10).fill().map((t=>new Array(4).fill().map((t=>({id:Math.random().toString(32).slice(2,6),sex:Math.random()>.5?"girl":"boy",age:Math.floor(50*Math.random())})))))),c=[{title:"Id",key:"id"},{title:"Age",key:"age",align:"center"},{title:"Sex",key:"sex",width:"500px"}];return(t,s)=>(e(),a("div",null,[r(n(u),{data:n(d)[n(i)],column:n(c)},null,8,["data","column"]),r(n(o),{current:n(i),"onUpdate:current":s[0]||(s[0]=t=>l(i)?i.value=t:i=t),total:100},null,8,["current"])]))}},d={setup(u){let s=t(8);return(t,u)=>(e(),a("div",null,[r(n(o),{current:n(s),"onUpdate:current":u[0]||(u[0]=t=>l(s)?s.value=t:s=t),total:200,count:3},null,8,["current"])]))}},c={setup(u){let i=t(4);const d=t=>{s.info("当前页改变"+t)};return(t,u)=>(e(),a("div",null,[r(n(o),{current:n(i),"onUpdate:current":u[0]||(u[0]=t=>l(i)?i.value=t:i=t),total:100,onChange:d},null,8,["current"])]))}};export{c as _,d as a,i as b};
