// // // write your code here

function displayImage(ramen){
  const div =document.querySelector('#ramen-menu')
  const img = document.createElement('img')
  div.appendChild(img)
  img.setAttribute('src', `${ramen.image}`)
  img.addEventListener('click', function(e){
    const div2 = document.querySelector('#ramen-detail')
    const img2 = document.querySelector('.detail-image')
    img2.src= ramen.image
    const h2 = document.querySelector('.name')
    h2.textContent = ramen.name
    const h3= document.querySelector('.restaurant')
    h3.textContent = ramen.restaurant
    const rate = document.querySelector('#rating-display ')
    rate.textContent = ramen.rating
    const comments= document.querySelector('#comment-display ')
    comments.textContent= ramen.comment


  })

}


function fetchRamenImages(){
  fetch ("http://localhost:3000/ramens")
  .then(function(response){
      return response.json()
  })
  .then(function(ramens){
    console.log(ramens)
      return ramens.forEach(ramen => {displayImage(ramen)
          
      });
  })
}
fetchRamenImages ()


function addNewRamen (){
  const form =document.querySelector('form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let  ramenObj = {
      name: e.target.new_name.value,
      restaurant:e.target.new_restaurant.value,
      image:e.target.new_image.value,
      rating:e.target.new_rating.value,
      comment:e.target.new_comment.value

    }
    fetch("http://localhost:3000/ramens",{

    method: "POST",
    headers: {
        "Content-Type": "application/json", 
        Accept: "application/json", 
   
      },
    
      body:JSON.stringify(ramenObj)
    })
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        return data
    })
    .catch (function(errors){
        return document.body.innerHTML= errors.message
    })

  location.reload()
  })
}
addNewRamen()

