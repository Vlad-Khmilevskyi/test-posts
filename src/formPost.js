const POST = 'https://rest-api-production-fc73.up.railway.app/api/v1/posts';
const createPostForm = document.getElementById("createPostForm");

createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const text = document.getElementById("text").value;

  // Перевірка, чи всі поля форми заповнені
  if (!title || !description || !text) {
    // markEmptyFields();
    return;
  }

  const newPost = {
    title: title,
    description: description,
    text: text
  };

  createPost(newPost)
    .then((post) => {
      // Додаємо новий пост до списку без перезавантаження сторінки
      appendPostToList(post);
      // Очистка полів форми після успішного створення поста
      createPostForm.reset();
    })
    .catch((error) => console.log(error));
});

function createPost(postData) {
  return fetch(POST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function appendPostToList(post) {
  const postItem = document.createElement("li");
  postItem.setAttribute("data-post-id", post.id);
  postItem.innerHTML = `
    <p>${post.title}</p>
    <p>${post.description}</p>
    <p>${post.text}</p>
    <button type="button" class="btn remove-btn">Remove</button>
  `;
  userList.appendChild(postItem);

  // Додаємо обробник події для кнопки "Remove" для нового поста
  const removeButton = postItem.querySelector(".remove-btn");
  removeButton.addEventListener("click", () => {
    const postId = postItem.dataset.postId;
    removePost(postId);
  });
}

// function markEmptyFields() {
//   const titleInput = document.getElementById("title");
//   const descriptionInput = document.getElementById("description");
//   const textInput = document.getElementById("text");

//   if (!titleInput.value) {
//     titleInput.style.borderColor = "1px solid red";
//   } else {
//     titleInput.style.border = "1px solid initial";
//   }

//   if (!descriptionInput.value) {
//     descriptionInput.style.borderColor = "1px solid red";
//   } else {
//     descriptionInput.style.border = "1px solid initial";
//   }

//   if (!textInput.value) {
//     textInput.style.borderColor = "1px solid red";
//   } else {
//     textInput.style.border = "1px solid initial";
//   }
// }