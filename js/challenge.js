// //Create Variable for counter
let counterButton = document.getElementById("counter")
//Create Variable for plus button
const plusButton = document.getElementById("plus")
//Create Variable for minus button
const minusButton = document.getElementById("minus")
//Create Variable for heart button
const heartButton = document.getElementById("heart")
//Create Variable for pause button
const pauseButton = document.getElementById("pause")
//Create variable for submit button
const submitButton = document.getElementById("submit")
//Create Empty Array
const listArray = []
//Creat Empty Objecy
const listObject = {}



// //See the timer increment every second once the page has loaded.
let counterTimer = setInterval(() => counterButton.innerText++, 1000)

document.addEventListener("DOMContentLoaded", () => timerCount())
    function timerCount(){
        counterTimer
}

// //add and decrease counter, when + or - buttons are pressed
plusButton.addEventListener("click", () => counterButton.innerText++)
minusButton.addEventListener("click", () => counterButton.innerText--)

// // A "like" button (❤️) that adds a "like" for the number that is currently displayed by the timer
//create default object, with keys amount of clicks, and number
heartButton.addEventListener("click", () => {
    if(listObject[`${counterButton.innerText}`]){ 
        listObject[`${counterButton.innerText}`] += 1
        document.getElementById(`${counterButton.innerText}`).innerText = `${counterButton.innerText} has been liked ${listObject[`${counterButton.innerText}`]} times`
     } else {
        const li = document.createElement("li")
        listObject[`${counterButton.innerText}`] = 1
        li.id = `${counterButton.innerText}`
        li.innerText = `${counterButton.innerText} has been liked ${listObject[`${counterButton.innerText}`]} times`
        document.querySelector("ul").append(li)
     }
    })

//Pause the counter, which should:
    // if(pauseButton.innerText = "pause") {
    //     pauseButton.addEventListener("click", () => {
    //         clearInterval(counterTimer)
    //         pauseButton.innerText = "resume"
    //         plusButton.disabled = true
    //         minusButton.disabled = true
    //         heartButton.disabled = true
    //     })
    // } else {
    //     pauseButton.addEventListener("click", () => {
    //         pauseButton.innerText = "pause" //NEED HELP
    //     })
    // }
pauseButton.addEventListener("click", (e) => {
    if(e.target.innerText == "pause"){
    clearInterval(counterTimer)
    pauseButton.innerText = "resume"
    pauseButton.id = "resume"
    plusButton.disabled = true
    minusButton.disabled = true
    heartButton.disabled = true
    } else if (e.target.innerHTML == "resume"){
        e.target.innerHTML = "pause"
        setInterval(() => counterButton.innerText++, 1000)
        plusButton.disabled = false
        minusButton.disabled = false
        heartButton.disabled = false
    } 
})

//A comment box that adds comments when submitted
    //Grab form
document.querySelector("form").addEventListener("submit", (e) => {
    //Stop Page refreshing
    e.preventDefault()
    //Add target to e (event)
    //Need to target the input
    printComments(e.target.comment.value)
})

    //Create Function that allows us to print comments on page
    //Add button that allows us to remove comments
function printComments(comments){
    let li = document.createElement("li")
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.textContent = " x "
    p.textContent = comments
    p.appendChild(btn)
    li.textContent = p.textContent
    document.getElementById("comment-form").appendChild(li)
}


//const { locationInfo } = require("jsdom/lib/jsdom/living/helpers/internal-constants")