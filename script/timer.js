// Get the start button displayed on the web page
let startBtn = document.getElementById("start-btn");

// Get the alarm file
const alarm = new Audio('assets/sounds/alarm.mp3');

let timer;
let seconds;

function initTimer() {    
    // Get the time displayed on the web page
    let timerDisplay = document.getElementById("timer-lbl");

    // Formate the time to seconds
    let maxTimeInSec = getMaxTimeInSecs(timerDisplay.textContent);
    seconds = maxTimeInSec;

    // If the alarm is being played, stop it
    alarm.pause();
    alarm.currentTime = 0;

    // Display the message "PAUSE" in start button
    startBtn.innerHTML = "PAUSE";

    // If timer is already running, pause it
    if (timer) {
        stopTimer();
        return;
    }

    // Timer
    timer = setInterval(() => {
        if (seconds >= 0) {
            timerDisplay.textContent = formatedTime(seconds);
            seconds--;
        } else {
            stopTimer();
            alarm.play();
        }
    }, 1000);
}

// Stop the timer count
function stopTimer() {
    alarm.pause();
    clearInterval(timer);
    timer = null;
    startBtn.innerHTML = "START";
}

// Format seconds to mm:ss
function formatedTime(seconds) {
    const minutes = Math.floor(seconds / 60); // Get the hours value
    const remaingSeconds = seconds % 60; // Get the seconds value
    return `${minutes < 10 ? '0' : ''}${minutes}:${remaingSeconds < 10 ? '0' : ''}${remaingSeconds}`; // Format the time in mm:ss and return it
}

// Get the time in seconds based on formated time mm:ss
function getMaxTimeInSecs(formatedTime) {
    const parts = formatedTime.split(':'); // Divide the format mm:ss in separated parts
    const minutes = parseInt(parts[0], 10); // Convert the minutes parts to integer
    const seconds = parseInt(parts[1], 10); // Convert the seconds parts to integer
    return minutes * 60 + seconds;
}