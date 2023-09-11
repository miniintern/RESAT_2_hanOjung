var totalSeconds = 0;
var countdownInterval;

function startTimer() {
  var timeInput = document.getElementById("timeInput");
  var minutesInput = document.getElementById("minutesInput");
  var secondsInput = document.getElementById("secondsInput");
  var countdownElement = document.getElementById("countdown");

  var hours = parseInt(timeInput.value, 10);
  var minutes = parseInt(minutesInput.value, 10);
  var seconds = parseInt(secondsInput.value, 10);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
    alert("올바른 시간을 입력하세요.");
    return;
  }

  totalSeconds = hours * 3600 + minutes * 60 + seconds;
  updateCountdownText();

  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  var countdownElement = document.getElementById("countdown");

  var hoursLeft = Math.floor(totalSeconds / 3600);
  var minutesLeft = Math.floor((totalSeconds % 3600) / 60);
  var secondsLeft = totalSeconds % 60;

  countdownElement.innerText =
    "남은 시간: " + hoursLeft + "h " + minutesLeft + "m " + secondsLeft + "s";

  if (totalSeconds <= 0) {
    stopTimer();
    countdownElement.innerText = "타이머가 종료되었습니다!";
  } else {
    totalSeconds--;
  }
}

function stopTimer() {
  clearInterval(countdownInterval);
}

function resetTimer() {
  stopTimer();
  totalSeconds = 0;
  updateCountdownText();
  
 
  var timeInput = document.getElementById("timeInput");
  var minutesInput = document.getElementById("minutesInput");
  var secondsInput = document.getElementById("secondsInput");
  timeInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}

function updateCountdownText() {
  var countdownElement = document.getElementById("countdown");

  var hoursLeft = Math.floor(totalSeconds / 3600);
  var minutesLeft = Math.floor((totalSeconds % 3600) / 60);
  var secondsLeft = totalSeconds % 60;

  countdownElement.innerText =
    "남은 시간: " + hoursLeft + "시간 " + minutesLeft + "분 " + secondsLeft + "초";
}