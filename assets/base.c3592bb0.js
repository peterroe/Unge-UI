import{o as n,c as t,d as a,w as e,u as s,e as l,bE as o}from"./app.b49727bf.js";import{s as u,b as c,m as i}from"./index.86b1883e.js";const d=l("自定义Icon"),r=l("自定义持续时间"),f=l("限制最大数量"),p={setup(l){const p=()=>{i({text:"自定义不同的Icon",icon:o})},_=()=>{i({text:"自定义持续时间",duration:1e3})},C=()=>{i({text:"最大支持三个",icon:"danger",maxCount:3})};return(l,o)=>(n(),t("div",null,[a(s(u),null,{default:e((()=>[a(s(c),{onClick:p},{default:e((()=>[d])),_:1}),a(s(c),{onClick:_},{default:e((()=>[r])),_:1}),a(s(c),{onClick:C},{default:e((()=>[f])),_:1})])),_:1})]))}},_=l("成功"),C=l("危险"),k=l("提示"),m=l("警告"),x={setup(l){const o=()=>{i.success("这是一条成功信息")},d=()=>{i.danger("这是一条危险信息")},r=()=>{i.info("这是一条正常信息")},f=()=>{i.warning("这是一条警告信息")};return(l,i)=>(n(),t("div",null,[a(s(u),null,{default:e((()=>[a(s(c),{type:"success",onClick:o},{default:e((()=>[_])),_:1}),a(s(c),{type:"danger",onClick:d},{default:e((()=>[C])),_:1}),a(s(c),{type:"info",onClick:r},{default:e((()=>[k])),_:1}),a(s(c),{type:"warning",onClick:f},{default:e((()=>[m])),_:1})])),_:1})]))}};export{x as _,p as a};
