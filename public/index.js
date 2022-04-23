let winnings = sessionStorage.getItem('winnings')

var winningsHTML = document.getElementById('winnings')
if (winnings > 0 || winnings < 0){
    winningsHTML.textContent = "Winnings: $" + winnings
}