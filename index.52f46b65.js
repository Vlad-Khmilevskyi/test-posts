var POST="https://rest-api-production-fc73.up.railway.app/api/v1/posts",createPostForm=document.getElementById("createPostForm");function createPost(t){return fetch(POST,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function appendPostToList(t){var e=document.createElement("li");e.setAttribute("data-post-id",t.id),e.innerHTML="\n    <p>".concat(t.title,"</p>\n    <p>").concat(t.description,"</p>\n    <p>").concat(t.text,'</p>\n    <button type="button" class="btn remove-btn">Remove</button>\n  '),userList.appendChild(e),e.querySelector(".remove-btn").addEventListener("click",(function(){var t=e.dataset.postId;removePost(t)}))}createPostForm.addEventListener("submit",(function(t){t.preventDefault();var e=document.getElementById("title").value,n=document.getElementById("description").value,o=document.getElementById("text").value;e&&n&&o&&createPost({title:e,description:n,text:o}).then((function(t){appendPostToList(t),createPostForm.reset()})).catch((function(t){return console.log(t)}))}));
//# sourceMappingURL=index.52f46b65.js.map