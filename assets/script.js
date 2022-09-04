const base_url ="http://localhost:3000"
const books1 = "http://localhost:3000/book1"
const books2 = "http://localhost:3000/book2"
const books3 = "http://localhost:3000/book3"
const reviews_url = "http://localhost:3000/review"
const users = "http://localhost:3000/users"
const api_url ="https://openlibrary.org/authors/OL33421A.json"




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a5afc5a5fmshf3ec65db5398f08p18ceb1jsn7a22c14e1678',
		'X-RapidAPI-Host': 'book4.p.rapidapi.com'
	}
};

fetch('https://book4.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {

  })
	.catch(err => console.error(err));


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

const form = document.querySelector("form").addEventListener('submit', (e) => {
  e.preventDefault()
  const input = form.review.value
  const ul = document.getElementById(response)
  const li = document.createElement('li')
  li.innerHTML = `<li>${input}</li>`
  ul.appendChild(li)
  // form.reset()
})

const subscribe = document.querySelector(".subscribe").addEventListener('click',() => {
  return alert(`Welcome!Reading is Lit🔥`)
})
const search = document.querySelector(".button").addEventListener('click',()=>{
  return alert('Explore our Mind-Hub🤩')
})



