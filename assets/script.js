const base_url ="http://localhost:3000"
const books1 = "http://localhost:3000/book1"
const books2 = "http://localhost:3000/book2"
const books3 = "http://localhost:3000/book3"




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
  // let review = "";
  // document.querySelector("#review-form").addEventListener('submit',(e)=>{
  //   e.preventDefault()
  //   e.target.reset()
  //   returnReview2 =(e.target.review.value)
  // })
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
// let review = "";
// const review1= fetch("http://localhost:3000/book1")
// .then(res => res.json())
// .then((freview2) => {
//   freview2.forEach((freview2) => {
//     const one = document.querySelector("#review-form1").addEventListener('submit',(e)=>{
//       document.getElementById("comments-list").innerHTML = comments
//       .map((freview) => `<li>${freview.comment.content}</li>`).join("");  
//     e.preventDefault()
//     e.target.reset()
//     returnReview2 =(e.target.review.value)
//     });
// // });
  
// })

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

  // let review = "";
  // document.querySelector("#review-form2").addEventListener('submit',(e)=>{
  //   e.preventDefault()
  //   e.target.reset()
  //   returnReview2 =(e.target.review.value)
  // })
  // function  returnReview2(review2){
  //   let ul2 = document.createElement('li')
  //   ul2.textContent = review2
  //   document.querySelector("#review-list2").appendChild(ul)
  // }
  // console.log(review2)
})

async function submitData(name, email) {
  let info = {name, email}
  try {
    const response = await fetch("http://localhost:3000/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(info)
      })
    const data = await response.json()
    document.body.innerHTML = data.id
  } catch (error) {
    document.body.innerHTML = error.message
  }
}


