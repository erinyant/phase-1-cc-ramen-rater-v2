// // index.js

// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//   // Add code
// };

// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };

function main() {
  displayRamens()
  addSumbitListener()
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("After DOM loaded")
})

fetch ("http://localhost:3000/ramens")
  .then((resp) => resp.json())
  .then((data) => displayRamens(data))

function displayRamens(ramenArr) {

  const ramenMenu = document.querySelector('#ramen-menu')
  
  ramenArr.forEach((ramenObj) => {
   
    const img = document.createElement('img')
   
    img.src = ramenObj.image
    img.addEventListener('click', () => handleClick(ramenObj))

    function handleClick(ramenObj) {
      const ramenDetail = document.querySelector('#ramen-detail')
      
      const img = document.querySelector('.detail-image')
      img.src = ramenObj.image

      const h2 = document.querySelector('.name')
      h2.textContent = ramenObj.name

      const restaurant = document.querySelector('.restaurant')
      restaurant.textContent = ramenObj.restaurant

      const rating = document.querySelector('#rating-display')
      rating.textContent = ramenObj.rating

      const comment = document.querySelector('#comment-display')
      comment.textContent = ramenObj.comment
    }

    ramenMenu.appendChild(img)
  })

  const form = document.querySelector('#new-ramen')

  form.addEventListener('submit', (e) => handleAddNewRamenObj(e))

  function handleAddNewRamenObj(e) {
    e.preventDefault()

    const newRamenObj = {
      name : e.target.name.value,
      restaurant : e.target.restaurant.value,
      image : e.target.image.value,
      rating: parseInt(document.getElementById('new-rating').value),
      comment: document.getElementById('new-comment').value
    }

    displayRamens([newRamenObj])
  }
}