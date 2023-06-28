let homeScore = document.getElementById("home-score")
let homeCount = 0
let guestScore = document.getElementById("guest-score")
let guestCount = 0

function homeAddPoint() {
  homeCount = homeCount + 1
  homeScore.innerText = homeCount
}

function homeAddTwoPoints() {
  homeCount = homeCount + 2
  homeScore.innerText = homeCount
}

function homeAddThreePoints() {
  homeCount = homeCount + 3
  homeScore.innerText = homeCount
}

function guestAddPoint() {
  guestCount = guestCount + 1
  guestScore.innerText = guestCount
}

function guestAddTwoPoints() {
  guestCount = guestCount + 2
  guestScore.innerText = guestCount
}

function guestAddThreePoints() {
  guestCount = guestCount + 3
  guestScore.innerText = guestCount
}

function resetScore() {
  homeCount=0
  guestCount=0
  homeScore.textContent = 0
  guestScore.textContent = 0
}
