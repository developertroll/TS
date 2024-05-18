import{j as t,d as w,r as p,u as P}from"./index-BzRYe7T0.js";import{C as d,a as u,b as l}from"./card-TTWbz8aG.js";import{d as y}from"./firebaseFunctions-B7adSngD.js";import{i as S,j as I,d as m,c as j,q as C,w as b,g as v,b as D,s as E,a as N}from"./firebase-DMO3EB_U.js";import{B as L}from"./button-cc73kDZo.js";import"./index.esm2017-BAAKErde.js";const T=async(r,s,e)=>{const a=`PRODUCT/${r}/${s}`;console.log(a);const c=await y(a);let o,n;switch(e){case"original":o="auto",n="auto";break;case"normal":o="500px",n="auto";break;case"thumbnail":o="100px",n="auto";break}return t.jsx("img",{src:c,alt:s,style:{width:o,height:n}},a)};async function k(r){const s=S(m,"PRODUCT",r),e=await I(s);return e.exists()?{id:e.id,...e.data()}:{}}async function q(r){const s=j(m,"SHOPPING_LIST"),e=C(s,b("owner","==",r)),a=[];try{(await v(e)).forEach(o=>{a.push(o.data())})}catch(c){console.error("Error getting documents: ",c)}return a}async function O(r,s){try{const e=await q(s),a=e&&e.length?e.length+1:1;await D(j(m,"SHOPPING_LIST"),{...r,owner:s,quantity:a,date:E()})}catch(e){throw console.error("Error adding product: ",e),e}}const $=()=>{const{id:r}=w(),[s,e]=p.useState(null),[a,c]=p.useState([]),o=P(),n=async()=>{var h;s&&await O(s,((h=N.currentUser)==null?void 0:h.uid)??"").then(()=>{console.log("장바구니에 추가되었습니다."),o("/product")})};return p.useEffect(()=>{(async()=>{const i=await k(r??"");if(i&&"productImage"in i){console.log(i.productImage),e(i);const g=await Promise.all(i.productImage.map(f=>{var x;return T(((x=i.id)==null?void 0:x.toString())??"",f,"normal")}));console.log(g),c(g)}})()},[r]),s===null?t.jsx("div",{children:"상품을 불러오는 중입니다."}):t.jsxs("div",{className:"flex justify-between",children:[t.jsx("div",{className:"w-4/5",children:t.jsxs(d,{children:[t.jsx(u,{children:a}),t.jsxs(l,{children:[t.jsx("h2",{children:s.productName}),t.jsxs(d,{children:[t.jsx(u,{children:"상세 정보"}),t.jsx(l,{children:t.jsx("p",{children:s.productDescription})})]}),t.jsxs(d,{children:[t.jsx(u,{children:"카테고리"}),t.jsx(l,{children:t.jsx("p",{children:s.productCategory})})]})]})]})}),t.jsxs("div",{className:"w-1/5",children:[t.jsxs(d,{children:[t.jsx(u,{children:"가격"}),t.jsx(l,{children:t.jsx("p",{children:s.productPrice})})]}),t.jsx(d,{children:t.jsx(l,{children:t.jsx(L,{onClick:n,children:"장바구니에 담기"})})})]})]})};export{$ as default};
