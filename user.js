const userWrapper = document.querySelector('.user-wrapper')

// inserting user template into the user wrapper
export function user(user) {
  userWrapper.innerHTML = `
    <div class="user-card">
      <div class="user-column">
        <img class="user-image" src="${user.avatar_url}" alt="user image">
        <a class="user-link" href="${user.url}">View Profile</a>
      </div>
      <div class="user-column">
        <ul class="tooltip-list">
          <li class="tooltip-list-item tooltip--yellow"><strong>Followers:</strong> ${user.followers}</li>
          <li class="tooltip-list-item tooltip--blue"><strong>Following:</strong> ${user.following}</li>
          <li class="tooltip-list-item tooltip--red"><strong>Public Repos:</strong> ${user.public_repos}</li>
        </ul>
        <ul class="user-list">
          <li class="user-list-item"><strong>Company:</strong> ${user.company}</li>
          <li class="user-list-item">
            <strong>Website:</strong>
            <a class="item-link" href="${user.blog}" target="_blank" rel="noopener noreferrer">${user.blog}</a>
          </li>
          <li class="user-list-item"><strong>Location:</strong> ${user.location}</li>
        </ul>
      </div>
    </div>
  `
}