let countdown;
let timeLeft = 0;
let isRunning = false;
const display = document.getElementById("display");
const timeInput = document.getElementById("timeInput");

function startTimer() {
    if (isRunning) return; // Prevent multiple starts
    let inputTime = parseInt(timeInput.value);

    if (!timeLeft) {
        if (isNaN(inputTime) || inputTime <= 0) {
            alert("Please enter a valid time in seconds.");
            return;
        }
        timeLeft = inputTime;
    }

    isRunning = true;
    countdown = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        display.innerHTML = "00:00";
        alert("Time's up!");
        isRunning = false;
    } else {
        timeLeft--;
        display.innerHTML = formatTime(timeLeft);
    }
}

function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 0;
    isRunning = false;
    display.innerHTML = "00:00";
    timeInput.value = "";
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
