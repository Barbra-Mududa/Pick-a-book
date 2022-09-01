const base_url ="http://localhost:3000"
const books_url = "http://localhost:3000/books"


const popularBooks = document.getElementsByClassName("popular-books")
const updateBooks = (books) => {
  books.forEach
}
const imageContainer = document.querySelectorAll(".img")
const booksData= async () => {
    return fetch(books_url).then(res => res.json())
}   

document.addEventListener("DOMContentLoaded", async () => {
    booksData();
    let books = [];

    books = await booksData();
    console.log(books)
    const updateBooks = (books) =>{
    const data = books.map((_element, _index) =>{
        console.log(_element.image)
        console.log(imageContainer)
        imageContainer.src= `${_element.image}`
    })
}
updateBooks(books)
});


// const addLikes = document.getElementById("like-count")
// let likes = 0;
// document.getElementById("like-button").addEventListener("click",() =>{
//   likes += 1;
//   updateLikes();

// function updateLikes(){
//   document.getElementById("like-count").textContent = `${likes} likes`;
// }
// })
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
