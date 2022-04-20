//getting bet set in previous page
let newBet = sessionStorage.getItem('bet')
console.log(newBet)

//setting initial dealer and user totals
var dealerTotal = 0
var userTotal = 0

//make image array
var imgArray = [
    {src: "./assets/one-hearts.png", value: 1}, 
    {src: "./assets/two-hearts.png", value: 2},
    {src: "./assets/three-hearts.png", value: 3},
    {src: "./assets/four-hearts.png", value: 4}, 
    {src: "./assets/five-hearts.png", value: 5}, 
    {src: "./assets/six-hearts.png", value: 6}, 
    {src: "./assets/seven-hearts.png", value: 7}, 
    {src: "./assets/eight-hearts.png", value: 8}, 
    {src: "./assets/nine-hearts.png", value: 9}, 
    {src: "./assets/ten-hearts.png", value: 10}, 
    {src: "./assets/jack-hearts.png", value: 10}, 
    {src: "./assets/queen-hearts.png", value: 10}, 
    {src: "./assets/king-hearts.png", value: 10}, 
    {src: "./assets/one-clubs.png", value: 1},
    {src: "./assets/two-clubs.png", value: 2},
    {src: "./assets/three-clubs.png", value: 3},
    {src: "./assets/four-clubs.png", value: 4},
    {src: "./assets/five-clubs.png", value: 5},
    {src: "./assets/six-clubs.png", value: 6},
    {src: "./assets/seven-clubs.png", value: 7},
    {src: "./assets/eight-clubs.png", value: 8},
    {src: "./assets/nine-clubs.png", value: 9},
    {src: "./assets/ten-clubs.png", value: 10},
    {src: "./assets/jack-clubs.png", value: 10},
    {src: "./assets/queen-clubs.png", value: 10},
    {src: "./assets/king-clubs.png", value: 10},
]


let currentBet = document.getElementById('current-bet').textContent = "Your current bet: $" + newBet

function initialDeal() {
    dealerCards()
    userCards()
}

function dealerCards() {
    let valueOne = Math.round(Math.random() * 25)
    let valueTwo = Math.round(Math.random() * 25)
    var dCardOne = document.getElementById('dealer-1').src = imgArray[valueOne - 1].src
    var dCardTwo = document.getElementById('dealer-2').src = imgArray[valueTwo - 1].src
}

function userCards() {
    let valueOne = Math.round(Math.random() * 25)
    let valueTwo = Math.round(Math.random() * 25)
    var uCardOne = document.getElementById('user-1').src = imgArray[valueOne - 1].src
    var uCardTwo = document.getElementById('user-2').src = imgArray[valueTwo - 1].src

}

window.onload = () => {
    initialDeal()
}

