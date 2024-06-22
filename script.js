let randomNumber = Math.floor(Math.random() * 11)
let clickedNumber = 0
console.log(randomNumber)

const gameBoxNumber1 = document.getElementById("gameBoxNumber1")
const gameBoxNumber2 = document.getElementById("gameBoxNumber2")
const gameBoxNumber3 = document.getElementById("gameBoxNumber3")
const gameBoxNumber4 = document.getElementById("gameBoxNumber4")
const gameBoxNumber5 = document.getElementById("gameBoxNumber5")
const gameBoxNumber6 = document.getElementById("gameBoxNumber6")
const gameBoxNumber7 = document.getElementById("gameBoxNumber7")
const gameBoxNumber8 = document.getElementById("gameBoxNumber8")
const gameBoxNumber9 = document.getElementById("gameBoxNumber9")
const gameBoxNumber10 = document.getElementById("gameBoxNumber10")

gameBoxNumber1.addEventListener("click", e =>{
    clickedNumber = 1
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber2.addEventListener("click", e =>{
    clickedNumber = 2
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber3.addEventListener("click", e =>{
    clickedNumber = 3
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber4.addEventListener("click", e =>{
    clickedNumber = 4
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber5.addEventListener("click", e =>{
    clickedNumber = 5
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber6.addEventListener("click", e =>{
    clickedNumber = 6
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber7.addEventListener("click", e =>{
    clickedNumber = 7
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber8.addEventListener("click", e =>{
    clickedNumber = 8
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber9.addEventListener("click", e =>{
    clickedNumber = 9
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})
gameBoxNumber10.addEventListener("click", e =>{
    clickedNumber = 10
    if(randomNumber == clickedNumber){
        console.log("mas stastie")
    }
    console.log("klikol si " + clickedNumber)
})

if(randomNumber == clickedNumber){
    console.log("mas stastie")
}


