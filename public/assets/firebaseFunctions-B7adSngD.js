import{a as d,q as a,w as n,c,g as i,k as p,l as u,m as w,d as l,u as S,n as y}from"./firebase-DMO3EB_U.js";import{g as m,a as f,r as q}from"./index.esm2017-BAAKErde.js";async function P(e){const o=c(l,"SHOPPING_LIST"),t=a(o,n("owner","==",e)),r=[];try{(await i(t)).forEach(g=>{const h=g.data();r.push(h)})}catch(s){console.error("Error getting documents: ",s)}return r}const L=async e=>{try{const o=m();return await f(q(o,e))}catch(o){throw console.error("Error downloading image: ",o),o}},D=(e,o)=>p(d,u).then(()=>(console.log("login",u),w(d,e,o))).catch(t=>{throw console.log("errorCode",t.code),console.log("errorMessage",t.message),t}),U=async(e,o)=>{try{const t=await i(a(c(l,"SHOPPING_LIST"),n("id","==",e))),r=t.docs[0].ref;await S(r,{quantity:t.docs[0].data().quantity+o}),console.log("Document updated with ID: ",r.id)}catch(t){console.error("Error updating document: ",t)}},R=async e=>{try{const t=(await i(a(c(l,"SHOPPING_LIST"),n("id","==",e)))).docs[0].ref;await y(t)}catch(o){console.error("Error deleting document: ",o)}},b=async()=>{const e=d.currentUser;if(!e)throw new Error("User not found");const o=a(c(l,"USER"),n("email","==",e.email)),t=await i(o);let r=!1;return t.forEach(s=>{r=s.data().isSeller}),r};export{P as a,R as b,b as c,L as d,D as l,U as u};
