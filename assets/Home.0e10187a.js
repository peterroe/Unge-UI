import{m as e,bF as t,bG as a,i as s,u as l,o,c as r,b as i,k as n,D as c,z as u,bH as v,L as d,M as f,r as m,d as k,j as p}from"./app.b49727bf.js";const h={key:0,class:"home-hero"},y={key:0,class:"figure"},g=["src","alt"],x={key:1,id:"main-title",class:"title"},b={key:2,class:"description"};var $=e({setup(e){const d=t(),f=a(),m=s((()=>f.value.heroImage||k.value||$.value||I.value)),k=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||d.value.title)),$=s((()=>null!==f.value.tagline)),_=s((()=>f.value.tagline||d.value.description)),I=s((()=>f.value.actionLink&&f.value.actionText)),T=s((()=>f.value.altActionLink&&f.value.altActionText));return(e,t)=>l(m)?(o(),r("header",h,[e.$frontmatter.heroImage?(o(),r("figure",y,[i("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,g)])):n("",!0),l(k)?(o(),r("h1",x,c(l(p)),1)):n("",!0),l($)?(o(),r("p",b,c(l(_)),1)):n("",!0),l(I)?(o(),u(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):n("",!0),l(T)?(o(),u(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});$.__scopeId="data-v-4aeb51c6";const _={key:0,class:"home-features"},I={class:"wrapper"},T={class:"container"},A={class:"features"},L={key:0,class:"title"},j={key:1,class:"details"};var w=e({setup(e){const t=a(),u=s((()=>t.value.features&&t.value.features.length>0)),v=s((()=>t.value.features?t.value.features:[]));return(e,t)=>l(u)?(o(),r("div",_,[i("div",I,[i("div",T,[i("div",A,[(o(!0),r(d,null,f(l(v),((e,t)=>(o(),r("section",{key:t,class:"feature"},[e.title?(o(),r("h2",L,c(e.title),1)):n("",!0),e.details?(o(),r("p",j,c(e.details),1)):n("",!0)])))),128))])])])])):n("",!0)}});w.__scopeId="data-v-793c2722";const z={},B={key:0,class:"footer"},C={class:"container"},D={class:"text"};z.render=function(e,t){return e.$frontmatter.footer?(o(),r("footer",B,[i("div",C,[i("p",D,c(e.$frontmatter.footer),1)])])):n("",!0)},z.__scopeId="data-v-41020908";const F={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};var H=e({setup:e=>(e,t)=>{const a=m("Content");return o(),r("main",F,[k($),p(e.$slots,"hero"),k(w),i("div",G,[k(a)]),p(e.$slots,"features"),k(z),p(e.$slots,"footer")])}});H.__scopeId="data-v-cc1f894c";export default H;