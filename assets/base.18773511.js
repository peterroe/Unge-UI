import{h as e,o as l,c as a,d as t,w as u,u as s,Y as n,e as i,Z as o,b as v}from"./app.b49727bf.js";import{s as f,f as d,r,g as b,b as c,i as p,m as _}from"./index.7cf4699a.js";const w=i("bounceInDown"),m=i("rotateInDownLeft"),C=i("flipInY"),D=i("fadeOut"),I=i("rotateOutDownLeft"),k=i("flipOutX"),L=i("不同过渡动画"),O=i(" Content "),U={setup(i){let o=e("rotateInDownLeft"),v=e("rotateOutDownLeft"),p=e(!1);const _=()=>{p.value=!0};return(e,i)=>(l(),a("div",null,[t(s(f),{vertical:""},{default:u((()=>[t(s(r),{value:s(o),"onUpdate:value":i[0]||(i[0]=e=>n(o)?o.value=e:o=e)},{default:u((()=>[t(s(b),{value:"bounceInDown"},{default:u((()=>[w])),_:1}),t(s(b),{value:"rotateInDownLeft"},{default:u((()=>[m])),_:1}),t(s(b),{value:"flipInY"},{default:u((()=>[C])),_:1})])),_:1},8,["value"]),t(s(r),{value:s(v),"onUpdate:value":i[1]||(i[1]=e=>n(v)?v.value=e:v=e)},{default:u((()=>[t(s(b),{value:"fadeOut"},{default:u((()=>[D])),_:1}),t(s(b),{value:"rotateOutDownLeft"},{default:u((()=>[I])),_:1}),t(s(b),{value:"flipOutX"},{default:u((()=>[k])),_:1})])),_:1},8,["value"]),t(s(c),{onClick:_},{default:u((()=>[L])),_:1})])),_:1}),t(s(d),{visible:s(p),"onUpdate:visible":i[2]||(i[2]=e=>n(p)?p.value=e:p=e),"enter-class":s(o),"leave-class":s(v)},{default:u((()=>[O])),_:1},8,["visible","enter-class","leave-class"])]))}},g=i("自定义Icon"),h=i(" 可以自定义右上角的Icon "),Y={setup(i){let v=e(!1);const f=()=>{v.value=!0};return(e,i)=>(l(),a("div",null,[t(s(c),{onClick:f},{default:u((()=>[g])),_:1}),t(s(d),{visible:s(v),"onUpdate:visible":i[0]||(i[0]=e=>n(v)?v.value=e:v=e)},{default:u((()=>[h])),icon:u((()=>[t(s(p),{size:20},{default:u((()=>[t(s(o))])),_:1})])),_:1},8,["visible"])]))}},j=i("自定义底部内容"),x=i(" this is dialog body "),X=i("确定"),y={setup(i){let o=e(!1);const v=()=>{o.value=!0};return(e,i)=>(l(),a("div",null,[t(s(c),{onClick:v},{default:u((()=>[j])),_:1}),t(s(d),{visible:s(o),"onUpdate:visible":i[0]||(i[0]=e=>n(o)?o.value=e:o=e),title:"基础弹窗"},{default:u((()=>[x])),footer:u((()=>[t(s(c),{deep:""},{default:u((()=>[X])),_:1})])),_:1},8,["visible"])]))}},z=i("触发确定和关闭事件"),A=i(" Let life be beautiful like summer flowers "),Z=v("br",null,null,-1),q=i(" And Death like autumn leaves "),B=v("br",null,null,-1),E=v("br",null,null,-1),F=i(" 使生如夏花之绚烂，死如秋叶之静美 "),G={setup(i){let o=e(!1);const v=()=>{o.value=!0},f=()=>{_.success("用户点击确认")},r=()=>{_.info("用户点击取消")},b=()=>{_.warning("用户点击关闭")};return(e,i)=>(l(),a("div",null,[t(s(c),{onClick:v},{default:u((()=>[z])),_:1}),t(s(d),{visible:s(o),"onUpdate:visible":i[0]||(i[0]=e=>n(o)?o.value=e:o=e),onConfirm:f,onCancel:r,onClose:b},{default:u((()=>[A,Z,q,B,E,F])),_:1},8,["visible"])]))}},H=i("打开弹窗"),J=i(" this is dialog "),K={setup(i){let o=e(!1);const v=()=>{o.value=!0};return(e,i)=>(l(),a("div",null,[t(s(c),{onClick:v},{default:u((()=>[H])),_:1}),t(s(d),{visible:s(o),"onUpdate:visible":i[0]||(i[0]=e=>n(o)?o.value=e:o=e),title:"基础弹窗"},{default:u((()=>[J])),_:1},8,["visible"])]))}};export{K as _,G as a,y as b,Y as c,U as d};