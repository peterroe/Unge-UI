import{o as e,c as a,d,w as s,u,e as l,h as t,V as o,z as c,k as f,D as n}from"./app.89ad36d6.js";import{e as v,f as p,g as _,_ as i}from"./index.73ee4ed8.js";const r=l("多选框"),h=l("多选框"),k={setup:l=>(l,t)=>(e(),a("div",null,[d(u(v),{disabled:"",checked:!0},{default:s((()=>[r])),_:1}),d(u(v),{disabled:""},{default:s((()=>[h])),_:1})]))},m=l("VueJs"),V=l("ReactJs"),b=l("NodeJs"),j={setup(r){let h=t(["Vue","Node"]);return(t,r)=>(e(),a("div",null,[d(u(p),{value:u(h),"onUpdate:value":r[0]||(r[0]=e=>o(h)?h.value=e:h=e)},{default:s((()=>[d(u(v),{value:"Vue"},{default:s((()=>[m])),_:1}),d(u(v),{value:"React"},{default:s((()=>[V])),_:1}),d(u(v),{value:"Node"},{default:s((()=>[b])),_:1})])),_:1},8,["value"]),d(u(_)),u(h).length?(e(),c(u(i),{key:0},{default:s((()=>[l("值："+n(u(h).join(" ｜ ")),1)])),_:1})):f("",!0)]))}},J=l("多选框"),N={setup(l){let c=t(!1);return(l,t)=>(e(),a("div",null,[d(u(v),{checked:u(c),"onUpdate:checked":t[0]||(t[0]=e=>o(c)?c.value=e:c=e)},{default:s((()=>[J])),_:1},8,["checked"])]))}};export{N as _,j as a,k as b};