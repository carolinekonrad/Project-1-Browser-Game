//setting cards equal to variables
let newBet = sessionStorage.getItem('bet')
console.log(newBet)


let currentBet = document.getElementById('current-bet').textContent = "Your current bet: $" + newBet

function initialDeal() {
    var cardOne = Math.round(Math.random() * 25)
}

window.onload = () => {
    initialDeal()
}

