let homeScore = guestScore = homeFoul = guestFoul = period = timerM = timerS = 0
let now, countdown, x

function home(homeCount) {
    homeScore += homeCount
    document.getElementById("home-score").textContent=homeScore
}

function guest(guestCount) {
    guestScore += guestCount
    document.getElementById("guest-score").textContent=guestScore
}

function homeFoulFn() {
    homeFoul += 1
    document.getElementById("home-foul").textContent=homeFoul
}

function guestFoulFn() {
    guestFoul += 1
    document.getElementById("guest-foul").textContent=guestFoul
}

function start() {
    clearInterval(x)
    period += 1
    document.getElementById("period").textContent=period
    now = new Date()
    countdown = new Date(now.getTime() + 10 * 60000)
    x = setInterval(timer,100)
}

function reset() {
    homeScore = guestScore = homeFoul = guestFoul = period = timerM = timerS = 0
    clearInterval(x)
    document.getElementById("home-score").textContent=homeScore
    document.getElementById("guest-score").textContent=guestScore
    document.getElementById("home-foul").textContent=homeFoul
    document.getElementById("guest-foul").textContent=guestFoul
    document.getElementById("period").textContent=period
    document.getElementById("timer").textContent = (timerM<10?"0":"") + timerM + ":" + (timerS<10?"0":"") + timerS
    document.getElementById("start-btn").disabled = false
    document.getElementById("home-score").style.color = "white"
    document.getElementById("guest-score").style.color = "white"
    document.getElementById("home-foul").style.color = "white"
    document.getElementById("guest-foul").style.color = "white"
    document.getElementById("timer").style.color = "white"
}

function timer() {
    now = new Date()
    var difference = new Date(countdown - now)
    timerM = difference.getUTCMinutes()
    timerS = difference.getUTCSeconds()
    if (timerM<=0 && timerS<=0) {
        clearInterval(x)
    }
    document.getElementById("timer").textContent = (timerM<10?"0":"") + timerM + ":" + (timerS<10?"0":"") + timerS
    document.getElementById("start-btn").disabled = true
    if (homeScore>guestScore) {
        document.getElementById("home-score").style.color = "green"
        document.getElementById("guest-score").style.color = "red"
    }
    else if (homeScore==guestScore) {
        document.getElementById("home-score").style.color = "red"
        document.getElementById("guest-score").style.color = "red"
    }
    else {
        document.getElementById("home-score").style.color = "red"
        document.getElementById("guest-score").style.color = "green"
    }
    if (homeFoul>0) {
        document.getElementById("home-foul").style.color = "red"
    }
    if (guestFoul>0) {
        document.getElementById("guest-foul").style.color = "red"
    }
    if (timerM<1) {
        document.getElementById("timer").style.color = "red"
    }
}