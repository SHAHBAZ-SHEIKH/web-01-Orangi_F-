

// var products = {

//     productName:"Tshirts",
//     price:1000,
//     color:["Black","White","Blue","Gray"],
//     size:["S","M","L"],
//     instock:true,
//     shopAddres:{
//         city:"Karachi"
//     },
//     getOrder:function(){
//         console.log("Finally Order Done!")
//     },
    
// }

// products.maxPrice = 500
// console.log(products)



// var students = [
//     {
//         id:1,
//         Name:"Shahbaz Ahmed",
//         phoneNo:"0998888777",
//         userEmail:"abac@gmail.com",
//         userImg:"",
//         eduction:"",
//         clasDays:["Saturday","SUnday"],
//         rollnO:12345
//     },
//     {
//         id:2,
//         userName:"Hamza",
//         phoneNo:"09988888777",
//         userEmail:"hamzac@gmail.com",
//         userImg:"",
//         eduction:"",
//         clasDays:["Saturday","SUnday"],
//         rollnO:12343
//     }

// ]



var crickterData = [
    {
        crickterName:"Babar Azam",
        cricketImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILoZaIvy5wAU_p6HQJ-HbZxkONDkKw-o7fg&s",
        crickBio:"Mohammad Babar Azam is a Pakistani international cricketer and a former captain of the Pakistan national team in all three formats of the game. A right-handed top-order batter, he captains Peshawar Zalmi in the Pakistan Super League. He remains the only captain to take Pakistan to the number 1 ODI team rankings. ",
    },
    {
        crickterName:"Jos Buttler",
        cricketImg:"https://static.independent.co.uk/2023/06/07/22/bd1a632bd0cbd3df136e6b1386be6e82Y29udGVudHNlYXJjaGFwaSwxNjg2MjU1NTUy-2.69703789.jpg",
        crickBio:"oseph Charles Buttler MBE, known as Jos Buttler, is an English international cricketer and former captain of the national team. He plays for Lancashire in domestic cricket and played in multiple T20 leagues. He is known for his innovative and aggressive batting style",
    },
    {
        crickterName:"Ab de viliers",
        cricketImg:"https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2022-12/ezgif.com-gif-maker%20-%202022-12-28T165305.313.jpg?itok=b0pNTJ2P",
        crickBio:"Mohammad Babar Azam is a Pakistani international cricketer and a former captain of the Pakistan national team in all three formats of the game. A right-handed top-order batter, he captains Peshawar Zalmi in the Pakistan Super League. He remains the only captain to take Pakistan to the number 1 ODI team rankings. ",
    },
    {
        crickterName:"Jemie Smith",
        cricketImg:"https://static.independent.co.uk/2025/06/04/12/6a8ce065b3a0245bf3d7746c6dab61d3Y29udGVudHNlYXJjaGFwaSwxNzQ5MTE4OTcy-2.80494235.jpg",
        crickBio:"Mohammad Babar Azam is a Pakistani international cricketer and a former captain of the Pakistan national team in all three formats of the game. A right-handed top-order batter, he captains Peshawar Zalmi in the Pakistan Super League. He remains the only captain to take Pakistan to the number 1 ODI team rankings. ",
    },
    {
        crickterName:"Harry Brook",
        cricketImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7sSsxdq1ovJPWKvZlFNv8czLmm1D5Ri9vQ&s",
        crickBio:"Mohammad Babar Azam is a Pakistani international cricketer and a former captain of the Pakistan national team in all three formats of the game. A right-handed top-order batter, he captains Peshawar Zalmi in the Pakistan Super League. He remains the only captain to take Pakistan to the number 1 ODI team rankings. ",
    },
    
]




function showData(index){
    var sliderImg = document.getElementById("sliderImg")
    var crickName = document.getElementById("crickName")
    var cricBio = document.getElementById("cricBio")
    sliderImg.src = crickterData[index].cricketImg
    crickName.textContent = crickterData[index].crickterName
    cricBio.textContent = crickterData[index].crickBio
}



var count = 0


window.onload = function(){
    showData(count)
}


function nextHandler(){
    console.log("next")
    
    if(count>=crickterData.length -1){
        count=0
    }
    else{
        count++
    }
    showData(count)

}

function previousHander(){
    
    if(count<=0){
        count = crickterData.length -1
    }
    else{
        count--
    }
    showData(count)

}






