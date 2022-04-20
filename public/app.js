//creating bet variables
var bet = 0

var docBet = document.getElementById('total-bet')

//setting bet buttons
var blackButton = document.getElementById('black')
blackButton.addEventListener('click', function(){
    bet += 5
    docBet.textContent = `Total Bet: $${bet}`
    sessionStorage.setItem('bet', bet)
})

var blueButton = document.getElementById('blue').addEventListener("click", function(){
    bet += 10
    docBet.textContent = `Total Bet: $${bet}`
    sessionStorage.setItem('bet', bet)
})

var greenButton = document.getElementById('green').addEventListener('click', function(){
    bet += 25
    docBet.textContent = `Total Bet: $${bet}`
    sessionStorage.setItem('bet', bet)
})

var redButton = document.getElementById('red').addEventListener('click', function(){
    bet += 50
    docBet.textContent = `Total Bet: $${bet}`
    sessionStorage.setItem('bet', bet)
})

//setting clear button
var clearButton = document.getElementById('clear').addEventListener('click', function(){
    bet = 0
    docBet.textContent = `Total Bet: $${bet}`
    sessionStorage.setItem('bet', bet)
})

