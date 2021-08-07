const userWrapper = document.querySelector('.user-wrapper')

export function defaultUser() {
  userWrapper.innerHTML = `
    <div class="user-card">
      <div class="user-column">
        <img class="user-image" src="/image.jpg" alt="user image">
        <a class="user-link" href="#">View Profile</a>
      </div>
      <div class="user-column">
        <ul class="tooltip-list">
          <li class="tooltip-list-item tooltip--yellow"><strong>Followers:</strong>  0</li>
          <li class="tooltip-list-item tooltip--blue"><strong>Following:</strong>  0</li>
          <li class="tooltip-list-item tooltip--red"><strong>Public Repos:</strong>  10</li>
        </ul>
        <ul class="user-list">
          <li class="user-list-item"><strong>Company:</strong>  Null</li>
          <li class="user-list-item">
            <strong>Website:</strong> 
            <a class="item-link" href="#">https://www.website.com</a>
          </li>
          <li class="user-list-item"><strong>Location:</strong> CA</li>
        </ul>
      </div>
    </div>
  `
}