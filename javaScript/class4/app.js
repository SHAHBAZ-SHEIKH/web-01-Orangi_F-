
function shahbaz(){
    console.log("text")
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    var para = document.getElementById("para")


    console.log("weight===>",weight)
    console.log("height===>",height)

    var bmi  = weight / (height * height)
    var result = bmi.toFixed(1)

    console.log(result)

    // console.log("bmi===>",bmi.toFixed(1))

    if(result<18.5){
        para.innerHTML = "Underweight" 
        para.style.display = "block"

    }
   else if(result>18.5 && result<25.9){
        para.innerHTML = "Normal" 
        para.style.display = "block"

    }

    else if(result>26 && result<40){
        para.innerHTML = "Overweight"  + result
        para.style.display = "block"
        para.style.backgroundColor = "Green"

    }


}
