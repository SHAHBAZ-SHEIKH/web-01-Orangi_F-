
// var arr = [1,2,3,2,4,5,5,6,7,7,3,4,5]
// var newArr = []

// for(var i=0; i<arr.length; i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

// var fruits = ["apple","mango","Banana","pineApple","web Developmnet"]
// var longestWord = ""

// for(var i=0; i<fruits.length; i++){
//     if(fruits[i].length > longestWord.length){
//         longestWord = fruits[i]
//     }
// }

// console.log("longest Word:",longestWord)



// console.log(Math.random() * 10)
// console.log(Math.round(23.3))
// console.log(Math.floor(21.9))
// console.log(Math.ceil(45.4))


var hexcode = ["A","B","C","D","E","F","G","H","I",,"0","1","2","3","5","6"]
console.log(hexcode.length)
var hexColor = ''

for(var i=0; i<5; i++){
    var hexIndex = Math.floor(Math.random() * hexcode.length)
    hexColor = hexColor + hexcode[hexIndex]

    console.log(hexIndex)
}
console.log(hexColor)





