var students = ["Shahabz","Umer","Hamza","Moiz"]
// for(var i=0; i<students.length; i++){
//     console.log(students[i])
// }

// for(var i=0; i<10; i++ ){
//     console.log("hello",i)
//     console.log()
// }

// students.forEach(function (item,index){
//     console.log(`For Each Value ${item},${index}`)
    

// })


var num = [1,2,3,4,5,6,7,8]

// var allNum = num.map(function(a){
//    return a * 2

// })

// console.log("Original Array",num)

// console.log("Transform Array",allNum)

// var productCategory = [
//     {
//         productName:"Shirts",
//         price:1500,
//         gender:"Male",
//         size:"S"
//     },
//     {
//         productName:"Tshirts",
//         price:2000,
//         gender:"Male",
//         size:"M"
//     },
//     {
//         productName:"Watch",
//         price:800,
//         gender:"Male",
//         size:"S"
//     },
//     {
//         productName:"Shoes",
//         price:1500,
//         gender:"Female",
//         size:"M"
//     },

//     {
//         productName:"Glassess",
//         price:2500,
//         gender:"Female",
//         size:"M"
//     },
//     {
//         productName:"Glassess",
//         price:3500,
//         gender:"Female",
//         size:"M"
//     },
// ]

// // console.log(productCategory[2].gender)

// var filterValue = productCategory.filter(function(item){
//     //console.log(item)
//     return item.gender == "Female" && item.price ==2500
    

// })

// console.log(filterValue)


var prouductCategory = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    imag: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
]

console.log(prouductCategory)

var cardContaoner = document.getElementById("cardContaoner")
prouductCategory.forEach(function(item){
    cardContaoner.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src=${item.imag} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
})