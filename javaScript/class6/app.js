
// for (var i = 10; i >=1; i--) {
//     console.log("Shahbaz===>", i)
// }

// var tableNum = +prompt("Enter Table Number")
// var tableLenght = +prompt("Enter Table Length")
// for(var i=1; i<=tableLenght; i++){

//     console.log(tableNum + "X" + i + "=" + (tableNum*i))
   
    
// }


// for(var i=0; i<=20; i++){
//     console.log("number :",i)


//     if(i ==5){
//         console.log("Loop Stop at 5 ",i)
//         break
//     }
// }



// var category = ["Shoes","watch","Perfume","Clothes","Mobile"]
// // console.log(category[0])
// // console.log(category[1])
// // console.log(category[2])
// // console.log(category[3])
// // console.log(category[4])

// // console.log(category[category.length -1 ])

// for(var i=0; i<category.length; i++){
//     console.log(category[i])
// }

// var marsk = [45,65,77,87,67]

// for(var i=0; i<marsk.length; i++){
//     console.log(marsk[i])
// }

// var num = [1,2,3,]

// var cityName = ["Karachi","Lahore","Multan","Peshawar","Islamabad"]
// var search = "Quetta"
// var flag =false

// for(var i=0; i<cityName.length; i++){
//     // console.log(cityName[i])
//     if(cityName[i] == search){
//         // console.log("City Found",cityName[i])
//         flag=true
//         break
//     }
    
// }

// if(flag){
//     console.log("City Found")
// }
// else{
//     console.log("City Not Found")
// }


// var fruits = "apple"
// for(var i=fruits.length -1; i>=0; i--){
//     console.log(fruits[i])
// }


var ispalindrome = "level"
var reverse = ""

for(var i=ispalindrome.length -1; i>=0; i--){
  console.log(ispalindrome[i] )
  reverse = reverse + ispalindrome[i]
}

console.log(reverse)
if(ispalindrome == reverse){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}


