// 1. What element do we want to listen for events on? (button, form, checkbox, etc)
const toggleSwitch = document.querySelector("#toggle-dark-mode")
// 2. What kind of event are we listening for? (click, submit, scroll, etc)
toggleSwitch.addEventListener("click", function() {
  // 3. What do we want to happen? (What function do we want to run)
  document.body.classList.toggle("dark-mode")
})

const animalForm = document.querySelector("#animal-form")

animalForm.addEventListener("submit", function(event) {
  // Step 0: ALWAYS ADD THIS FOR FORM SUBMITS!!!
  event.preventDefault()

  // Step 1: get user input from the input fields

  // option 1 for getting form data: 
  // use query selector to find each input field and access its value
  // const name = event.target.querySelector("[name='name']").value
  // const imageUrl = event.target.querySelector("[name='image_url']").value
  // const description = event.target.querySelector("[name='description']").value
  
  // option 2 for getting form data:
  // use the name attribute of the input field to access that input field from the form
  // for example, this input field: <input type="text" name="image_url" />
  // has a name attribute of "image_url"
  // `event.target` is the form
  // `event.target.image_url` is the input field with the name of `image_url`
  // `event.target.image_url.value` is the text the user entered into that input field

  const name = event.target.name.value
  const imageUrl = event.target.image_url.value
  const description = event.target.description.value

  const animalObj = {
    name: name,
    imageUrl: imageUrl,
    description: description,
    donations: 0
  }

  // Step 2: slap it on the DOM
  renderOneAnimal(animalObj)

  // (optional) Step 3: clear the input fields
  event.target.reset()
})


// Using DOMContentLoaded is an alternative to using `defer` in the script tag
// document.addEventListener("DOMContentLoaded", function() {
//   const header = document.querySelector("#menu")
//   console.log(header)
// })



// /********** Code from DOM Lecture **********/ 
function renderOneAnimal(animalObj) {
  // step 1. create the outer element using createElement (& assign necessary attributes)
  const card = document.createElement("li")
  card.className = "card"

  // step 2. use innerHTML to create all of its children
  card.innerHTML = `
  <div class="image">
    <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
  </div>
  <div class="content">
    <h4>${animalObj.name}</h4>
    <p class="description">${animalObj.description}</p>
  </div>
  <button class="button donate-button" data-action="donate">
    $<span class="donation-count">${animalObj.donations}</span> Donated
  </button>
  `

  // step 3. slap it on the DOM!
  document.querySelector("#animal-list").append(card)
}

function renderAllAnimals(animalData) {
  animalData.forEach(renderOneAnimal)
}

// call renderAllAnimals with the animalData variable from data.js
renderAllAnimals(animalData)