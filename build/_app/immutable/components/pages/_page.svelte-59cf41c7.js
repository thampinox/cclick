import{S as $,i as ee,s as le,k,q as S,a as I,l as E,m as C,r as y,h as d,c as M,n as g,K as te,b as A,E as _,L as j,M as D,N as F,O as x,u as Q,B as V,P as ae,Q as se,J as W,R as ne}from"../../chunks/index-05edc85d.js";import{c as oe,g as re}from"../../chunks/stores-d9103465.js";function X(a,l,s){const c=a.slice();return c[9]=l[s],c}function Y(a){let l,s=a[9].name+"",c,h;return{c(){l=k("option"),c=S(s),this.h()},l(t){l=E(t,"OPTION",{});var i=C(l);c=y(i,s),i.forEach(d),this.h()},h(){l.__value=h=a[9],l.value=l.__value},m(t,i){A(t,l,i),_(l,c)},p(t,i){i&8&&s!==(s=t[9].name+"")&&Q(c,s),i&8&&h!==(h=t[9])&&(l.__value=h,l.value=l.__value)},d(t){t&&d(l)}}}function ce(a){var U;let l,s,c,h,t,i,u,f,L,T,m,b,p,w,O,G,z=((U=a[1])==null?void 0:U.name)+"",q,H,J,R,P=a[3],r=[];for(let e=0;e<P.length;e+=1)r[e]=Y(X(a,P,e));return{c(){l=k("label"),s=k("span"),c=S("comandante clicks"),h=I(),t=k("input"),i=I(),u=k("label"),f=k("span"),L=S("grinder"),T=I(),m=k("select");for(let e=0;e<r.length;e+=1)r[e].c();b=I(),p=k("h2"),w=S("~"),O=S(a[2]),G=I(),q=S(z),H=S(" clicks"),this.h()},l(e){l=E(e,"LABEL",{class:!0});var n=C(l);s=E(n,"SPAN",{class:!0});var v=C(s);c=y(v,"comandante clicks"),v.forEach(d),h=M(n),t=E(n,"INPUT",{type:!0,class:!0,placeholder:!0,max:!0}),n.forEach(d),i=M(e),u=E(e,"LABEL",{class:!0});var o=C(u);f=E(o,"SPAN",{class:!0});var B=C(f);L=y(B,"grinder"),B.forEach(d),T=M(o),m=E(o,"SELECT",{class:!0});var Z=C(m);for(let K=0;K<r.length;K+=1)r[K].l(Z);Z.forEach(d),o.forEach(d),b=M(e),p=E(e,"H2",{class:!0});var N=C(p);w=y(N,"~"),O=y(N,a[2]),G=M(N),q=y(N,z),H=y(N," clicks"),N.forEach(d),this.h()},h(){g(s,"class","text-sm font-medium text-gray-700"),g(t,"type","number"),g(t,"class","block mt-1 w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"),g(t,"placeholder","0"),g(t,"max","50"),g(l,"class","block"),g(f,"class","text-sm font-medium text-gray-700"),g(m,"class","block mt-1 w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"),a[1]===void 0&&te(()=>a[7].call(m)),g(u,"class","block mt-3"),g(p,"class","my-12 text-center")},m(e,n){A(e,l,n),_(l,s),_(s,c),_(l,h),_(l,t),j(t,a[0]),A(e,i,n),A(e,u,n),_(u,f),_(f,L),_(u,T),_(u,m);for(let v=0;v<r.length;v+=1)r[v].m(m,null);D(m,a[1]),A(e,b,n),A(e,p,n),_(p,w),_(p,O),_(p,G),_(p,q),_(p,H),J||(R=[F(t,"input",a[6]),F(m,"change",a[7])],J=!0)},p(e,[n]){var v;if(n&1&&x(t.value)!==e[0]&&j(t,e[0]),n&8){P=e[3];let o;for(o=0;o<P.length;o+=1){const B=X(e,P,o);r[o]?r[o].p(B,n):(r[o]=Y(B),r[o].c(),r[o].m(m,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=P.length}n&10&&D(m,e[1]),n&4&&Q(O,e[2]),n&2&&z!==(z=((v=e[1])==null?void 0:v.name)+"")&&Q(q,z)},i:V,o:V,d(e){e&&d(l),e&&d(i),e&&d(u),ae(r,e),e&&d(b),e&&d(p),J=!1,se(R)}}}function ie(a,l,s){let c,h,t,i;W(a,oe,b=>s(5,t=b)),W(a,re,b=>s(3,i=b));let u,f;const L=b=>b||0;function T(){u=x(this.value),s(0,u)}function m(){f=ne(this),s(1,f)}return a.$$.update=()=>{a.$$.dirty&35&&s(4,c=L(u)*t/L(f==null?void 0:f.clickSizeInMm)),a.$$.dirty&16&&s(2,h=Math.round(c))},[u,f,h,i,c,t,T,m]}class fe extends ${constructor(l){super(),ee(this,l,ie,ce,le,{})}}export{fe as default};
