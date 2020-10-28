// 1. What element do we want to listen for events on?
const toggleSwitch = document.querySelector("#toggle-dark-mode")
// console.log(toggleSwitch)
// 2. What kind of event are we listening for?
toggleSwitch.addEventListener("click", function() {
  // 3. what do we want to happen?
  document.body.classList.toggle("dark-mode")
  // console.log("clicked")
})

const animalForm = document.querySelector("#animal-form")
animalForm.addEventListener("submit", function(event) {
  //always add this for form submits
  event.preventDefault()

  // step 1
  //get info from info fields
  //const imageUrl = event.target.querySelector("[name='image_url']").value
  const name = event.target.name.value
  const imageUrl = event.target.image_url.value
  const description = event.target.description.value
  console.log(name)
  console.log(imageUrl)
  console.log(description)

  const animalObj = {
    name: name, 
    imageUrl: imageUrl,
    description: description,
    donations: 0
  }
  // step 2: slap it on the DOM

  //opt step 3: clear input fields
  renderOneAnimal(animalObj)
  event.target.reset()
  // console.log("form submitted")
})



/********** Code from DOM Lecture **********/ 
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