var targetDate = new Date("2024-06-14T00:00:00");
        
function updateCountdown() {
    var now = new Date();
    var timeLeft = targetDate - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').querySelector('.number').innerText = formatTime(days);
    document.getElementById('hours').querySelector('.number').innerText = formatTime(hours);
    document.getElementById('minutes').querySelector('.number').innerText = formatTime(minutes);
    document.getElementById('seconds').querySelector('.number').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000);