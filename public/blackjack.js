//getting bet set in previous page
let newBet = sessionStorage.getItem('bet')
console.log(newBet)

//setting initial dealer and user totals
var dealerTotal = 0
var userTotal = 0
var winnings = 0
sessionStorage.setItem('winnings', winnings)
var winningsHTML = document.getElementById('winnings')

//setting dealer and user totals to divs
var dealerT = document.getElementById('dealer-total')
var userT = document.getElementById('user-total')

var dealerHand = document.getElementById('dealer-hand')
var userHand = document.getElementById('user-hand')

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

//make buttons work
let hit = document.getElementById('hit').addEventListener('click', function() {
    hitButton()
})
let stand = document.getElementById('stand').addEventListener('click', function() {
    standButton()
})

let currentBet = document.getElementById('current-bet').textContent = "Your current bet: $" + newBet

function initialDeal() {
    dealerCards()
    userCards()
}

        function dealerCards() {
            let valueOne = Math.round(Math.random() * 25)
            let valueTwo = Math.round(Math.random() * 25)
            var dCardOne = document.getElementById('dealer-1').src = imgArray[valueOne].src
            dealerTotal = dealerTotal + imgArray[valueOne].value
            dealerT.textContent = dealerTotal
        }   

        function userCards() {
            let valueOne = Math.round(Math.random() * 25)
            let valueTwo = Math.round(Math.random() * 25)
            var uCardOne = document.getElementById('user-1').src = imgArray[valueOne].src
            var uCardTwo = document.getElementById('user-2').src = imgArray[valueTwo].src
            userTotal = userTotal + imgArray[valueOne].value + imgArray[valueTwo].value
            userT.textContent = userTotal
        }

async function hitButton(){
    await userNewCard()
    if (userTotal == 21) {
        winnings = winnings + newBet
        winningsHTML.textContent = `Winnings: $` + newBet
        if (confirm("Blackjack!! Do you want to play again?")) {
            window.location.href = '/game.html'
        } else {
            window.location.href = '/index.html'
        }
    } else if (userTotal > 21) {
        dealerNewCard()  
        winnings = winnings - newBet
        winningsHTML.textContent = `Winnings: $` - newBet
        if (confirm("Dealer won! Do you want to play again?")) {
            window.location.href = '/game.html'            
        } else {
            window.location.href = '/index.html'
        }
    }
} 

        function userNewCard(){
            let newUserValue = Math.round(Math.random() * 25)
            let newUserImage = document.createElement('img')
            newUserImage.src = imgArray[newUserValue].src
            newUserImage.style.width = "75px";
            newUserImage.style.height = "auto";
            userHand.appendChild(newUserImage)
            userTotal = userTotal + imgArray[newUserValue].value
            userT.textContent = userTotal 
        }

function standButton(){
    dealerNewCard()
    console.log(dealerTotal)
}

function dealerNewCard(){
    let newDealerValue = Math.round(Math.random() * 25)
    let newDealerImage = document.createElement('img')
    newDealerImage.src = imgArray[newDealerValue].src
    newDealerImage.style.width = "75px";
    newDealerImage.style.height = "auto";
    dealerHand.appendChild(newDealerImage)
    dealerTotal = dealerTotal + imgArray[newDealerValue].value
    dealerT.textContent = dealerTotal
}

window.onload = () => {
    initialDeal()
}

