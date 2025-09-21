
// var nowDate = new Date()
// var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// console.log(daysName[nowDate.getDay()])
// //console.log(nowDate.getMonth())


// //console.log(nowDate.getDay())
// console.log(nowDate.getTime())

// var specifyDate = new Date("14 August,2026")
// console.log(specifyDate.getTime())


function countDown(){
    var nowDate = new Date()
var ramzanDate = new Date("17 Febrauary,2026")

var msDiff = ramzanDate.getTime() - nowDate.getTime()
var mon = document.getElementById("mon")
var day = document.getElementById("day")
var hrs = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")

var month = Math.floor(msDiff / (1000 *60 *60 *24 *30))
var days = Math.floor(msDiff/(1000 *60*60*24) % 30)
var hours = Math.floor(msDiff/(1000 * 60 * 60 ) % 24)
var minutes = Math.floor(msDiff/(1000 * 60 ) % 60)
var seconds = Math.floor(msDiff/(1000) % 60)

 mon.innerHTML = month
 day.innerHTML = days
 hrs.innerHTML = hours
 min.innerHTML = minutes
 sec.innerHTML = seconds

}



// setTimeout(function(){
//     document.write("<h1>Run One Time After 5 Sec</h1>")

// },5000)

setInterval(function(){
    countDown()
},1000)
