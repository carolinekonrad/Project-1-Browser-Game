//grabbing the winnings from sessionStorage
let winnings = sessionStorage.getItem('winnings')

//changing the html object to reflect the winnings
var winningsHTML = document.getElementById('winnings')
if (winnings > 0 || winnings < 0){
    winningsHTML.textContent = "Winnings: $" + winnings
}