const t=document.querySelector(".btn"),n=document.querySelector(".user-list");t.addEventListener("click",(()=>{fetch("https://rest-api-production-fc73.up.railway.app/api/v1/posts").then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>function(t){const e=t.map((t=>`\n          <li>\n            <p><b>Name</b>: ${t.title}</p>\n            <p><b>Email</b>: ${t.description}</p>\n            <p><b>Company</b>: ${t.text}</p>\n          </li>\n      `)).join("");n.innerHTML=e}(t))).catch((t=>console.log(t)))}));
//# sourceMappingURL=index.932696f8.js.map