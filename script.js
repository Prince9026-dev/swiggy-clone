const foods = [
  {name: "Healthy Bites",time: "85-95 mins",category: "Salads · Chhindwara City",price:100},
  {name: "Pizza Hub",time: "40-50 mins",category: "Fast Food · Jaipur",price:300},
  {name: "Sweet Treats",time: "30-40 mins",category: "Desserts · Delhi",price:400},
  {name: "Biryani House",time: "50-60 mins",category: "Indian · Hyderabad",price:600}
];
let get_total=document.querySelector(".total");
let total_amount=0;
const imagesstore=["food1.jpg","food2.jpg","food3.jpg","food4.jpg","food5.jpg","food6.jpg","food7.jpg"];
let resto=document.getElementById("resturants");
// let card="";
for(let i=0; i<imagesstore.length; i++){
  // for card toput image
  const card=document.createElement("div");
  card.classList.add("food-card");
  // image portion
  const c2=document.createElement("div");
  c2.classList.add("food-image")
  c2.style.backgroundImage=`url(${imagesstore[i]})`;
  // writting
  const about=document.createElement("div")
  about.classList.add("written");
  about.innerHTML=`  <h3>${foods[i].name}</h3>
  <h4>${foods[i].time}</h4>
  <h5>${foods[i].category}</h5>
  <p>₹${foods[i].price}</p>
  <p>Delicious food!</p>`;
  // button creting
  const cart = document.createElement("button");
  cart.classList.add("add-btn");
  cart.textContent = `Add Item In Cart`;
  // // 💥 store price + name as data attributes
  // cart.dataset.price = foods[i].price;
  // // cart.dataset.name = foods[i].name;
 
  card.appendChild(c2);
  c2.appendChild(about);
  card.appendChild(cart);
  resto.appendChild(card);    
};



const b=document.querySelectorAll(".add-btn");
b.addEventListener("click",(e)=>{
    const price = Number(e.target.dataset.price);
    total_amount += price;
    get_total.textContent=price;
})

  // ✅ Event listener to update total
  // cart.addEventListener("click", (e) => {

    // totalBox.textContent = `Total: ₹${total}`;
    // e.target.textContent = "Added ✅";
    // e.target.disabled = true;