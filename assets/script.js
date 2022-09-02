const base_url ="http://localhost:3000"
const books1 = "http://localhost:3000/book1"
const books2 = "http://localhost:3000/book2"
const books3 = "http://localhost:3000/book3"
const reviews_url = "http://localhost:3000/review"




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
document.addEventListener("DOMContentLoaded", ()=>{
  renderReviews();
})
function renderReviews(){
  fetch(reviews_url)
  .then((response) => response.json())
  .then((reviews)=> {
    reviews.forEach((review) => {
      document.getElementById("reviewList").innerHTML = reviews 
      .map((review) => `<li>${review.content}</li>`)
    });
  })
}
const reviewForm = document.getElementById("review-form").addEventListener('submit', function(event){
  event.preventDefault()
  event.target.reset()
})
// const post = document.querySelector(".review-button").addEventListener('mouseover', (myFunction)=> {
//   console.log("Double click me") 
// })
const subscribe = document.querySelector(".subscribe").addEventListener('click',() => {
  return alert(`Welcome!Reading is Lit🔥`)
})
const search = document.querySelector(".button").addEventListener('click',()=>{
  return alert('Explore our Mind-Hub🤩')
})



