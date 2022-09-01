const base_url ="http://localhost:3000"
const books1 = "http://localhost:3000/book1"
const books2 = "http://localhost:3000/book2"
const books3 = "http://localhost:3000/book3"

// const popularBooks = document.getElementsByClassName("popular-books")
// const updateBooks = (books) => {
//   books.forEach
// }
// const imageContainer = document.querySelectorAll(".img")
// const booksData= async () => {
//     return fetch(books_url).then(res => res.json())
// }   

// document.addEventListener("DOMContentLoaded", async () => {
//     booksData();
//     let books = [];

//     books = await booksData();
//     console.log(books)
//     const updateBooks = (books) =>{
//     const data = books.map((_element, _index) =>{
//         console.log(_element.image)
//         console.log(imageContainer)
//         imageContainer.src= `${_element.image}`
//     })
// }
// updateBooks(books)
// });

const book1 = fetch(books1)
.then(res => res.json())
.then((data) => {
  const image1 = document.querySelector('#card-image').src = data[0].image
  const text1 = document.querySelector('#title').innerHTML = data[0].title
})
const book2 = fetch(books2)
.then(res => res.json())
.then((data1) => {
  const image1 = document.querySelector('#card-image1').src = data1[0].image
  const text1 = document.querySelector('#title1').innerHTML = data1[0].title
})
const book3 = fetch(books3)
.then(res => res.json())
.then((data1) => {
  const image2 = document.querySelector('#card-image2').src = data1[0].image
  const text2 = document.querySelector('#title2').innerHTML = data1[0].title
})



// const addLikes = document.getElementById("like-count")
// let likes = 0;
// document.getElementById("like-button").addEventListener("click",() =>{
//   likes += 1;
//   updateLikes();

// function updateLikes(){
//   document.getElementById("like-count").textContent = `${likes} likes`;
// }
// })
// let like1=0;
// document.getElementById("like-button1").addEventListener("click",() =>{
//   likes += 1;
//   updateLikes1();

// function updateLikes1(){
//   document.getElementById("like-count1").textContent = `${likes} likes`;
// }
// })
// document.getElementById("like-button2").addEventListener("click",() =>{
//   likes += 1;
//   updateLikes1();

// function updateLikes1(){
//   document.getElementById("like-count2").textContent = `${likes} likes`;
// }
// })
