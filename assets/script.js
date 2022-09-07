const base_url ="http://localhost:3000"
const books1 = "http://localhost:3000/book1"
const books2 = "http://localhost:3000/book2"
const books3 = "http://localhost:3000/book3"
const otherBooks ="http://localhost:3000/other"


const otherCardTemplate = document.querySelector("[data-book-template]")
const bookContainer =document.querySelector(".book-card")
const search = document.querySelector("#search")

let others = [];
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  others.forEach(other => {
    const visible = other.author.includes(value) || other.title.includes(value).toLowerCase()
    other.element.classList.toggle("hide", !visible)
  })
})
fetch(otherBooks)
.then(res => res.json())
.then (data => {
  others = data.map(other => {
    const card = otherCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector(".header")
    const body = card.querySelector(".body")
    const synopsis = card.querySelector("#synopsis")
    header.textContent = other.author
    body.textContent = other.title
    synopsis.textContent = other.description
    bookContainer.append(card)
    return {author: other.author, title: other.title, description: other.description, element: card}
  })
})




const loginForm =document.querySelector(".login-form")
const popup = document.querySelector("#popup").addEventListener("click", () => {
  loginForm.style.display = "block";
});
const closePopup =document.querySelector(".close-btn").addEventListener("click", () => {
  loginForm.style.display = "none";
});


const book1 = fetch(books1)
.then(res => res.json())
.then((data) => {
  const image1 = document.querySelector('#card-image').src = data[0].image
  const text1 = document.querySelector('#title').innerHTML = data[0].title
  const description = document.querySelector("#description").innerHTML = data[0].description
  let likes = 0;
  document.getElementById("like-button").addEventListener("click",() =>{
  likes += 1;
  updateLikes();
  });
  function updateLikes(){
  document.getElementById("like-count").textContent = `${likes} likes`;
  }
})
const book2 = fetch(books2)
.then(res => res.json())
.then((data1) => {
  const image1 = document.querySelector('#card-image1').src = data1[0].image
  const text1 = document.querySelector('#title1').innerHTML = data1[0].title
  const description1 = document.querySelector('#description1').innerHTML = data1[0].description
  let likes = 0;
  document.getElementById("like-button1").addEventListener("click",() =>{
  likes += 1;
  updateLikes();
  });
  function updateLikes(){
  document.getElementById("like-count1").textContent = `${likes} likes`;
  }
})

const book3 = fetch(books3)
.then(res => res.json())
.then((data1) => {
  const image2 = document.querySelector('#card-image2').src = data1[0].image
  const text2 = document.querySelector('#title2').innerHTML = data1[0].title
  const description2 = document.querySelector("#description2").innerHTML = data1[0].description
  let likes = 0;
  document.getElementById("like-button2").addEventListener("click",() =>{
  likes += 1;
  updateLikes();
  });
  function updateLikes(){
    document.getElementById("like-count2").textContent = `${likes} likes`;
  }
})

// const form = document.querySelector("form").addEventListener('submit', (e) => {
//   e.preventDefault()
//   const input = form.reviews.value
//   const ul = document.getElementById(response)
//   const li = document.createElement('li')
//   li.innerHTML = `<li>${input}</li>`
//   ul.appendChild(li)
//   // form.reset()
// })

const subscribe = document.querySelector(".subscribe").addEventListener('click',() => {
  return alert(`Welcome!Reading is Lit🔥`)
})
const review = document.querySelector("#review-input")
review.onchange = function(){
  this.value = this.value.toUpperCase()
  text.innerHTML = input.value
}

// async function submitData(name, email) {
//   let info = {name,email}
//   try {
//     const response = await fetch("http://localhost:3000/users",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify(info)
//       })
//     const users = await response.json()
//     let id = users.id
//     let p = document.createElement("p")
//     p.textContent = id
//     document.body.appendChild(p)
//   } catch (error) {
//     document.body.innerHTML = error.message
//   }
// }
// submitData("Barbs", "barbs@barbs.com");


