
// // for counting the number of items stored in cart
// var total_items=0;
// const carts=document.querySelectorAll(".cart");
// carts.forEach((btn) => {
//     btn.addEventListener("click",()=>{
//         // Find the parent card (.fooditem)
//         const card = btn.closest(".fooditem");

//         // Get h3 and h5 inside that card
//         const name = card.querySelector("h3").textContent;
//         const details = card.querySelector("h5").textContent;
//         total_items++;
//         console.log(total_items,name,details);
    
//     }) 
// });

// // var images_container=["C:\Users\p\Desktop\full-html\swiggyclone\food7.jpg","C:\Users\p\Desktop\full-html\swiggyclone\food4.jpg","C:\Users\p\Desktop\full-html\swiggyclone\food1.jpg","C:\Users\p\Desktop\full-html\swiggyclone\food3.jpg"]
// // var img=document.querySelectorAll(".fooditem");
// // img.forEach(images_container,()=>{

// //     img=`${images_container}`
// // })



// // var images_container = [
// //   "C:/Users/p/Desktop/full-html/swiggyclone/food7.jpg",
// //   "C:/Users/p/Desktop/full-html/swiggyclone/food4.jpg",
// //   "C:/Users/p/Desktop/full-html/swiggyclone/food1.jpg",
// //   "C:/Users/p/Desktop/full-html/swiggyclone/food3.jpg"
// // ];

// // var foodItems = document.querySelectorAll(".fooditem");

// // foodItems.forEach((item, index) => {
// //   // Create image element
// //   const img = document.createElement("img");
// //   img.src = images_container[index];
// //   img.alt = "Food Image";
// //   img.classList.add("food-img");

// //   // Insert image at top of .fooditem
// //   item.insertBefore(img, item.firstChild);
// // });


// const foods = [
//   {
//     name: "Healthy Bites",
//     time: "85-95 mins",
//     category: "Salads · Chhindwara City",
//     image: "images/food7.jpg"
//   },
//   {
//     name: "Pizza Hub",
//     time: "40-50 mins",
//     category: "Fast Food · Jaipur",
//     image: "images/food4.jpg"
//   },
//   {
//     name: "Sweet Treats",
//     time: "30-40 mins",
//     category: "Desserts · Delhi",
//     image: "images/food1.jpg"
//   },
//   {
//     name: "Biryani House",
//     time: "50-60 mins",
//     category: "Indian · Hyderabad",
//     image: "images/food3.jpg"
//   }
// ];

// const container = document.querySelector(".card");

// foods.forEach(food => {
//   const card = document.createElement("div");
//   card.classList.add("fooditem");

//   card.innerHTML = `
//     <img src="${food.image}" alt="${food.name}" class="food-img">
//     <div class="about">
//       <h3>${food.name}</h3>
//       <h4>${food.time}</h4>
//       <h5>${food.category}</h5>
//     </div>
//     <button class="cart">Add to cart</button>
//   `;

//   container.appendChild(card);
// });



const imagesstore=["food1.jpg","food2.jpg","food3.jpg","food4.jpg","food5.jpg","food6.jpg","food7.jpg"];
let resto=document.getElementById("resturants");
// let card="";
for(let i=0; i<imagesstore.length; i++){
  // for card toput image
  const card=document.createElement("div");
  card.classList.add("food-card");
  card.style.width

  // image portion
  const c2=document.createElement("div");
  c2.classList.add("food-image")
  c2.style.backgroundImage=`url(${imagesstore[i]})`;

  // writting
  const about=document.createElement("div")
  about.classList.add("written");
  about.innerHTML=`<h3>Restaurant ${i + 1}</h3><p>Delicious food!</p>`;
  card.appendChild(c2);
  c2.appendChild(about);
  resto.appendChild(card);
    
      
};