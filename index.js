//Change text 
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

//Object 
let player = {
    name: "Gambler",
    chips: 450
}
playerEl.textContent = player.name + ": $" + player.chips
//necessarry booleans
let isAlive = false
let hasBlackJack = false

let message = ""
let sum = 0
let cards = []

//Function for random cards
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if ( randomCard === 1 ) {
        return 11
    }
    else if ( randomCard > 10 ) {
        return 10
    }
    else {
        return randomCard
    }
}
//Function to start game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    //Shows cards
    cardsEl.textContent = "Cards: "
    for ( let i = 0 ; i < cards.length ; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }
    //Shows Sum
    sumEl.textContent = "Sum: " + sum
    //this function will show us the message
    sendMessage() 
}
//Function for message
function sendMessage() {
    if ( sum <= 20 ) {
        message = "Do you want to draw a new card ?"
    }
    else if ( sum === 21 ) {
        message = "You've got a BlackJack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message // change the message sentence
}
//Function for getting new card
function newCard() {
    if ( isAlive === true && hasBlackJack === false ) {
        let newCard = getRandomCard()
        cards.push(newCard) // to show in array (cards)
        sum += newCard // adding in sum
        renderGame() // Render the game again
    }
    console.log("ERROR : You can not get new card !")
}