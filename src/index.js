const API_URL = 'https://rest-api-production-fc73.up.railway.app/api/v1/posts';
const userList = document.querySelector(".user-list");

// Отримуємо список постів з сервера та відображаємо їх у списку при завантаженні сторінки
fetchUsers()
  .then((posts) => renderUserList(posts))
  .catch((error) => console.log(error));

function fetchUsers() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

function renderUserList(posts) {
  const markup = posts
    .map((post) => {
      return `
        <li data-post-id="${post.id}">
          <p class="post-title">${post.title}</p>
          <p class="post-description">${post.description}</p>
          <p class="post-text">${post.text}</p>
          <button type="button" class="btn remove-btn"><span class="btn_text">Remove</span></button>
        </li>
      `;
    })
    .join("");
  userList.innerHTML = markup;

  // Додаємо обробник події для кнопки "Remove"
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const postId = button.parentElement.dataset.postId;
      removePost(postId);
    });
  });
}

function removePost(postId) {
  fetch(`${API_URL}/${postId}`, {
    method: 'DELETE'
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    // Видаляємо пост зі списку без перезавантаження сторінки
    removePostFromList(postId);
  })
  .catch((error) => console.log(error));
}

function removePostFromList(postId) {
  const postItem = userList.querySelector(`li[data-post-id="${postId}"]`);
  if (postItem) {
    postItem.remove();
  }
}
