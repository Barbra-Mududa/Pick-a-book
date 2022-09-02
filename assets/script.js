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
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  returnReview(e.target.comment.value)
})
function returnReview(returned){
  let ul =document.createElement('li')
  ul.textContent = returned
  document.querySelector('#reviewList').appendChild(ul)
}
// const listReview = document.getElementById("reviewList");
// listReview.innerHTML = "";
// function showReview(review) {
//   const reviewList = document.createElement("li");
//   reviewList.textContent = review;
//   document.querySelector('#comments-list').appendChild(ul)
// }
// const userReviews = [];
// const fetchReveiws = async () => {
//   const response = await fetch()
//   return await response.json()
// }
// function updateReviews(){
//   userReviews.forEach((review) => {
//     const reviewList = document.createElement("li");
//     reviewList.textContent = review
//     document.querySelector('#comments-list').appendChild(ul)
//   })
// }
// function postReviews(review){
//   fetch(reviews, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       imageId: 1,
//       content: `${comment}`,
//   })
// })
// }
// document.addEventListener("DOMContentLoaded", async () => {
//   userReviews = await fetchReveiws();
//   updateReviews(userReviews);

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     e.reset();
//     postReviews(e.target.comment.value);
//   });
// })
// async function submitData(name, email) {
//   let info = {name, email}
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
//     const data = await response.json()
//     document.body.innerHTML = data.id
//   } catch (error) {
//     document.body.innerHTML = error.message
//   }
// }


