/** DOM ELEMENTS  **/

const toggleSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")

/**  EVENT LISTENERS  **/

toggleSwitch.addEventListener("click", handleToggleDarkMode)

animalForm.addEventListener("submit", handleAnimalFormSubmit)

/** EVENT HANDLERS  **/

function handleToggleDarkMode() {
  document.body.classList.toggle("dark-mode")
}

function handleAnimalFormSubmit(event) {
  event.preventDefault()
  const name = event.target.name.value
  const imageUrl = event.target.image_url.value
  const description = event.target.description.value
  const animalObj = { name: name, imageUrl: imageUrl, description: description, donations: 0 }
  renderOneAnimal(animalObj)
  event.target.reset()
}

/** RENDER FUNCTIONS  **/

function renderOneAnimal(animalObj) {
  const card = document.createElement("li")
  card.className = "card"

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

  document.querySelector("#animal-list").append(card)
}

function renderAllAnimals(animalData) {
  animalData.forEach(renderOneAnimal)
}

/** INITIAL RENDER  **/

function initialize() {
  renderAllAnimals(animalData)
}
initialize()