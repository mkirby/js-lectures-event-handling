




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