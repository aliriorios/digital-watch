function showTime() {
  var date = new Date()

  var hour = date.getHours() // 0 - 23
  var minute = date.getMinutes() // 0 - 59
  var second = date.getSeconds() // 0 - 59

  var turn = (hour < 12) ? "AM" : "PM";

  hour = (hour < 10) ? "0" + hour : hour
  minute = (minute < 10) ? "0" + minute : minute
  second = (second < 10) ? "0" + second : second

  var currentTime = hour + ":" + minute + ":" + second + " " + turn

  document.getElementById("MyClockDisplay").innerText = currentTime;

  document.getElementById("MyClockDisplay").textContent = currentTime

  var interval = setInterval(() => showTime(), 1000)
}

showTime()