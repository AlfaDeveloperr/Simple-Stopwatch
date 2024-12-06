var startTime;
var elapsedTime = 0;
var timerInterval;

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
}

function updateTimer() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    var minutes = Math.floor(elapsedTime / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);
    document.getElementById("timer").innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}