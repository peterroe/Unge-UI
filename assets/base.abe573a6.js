import{h as e,o as l,c as a,d as t,w as u,u as s,V as n,e as i,$ as o,b as v}from"./app.89ad36d6.js";import{s as d,h as f,r,j as c,c as b,i as p,m as _}from"./index.73ee4ed8.js";const w=i("bounceInDown"),m=i("rotateInDownLeft"),C=i("flipInY"),D=i("fadeOut"),I=i("rotateOutDownLeft"),k=i("flipOutX"),L=i("不同过渡动画"),O=i(" Content "),U={setup(i){let o=e("rotateInDownLeft"),v=e("rotateOutDownLeft"),p=e(!1);const _=()=>{p.value=!0};return(e,i)=>(l(),a("div",null,[t(s(d),{vertical:""},{default:u((()=>[t(s(r),{value:s(o),"onUpdate:value":i[0]||(i[0]=e=>n(o)?o.value=e:o=e)},{default:u((()=>[t(s(c),{value:"bounceInDown"},{default:u((()=>[w])),_:1}),t(s(c),{value:"rotateInDownLeft"},{default:u((()=>[m])),_:1}),t(s(c),{value:"flipInY"},{default:u((()=>[C])),_:1})])),_:1},8,["value"]),t(s(r),{value:s(v),"onUpdate:value":i[1]||(i[1]=e=>n(v)?v.value=e:v=e)},{default:u((()=>[t(s(c),{value:"fadeOut"},{default:u((()=>[D])),_:1}),t(s(c),{value:"rotateOutDownLeft"},{default:u((()=>[I])),_:1}),t(s(c),{value:"flipOutX"},{default:u((()=>[k])),_:1})])),_:1},8,["value"]),t(s(b),{onClick:_},{default:u((()=>[L])),_:1})])),_:1}),t(s(f),{visible:s(p),"onUpdate:visible":i[2]||(i[2]=e=>n(p)?p.value=e:p=e),"enter-class":s(o),"leave-class":s(v)},{default:u((()=>[O])),_:1},8,["visible","enter-class","leave-class"])]))}},h=i("自定义Icon"),g=i(" 可以自定义右上角的Icon "),j={setup(i){let v=e(!1);const d=()=>{v.value=!0};return(e,i)=>(l(),a("div",null,[t(s(b),{onClick:d},{default:u((()=>[h])),_:1}),t(s(f),{visible:s(v),"onUpdate:visible":i[0]||(i[0]=e=>n(v)?v.value=e:v=e)},{default:u((()=>[g])),icon:u((()=>[t(s(p),{size:20},{default:u((()=>[t(s(o))])),_:1})])),_:1},8,["visible"])]))}},x=i("自定义底部内容"),X=i(" this is dialog body "),Y=i("确定"),y={setup(i){let o=e(!1);const v=()=>{o.value=!0};return(e,i)=>(l(),a("div",null,[t(s(b),{onClick:v},{default:u((()=>[x])),_:1}),t(s(f),{visible:s(o),"onUpdate:visible":i[0]||(i[0]=e=>n(o)?o.value=e:o=e),title:"基础弹窗"},{default:u((()=>[X])),footer:u((()=>[t(s(b),{deep:""},{default:u((()=>[Y])),_:1})])),_:1},8,["visible"])]))}},z=i("触发确定和关闭事件"),A=i(" Let life be beautiful like summer flowers "),V=v("br",null,null,-1),$=i(" And Death like autumn leaves "),q=v("br",null,null,-1),B=v("br",null,null,-1),E=i(" 使生如夏花之绚烂，死如秋叶之静美 "),F={setup(i){let o=e(!1);const v=()=>{o.value=!0},d=()=>{_.success("用户点击确认")},r=()=>{_.info("用户点击取消")},c=()=>{_.warning("用户点击关闭")};return(e,i)=>(l(),a("div",null,[t(s(b),{onClick:v},{default:u((()=>[z])),_:1}),t(s(f),{visible:s(o),"onUpdate:visible":i[0]||(i[0]=e=>n(o)?o.value=e:o=e),onConfirm:d,onCancel:r,onClose:c},{default:u((()=>[A,V,$,q,B,E])),_:1},8,["visible"])]))}},G=i("打开弹窗"),H=i(" this is dialog "),J={setup(i){let o=e(!1);const v=()=>{o.value=!0};return(e,i)=>(l(),a("div",null,[t(s(b),{onClick:v},{default:u((()=>[G])),_:1}),t(s(f),{visible:s(o),"onUpdate:visible":i[0]||(i[0]=e=>n(o)?o.value=e:o=e),title:"基础弹窗"},{default:u((()=>[H])),_:1},8,["visible"])]))}};export{J as _,F as a,y as b,j as c,U as d};