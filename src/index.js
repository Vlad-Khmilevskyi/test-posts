const API_URL = 'https://rest-api-production-fc73.up.railway.app/api/v1/posts';

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch(API_URL)
    .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `
          <li>
            <p><b>Name</b>: ${user.title}</p>
            <p><b>Email</b>: ${user.description}</p>
            <p><b>Company</b>: ${user.text}</p>
          </li>
      `;
    })
    .join("");
  userList.innerHTML = markup;
}