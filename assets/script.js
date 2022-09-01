const base_url ="http://localhost:3000"
const image0 ="http://localhost:3000/image0"
const image1 ="http://localhost:3000/image2"
const image2 ="http://localhost:3000/image3"
const reviews ="http://localhost:3000/reviews"

const imageHolder = document.getElementById("card-image");
const reviewlist = document.getElementById("review-list");
const likeButton = document.getElementById("like-button");
const reviewForm = document.getElementById("review-form");
const inputField = document.getElementById("review-input");

let books=[];
const booksData1 = async () => {
    const response = await fetch(image0)
    const data = await response.json()
    document.querySelector(".image0").src = data[0].image1
}
document.addEventListener("DOMContentLoaded", async () => {
    books = await booksData1();
    console.log("image1:",booksData1);
})

const addLikes = document.getElementById("like-count");
let likes = 0;
document.querySelector(".image0").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})
function renderLikes() {
    document.getElementById("like-count").textContent = `${likes} likes`;
}
document.addEventListener("DOMContentLoaded", ()=>{
    booksData1();
})  
