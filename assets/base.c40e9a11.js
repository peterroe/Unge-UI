import{d as e,I as l,o as t,c as o,w as s,u as n,e as a}from"./app.07217aa6.js";import{l as d,s as u,_ as r,b as c}from"./index.b265de32.js";let i,p=0;const f=t=>{if(console.log("start"),1==p)return;p=1,i=e(d,t,null);const o=document.createElement("div");l(i,o),document.body.appendChild(o.firstElementChild)},m=()=>{p=0,i.component.exposed.endWidth()},_=a(" #965874 "),C=a(" #108ee9 "),k=a(" red "),b={setup(l){const a=e=>{f({color:e}),setTimeout((()=>{m()}),1e3)};return(l,d)=>(t(),o("div",null,[e(n(u),null,{default:s((()=>[e(n(r),{onClick:d[0]||(d[0]=e=>a("#965874")),color:"#965874"},{default:s((()=>[_])),_:1}),e(n(r),{onClick:d[1]||(d[1]=e=>a("#108ee9")),color:"#108ee9"},{default:s((()=>[C])),_:1}),e(n(r),{onClick:d[2]||(d[2]=e=>a("red")),color:"red"},{default:s((()=>[k])),_:1})])),_:1})]))}},v=a(" Open "),x=a(" Close "),h={setup(l){const a=()=>{f()},d=()=>{m()};return(l,r)=>(t(),o("div",null,[e(n(u),null,{default:s((()=>[e(n(c),{type:"success",onClick:a},{default:s((()=>[v])),_:1}),e(n(c),{type:"danger",onClick:d},{default:s((()=>[x])),_:1})])),_:1})]))}},y=a(" Example "),E={setup(l){const a=()=>{f(),setTimeout((()=>{m()}),1e3)};return(l,d)=>(t(),o("div",null,[e(n(c),{onClick:a},{default:s((()=>[y])),_:1})]))}};export{E as _,h as a,b};
