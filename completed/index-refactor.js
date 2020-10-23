/********** DOM Elements **********/ 
const toggleSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")

/********** Event Listeners **********/
toggleSwitch.addEventListener("click", handleToggleDarkMode)
animalForm.addEventListener("submit", handleAnimalFormSubmit)

/********** Event Handlers **********/ 
function handleToggleDarkMode() {
  console.log("toggled")
  document.body.classList.toggle("dark-mode")
}

function handleAnimalFormSubmit(event) {
  event.preventDefault()

  const name = event.target.name.value
  const imageUrl = event.target.image_url.value
  const description = event.target.description.value

  const animalObj = {
    name: name,
    imageUrl: imageUrl,
    description: description,
    donations: 0
  }

  renderOneAnimal(animalObj)

  event.target.reset()
}

/********** Render Functions **********/ 
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

/********** Initial Render **********/
function initialize() {
  renderAllAnimals(animalData)
}

initialize()
