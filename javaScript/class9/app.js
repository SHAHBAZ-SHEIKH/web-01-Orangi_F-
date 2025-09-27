



// function abc(){
//     var user = "Shahbaz"
//     console.log(user)
//     for(var i=0; i<10; i++){
//         if(i % 2==0){
//             console.log(i)
//         }
//     }



// }



// abc()
// abc()
// abc()



// function sum(a,b){
    
//     var result = a + b

//     console.log("the Sum of a and b :",result)

// }
// sum(5,8)

// var num = 34

// function greeet(user,arr){
    
//     var category = ["Watch","Shoes","Clothes"]

//     // console.log("Execute inisde a Function",num)
//     // console.log(category)

//      return category

   

// }





// var arr = [1,2,3,4,5,6]
// var resultFunc = greeet("Peter",arr)

// console.log(resultFunc)


var user = "hello"


function calNum(num){
    console.log("test",num)
    var inputValue = document.getElementById("inputValue")
    var lastValue = inputValue.value[inputValue.value.length - 1]
    var operator = ["+","-","*","/","%"]

    if(operator.indexOf(lastValue) !== -1 && operator.indexOf(num) !== -1 ){
        inputValue.value = inputValue.value.slice(0,-1) + num

    }
    else{
        inputValue.value = inputValue.value +  num

    }
    
}



var str = "5+5+"

console.log(str.slice(0,-1))
// var lastValue = str[str.length - 1]
// var operator = ["+","-","*","/","%"]

// var newInput = "-"

// if(operator.indexOf(lastValue) !==-1){
//     str = str.slice(0,-1) + newInput
// }

// console.log(str)

