import { defaultUser } from './default-user'
import { user } from './user'

// getting input element and giving it an event
const input = document.querySelector('#input')
input.addEventListener('keyup', (event) => {
  if (input.value) {
    getUser(event.target.value)
  } else {
    defaultUser()
  }
})

// ------------------------------------------------------
// function will call the github api and get the username
// depending on the letter that is being passed in
// ------------------------------------------------------
async function getUser(letter) {
  await fetch(`https://api.github.com/users/${letter}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    },
  })
    .then((response) => response.json())
    .then((data) => user(data))
    .catch((error) => console.log(error))
}
